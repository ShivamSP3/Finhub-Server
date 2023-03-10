const express = require('express');
const mongooose = require('mongoose');
const authRouter = require('./Routers/auth');
const stockRouter = require('./Routers/stock');
mongooose.set('strictQuery',true);
const PORT = 4000 || process.env.PORT;
const app = express();

app.use(express.json());
app.use(authRouter);
app.use(stockRouter);

const DB ='mongodb+srv://shivam:shivam@cluster0.778wjin.mongodb.net/?retryWrites=true&w=majority';

mongooose.connect(DB).then(()=>{
    console.log("Connection was successful");
}
).catch((e)=>{
    console.log(e);
})

app.listen(PORT,'0.0.0.0', ()=>{
   console.log(`Server started at port ${PORT}`);
});
