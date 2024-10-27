const express = require('express');
const maskController = require('../controllers/mask.controller.js');

const router = express.Router();

router.post('/masks', maskController.createMask);
router.get('/masks', maskController.getAllMasks);
router.get('/masks/:id', maskController.getMaskById);
router.put('/masks/:id', maskController.updateMask);
router.delete('/masks/:id', maskController.deleteMask);

module.exports = router;