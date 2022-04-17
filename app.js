const express = require("express")
const users = require("./utils/users")
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.get("/",(req,res)=>{

res.send("<p>Anasayfa</p>")

})

app.listen(port , ()=>{
console.log("Server is running on port: 3000");
})

app.get("/users/:username?",(req,res)=>{
    const user_username = req.params.username

    if(user_username){
        res.send(users.getByUserName(user_username))
    }else{
        res.send(users.getUsers())
    }
    
})

app.post("/users/add",(req,res)=>{

    const user = req.body

    res.send(users.postUser(user))


})




