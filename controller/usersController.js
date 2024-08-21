import {getUsersDb,getUserDb,insertUserDb,deleteUserDb,updateUserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'

const fetchUsers=async (req,res) => {

    try {
        res.send(await getUsersDb())
        console.log('yahoo successful fetchAll');
        
    } catch (error) {
        res.send('Error  fetching users')
        throw error

    }
    }

const fetchUser=async (req,res) => {
    try {
        res.json(await getUserDb(req.params.userID))
        console.log('great work fetch1 👌');
        
    } catch (error) {
        res.send('error fetching a single user')
        throw error;
        
    }
}   

const insertUser=async (req,res) => {
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,userProfile,userPass} =req.body
    hash(userPass,10,async(err,hashedP)=>{

        if (err) throw err
        console.log(hashedP);
        
        await insertUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,userProfile,hashedP,req.params.userID)
        console.log('great work mfana 👌');
    })

    res.send(await getUsersDb())
}   

const deleteUser=async (req,res) => {
    try {
        await deleteUserDb(req.params.userID)
        res.send(await getUsersDb())
        console.log('great work broe 👌');
        
    } catch (error) {
       res.send('error deleting user') 
       throw error;
    }
}   
const updateUser=async (req,res) => {
    try {
        let {firstName,lastName,userAge,Gender,userRole,emailAdd,userProfile,userPass}=req.body
        let User=await getUserDb(req.params.userID)
        console.log(User)
        
        firstName?firstName :firstName=User.firstName
        lastName?lastName :lastName=User.lastName
        userAge?userAge:userAge=User.userAge
        Gender?Gender :Gender=User.Gender
        userRole?userRole :userRole=User.userRole
        emailAdd?emailAdd:emailAdd=User.emailAdd
        userProfile?userProfile:userProfile=User.userProfile
        userPass?userPass:userPass=User.userPass
        
        await updateUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,userProfile,userPass,req.params.userID)
        res.send(await getUsersDb())
        console.log('great work son 👌');
        
    } catch (error) {
       res.send('error updating the user')
       throw error
    }
}   
const loginUser= (req,res)=>{
    res.json({message:"Signed in successfully!"})
    
}

export {fetchUsers,fetchUser,insertUser,deleteUser,updateUser,loginUser}