// Metadata for VinFast car images
// Format: [product_code]_[color_code].webp
// Generated from vinfast_images folder structure

// Colors metadata - Shared across products
const vinfast_colors = [
  { color_code: "crimson_red", display_name: "Crimson Red" },
  { color_code: "crimson_velvet_mystery_bronze_roof", display_name: "Crimson Velvet - Mystery Bronze Roof" },
  { color_code: "desat_silver", display_name: "Desat Silver" },
  { color_code: "desat_silver_jet_black_roof", display_name: "Desat Silver Body - Jet Black Roof" },
  { color_code: "infinity_blanc", display_name: "Infinity Blanc" },
  { color_code: "infinity_blanc_zenith_grey_roof", display_name: "Infinity Blanc - Zenith Grey Roof" },
  { color_code: "ivy_green", display_name: "Ivy Green" },
  { color_code: "jet_black", display_name: "Jet Black" },
  { color_code: "jet_black_mystery_bronze_roof", display_name: "Jet Black - Mystery Bronze Roof" },
  { color_code: "jet_black_summer_yellow_roof", display_name: "Jet Black Body - Summer Yellow Roof" },
  { color_code: "rose_metallic", display_name: "Rose Metallic" },
  { color_code: "rose_metallic_aqua_blue_roof", display_name: "Rose Metallic Body - Aqua Blue Roof" },
  { color_code: "rose_metallic_infinity_blanc_roof", display_name: "Rose Metallic Body - Infinity Blanc Roof" },
  { color_code: "rose_pink_infinity_blanc_roof", display_name: "Rose Pink Body - Infinity Blanc Roof" },
  { color_code: "sky_blue_infinity_blanc_roof", display_name: "Sky Blue - Infinity Blanc Roof" },
  { color_code: "summer_yellow_infinity_blanc_roof", display_name: "Summer Yellow Body - Infinity Blanc Roof" },
  { color_code: "summer_yellow_jet_black_roof", display_name: "Summer Yellow Body - Jet Black Roof" },
  { color_code: "tropical_jade", display_name: "Tropical Jade" },
  { color_code: "tropical_jade_infinity_blanc_roof", display_name: "Tropical Jade Body - Infinity Blanc Roof" },
  { color_code: "tropical_jade_summer_yellow_roof", display_name: "Tropical Jade Body - Summer Yellow Roof" },
  { color_code: "urban_mint", display_name: "Urban Mint" },
  { color_code: "yellow", display_name: "Yellow" },
  { color_code: "zenith_grey", display_name: "Zenith Grey" },
  { color_code: "zenith_grey_desat_silver_roof", display_name: "Zenith Grey - Desat Silver Roof" }
];

// Products metadata - Only color_code + file
const vinfast_images_metadata = {
  // VF3 - Naming convention: Color Name.png
  vf3: {
    folder: "vinfast_images/vf3",
    format: "png",
    images: [
      { color_code: "crimson_red", file: "Crimson Red.png" },
      { color_code: "infinity_blanc", file: "Infinity Blanc.png" },
      { color_code: "rose_pink_infinity_blanc_roof", file: "Rose Pink Body - Infinity Blanc Roof.png" },
      { color_code: "sky_blue_infinity_blanc_roof", file: "Sky Blue - Infinity Blanc Roof.png" },
      { color_code: "summer_yellow_infinity_blanc_roof", file: "Summer Yellow Body - Infinity Blanc Roof.png" },
      { color_code: "urban_mint", file: "Urban Mint.png" },
      { color_code: "zenith_grey", file: "Zenith Grey.png" }
    ]
  },

  // VF5 - Standard naming: vf5_color_code.webp
  vf5: {
    folder: "vinfast_images/vf5",
    format: "webp",
    images: [
      { color_code: "crimson_red", file: "vf5_crimson_red.webp" },
      { color_code: "infinity_blanc", file: "vf5_infinity_blanc.webp" },
      { color_code: "sky_blue_infinity_blanc_roof", file: "vf5_sky_blue_infinity_blanc_roof.webp" },
      { color_code: "summer_yellow_jet_black_roof", file: "vf5_summer_yellow_body_jet_black_roof.webp" },
      { color_code: "urban_mint", file: "vf5_urban_mint.webp" },
      { color_code: "zenith_grey", file: "vf5_zenith_grey.webp" }
    ]
  },

  // VF6
  vf6: {
    folder: "vinfast_images/vf6",
    format: "webp",
    images: [
      { color_code: "crimson_red", file: "vf6_crimson_red.webp" },
      { color_code: "infinity_blanc", file: "vf6_infinity_blanc.webp" },
      { color_code: "jet_black", file: "vf6_jet_black.webp" },
      { color_code: "urban_mint", file: "vf6_urban_mint.webp" },
      { color_code: "zenith_grey", file: "vf6_zenith_grey.webp" }
    ]
  },

  // VF7
  vf7: {
    folder: "vinfast_images/vf7",
    format: "webp",
    images: [
      { color_code: "crimson_red", file: "vf7_crimson_red.webp" },
      { color_code: "infinity_blanc", file: "vf7_infinity_blanc.webp" },
      { color_code: "jet_black", file: "vf7_jet_black.webp" },
      { color_code: "urban_mint", file: "vf7_urban_mint.webp" },
      { color_code: "zenith_grey", file: "vf7_zenith_grey.webp" }
    ]
  },

  // VF8 - Has roof combinations
  vf8: {
    folder: "vinfast_images/vf8",
    format: "webp",
    images: [
      { color_code: "crimson_red", file: "vf8_crimson_red.webp" },
      { color_code: "crimson_velvet_mystery_bronze_roof", file: "vf8_crimson_velvet_mystery_bronze_roof.webp" },
      { color_code: "infinity_blanc", file: "vf8_infinity_blanc.webp" },
      { color_code: "infinity_blanc_zenith_grey_roof", file: "vf8_infinity_blanc_zenith_grey_roof.webp" },
      { color_code: "ivy_green", file: "vf8_ivy_green.webp" },
      { color_code: "jet_black", file: "vf8_jet_black.webp" },
      { color_code: "jet_black_mystery_bronze_roof", file: "vf8_jet_black_mystery_bronze_roof.webp" },
      { color_code: "zenith_grey_desat_silver_roof", file: "vf8_zenith_grey_desat_silver_roof.webp" }
    ]
  },

  // VF9
  vf9: {
    folder: "vinfast_images/vf9",
    format: "webp",
    images: [
      { color_code: "crimson_red", file: "vf9_crimson_red.webp" },
      { color_code: "desat_silver", file: "vf9_desat_silver.webp" },
      { color_code: "infinity_blanc", file: "vf9_infinity_blanc.webp" },
      { color_code: "ivy_green", file: "vf9_ivy_green.webp" },
      { color_code: "jet_black", file: "vf9_jet_black.webp" },
      { color_code: "urban_mint", file: "vf9_urban_mint.webp" },
      { color_code: "zenith_grey", file: "vf9_zenith_grey.webp" }
    ]
  },

  // EC Van
  ecvan: {
    folder: "vinfast_images/ecvan",
    format: "webp",
    images: [
      { color_code: "crimson_red", file: "ecvan_crimson_red.webp" },
      { color_code: "infinity_blanc", file: "ecvan_infinity_blanc.webp" },
      { color_code: "urban_mint", file: "ecvan_urban_mint.webp" },
      { color_code: "yellow", file: "ecvan_yellow.webp" }
    ]
  },

  // Herio Green (Commercial)
  herio_green: {
    folder: "vinfast_images/herio_green",
    format: "webp",
    images: [
      { color_code: "crimson_red", file: "herio_green_crimson_red.webp" },
      { color_code: "desat_silver", file: "herio_green_desat_silver.webp" },
      { color_code: "jet_black", file: "herio_green_jet_black.webp" },
      { color_code: "yellow", file: "herio_green_yellow.webp" }
    ]
  },

  // Limo Green (Commercial)
  limo_green: {
    folder: "vinfast_images/limo_green",
    format: "webp",
    images: [
      { color_code: "crimson_red", file: "limo_green_crimson_red.webp" },
      { color_code: "desat_silver", file: "limo_green_desat_silver.webp" },
      { color_code: "jet_black", file: "limo_green_jet_black.webp" },
      { color_code: "yellow", file: "limo_green_yellow.webp" }
    ]
  },

  // Nerio Greeb (Commercial) - Note: typo in folder name "greeb"
  nerio_greeb: {
    folder: "vinfast_images/nerio_greeb",
    format: "webp",
    images: [
      { color_code: "crimson_red", file: "nerio_greeb_crimson_red.webp" },
      { color_code: "desat_silver", file: "nerio_greeb_desat_silver.webp" },
      { color_code: "jet_black", file: "nerio_greeb_jet_black.webp" },
      { color_code: "yellow", file: "nerio_greeb_yellow.webp" }
    ]
  },

  // Nimo Green (Commercial) - Most color options
  nimo_green: {
    folder: "vinfast_images/nimo_green",
    format: "webp",
    images: [
      { color_code: "crimson_red", file: "nimo_green_crimson_red.webp" },
      { color_code: "desat_silver", file: "nimo_green_desat_silver.webp" },
      { color_code: "desat_silver_jet_black_roof", file: "nimo_green_desat_silver_body_jet_black_roof.webp" },
      { color_code: "jet_black", file: "nimo_green_jet_black.webp" },
      { color_code: "jet_black_summer_yellow_roof", file: "nimo_green_jet_black_body_summer_yellow_roof.webp" },
      { color_code: "rose_metallic", file: "nimo_green_rose_metallic.webp" },
      { color_code: "rose_metallic_aqua_blue_roof", file: "nimo_green_rose_metallic_body_aqua_blue_roof.webp" },
      { color_code: "rose_metallic_infinity_blanc_roof", file: "nimo_green_rose_metallic_body_infinity_blanc_roof.webp" },
      { color_code: "summer_yellow_infinity_blanc_roof", file: "nimo_green_summer_yellow_body_infinity_blanc_roof.webp" },
      { color_code: "tropical_jade", file: "nimo_green_tropical_jade.webp" },
      { color_code: "tropical_jade_infinity_blanc_roof", file: "nimo_green_tropical_jade_body_infinity_blanc_roof.webp" },
      { color_code: "tropical_jade_summer_yellow_roof", file: "nimo_green_tropical_jade_body_summer_yellow_roof.webp" },
      { color_code: "yellow", file: "nimo_green_yellow.webp" }
    ]
  }
};

// Helper function to get image path
function getCarImagePath(productCode, colorCode) {
  const product = vinfast_images_metadata[productCode];
  if (!product) return null;
  
  const image = product.images.find(img => img.color_code === colorCode);
  if (!image) return null;
  
  return `${product.folder}/${image.file}`;
}

// Helper function to get all colors for a product
function getProductColors(productCode) {
  const product = vinfast_images_metadata[productCode];
  if (!product) return [];
  
  return product.images.map(img => {
    const colorInfo = vinfast_colors.find(c => c.color_code === img.color_code);
    return {
      code: img.color_code,
      name: colorInfo ? colorInfo.display_name : img.color_code,
      path: `${product.folder}/${img.file}`
    };
  });
}

// Helper function to get color display name
function getColorDisplayName(colorCode) {
  const color = vinfast_colors.find(c => c.color_code === colorCode);
  return color ? color.display_name : colorCode;
}

// Helper function to check if product has image
function hasProductImage(productCode, colorCode) {
  const product = vinfast_images_metadata[productCode];
  if (!product) return false;
  
  return product.images.some(img => img.color_code === colorCode);
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    vinfast_colors,
    vinfast_images_metadata,
    getCarImagePath,
    getProductColors,
    getColorDisplayName,
    hasProductImage
  };
}
