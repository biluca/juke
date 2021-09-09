import { SpotifyDevice } from "src/v1/domain/user/model/device.model";
export declare class SpotifyDeviceConverter {
    static convertDeviceList(devicesResponse: any): SpotifyDevice[];
    static convertDevice(device: any): SpotifyDevice;
}
