#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extract VinFast interior colors BY PRODUCT from HTML file
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

def extract_products_with_interior(html_content):
    """Extract interior colors grouped by product"""
    
    # Clean the HTML
    cleaned = clean_chrome_html(html_content)
    
    # Find all product sections that contain interior colors
    # Pattern: tìm các div có class v3s-product-item
    product_pattern = r'<div[^>]*class="[^"]*v3s-product-item[^"]*"[^>]*data-item="([^"]+)"[^>]*(.*?)(?=<div[^>]*class="[^"]*v3s-product-item|<div[^>]*class="[^"]*footer|$)'
    
    products_data = {}
    
    matches = re.finditer(product_pattern, cleaned, re.DOTALL | re.IGNORECASE)
    
    for match in matches:
        product_code = match.group(1).strip()
        product_content = match.group(2)
        
        # Check if this product has interior colors
        if 'colorItemList-interior' not in product_content:
            continue
            
        print(f"\nFound product with interior: {product_code}")
        
        # Extract product name
        name_match = re.search(r'<h2[^>]*>([^<]+)</h2>', product_content, re.IGNORECASE)
        product_name = name_match.group(1).strip() if name_match else product_code
        
        print(f"  Name: {product_name}")
        
        # Find all colorItemList-interior in this product
        interior_lists = re.finditer(
            r'<ul\s+class="colorItemList-interior[^"]*"\s+data-item="([^"]+)">(.*?)</ul>',
            product_content,
            re.DOTALL | re.IGNORECASE
        )
        
        exterior_to_interior = {}
        all_interior_colors = set()
        
        for interior_list in interior_lists:
            exterior_code = interior_list.group(1).strip()
            ul_content = interior_list.group(2)
            
            # Find all interior color items
            li_pattern = r'<li\s+class="[^"]*"[^>]*data-item="([^"]+)"\s+data-name="([^"]+)"'
            
            interior_colors = []
            for li_match in re.finditer(li_pattern, ul_content, re.IGNORECASE):
                int_code = li_match.group(1).strip()
                int_name = li_match.group(2).strip()
                
                interior_colors.append({
                    'code': int_code,
                    'name': int_name
                })
                all_interior_colors.add((int_code, int_name))
            
            if interior_colors:
                exterior_to_interior[exterior_code] = interior_colors
        
        if exterior_to_interior:
            products_data[product_code] = {
                'name': product_name,
                'unique_interior_colors': sorted([
                    {'code': code, 'name': name} 
                    for code, name in all_interior_colors
                ], key=lambda x: x['code']),
                'exterior_to_interior_map': exterior_to_interior
            }
            
            print(f"  Exterior colors with interior options: {len(exterior_to_interior)}")
            print(f"  Unique interior colors: {len(all_interior_colors)}")
            for code, name in sorted(all_interior_colors):
                print(f"    - {code}: {name}")
    
    return products_data

def main():
    # Read HTML file
    html_file = 'view-source_https___shop.vinfastauto.com_vn_vi_dat-coc-o-to-dien-vinfast.html_modelId=Products-Car-VF9.html'
    
    print(f"Reading {html_file}...")
    with open(html_file, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Extract products with interior data
    print("\n" + "="*60)
    print("Extracting interior colors by product...")
    print("="*60)
    
    products_data = extract_products_with_interior(html_content)
    
    print("\n" + "="*60)
    print(f"Summary: Found {len(products_data)} products with interior colors")
    print("="*60)
    
    for product_code, data in sorted(products_data.items()):
        print(f"\n{product_code} - {data['name']}")
        print(f"  {len(data['unique_interior_colors'])} interior colors")
        print(f"  {len(data['exterior_to_interior_map'])} exterior colors have interior options")
    
    # Save to JSON
    output_file = 'vinfast_interior_by_product.json'
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(products_data, f, indent=2, ensure_ascii=False)
    
    print(f"\n✓ Saved to {output_file}")

if __name__ == '__main__':
    main()
