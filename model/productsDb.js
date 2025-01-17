// import {pool} from '../config/config.js'
import {createPool} from 'mysql2/promise'
import {config} from 'dotenv'
config()

const pool=createPool({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database: process.env.DATABASE

})

const getProductsDb = async()=>{
    let [data] = await pool.query('SELECT * FROM bfxprsrsz3hdrcp7b87q.products')
    return data
}
const getProductDb = async (productID) => {
    let [[data]] = await pool.query('SELECT* FROM bfxprsrsz3hdrcp7b87q.products WHERE productID = ?', [productID]);
  
    if (!data) {
      return 'Product not found';
    }
  
    return data;
  };
const insertProductDb = async(prodName,quantity,amount,Category,prodUrl)=>{
    await pool.query(`
        INSERT INTO bfxprsrsz3hdrcp7b87q.products(prodName,quantity,amount,Category,prodUrl) VALUES(?,?,?,?,?)
        `,[prodName,quantity,amount,Category,prodUrl])
}

const deleteProductDb = async(productID)=>{
    await pool.query('DELETE FROM bfxprsrsz3hdrcp7b87q.products WHERE productID=?',[productID])
}
const updateProductDb = async(prodName,quantity,amount,Category,prodUrl,productID)=>{
    let [data] = await pool.query(`
        UPDATE bfxprsrsz3hdrcp7b87q.products 
        SET 
        prodName=?, quantity=? ,amount=? ,Category=? ,prodUrl=?
        WHERE productID=?
        `,
        [prodName,quantity,amount,Category,prodUrl,productID])
    return data
}


export {getProductsDb,getProductDb,insertProductDb,deleteProductDb,updateProductDb}
