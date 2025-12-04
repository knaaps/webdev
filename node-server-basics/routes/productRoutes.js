const express=  require('express')
const router= express.Router()
const productList=require('../products')


//path, callback(1.request, 2.response)
//ivide :- / = localhost:3000/products-GET

router.get('/',(req,res)=>{
    try {
        // res.send("inside product router")
        res.status(200).json({products: productList})
    } catch (error) {
        res.status(404).json({error:error.message})
        
    }
})

router.get('/:id',(req,res)=>{
    try {
        const pId = parseInt(req.parms.id);
        const data = productList.find((p)=> p.id ===pId);
        // res.send("inside product router")
        if(!data){
            return res.status(404).json({message:"product not found"})
        }
        res.status(200).json({products: data})

    } catch (error) {
        res.status(404).json({error:error.message})
        
    }
})
router.patch('/:id',(req,res)=>{
    try {
        const pId = parseInt(req.parms.id);
        const data = productList.find((p)=> p.id ===pId);
        // res.send("inside product router")
        if(!data){
            return res.status(404).json({message:"product not found"})
        }

        const {name, price, image}= req.body

        if(name!=undefined) data.name=name;
        if(price!=undefined) data.name=price;
        if(image!=undefined) data.name=image;

        res.status(200).json({products: data})

    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
});



module.exports=router