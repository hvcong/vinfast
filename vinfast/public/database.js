

// ===========================
// MÀU SẮC XE
// ===========================

// Màu sắc chung (dùng cho cả ngoại thất và nội thất)
const colors = [
    { ma_mau: "red", ten_mau: "Đỏ", hex_code: "#e53e3e", icon: "images/colors/red.png" },
    { ma_mau: "blue", ten_mau: "Xanh", hex_code: "#3182ce", icon: "images/colors/blue.png" },
    { ma_mau: "white", ten_mau: "Trắng", hex_code: "#FFFFFF", icon: "images/colors/white.png" },
    { ma_mau: "yellow", ten_mau: "Vàng", hex_code: "#F5C518", icon: "images/colors/yellow.png" },
    { ma_mau: "grey", ten_mau: "Xám", hex_code: "#718096", icon: "images/colors/grey.png" },
    { ma_mau: "blue-light", ten_mau: "Xanh dương nhạt", hex_code: "#1a202c", icon: "images/colors/blue-light.png" },
    { ma_mau: "green-grey", ten_mau: "Xám nhạt", hex_code: "#cbd5e0", icon: "images/colors/green-grey.png" },
    { ma_mau: "purple-gray2", ten_mau: "Bạc", hex_code: "#C0C0C0", icon: "images/colors/purple-gray2.png" },
    { ma_mau: "purple-gray", ten_mau: "Bạc", hex_code: "#C0C0C0", icon: "images/colors/purple-grey.png" },
];

// Tương thích ngược
const mau_ngoai_that = colors;
const mau_noi_that = colors;

// ===========================
// THÔNG TIN XE VÀ PHIÊN BẢN
// ===========================

// Danh sách xe và phiên bản với giá niêm yết (đã bao gồm VAT)
const danh_sach_xe = [
    // VF 3
    { 
        dong_xe: "vf_3",
        ten_hien_thi: "VF 3",
        phien_ban: "VF 3 Base",
        gia_niem_yet: 240000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "yellow", icon: "images/vf3/car-4.webp" },
            { ma_mau: "blue", icon: "images/vf3/car-3.webp" },
            { ma_mau: "red", icon: "images/vf3/car-5.webp" },
            { ma_mau: "blue-light", icon: "images/vf3/car-6.webp" },
            { ma_mau: "green-grey", icon: "images/vf3/car-7.webp" },
            { ma_mau: "white", icon: "images/vf3/car-8.webp" },
            { ma_mau: "grey", icon: "images/vf3/car-2.webp" },

            { ma_mau: "purple-gray2", icon: "images/vf3/car-1.webp" },
            { ma_mau: "purple-gray", icon: "images/vf3/car-0.webp" },
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf3/car-0-in.jpg" }
        ],
    
    },
    
    // VF 5
    { 
        dong_xe: "vf_5",
        ten_hien_thi: "VF 5",
        phien_ban: "VF 5 Plus",
        gia_niem_yet: 468000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf5_white.webp" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf5_grey.webp" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf5_blue.webp" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf5_red.webp" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf5_in_black.jpg" }
        ],
    },
    
    // VF 6
    { 
        dong_xe: "vf_6",
        ten_hien_thi: "VF 6",
        phien_ban: "VF 6 Eco",
        gia_niem_yet: 675000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf6_eco_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf6_eco_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf6_eco_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf6_eco_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf6_eco_in_black.jpg" }
        ],
    },
    { 
        dong_xe: "vf_6",
        ten_hien_thi: "VF 6",
        phien_ban: "VF 6 Plus",
        gia_niem_yet: 765000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf6_plus_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf6_plus_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf6_plus_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf6_plus_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf6_plus_in_black.jpg" }
        ],
    },
    
    // VF 7
    { 
        dong_xe: "vf_7",
        ten_hien_thi: "VF 7",
        phien_ban: "VF 7 Eco",
        gia_niem_yet: 850000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf7_eco_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf7_eco_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf7_eco_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf7_eco_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf7_eco_in_black.jpg" }
        ],
    },
    { 
        dong_xe: "vf_7",
        ten_hien_thi: "VF 7",
        phien_ban: "VF 7 Plus 1 Cầu",
        gia_niem_yet: 950000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf7_plus_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf7_plus_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf7_plus_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf7_plus_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf7_plus_1cau_in_black.jpg" }
        ],
    },
    { 
        dong_xe: "vf_7",
        ten_hien_thi: "VF 7",
        phien_ban: "VF 7 Plus 2 Cầu",
        gia_niem_yet: 1050000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf7_plus2_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf7_plus2_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf7_plus2_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf7_plus2_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf7_plus_2cau_in_black.jpg" }
        ],
    },
    
    // VF 8
    { 
        dong_xe: "vf_8",
        ten_hien_thi: "VF 8",
        phien_ban: "VF 8 Eco",
        gia_niem_yet: 1050000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf8_eco_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf8_eco_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf8_eco_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf8_eco_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf8_eco_in_black.jpg" }
        ],
    },
    { 
        dong_xe: "vf_8",
        ten_hien_thi: "VF 8",
        phien_ban: "VF 8 Plus",
        gia_niem_yet: 1199000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf8_plus_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf8_plus_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf8_plus_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf8_plus_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf8_plus_in_black.jpg" }
        ],
    },
    
    // VF 9
    { 
        dong_xe: "vf_9",
        ten_hien_thi: "VF 9",
        phien_ban: "VF 9 Eco",
        gia_niem_yet: 1491000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf9_eco_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf9_eco_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf9_eco_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf9_eco_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf9_eco_in_black.jpg" }
        ],
    },
    { 
        dong_xe: "vf_9",
        ten_hien_thi: "VF 9",
        phien_ban: "VF 9 Plus",
        gia_niem_yet: 1691000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf9_plus_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf9_plus_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf9_plus_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf9_plus_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf9_plus_in_black.jpg" }
        ],
    },
    { 
        dong_xe: "vf_9",
        ten_hien_thi: "VF 9",
        phien_ban: "VF 9 Plus 6 Chỗ",
        gia_niem_yet: 1691000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/vf9_plus6_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/vf9_plus6_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/vf9_plus6_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/vf9_plus6_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/vf9_plus_6cho_in_black.jpg" }
        ],
    },
    
    // MINIO
    { 
        dong_xe: "minio",
        ten_hien_thi: "MINIO",
        phien_ban: "MINIO Green",
        gia_niem_yet: 239000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/minio_white.jpg" },
            { ma_mau: "yellow", hinh_anh_ngoai: "images/minio_yellow.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/minio_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/minio_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/minio_in_black.jpg" }
        ],
    },
    
    // HERIO
    { 
        dong_xe: "herio",
        ten_hien_thi: "HERIO",
        phien_ban: "HERIO Green",
        gia_niem_yet: 469000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/herio_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/herio_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/herio_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/herio_red.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/herio_in_black.jpg" }
        ],
    },
    
    // NERIO
    { 
        dong_xe: "nerio",
        ten_hien_thi: "NERIO",
        phien_ban: "NERIO",
        gia_niem_yet: 650000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/nerio_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/nerio_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/nerio_blue.jpg" },
            { ma_mau: "red", hinh_anh_ngoai: "images/nerio_red.jpg" },
            { ma_mau: "yellow", hinh_anh_ngoai: "images/nerio_yellow.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/nerio_in_black.jpg" }
        ],
    },
    
    // LIMO
    { 
        dong_xe: "limo",
        ten_hien_thi: "Limo",
        phien_ban: "Limo Green",
        gia_niem_yet: 850000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/limo_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/limo_grey.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/limo_in_black.jpg" }
        ],
    },
    
    // EC Van
    { 
        dong_xe: "ec",
        ten_hien_thi: "EC Van",
        phien_ban: "EC Van",
        gia_niem_yet: 415000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/ec_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/ec_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/ec_blue.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/ec_in_black.jpg" }
        ],
    },
    
    // EC Nâng Cao
    { 
        dong_xe: "ec_nang_cao",
        ten_hien_thi: "EC Nâng Cao",
        phien_ban: "EC Nâng Cao Van",
        gia_niem_yet: 476000000,
        loai_dong_co: "dien",
        mau_ngoai_that: [
            { ma_mau: "white", hinh_anh_ngoai: "images/ec_nangcao_white.jpg" },
            { ma_mau: "grey", hinh_anh_ngoai: "images/ec_nangcao_grey.jpg" },
            { ma_mau: "blue", hinh_anh_ngoai: "images/ec_nangcao_blue.jpg" }
        ],
        mau_noi_that: [
            { ma_mau: "grey", hinh_anh_noi: "images/ec_nangcao_in_black.jpg" }
        ],
    }
]

// Thông tin kỹ thuật xe (số chỗ ngồi, bảo hiểm)
const thong_tin_ky_thuat_xe = [
    { 
        dong_xe: "vf_3", 
        so_cho: 4, 
        phi_tnds_ca_nhan: 530000, 
        phi_tnds_kinh_doanh: 850000, 
        ty_le_bhvc_kinh_doanh: 0.0165, 
        ty_le_bhvc_ca_nhan: 0.0165 
    },
    { 
        dong_xe: "vf_5", 
        so_cho: 5, 
        phi_tnds_ca_nhan: 530000, 
        phi_tnds_kinh_doanh: 850000, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.0121 
    },
    { 
        dong_xe: "vf_6", 
        so_cho: 5, 
        phi_tnds_ca_nhan: 530000, 
        phi_tnds_kinh_doanh: 850000, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.01 
    },
    { 
        dong_xe: "vf_7", 
        so_cho: 5, 
        phi_tnds_ca_nhan: 530000, 
        phi_tnds_kinh_doanh: 850000, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.01 
    },
    { 
        dong_xe: "vf_8", 
        so_cho: 5, 
        phi_tnds_ca_nhan: 530000, 
        phi_tnds_kinh_doanh: 850000, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.01 
    },
    { 
        dong_xe: "vf_9", 
        so_cho: 7, 
        phi_tnds_ca_nhan: 950000, 
        phi_tnds_kinh_doanh: 1200000, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.01 
    },
    { 
        dong_xe: "minio", 
        so_cho: 4, 
        phi_tnds_ca_nhan: 530000, 
        phi_tnds_kinh_doanh: 850000, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.01 
    },
    { 
        dong_xe: "herio", 
        so_cho: 5, 
        phi_tnds_ca_nhan: 530000, 
        phi_tnds_kinh_doanh: 850000, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.01 
    },
    { 
        dong_xe: "nerio", 
        so_cho: 5, 
        phi_tnds_ca_nhan: 530000, 
        phi_tnds_kinh_doanh: 850000, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.01 
    },
    { 
        dong_xe: "limo", 
        so_cho: 7, 
        phi_tnds_ca_nhan: 950000, 
        phi_tnds_kinh_doanh: 1200000, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.01 
    },
    { 
        dong_xe: "ec", 
        so_cho: 2, 
        phi_tnds_ca_nhan: 500700, 
        phi_tnds_kinh_doanh: 1056300, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.015 
    },
    { 
        dong_xe: "ec_nang_cao", 
        so_cho: 2, 
        phi_tnds_ca_nhan: 500700, 
        phi_tnds_kinh_doanh: 1056300, 
        ty_le_bhvc_kinh_doanh: 0.0145, 
        ty_le_bhvc_ca_nhan: 0.015 
    }
]

// ===========================
// PHÍ & LỆ PHÍ ĐĂNG KÝ
// ===========================

// Phí lưu hành đường bộ (1 năm)
const phi_duong_bo = [
    { loai: "ca_nhan", gia_tri: 1560000 },
    { loai: "cong_ty", gia_tri: 2160000 }
]

// Phí cấp biển số
const phi_cap_bien_so = [
    { khu_vuc: "ho_chi_minh", ten_khu_vuc: "TP. Hồ Chí Minh", gia_tri: 20000000 },
    { khu_vuc: "ha_noi", ten_khu_vuc: "Hà Nội", gia_tri: 20000000 },
    { khu_vuc: "da_nang", ten_khu_vuc: "Đà Nẵng", gia_tri: 1000000 },
    { khu_vuc: "can_tho", ten_khu_vuc: "Cần Thơ", gia_tri: 1000000 },
    { khu_vuc: "hai_phong", ten_khu_vuc: "Hải Phòng", gia_tri: 1000000 },
    { khu_vuc: "tinh_khac", ten_khu_vuc: "Tỉnh thành khác", gia_tri: 1000000 }
]

// Phí kiểm định
const phi_kiem_dinh = 140000

// Chi phí dịch vụ đăng ký
const chi_phi_dich_vu_dang_ky = 3900000

// Lãi suất vay hàng năm (8.5%)
const lai_suat_vay_hang_nam = 0.085

// Lệ phí trước bạ (xe xăng 10%, xe điện 0%)
const le_phi_truoc_ba = [
    { loai: "xe_xang_dau", ten_loai: "Xe xăng/dầu", ty_le: 0.10 },
    { loai: "xe_dien", ten_loai: "Xe điện", ty_le: 0 }
]

// ===========================
// ƯU ĐÃI & HỖ TRỢ
// ===========================

// Hỗ trợ đổi xe xăng sang xe điện
const ho_tro_doi_xe = [
    { dong_xe: "vf_3", gia_tri: 5000000 },
    { dong_xe: "vf_5", gia_tri: 10000000 },
    { dong_xe: "vf_6", gia_tri: 15000000 },
    { dong_xe: "vf_7", gia_tri: 50000000 },
    { dong_xe: "vf_8", gia_tri: 70000000 },
    { dong_xe: "vf_9", gia_tri: 100000000 },
    { dong_xe: "herio", gia_tri: 9500000 },
    { dong_xe: "limo", gia_tri: 15000000 },
    { dong_xe: "minio", gia_tri: 0 },
    { dong_xe: "nerio", gia_tri: 0 },
    { dong_xe: "ec", gia_tri: 0 },
    { dong_xe: "ec_nang_cao", gia_tri: 0 }
]

// Chương trình Sài Gòn Xanh
const chuong_trinh_sai_gon_xanh = [
    { dong_xe: "vf_3", gia_tri: 6000000 },
    { dong_xe: "vf_5", gia_tri: 10000000 },
    { dong_xe: "vf_6", gia_tri: 15000000 },
    { dong_xe: "vf_7", gia_tri: 35000000 },
    { dong_xe: "vf_8", gia_tri: 50000000 },
    { dong_xe: "vf_9", gia_tri: 70000000 },
    { dong_xe: "herio", gia_tri: 5000000 },
    { dong_xe: "limo", gia_tri: 7500000 },
    { dong_xe: "minio", gia_tri: 0 },
    { dong_xe: "nerio", gia_tri: 0 },
    { dong_xe: "ec", gia_tri: 0 },
    { dong_xe: "ec_nang_cao", gia_tri: 0 }
]

// Ưu đãi VinClub
const uu_dai_vin_club = [
    { hang: "gold", ten_hang: "Gold", ty_le: 0.005 },
    { hang: "platinum", ten_hang: "Platinum", ty_le: 0.01 },
    { hang: "diamond", ten_hang: "Diamond", ty_le: 0.015 }
]

// ===========================
// ĐẶT CỌC
// ===========================

const gia_tri_dat_coc = [
    { dong_xe: "vf_3", gia_tri: 15000000 },
    { dong_xe: "vf_5", gia_tri: 20000000 },
    { dong_xe: "vf_6", gia_tri: 30000000 },
    { dong_xe: "vf_7", gia_tri: 50000000 },
    { dong_xe: "vf_8", gia_tri: 50000000 },
    { dong_xe: "vf_9", gia_tri: 50000000 },
    { dong_xe: "minio", gia_tri: 15000000 },
    { dong_xe: "herio", gia_tri: 20000000 },
    { dong_xe: "nerio", gia_tri: 30000000 },
    { dong_xe: "limo", gia_tri: 15000000 },
    { dong_xe: "ec", gia_tri: 15000000 },
    { dong_xe: "ec_nang_cao", gia_tri: 15000000 }
]

// ===========================
// BẢO HIỂM VẬT CHẤT 2 NĂM
// ===========================

const goi_bhvc_2_nam = [
    { dong_xe: "vf_3", gia_tri: 6500000 },
    { dong_xe: "vf_5", gia_tri: 12000000 },
    { dong_xe: "herio", gia_tri: 12000000 }
]

// ===========================
// TƯƠNG THÍCH NGƯỢC (Legacy)
// ===========================

// Giữ lại các biến cũ để không làm hỏng code hiện tại
const phi_cap_bien_so_legacy = phi_cap_bien_so
const thong_tin_xe = thong_tin_ky_thuat_xe
const xang_doi_dien = ho_tro_doi_xe
const dat_coc = gia_tri_dat_coc
const sai_gon_xanh = chuong_trinh_sai_gon_xanh
const vin_club = uu_dai_vin_club
const quy_doi_2_nam_bhvc = goi_bhvc_2_nam

// Biến cũ cot_phu_vin24 - giờ map từ danh_sach_xe
const cot_phu_vin24 = danh_sach_xe.map(xe => ({
    longname: xe.phien_ban,
    shortname: xe.ten_hien_thi,
    gia_tri: xe.gia_niem_yet
}))


