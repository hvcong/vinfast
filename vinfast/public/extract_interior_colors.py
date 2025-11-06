#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extract VinFast interior colors from HTML file
"""

import re
import json
import html
from collections import defaultdict

def clean_chrome_html(text):
    """Clean Chrome view-source HTML format"""
    # Extract line-content
    text = re.sub(r'<td class="line-number"[^>]*>.*?</td>', '', text, flags=re.DOTALL)
    text = re.sub(r'<td class="line-content">', '\n', text)
    text = re.sub(r'</td></tr><tr>', '', text)
    
    # Decode HTML entities
    text = html.unescape(text)
    
    # Remove span tags
    text = re.sub(r'<span[^>]*>', '', text)
    text = re.sub(r'</span>', '', text)
    
    return text

def extract_interior_colors(html_content):
    """Extract interior colors from HTML"""
    
    # Clean the HTML
    cleaned = clean_chrome_html(html_content)
    
    # Find all colorItemList-interior sections
    pattern = r'<ul\s+class="colorItemList-interior[^"]*"\s+data-item="([^"]+)">(.*?)</ul>'
    
    interior_data = defaultdict(list)
    
    matches = re.finditer(pattern, cleaned, re.DOTALL | re.IGNORECASE)
    
    for match in matches:
        exterior_code = match.group(1).strip()
        ul_content = match.group(2)
        
        # Find all <li> items within this <ul>
        li_pattern = r'<li\s+class="[^"]*"[^>]*data-item="([^"]+)"\s+data-name="([^"]+)"'
        
        li_matches = re.finditer(li_pattern, ul_content, re.IGNORECASE)
        
        for li_match in li_matches:
            interior_code = li_match.group(1).strip()
            interior_name = li_match.group(2).strip()
            
            # Add to results (avoid duplicates)
            if not any(item['code'] == interior_code for item in interior_data[exterior_code]):
                interior_data[exterior_code].append({
                    'code': interior_code,
                    'name': interior_name
                })
    
    return dict(interior_data)

def get_unique_interior_colors(interior_data):
    """Get unique interior colors across all exterior colors"""
    unique_colors = {}
    
    for exterior_code, colors in interior_data.items():
        for color in colors:
            code = color['code']
            if code not in unique_colors:
                unique_colors[code] = color['name']
    
    return unique_colors

def main():
    # Read HTML file
    html_file = 'view-source_https___shop.vinfastauto.com_vn_vi_dat-coc-o-to-dien-vinfast.html_modelId=Products-Car-VF9.html'
    
    print(f"Reading {html_file}...")
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Extract interior colors
    print("Extracting interior colors...")
    interior_data = extract_interior_colors(html_content)
    
    print(f"\nFound interior data for {len(interior_data)} exterior colors")
    
    # Get unique interior colors
    unique_colors = get_unique_interior_colors(interior_data)
    
    print(f"\nUnique interior colors: {len(unique_colors)}")
    for code, name in sorted(unique_colors.items()):
        print(f"  {code}: {name}")
    
    # Count how many exterior colors have each interior option
    print("\nInterior color availability:")
    for int_code, int_name in sorted(unique_colors.items()):
        count = sum(1 for colors in interior_data.values() 
                   if any(c['code'] == int_code for c in colors))
        print(f"  {int_code} ({int_name}): available for {count} exterior colors")
    
    # Save to JSON
    output_file = 'vinfast_interior_colors.json'
    output_data = {
        'unique_interior_colors': [
            {'code': code, 'name': name} 
            for code, name in sorted(unique_colors.items())
        ],
        'exterior_to_interior_mapping': {
            ext_code: colors 
            for ext_code, colors in sorted(interior_data.items())
        }
    }
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
    
    print(f"\n✓ Saved to {output_file}")
    
    # Show some examples
    print("\nSample exterior -> interior mappings:")
    for i, (ext_code, colors) in enumerate(sorted(interior_data.items())[:5]):
        print(f"  {ext_code}: {', '.join(c['code'] for c in colors)}")
    if len(interior_data) > 5:
        print(f"  ... and {len(interior_data) - 5} more")

if __name__ == '__main__':
    main()
