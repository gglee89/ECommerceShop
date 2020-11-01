import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Mongoose Setup
    // Options we need to setup or else we
    // will get warning on the terminal console
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1); // Putting '1' it exits the script with 'failure'
  }
};

export default connectDB;
