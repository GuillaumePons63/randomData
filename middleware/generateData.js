import { fakerFR as faker } from '@faker-js/faker'


const generateData = (req, res, next) => {
    const data = [];
    for (let i = 0; i < req.body.rows; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email({ firstName, lastName });
        const phone = faker.phone.number();
        const country = faker.location.country();
        data.push({ firstName, lastName, email, phone, country });
    }
    data.columns = ['First Name', 'Last Name', 'Email', 'Phone', 'Country'];
    req.data = data;
    next();
}

export default generateData;