import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Connects to MongoDB Atlas with robust error handling
 */
const connectDB = async () => {
    try {
        // Event listeners for debugging
        mongoose.connection.on('error', err => {
            console.error('🔴 Mongoose connection error:', err.message);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('🟠 Mongoose disconnected');
        });

        mongoose.connection.on('connected', () => {
            console.log('🟢 Mongoose connected to Atlas');
        });

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            family: 4 // Force IPv4 (sometimes fixes Atlas connection issues on certain ISPs)
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(`❌ Connection Failed: ${error.message}`);
        console.log('💡 TIP: If you see "IP not whitelisted", go to MongoDB Atlas -> Network Access -> Add IP -> 0.0.0.0/0');
        process.exit(1);
    }
};

export default connectDB;