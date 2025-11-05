# VinFast Calculator - Invoice System

## Cấu trúc Files

### 1. **vinfast-calculator.html** (File chính)

- Giao diện tính toán giá xe
- Form nhập thông tin khách hàng
- Hiển thị chi phí chi tiết
- Tính toán trả góp

### 2. **database.js** (Database)

- Dữ liệu xe (mẫu xe, phiên bản, giá)
- Màu sắc (ngoại thất, nội thất)
- Phí và lệ phí
- Ưu đãi và hỗ trợ

### 3. **invoice-print.html** (Hóa đơn điện tử)

- Giao diện in hóa đơn chuyên nghiệp
- Format chuẩn báo giá
- Hỗ trợ in và lưu PDF
- Tự động điền thông tin từ form

### 4. **print-invoice.js** (Logic xử lý in)

- Thu thập dữ liệu từ form
- Validate thông tin
- Mở cửa sổ in hóa đơn
- Xử lý gửi email (future)

## Workflow

```
vinfast-calculator.html
    ↓ (Nhập thông tin)
    ↓ (Click "In Báo Giá")
    ↓
print-invoice.js
    ↓ (Validate & Thu thập dữ liệu)
    ↓ (Lưu vào localStorage)
    ↓
invoice-print.html
    ↓ (Load dữ liệu từ localStorage)
    ↓ (Hiển thị hóa đơn)
    ↓ (In hoặc Lưu PDF)
```

## Các tính năng chính

### ✅ Đã hoàn thành:

- Tính toán giá xe tự động
- Tính toán chi phí lăn bánh
- Tính toán trả góp
- In hóa đơn điện tử
- Validation dữ liệu
- Giao diện responsive

### 🔄 Sắp triển khai:

- Gửi email báo giá
- Tải xuống PDF trực tiếp
- Lưu lịch sử báo giá
- Tích hợp CRM

## Cách sử dụng

1. Mở `vinfast-calculator.html` trong trình duyệt
2. Chọn mẫu xe và cấu hình
3. Nhập thông tin khách hàng
4. Click "In Báo Giá"
5. Cửa sổ mới sẽ mở với hóa đơn
6. Click "🖨️ In Hóa Đơn" hoặc Ctrl+P
7. Chọn "Lưu dưới dạng PDF" để lưu file

## Lưu ý

- Popup phải được cho phép để mở cửa sổ in
- Dữ liệu được lưu tạm trong localStorage
- Hóa đơn có thời hạn 7 ngày

## Support

Mọi thắc mắc vui lòng liên hệ: VinFast Cộng Hòa
