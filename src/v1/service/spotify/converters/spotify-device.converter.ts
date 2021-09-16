import { SpotifyDevice } from "src/v1/domain/user/model/device.model";

export class SpotifyDeviceConverter {

    static convertDeviceList(devicesResponse: any): SpotifyDevice[] {
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

    static convertDevice(device: any): SpotifyDevice {

        let convertedDevice: SpotifyDevice = {
            id: device.id,
            ativo: device.is_active,
            sessao_privada: device.is_private_session,
            restrito: device.is_restricted,
            nome: device.name,
            tipo: device.type,
            volume: device.volume_percent,
        }

        return convertedDevice;

    }
}

