import {getProductDb,getProductsDb,insertProductDb,deleteProductDb,updateProductDb} from '../model/productsDb.js'
import { getUserDb } from '../model/usersDb.js';





const fetchProduct=async (req,res) => {
    res.json(await getProductDb((req.params.productID)))
    console.log('yahoo successful fetch1');
       
}
const fetchProducts=async (req,res) => {
    res.send(await getProductsDb())
    console.log('great work fetch2 👌');
}   
const insertProduct=async (req,res) => {
    let {prodName,quantity,amount,Category,prodUrl} =req.body
        await insertProductDb(prodName,quantity,amount,Category,prodUrl)
        res.send(await getProductsDb())
    console.log('great work insert 👌');
}   
const deleteProduct=async (req,res) => {
    await deleteProductDb(req.params.productID)
    res.send(await getProductsDb())
    console.log('great work delete 👌');
}   
const updateProduct=async (req,res) => {
    let {prodName,quantity,amount,Category,prodUrl}=req.body
    let Product=await getProductDb(req.params.productID)
    console.log(Product)
    
    prodName?prodName :prodName=Product.prodName
    quantity?quantity :quantity=Product.quantity
    amount?amount:amount=Product.amount
    Category?Category :Category=Product.Category
    prodUrl?prodUrl :prodUrl=Product.prodUrl
      
    await updateProductDb(prodName,quantity,amount,Category,prodUrl ,req.params.productID)
    res.send(await getProductDb())
    console.log('great work update 👌');
}   


export {fetchProduct,fetchProducts,insertProduct,deleteProduct,updateProduct}