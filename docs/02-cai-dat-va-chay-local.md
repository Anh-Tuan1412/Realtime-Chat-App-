# 02 - Cài Đặt Và Chạy Local

## Yêu Cầu

- Node.js 18+
- npm 9+
- MongoDB Atlas hoặc MongoDB local
- Cloudinary account (nếu gửi ảnh)

## Cài Đặt Backend

```bash
cd backend
npm install
```

Tạo file .env trong backend với các biến cần thiết (xem tài liệu 03).

Chạy backend:

```bash
npm run dev
```

Mặc định backend chạy tại: http://localhost:5001

## Cài Đặt Frontend

```bash
cd frontend
npm install
npm run dev
```

Mặc định frontend chạy tại: http://localhost:5173

## Seed Dữ Liệu Mẫu (Tùy Chọn)

Script seed hiện có tại:

- backend/scripts/seedUsers.js

Chạy seed:

```bash
cd backend
node scripts/seedUsers.js
```

Cảnh báo: script sẽ xóa toàn bộ user hiện tại trước khi tạo dữ liệu mới.

## Kiểm Tra Nhanh

1. Mở frontend và đăng nhập
2. Vào trang home, chọn user bên sidebar
3. Gửi text và hình ảnh
4. Kiểm tra tin nhắn hiện trên chat container
