const express = require('express')
const router = express.Router();
const tourController = require('../controller/flightController');


router.param('org', (req, res, next, val) => {
    console.log(`Params: ${val}`)
    next();
})

// Routes
router
  .route('/search/:org/:des/:date1/:date2?/:pax')
  .get(tourController.flightSearch)

module.exports = router;