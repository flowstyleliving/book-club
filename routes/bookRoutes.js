"use strict";
var express = require('express');
var bookController_1 = require('../api/bookController');
var Book_1 = require('../models/Book');
var ctrl = bookController_1.controller(Book_1.Book);
var router = express.Router();
router.get('/', ctrl.getAll);
router.post('/', ctrl.create);
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va1JvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2tSb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLCtCQUF5Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ2pELHFCQUFtQixnQkFBZ0IsQ0FBQyxDQUFBO0FBR3BDLElBQU0sSUFBSSxHQUFHLDJCQUFVLENBQUMsV0FBSSxDQUFDLENBQUM7QUFDOUIsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSWhDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUc3QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFHOUIsaUJBQVMsTUFBTSxDQUFDIn0=