const fs = require("fs")

const getUsers = ()=>{

const users = loadUsers()

return users

}

const getByUserName = (username)=>{
    const users = loadUsers()

    for (let index = 0; index < users.length; index++) {
        const user = users[index];

        if(user.username == username){
            return user
        }
        
    }

    return {hata: "Boyle bir kullanici bulunamadi !"}

}

const loadUsers = ()=>{

    
    try {

        const dataBuffer = fs.readFileSync("./public/users.json")
        const dataBufferString = dataBuffer.toString()
        const dataObject = JSON.parse(dataBufferString)

        return dataObject
        
    } catch (error) {
        return []
    }
}

const postUser = (user)=>{

    const users = loadUsers()

    const duplicateUsers = users.filter((element)=>{
            return user.username == element.username
    })

    if(duplicateUsers.length != 0){
        return {hata : user.username + "Bu kullanci daha onceden kayit edilmis"}
    }else{
        users.push(user)

        saveUser(users)

        return {sonuc : user.username + " adli kisi eklendi"}
    }
    

}

const saveUser = (users)=>{

   const usersJSON = JSON.stringify(users)

   fs.writeFileSync("./public/users.json", usersJSON)

    
}

module.exports = {
    getUsers : getUsers,
    getByUserName : getByUserName,
    saveUser : saveUser,
    postUser : postUser
}

