const mongoose = require('mongoose');


require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
useUnifiedTopology: true, })

    mongoose.connection.once('open', () => {
  console.log('✅ Connected to MongoDB');
});

    
mongoose.connection.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);})

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
dateTime: String},

    { collection: 'User' },
    { timestamps: true }

)

const User = mongoose.model('User', userSchema);    
module.exports = User;
