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
    gender: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
    subject: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    sclass: { type: String, required: true },
    language: { type: String, required: true},
dateTime: String},

    { collection: 'User' },
    { timestamps: true }

)

const User = mongoose.model('User', userSchema);    
module.exports = User;
