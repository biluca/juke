import * as mongoose from 'mongoose';
export declare const SpotifyDeviceSchema: any;
export interface SpotifyDevice extends mongoose.Document {
    id: string;
    ativo: boolean;
    sessao_privada: boolean;
    restrito: boolean;
    nome: string;
    tipo: string;
    volume: number;
}
