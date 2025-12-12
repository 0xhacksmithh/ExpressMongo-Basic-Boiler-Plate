import express from "express";
import { connectDB } from './src/config/db.js';
import userRouter from './src/user/user.route.js';


const app = express();

try {
    connectDB();
    console.log('connected to DB');
} catch (error) {
    console.log(error);
    process.exit(1);
    
}
// Middleware added first
app.use(express.json());
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// Resister routes
app.use('/api/users', userRouter);

const reqLogger = (req, res, next)=>{
    console.log(`${req.method} ${req.url} ${new Date().toISOString}`);
    next();
}


app.get('/', reqLogger, (req, res)=>{
    res.send('Welcome to HOme');
});

app.post('/api/users', userRouter);


const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server Runninggggggggggggggggggggggggggggggg on ${PORT}`);
})