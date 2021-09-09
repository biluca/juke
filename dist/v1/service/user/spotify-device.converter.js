"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyDeviceConverter = void 0;
const device_model_1 = require("../../domain/user/model/device.model");
class SpotifyDeviceConverter {
    static convertDeviceList(devicesResponse) {
        let devicesList = [];
        if (devicesResponse.body.devices) {
            const devices = devicesResponse.body.devices;
            devices.forEach(device => {
                let convertedDevice = this.convertDevice(device);
                devicesList.push(convertedDevice);
            });
        }
        return devicesList;
    }
    static convertDevice(device) {
        let convertedDevice = {
            id: device.id,
            ativo: device.is_active,
            sessao_privada: device.is_private_session,
            restrito: device.is_restricted,
            nome: device.name,
            tipo: device.type,
            volume: device.volume_percent,
        };
        return convertedDevice;
    }
}
exports.SpotifyDeviceConverter = SpotifyDeviceConverter;
//# sourceMappingURL=spotify-device.converter.js.map