import { fakerFR as faker } from '@faker-js/faker'


const generateData = (req, res, next) => {
    const data = [];
    for (let i = 0; i < 100; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email({ firstName, lastName });
        const phone = faker.phone.number();
        const country = faker.location.country();
        data.push({ firstName, lastName, email, phone, country });
    }
    req.data = data;
    console.log(data)
    next();
}

export default generateData;