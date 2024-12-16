import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


@Schema()

export class Image {

    @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
    _id: Types.ObjectId;

    @Prop({ type: String, required: true })
    secure_url: String;

    @Prop({ type: String, required: true })
    public_url: String;

}

export const ImageSchema = SchemaFactory.createForClass(Image)