'use strict';
const DenonDevice = require('./src/denondevice.js');
const CONSTANS = require('./src/constans.json');

class DenonPlatform {
	constructor(log, config, api) {
		// only load if configured
		if (!config || !Array.isArray(config.devices)) {
			log(`No configuration found for ${CONSTANS.PluginName}`);
			return;
		}
		this.accessories = [];

		api.on('didFinishLaunching', () => {
			log.debug('didFinishLaunching');
			for (const device of config.devices) {
				if (!device.name || !device.host || !device.port) {
					this.log.warn('Device name, host or port missing!');
					return;
				}

				//denon device
				const denonDevice = new DenonDevice(api, device);
				denonDevice.on('publishAccessory', (accessory) => {
					api.publishExternalAccessories(CONSTANS.PluginName, [accessory]);
					const debug = device.enableDebugMode ? log(`Device: ${device.host} ${device.name}, published as external accessory.`) : false;
				})
					.on('devInfo', (devInfo) => {
						log(devInfo);
					})
					.on('message', (message) => {
						log(`Device: ${device.host} ${device.name}, ${message}`);
					})
					.on('debug', (debug) => {
						log(`Device: ${device.host} ${device.name}, debug: ${debug}`);
					})
					.on('error', (error) => {
						log.error(`Device: ${device.host} ${device.name}, ${error}`);
					});
			}
		});
	}

	configureAccessory(accessory) {
		this.accessories.push(accessory);
	}
};

module.exports = (api) => {
	api.registerPlatform(CONSTANS.PluginName, CONSTANS.PlatformName, DenonPlatform, true);
};