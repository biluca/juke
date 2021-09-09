import * as mongoose from 'mongoose';

export const SpotifyDeviceSchema = new mongoose.Schema({
    id: { type: String, required: true },
    is_active: { type: Boolean, required: true },
    is_private_session: { type: Boolean, required: true },
    restrito: { type: Boolean, required: true },
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    volume_percent: { type: Number, required: true }
});

export interface SpotifyDevice extends mongoose.Document {
    id: string;
    ativo: boolean;
    sessao_privada: boolean;
    restrito: boolean;
    nome: string;
    tipo: string;
    volume: number,
}