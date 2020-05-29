import mongoose from 'mongoose';

try {
  mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    () => console.log(`MongoDB connected successfully`)
  );
} catch (err) {
  console.log(err.message);
}
