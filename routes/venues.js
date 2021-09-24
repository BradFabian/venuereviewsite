const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show All venues'});
});

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: 'Show A venue'});
});

router.post('/', (req, res) => {
    res.status(200).json({success: true, msg:'Post Venue'});
})

router.put('/:id', (req, res) => {
    res.status(200).json({success: true, msg:'Update Venue'});
})

router.delete('/:id', (req, res) => {
    res.status(200).json({success: true, msg:'Delete Venue'});
})

module.exports = router;