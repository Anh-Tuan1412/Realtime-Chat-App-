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



