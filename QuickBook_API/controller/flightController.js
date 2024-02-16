

// Handlers
exports.flightSearch = (req, res) => {
    let origin = req.params.org;
    let destination = req.params.des;
    let onwardDate = req.params.date1;
    let returnDate = req.params.date2;
    let pax = req.params.pax;
    res.status(200)
        .json({
        status: 'Success'
        })
}