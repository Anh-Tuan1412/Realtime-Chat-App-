# Tài Liệu Dự Án Realtime Chat App

Tài liệu này mô tả đầy đủ về kiến trúc, API, realtime, triển khai và kiểm thử cho dự án.

## Mục Lục

- [01 - Tổng Quan Dự Án](01-tong-quan.md)
- [02 - Cài Đặt Và Chạy Local](02-cai-dat-va-chay-local.md)
- [03 - Biến Môi Trường](03-bien-moi-truong.md)
- [04 - API Backend](04-api.md)
- [05 - Realtime Socket.IO](05-realtime-socket.md)
- [06 - Hướng Dẫn Deploy](06-deploy.md)
- [07 - Checklist Kiểm Thử](07-test-checklist.md)

## Diagram Mermaid

- [01 - Kiến Trúc Tổng Thể](diagrams/01-kien-truc-tong-the.md)
- [02 - ERD CSDL](diagrams/02-erd-csdl.md)
- [03 - Sequence Đăng Nhập](diagrams/03-sequence-dang-nhap.md)
- [04 - Sequence Gửi Tin Nhắn](diagrams/04-sequence-gui-tin-nhan.md)
- [05 - Deployment](diagrams/05-deployment.md)
- [06 - Auth Activity](diagrams/06-activity-auth.md)
- [07 - Send Message Activity](diagrams/07-activity-send-message.md)

## Ghi Chú

- Backend: Node.js + Express + Socket.IO + MongoDB + Cloudinary
- Frontend: React + Vite + Zustand + Axios + Tailwind + DaisyUI
- Xác thực: JWT lưu trong cookie httpOnly
