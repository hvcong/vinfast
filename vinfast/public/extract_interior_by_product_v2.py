#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extract VinFast interior colors BY PRODUCT using PID analysis
"""

import re
import json
from collections import defaultdict

# Model code mapping (from PID to product name)
MODEL_CODE_MAPPING = {
    'EI13': 'VF3',
    'EM1V': 'VF3',
    'EA15': 'VF5', 
    'EB15': 'VF6',
    'EA13': 'VF6',
    'EC15': 'VF7',
    'EA11': 'VF7',
    'EC1V': 'VF8',
    'EA1V': 'VF8',
    'PD1U': 'VF8',
    'EA18': 'VF9',
    'EI23': 'VF9',
    'PE1U': 'VF9',
}

def clean_html_spans(content):
    """Remove Chrome view-source HTML span tags"""
    # Remove all span tags
    content = re.sub(r'<span[^>]*>', '', content)
    content = re.sub(r'</span>', '', content)
    return content

def extract_interior_by_product(html_content):
    """Extract interior colors grouped by product from PIDs"""
    
    # Clean HTML first
    cleaned = clean_html_spans(html_content)
    
    # Find all PIDs with interior colors
    # Format: VF-ZVEH-EI13_2024-GI10V-CE18-CI11
    pid_pattern = r'VF-ZVEH-([A-Z0-9]+)_[0-9]+-[A-Z0-9]+-([A-Z0-9]+)-([A-Z0-9]+)'
    
    pids = re.findall(pid_pattern, cleaned)
    
    print(f"Found {len(pids)} PIDs with interior colors\n")
    
    # Group by model code
    by_model_code = defaultdict(lambda: {
        'exterior_colors': set(),
        'interior_colors': set(),
        'mappings': defaultdict(set)
    })
    
    for model_code, exterior, interior in pids:
        if interior.startswith('CI'):  # Interior color
            by_model_code[model_code]['exterior_colors'].add(exterior)
            by_model_code[model_code]['interior_colors'].add(interior)
            by_model_code[model_code]['mappings'][exterior].add(interior)
    
    # Now extract interior color names
    # Pattern: data-item="CI1M" data-name="Grey"
    name_pattern = r'data-item="(CI[A-Z0-9]+)"\s+data-name="([^"]+)"'
    color_names = {}
    
    for match in re.finditer(name_pattern, cleaned):
        code = match.group(1)
        name = match.group(2)
        if code not in color_names:
            color_names[code] = name
    
    # Convert to product-based structure
    by_product = {}
    
    for model_code, data in sorted(by_model_code.items()):
        # Map model code to product name
        product_name = MODEL_CODE_MAPPING.get(model_code, f'Unknown-{model_code}')
        
        # Create product entry (merge if product already exists)
        if product_name not in by_product:
            by_product[product_name] = {
                'model_codes': [],
                'unique_interior_colors': [],
                'exterior_to_interior_map': {}
            }
        
        # Add model code
        if model_code not in by_product[product_name]['model_codes']:
            by_product[product_name]['model_codes'].append(model_code)
        
        # Merge interior colors
        for int_code in data['interior_colors']:
            int_info = {
                'code': int_code,
                'name': color_names.get(int_code, 'Unknown')
            }
            if int_info not in by_product[product_name]['unique_interior_colors']:
                by_product[product_name]['unique_interior_colors'].append(int_info)
        
        # Merge mappings
        for ext_code, int_codes in data['mappings'].items():
            if ext_code not in by_product[product_name]['exterior_to_interior_map']:
                by_product[product_name]['exterior_to_interior_map'][ext_code] = []
            
            for int_code in int_codes:
                int_info = {
                    'code': int_code,
                    'name': color_names.get(int_code, 'Unknown')
                }
                if int_info not in by_product[product_name]['exterior_to_interior_map'][ext_code]:
                    by_product[product_name]['exterior_to_interior_map'][ext_code].append(int_info)
    
    # Sort interior colors
    for product in by_product.values():
        product['unique_interior_colors'].sort(key=lambda x: x['code'])
        for ext_code in product['exterior_to_interior_map']:
            product['exterior_to_interior_map'][ext_code].sort(key=lambda x: x['code'])
    
    return by_product, by_model_code

def main():
    # Read HTML file
    html_file = 'view-source_https___shop.vinfastauto.com_vn_vi_dat-coc-o-to-dien-vinfast.html_modelId=Products-Car-VF9.html'
    
    print(f"Reading {html_file}...")
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Extract interior colors by product
    print("\n" + "="*60)
    print("Extracting interior colors by product (from PIDs)...")
    print("="*60 + "\n")
    
    by_product, by_model_code = extract_interior_by_product(html_content)
    
    # Show model code analysis
    print("Model Codes Found:")
    print("-" * 60)
    for model_code, data in sorted(by_model_code.items()):
        product_name = MODEL_CODE_MAPPING.get(model_code, '???')
        print(f"{model_code:6s} → {product_name:15s} | {len(data['interior_colors']):2d} interior | {len(data['exterior_colors']):2d} exterior")
    
    # Show product summary
    print("\n" + "="*60)
    print(f"Products with Interior Colors: {len(by_product)}")
    print("="*60)
    
    for product_name, data in sorted(by_product.items()):
        print(f"\n{product_name}")
        print(f"  Model codes: {', '.join(data['model_codes'])}")
        print(f"  Interior colors: {len(data['unique_interior_colors'])}")
        for color in data['unique_interior_colors']:
            print(f"    - {color['code']}: {color['name']}")
        print(f"  Exterior colors with interior options: {len(data['exterior_to_interior_map'])}")
    
    # Save to JSON
    output_file = 'vinfast_interior_by_product.json'
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(by_product, f, indent=2, ensure_ascii=False)
    
    print(f"\n✓ Saved to {output_file}")

if __name__ == '__main__':
    main()
