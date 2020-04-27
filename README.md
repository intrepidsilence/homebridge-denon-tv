<p align="center">
  <a href="https://github.com/grzegorz914/homebridge-denon-tv"><img src="https://github.com/grzegorz914/homebridge-denon-tv/blob/master//graphics/denon.png" height="140"></a>
</p>

<span align="center">

# Homebridge Denon TV
[![verified-by-homebridge](https://badgen.net/badge/homebridge/verified/purple)](https://github.com/homebridge/homebridge/wiki/Verified-Plugins)
[![npm](https://badgen.net/npm/dt/homebridge-denon-tv?color=purple)](https://www.npmjs.com/package/homebridge-denon-tv) [![npm](https://badgen.net/npm/v/homebridge-denon-tv?color=purple)](https://www.npmjs.com/package/homebridge-denon-tv) [![GitHub pull requests](https://img.shields.io/github/issues-pr/grzegorz914/homebridge-denon-tv.svg)](https://github.com/grzegorz914/homebridge-denon-tv/pulls)
[![GitHub issues](https://img.shields.io/github/issues/grzegorz914/homebridge-denon-tv.svg)](https://github.com/grzegorz914/homebridge-denon-tv/issues)

Homebridge plugin to control Denon/Marantz AV Receivers series X in HomeKit as TV service. Tested with AVR-X6300H.

</span>

## Info
1. Volume/Mute and RC/Media control is possible after You go to RC app on iPhone/iPad.
2. Power ON/OFF short press tile in HomeKit app.
3. Inputs can be changed after loong press tile in HomeKit app and select from the list.
4. Volume/Mute can be changed using hardware buttons on iPhone/iPad `Speaker Service` or after enable `volumeControl` throught extra `lightbulb` (slider) or using Siri.
5. RC/Media control function available from RC app on iPhone/iPad.
6. Siri control.

<p align="left">
  <a href="https://github.com/grzegorz914/homebridge-denon-tv"><img src="https://github.com/grzegorz914/homebridge-denon-tv/blob/master/graphics/homekit.png" height="300"></a>  <a href="https://github.com/grzegorz914/homebridge-denon-tv"><img src="https://github.com/grzegorz914/homebridge-denon-tv/blob/master/graphics/inputs.png" height="300"></a>  <a href="https://github.com/grzegorz914/homebridge-denon-tv"><img src="https://github.com/grzegorz914/homebridge-denon-tv/blob/master/graphics/RC.png" height="300"></a>
</p>

## Package
1. [Homebridge](https://github.com/homebridge/homebridge)
2. [Homebridge Config UI X](https://github.com/oznu/homebridge-config-ui-x)

## Installation
1. Follow the step-by-step instructions on the [Homebridge Wiki](https://github.com/homebridge/homebridge/wiki) for how to install Homebridge.
2. Follow the step-by-step instructions on the [Homebridge Config UI X](https://github.com/oznu/homebridge-config-ui-x/wiki) for how to install Homebridge Config UI X.
3. Install homebridge-denon-tv using: `npm install -g homebridge-denon-tv` or search for `Denon Tv` in Config UI X.

## Configuration
1. Use [Homebridge Config UI X](https://github.com/oznu/homebridge-config-ui-x) to configure the plugin (strongly recomended), or update your configuration file manually. See `sample-config.json` in this repository for a sample or add the bottom example to Your config.json file.
2. Different model of AV Receiver uses different reference:
`PHONO, CD, TUNER, DVD, BD, TV, SAT/CBL, MPLAY, GAME, HDRADIO, NET, PANDORA, SIRIUSXM, SPOTIFY, LASTFM, FLICKR, IRADIO, SERVER, FAVORITES, AUX1, AUX2, AUX3, AUX4, AUX5, AUX6, AUX7, BT, USB/IPOD, USB, IPD, IRP, FVP, HDP, VCR, DVR, SAT, XM`
3. If port `8080` not working check with port `80`, different receivers uses different ports, You need to check which one is correct for you.

<p align="left">
  <a href="https://github.com/grzegorz914/homebridge-denon-tv"><img src="https://github.com/grzegorz914/homebridge-denon-tv/blob/master/graphics/ustawienia.png" height="150"></a>
</p>

```json
{
    "platform": "DenonTv",
    "devices": [
        {
            "name": "AV Receiver",
            "host": "192.168.1.5",
            "port": 8080,
            "volumeControl": false,
            "switchInfoMenu": false,
            "inputs": [
                {
                "name": "Xbox One",
                "reference": "GAME"
                },
                {
                "name": "TV",
                "reference": "TV"
                },
                {
                    "name": "Sat Receiver",
                    "reference": "SAT/CBL"
                },
                {
                    "name": "CD",
                    "reference": "CD"
                },
                {
                    "name": "DVD",
                    "reference": "DVD"
                },
                {
                    "name": "Bluray",
                    "reference": "BD"
                },
                {
                    "name": "Tuner",
                    "reference": "TUNER"
                },
                {
                    "name": "Spotify",
                    "reference": "SPOTIFY"
                },
                {
                    "name": "Net",
                    "reference": "NET"
                },
                {
                    "name": "Media Player",
                    "reference": "MPLAY"
                },
                {
                    "name": "USB iPod",
                    "reference": "USB/IPOD"
                },
                {
                    "name": "AUX1",
                    "reference": "AUX1"
                },
                {
                    "name": "AUX2",
                    "reference": "AUX2"
                }
            ]
        }
    ]
}
```

## Whats new:
https://github.com/grzegorz914/homebridge-denon-tv/blob/master/CHANGELOG.md

