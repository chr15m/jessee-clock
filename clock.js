var LCDPLATE, lcd;
LCDPLATE = require('adafruit-i2c-lcd').plate;
lcd = new LCDPLATE(1, 0x20);
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


lcd.sendBytes(0, 0x1F); // Sainsmart 1602 I2C backlight on

setInterval(function() {
  var now = new Date();
  lcd.clear();
  lcd.message(
    now.toLocaleTimeString() + "\n" +
    now.toDateString()
  );
}, 1000);
