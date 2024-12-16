import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ProductSchema, Product } from "./Product.Schema";

@Schema()
export class Category {
    @Prop({ required: true, unique: true })
    category: string;

    @Prop({ type: [ProductSchema], default: [] })
    items: Product[];
}

export const CategorySchema = SchemaFactory.createForClass(Category)