# 05 - Realtime Socket.IO

## Kết Nối

Frontend kết nối Socket.IO với query userId.

Ví dụ:

```js
io(BASE_URL, {
  query: { userId: authUser._id },
});
```

## Các Sự Kiện

### Server emit: getOnlineUsers

- Thời điểm: khi có kết nối/disconnect
- Payload: mảng userId đang online

```json
["userId_1", "userId_2"]
```

### Server emit: newMessage

- Thời điểm: sau khi lưu message thành công
- Người nhận: socket của receiverId
- Payload: object message

## Luồng Gửi Tin Nhắn Realtime

1. Client A gọi API send message
2. Server lưu message vào MongoDB
3. Server tìm socket của client B
4. Server emit newMessage cho B
5. Client B cập nhật state messages ngay

## Lưu Ý

- Cần unsubscribe event khi đổi selectedUser để tránh duplicate listener.
- Nếu socket chưa kết nối thì không subscribe event.
- Nên xử lý reconnect khi mất mạng.
