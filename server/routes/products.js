const express=require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', async function(req,res){
    try{
        const products = await Product.find({})
        res.json(products)    
    } catch (err){
        console.error(err);
        res.status(500).send(err.message);
    }
   
})

router.get('/:productId', async function(req,res){
    try{
        const productId = req.params.productId
        const product = await Product.findById(productId)
        res.json(product)    
    } catch (err){
        console.error(err);
        // res.status(500).send(err.message);
        res.status(500).send({errors: [{title: 'prudict error', dtail: 'product not found!'}]});
    }
   
})

module.exports = router