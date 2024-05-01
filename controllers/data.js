export default {
    getData: (req, res) => {
        const data = req.data;
        res.send(data);
    }
}