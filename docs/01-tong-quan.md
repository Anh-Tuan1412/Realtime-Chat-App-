# 01 - Tổng Quan Dự Án

## Mục Tiêu

Xây dựng ứng dụng chat realtime có các tính năng:

- Đăng ký, đăng nhập, đăng xuất
- Cập nhật avatar
- Hiện danh sách người dùng
- Gửi tin nhắn văn bản và hình ảnh
- Nhận tin nhắn realtime
- Theo dõi người dùng online

## Công Nghệ Sử Dụng

### Backend

- Express để xây dựng API
- Mongoose để làm việc với MongoDB
- Socket.IO để giao tiếp realtime
- JWT + cookie-parser để xác thực
- Cloudinary để lưu ảnh

### Frontend

- React + Vite
- Zustand để quản lý state
- Axios để gọi API
- Socket.IO Client để nhận sự kiện realtime
- TailwindCSS + DaisyUI cho giao diện

## Cấu Trúc Thư Mục

- backend/: server API, model, middleware, socket
- frontend/: giao diện và state client
- docs/: tài liệu kỹ thuật và diagram

## Luồng Chính

1. Người dùng đăng nhập -> backend tạo JWT cookie
2. Frontend gọi check auth để khởi tạo phiên
3. Frontend kết nối Socket.IO kèm userId
4. Khi gửi tin nhắn, backend lưu DB và emit realtime
5. Người nhận online sẽ nhận sự kiện newMessage ngay lập tức
