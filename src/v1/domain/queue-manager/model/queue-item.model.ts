import * as mongoose from 'mongoose';

export const QueueItemSchema = new mongoose.Schema({
    track_id: { type: String, required: true },
    track_name: { type: String, required: true },
    user_id: { type: String, required: true },
    status: { type: String, required: true },
});

export interface QueueItem extends mongoose.Document {
    id: string;
    track_id: string;
    track_name: string;
    user_id: string;
    status: string;
}