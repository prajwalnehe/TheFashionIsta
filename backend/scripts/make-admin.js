import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const makeAdmin = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/TheFashionIsta';
    await mongoose.connect(mongoUri);
    console.log('MongoDB Connected');

    const email = 'prajwalnehe03@gamail.com';
    const user = await User.findOneAndUpdate(
      { email },
      { role: 'admin' },
      { new: true }
    );

    if (!user) {
      console.log(`User not found with email: ${email}`);
      console.log('Make sure the user has registered first.');
    } else {
      console.log(`✓ ${user.email} is now an admin`);
    }

    process.exit();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

makeAdmin();
