"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyDeviceSchema = void 0;
const mongoose = require("mongoose");
exports.SpotifyDeviceSchema = new mongoose.Schema({
    id: { type: String, required: true },
    is_active: { type: Boolean, required: true },
    is_private_session: { type: Boolean, required: true },
    restrito: { type: Boolean, required: true },
    nome: { type: String, required: true },
    tipo: { type: String, required: true },
    volume_percent: { type: Number, required: true }
});
//# sourceMappingURL=device.model.js.map