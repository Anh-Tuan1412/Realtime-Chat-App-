# 04 - API Backend

Base URL: http://localhost:5001/api

## Auth API

### POST /auth/signup

Request body:

```json
{
  "fullName": "Nguyen Van A",
  "email": "a@example.com",
  "password": "123456"
}
```

Response 201:

```json
{
  "_id": "...",
  "fullName": "Nguyen Van A",
  "email": "a@example.com",
  "profilePic": ""
}
```

### POST /auth/login

Request body:

```json
{
  "email": "a@example.com",
  "password": "123456"
}
```

Response 200: thông tin user + set cookie jwt.

### POST /auth/logout

Response 200:

```json
{
  "message": "Logged out successfully"
}
```

### GET /auth/check (protectRoute)

Response 200: thông tin user từ token.

### PUT /auth/update-profile (protectRoute)

Request body:

```json
{
  "profilePic": "data:image/png;base64,..."
}
```

Response 200: user đã cập nhật.

## Message API

### GET /messages/users (protectRoute)

Lấy danh sách user (không gồm user hiện tại).

### GET /messages/:id (protectRoute)

Lấy lịch sử chat giữa user hiện tại và user có id truyền vào.

### POST /messages/send/:id (protectRoute)

Request body:

```json
{
  "text": "Xin chào",
  "image": "data:image/png;base64,..."
}
```

Response 201: message vừa tạo.

## Mã Lỗi Thường Gặp

- 400: dữ liệu không hợp lệ
- 401: chưa đăng nhập/không có token
- 404: không tìm thấy user
- 500: lỗi hệ thống
