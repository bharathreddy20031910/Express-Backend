const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {  
    useNewUrlParser: true,  
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('✅ Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.error('❌ MongoDB connection error:', err);
});
const tutorSchema = new mongoose.Schema({
    name: { type: String, required: true },
      gender: { type: String, required: true,  },
    email: { type: String, required: true,unique: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
    subject: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true }, 

},{timestamps: true, collection: 'Tutor'});

const Tutor = mongoose.model('Tutor', tutorSchema);
module.exports = Tutor;

