import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ImageSchema, Image } from "./Image.Schema";

@Schema()
export class Product {
    @Prop({ required: true })
    name: String;

    @Prop({ required: true })
    description: String;


    @Prop({ required: true })
    price: String;

    @Prop({ type: ImageSchema, required: true, _id: false })
    image: Image;

    @Prop({ type: [ImageSchema], default: [] })
    subImages: Image[]

    @Prop({ required: true, default: 1 })
    stock: Number;

    @Prop({ required: true, default: true })
    isAvaiable: Boolean;

}
export const ProductSchema = SchemaFactory.createForClass(Product)