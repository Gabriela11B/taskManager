const express = require("express");
const {Router} = require('express')
const router = Router();
const taskControl = require('../controllers/task.controller.js')

router.get('/get1', taskControl.getAllTask)
router.get('/get2', taskControl.getTask)
router.post('/post', taskControl.generateTask)
router.delete('/delete', taskControl.deleteTask)
router.put('/put', taskControl.updateTask)


module.exports = router;