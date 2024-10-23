import { model, Schema, Document } from "mongoose";

interface ICoupon extends Document {
  code: string;
  amount: number;
}

const couponSchema: Schema<ICoupon> = new Schema({
  code: {
    type: String,
    required: [true, "Please enter the Coupon Code"],
    unique: true,
  },
  amount: {
    type: Number,
    required: [true, "Please enter the Discount Amount"],
  },
});

export const Coupon = model<ICoupon>("Coupon", couponSchema);
