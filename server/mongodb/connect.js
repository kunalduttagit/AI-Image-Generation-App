import mongoose, { mongo } from "mongoose";

const connectDB = url => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
        .then(console.log('MongoDB connected'))
        .catch(err => console.log(`Error connecting to MongoDB: ${err}`))
}

export default connectDB;