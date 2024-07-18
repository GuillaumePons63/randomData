import { fakerFR as faker } from '@faker-js/faker'


const generateData = (req, res, next) => {
    console.log(req.body)
    const data = [];
    for (let i = 0; i < req.body.rows; i++) {
        const oneData = getData(req);
        data.push(oneData);
    }
    data.columns = setColums(req);
    req.session.data = data;
    next();
}


const getData = (req) => {
    const response = {};
    if (req.body.name) response.lastName = faker.person.lastName();
    if (req.body.firstName) response.firstName = faker.person.firstName();
    if (req.body.email) response.email = faker.internet.email({ firtName: response.firstName, lastName: response.lastName }).toLowerCase();
    if (req.body.phone) response.phone = faker.phone.number();
    if (req.body.country) response.country = faker.location.country();
    return response;
}

const setColums = (req) => {
    const response = [];
    if (req.body.name) response.push('Last Name');
    if (req.body.firstName) response.push('First Name');
    if (req.body.email) response.push('Email');
    if (req.body.phone) response.push('Phone');
    if (req.body.country) response.push('Country');
    return response;
}

export default generateData;

