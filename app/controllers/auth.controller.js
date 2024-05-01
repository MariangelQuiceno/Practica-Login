import bcryptjs  from 'bcryptjs';


const tempUsers = [{
    user: 'a',
    email: 'a@a.com',
    password: 'a'
}
]




async function login(req,res) {

}

async function register (req,res) {
    console.log(req.body)
    const user = req.body.user;
    const email = req.body.password;
    const password = req.body.email;
    if(!user || !password || !email){
        res.status(400).send({status: 'Error', message:'Los campos estan incompletos'})
    }
    const userChecking = tempUsers.find(userFinder => userFinder.user === user);
    if (userChecking){
        res.status(400).send({status: 'Error', message:'Este usuario ya existe'})
    }
    const salt = bcryptjs.genSalt(5);
    const hashPassword = await bcryptjs.hash(password,salt)
    const newUser = {
        user, email, password: hashPassword
    }
    console.log(newUser);
    tempUsers.push(newUser);
    res.status(201).send({status:'ok', message:`Usuario ${newUser} agregado`, redirect: '/'})
}

export const methods = {
    login,
    register
}

