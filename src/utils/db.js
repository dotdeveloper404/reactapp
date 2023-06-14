import mongoose from "mongoose";

const connect = async () => {
  mongoose.set("strictQuery", true); // it will not give warning on console

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "reactapp",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    throw new Error("connection failed");
  }
};

export default connect;
