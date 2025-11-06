#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Parse noi_that.html to extract interior colors (code, name, icon url) grouped by product.
Output: vinfast_interior_icons_by_product.json
"""
import re
import json
from collections import defaultdict

# Map model code fragments to product names (based on earlier analysis)
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

INPUT = 'noi_that.html'
OUTPUT = 'vinfast_interior_icons_by_product.json'

def clean_spans(text):
    # Remove chrome view-source span wrappers if present
    text = re.sub(r'<span[^>]*>', '', text)
    text = re.sub(r'</span>', '', text)
    return text


def extract():
    with open(INPUT, 'r', encoding='utf-8') as f:
        content = f.read()

    content = clean_spans(content)

    # Find all <li ...> blocks that represent interior color items
    # We'll match the outer <li ...> ... </li>
    li_pattern = re.compile(r'<li([^>]*)>(.*?)</li>', re.DOTALL | re.IGNORECASE)

    product_map = defaultdict(dict)  # product -> code -> {code,name,icon,url}

    for li_m in li_pattern.finditer(content):
        attrs_str = li_m.group(1)
        inner = li_m.group(2)

        # get data-item (interior code) and data-name
        di = re.search(r'data-item\s*=\s*"(CI[^"]+)"', attrs_str, re.IGNORECASE)
        dn = re.search(r'data-name\s*=\s*"([^"]+)"', attrs_str, re.IGNORECASE)
        pid = re.search(r'data-pid\s*=\s*"([^"]+)"', attrs_str, re.IGNORECASE)
        modelcode_attr = re.search(r'data-modelcode\s*=\s*"([^"]+)"', attrs_str, re.IGNORECASE)

        if not di or not dn:
            continue
        code = di.group(1).strip()
        name = dn.group(1).strip()

        # find img src inside inner
        img = re.search(r'<img[^>]*src\s*=\s*"([^"]+)"', inner, re.IGNORECASE)
        icon = img.group(1).strip() if img else ''

        # determine model code to map to product
        model_code = None
        if modelcode_attr:
            # data-modelcode like EM1V_2025 -> take prefix before underscore
            model_code = modelcode_attr.group(1).split('_')[0]
        elif pid:
            # pid like VF-ZVEH-EM1V_2025-TG10V-CE1W-CI11
            parts = pid.group(1).split('-')
            if len(parts) >= 3:
                model_code = parts[2].split('_')[0]

        product_name = None
        if model_code:
            product_name = MODEL_CODE_MAPPING.get(model_code, f'Unknown-{model_code}')
        else:
            product_name = 'Unknown'

        # add entry under product
        prod = product_map[product_name]
        # key by interior code, keep first icon found
        if code not in prod:
            prod[code] = {
                'code': code,
                'name': name,
                'icon': icon
            }
        else:
            # if icon missing previously but found now, update
            if not prod[code].get('icon') and icon:
                prod[code]['icon'] = icon

    # Convert to serializable structure: list per product
    out = {}
    for product, codes in product_map.items():
        out[product] = sorted([codes[c] for c in codes], key=lambda x: x['code'])

    with open(OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(out, f, indent=2, ensure_ascii=False)

    # Print a short summary
    print(f'Read {INPUT}. Found {len(out)} products with interior color icons.')
    for p, colors in out.items():
        print(f'  {p}: {len(colors)} colors')

if __name__ == '__main__':
    extract()
