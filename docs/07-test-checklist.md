# 07 - Checklist Kiểm Thử

## A. Auth

- [ ] Đăng ký thành công với dữ liệu hợp lệ
- [ ] Chặn đăng ký khi email đã tồn tại
- [ ] Đăng nhập đúng tài khoản/mật khẩu
- [ ] Báo lỗi khi mật khẩu sai
- [ ] Check auth trả user khi có cookie hợp lệ
- [ ] Logout xóa cookie

## B. Profile

- [ ] Upload avatar thành công
- [ ] Avatar hiển thị đúng trên navbar/chat

## C. Message API

- [ ] Lấy danh sách user sidebar
- [ ] Lấy lịch sử tin nhắn với từng user
- [ ] Gửi text message thành công
- [ ] Gửi image message thành công

## D. Realtime

- [ ] Trạng thái online cập nhật đúng
- [ ] User B nhận newMessage ngay khi A gửi
- [ ] Không bị duplicate event khi đổi user chat

## E. UI/UX

- [ ] Chat container auto-scroll xuống tin mới
- [ ] Theme đổi được và lưu khi reload
- [ ] Responsive trên màn hình nhỏ

## F. Regression

- [ ] Sau deploy, auth + message + realtime vẫn hoạt động
- [ ] Không có lỗi console nghiêm trọng
