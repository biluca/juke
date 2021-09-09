import * as mongoose from 'mongoose';
export declare const QueueItemSchema: any;
export interface QueueItem extends mongoose.Document {
    id: string;
    track_id: string;
    track_name: string;
    user_id: string;
    status: string;
}
