const express = require('express');
const auth = require('../middleware/auth');
const {Stocks} = require('../models/stock');
const stockRouter = express.Router();
const User = require('../models/user')

stockRouter.post('/stock/order-buy',auth,async(req,res)=>{
  try {
     const { stockName , qty, buyPrice,stockId} = req.body;
     let user = await User.findById(req.user);
       user.trades.push({stockName , qty, buyPrice,stockId})
       user =await user.save();
       res.json(user);
  } catch (e) {
     res.status(500).json({error:e.message});
  }
 });

stockRouter.get('/stock/order/me',auth,async(req,res)=>{
try {
  const user = await User.findById(req.user);
  res.json(user.trades);
} catch (e) {
    res.status(500).json({error:e.message});
}
});
stockRouter.delete('/trade-delete/:id',auth,async(req,res)=>{
  try {
    const { id } = req.params;
   // console.log(id);
    let user = await User.findById(req.user);
      for (let i = 0; i < user.trades.length; i++) {
        if (user.trades[i]._id.equals(id)) {
          user.trades.splice(i,1);
          
          }
        }
        user = await user.save();
        res.json({user, res:"Deleted Successfully!"});
  } catch (e) {
    res.status(500).json({error:e.message});
  }
})
module.exports = stockRouter;