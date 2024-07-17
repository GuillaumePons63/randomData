import csv from 'fast-csv'

let newCsv

const generateNewCsv = (req) =>
    new Promise((resolve, reject) => {

        const data = req.session.data;

        const csvStream = csv.format({ headers: true });

        let csvData = [];

        csvStream.on('data', (chunk) => {
            csvData.push(chunk.toString());
        });



        data.forEach((item) => {
            csvStream.write(item);

        });

        csvStream.on('end', () => {
            newCsv = csvData.join('');
        });

        csvStream.end(() => {
            resolve();
        });


    }
    )


export default async function generateCsv(req, res, next) {
    await generateNewCsv(req);
    req.csv = newCsv;
    next();
}