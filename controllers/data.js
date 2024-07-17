export default {
    getData: (req, res) => {
        const data = req.data;
        res.render('displayData', { data });
    },
    getCsv: (req, res) => {
        const csv = req.csv;
        res.setHeader('Content-Disposition', 'attachment; filename=data.csv');
        res.send(csv);
    }
}