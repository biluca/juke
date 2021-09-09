"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueItemSchema = void 0;
const mongoose = require("mongoose");
exports.QueueItemSchema = new mongoose.Schema({
    track_id: { type: String, required: true },
    track_name: { type: String, required: true },
    user_id: { type: String, required: true },
    status: { type: String, required: true },
});
//# sourceMappingURL=queue-item.model.js.map