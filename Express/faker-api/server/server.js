import express from "express";
import { faker } from "@faker-js/faker";

const app = express();
const port = 5001;

app.use(express.json());

app.listen(port, () => console.log("Connected successfully on port " + port));

const createUser = () => {
    return {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        id: faker.string.uuid()
    };
};

const createCompany = () => {
    return {
        id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
};

// API to create new user
app.post("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    console.log(req.body);  
    res.json(newFakeUser);  
});

// API to create new company
app.post("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    res.json(newFakeCompany);  
});

// API to return both user and company
app.get("/api/user/company", (req, res) => {
    const user = createUser();
    const company = createCompany();
    
    res.json({ user, company }); 
});
