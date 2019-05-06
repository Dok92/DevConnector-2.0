const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')


const app = express();

// Conect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));
const corsOptions = {
    // optionsSuccessStatus: 200
    allowedHeaders: 'Content-Type, x-auth-token, Authorization',
    maxAge: 234234234,
    credentials: true,
}
app.use(cors(corsOptions))

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
