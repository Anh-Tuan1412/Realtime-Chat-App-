# 03 - Biến Môi Trường

## Backend (.env)

Ví dụ:

```env
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>
PORT=5001
JWT_SECRET=your_secret_key
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Giải Thích

- MONGODB_URI: chuỗi kết nối MongoDB
- PORT: cổng backend
- JWT_SECRET: khóa ký JWT
- NODE_ENV: môi trường chạy (development/production)
- CLOUDINARY\_\*: thông tin để upload ảnh

## Frontend

Hiện tại code đang hardcode URL:

- API baseURL trong frontend/src/lib/axios.js
- Socket URL trong frontend/src/store/useAuthStore.js

Để deploy an toàn, nên đổi sang biến môi trường Vite:

```env
VITE_API_URL=https://your-backend-domain/api
VITE_SOCKET_URL=https://your-backend-domain
```

Sau đó sửa code để đọc qua import.meta.env.
