export default {
    getData: (req, res) => {
        const data = req.data;
        res.render('displayData', { data });
    }
}