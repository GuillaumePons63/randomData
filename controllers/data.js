export default {
    getData: (req, res) => {
        const data = req.session.data;
        res.render('displayData', { data });
    },
    getCsv: (req, res) => {
        const csv = req.csv;
        res.setHeader('Content-Disposition', 'attachment; filename=data.csv');
        res.send(csv);
    },
    getJson: (req, res) => {
        const data = req.session.data;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', 'attachment; filename=data.json');
        res.send(data);
    }
}