const express = require('express');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config();
const notFound = require('./middlewares/not-found')
const blogRoute = require('./routes/route')
const port = process.env.PORT;

//middlewares
app.use(express.json());

//routes
app.use('/api/v1/blogs', blogRoute)

app.use(notFound)



const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on ${port}`))
    }

    catch(error){
        console.log(error);
    }
}

start();

