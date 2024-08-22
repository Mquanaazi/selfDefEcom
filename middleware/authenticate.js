import {compare, hash} from "bcrypt";
import { getUserEmailDb } from "../model/usersDb.js";
import jwt from 'jsonwebtoken'
import {config} from "dotenv"
config()


const checkUser = async (req, res, next) => {
    const { emailAdd, userPass } = req.body;
    const user = await getUserEmailDb(emailAdd);
  
    if (!user) {
      return res.send('Email address not found');
    }
  
    const hasheduserPass = user.userPass;
    const result = await compare(userPass, hasheduserPass);
  
    if (result === true) {
      const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1h' });
      req.body.token = token;
      console.log(token);
      next();
    } else {
      res.send('Incorrect email or password');
    }
  };

// const verifyAToken = (req,res,next)=>{
//     let {cookie} = req.headers;
//     // console.log(req.headers);
//     // checks if the token exists first
//     let token = cookie && cookie.split('=')[1];
//     jwt.verify(token, process.env.SECRET_KEY,(err, decoded)=>{
//         if(err){
//             // console.log(err);
//             res.json({message:'Token has expired'});
//             return;
//         }
//         req.body.user = decoded.emailAdd
//         // console.log(req.body);
//         next();

//     } )
// }
export {checkUser}
