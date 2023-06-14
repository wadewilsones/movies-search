/**
 * Contains application routes
 */
const express = require('express');
const router = express.Router();


//Home
router.get('/', (req, res) => {
    const data = { message: 'Test'};
    res.json(data);
})


//Export routes
module.exports = router;
