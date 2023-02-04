import mongoose from "mongoose";

export const Connect = async (url) => {
  try {
    await mongoose
      .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(console.log("connection success"));
  } catch (error) {
    console.log(error)
  }
};
