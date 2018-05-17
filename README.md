Clock for art installation for my friend Jessee.

### Bill of parts

 * Raspberry Pi.
 * SD card.
 * [LCD Keypad for RPi](https://www.aliexpress.com/item/I2C-IIC-16x2-RGB-LCD-Display-Shield-1602-Blue-Backlight-For-Raspberry-Pi-B-B/32772412372.html).

### Set up

 * Install [piCore](http://www.tinycorelinux.net/ports.html) rom image onto SD card.
 * Install node.tcz package on piCore.
 * Upload this repo to `~tc/jessee-clock`.
 * `npm install` required modules.
 * Add `~/jessee-clock/bootscript.sh` to `/opt/bootlocal.sh`
 * Reboot.

