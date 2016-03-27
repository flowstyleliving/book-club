import * as express from 'express';
import {controller} from '../api/bookController';
import {Book} from '../models/Book';

// loose coupling
const ctrl = controller(Book);
const router = express.Router();
// Base Route = /api/v1/books

// GET: /api/v1/books
router.get('/', ctrl.getAll);

// POST: /api/v1/books
router.post('/', ctrl.create);


export = router;
