import express from "express";
import {faker} from "@faker-js/faker";

const app = express();
const PORT = 8000;

//MIDDELWARE
app.use(express.json());
app.use(express.urlencoded({extended:true}))


/* === CLASES === */
class Empresa {
    constructor(){
        this.name = faker.commerce.productName();
        this.price = "$" + faker.commerce.price();
        this.department = faker.commerce.department();
    }
}
class Usuario {
    constructor(){
        this.user = faker.internet.userName();
        this.password = faker.internet.password();
        this.email = faker.internet.email
    }
}
/* === RUTAS === */
app.get('/api/users/new', (req, res)=>{
    let user = new Usuario();
    res.json(user);
});
app.get('/api/companies/new', (req, res)=>{
    let company = new Empresa();
    res.json(company);
});
app.get('/api/user/company', (req, res)=>{
    let user = new Usuario();
    let company = new Empresa();
    res.json({user, company});
})

app.listen(PORT, ()=>{
    console.log("Servidor encendido");
});