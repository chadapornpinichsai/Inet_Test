# Inet_Test
วิธีรันโปรเจกต์

วิธีที่ 1: ใช้ Live Server ใน VS Code
1. เปิดโฟลเดอร์โปรเจกต์ใน VS Code
2. ติดตั้ง extension ชื่อ Live Server
3. เปิดไฟล์ index.html
4. คลิกขวาแล้วเลือก Open with Live Server
5. เว็บจะเปิดขึ้นในเบราว์เซอร์อัตโนมัติ

วิธีที่ 2: รันด้วย Python Server
1. เปิด Terminal ที่โฟลเดอร์โปรเจกต์
2. รันคำสั่ง:
   ```bash
   python -m http.server 8000
   ```
3. เปิดเบราว์เซอร์ที่ URL:
   ```text
   http://localhost:8000
   ```

โครงสร้างไฟล์หลัก
- index.html: โครงสร้างหน้าเว็บ
- style.css: สไตล์การแสดงผล
- scripts.js: JavaScript สำหรับ dropdown, tab และ pagination
- images/: ไฟล์รูปภาพที่ใช้ในหน้าเว็บ