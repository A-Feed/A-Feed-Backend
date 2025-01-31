const Users = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};



const Login = async(req, res) => {
  try{
    const user = await Users.findAll({
      where:{
        email:req.body.email
      }
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if(!match) return res.status(400).json({msg:"Wrong password"});
    const userId = user[0].id;
    const username = user[0].username;
    const email = user[0].email;
    const accessToken = jwt.sign({userId, username, email}, process.env.ACCESS_TOKEN_SECRET,{
      expiresIn: '20s'
    });
    const refreshToken = jwt.sign({userId, username, email}, process.env.REFRESH_TOKEN_SECRET,{
      expiresIn: 'id'
    });
    await Users.update({refresh_token: refreshToken}, {
      where:{
        id:userId
      }
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly:true,
      maxAge: 24 * 60 * 60 * 1000
    });

    res.json({accessToken});

  } catch (error){
    res.status(404).json({msg:"Email tidak ditemukan"});
  }
}




module.exports = { getUsers};
