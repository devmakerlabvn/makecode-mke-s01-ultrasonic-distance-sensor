// Xóa toàn bộ nội dung trên LCD (nếu có)
lcd.clearScreen()
// Cho hiển thị nội dung lên màn hình LCD
// Display text on the LCD
lcd.displayText("Distance:", 1, 1)
basic.forever(function () {
    // Hiển thị giá trị cảm biến lên màn hình LCD
    // Display sensor value
    lcd.displayText("" + ultraSonic.readDistance(ultraSonic.PingUnit.Centimeters, ultraSonic.PinKit.Port1) + " cm   ", 7, 1)
    // Dừng 0.5s
    // Pause 0.5s
    basic.pause(500)
})
