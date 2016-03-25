import * as express from 'express';
import * as controller from '../api/bookController';

const router = express.Router();
// Base Route = /api/v1/books

// GET: /api/v1/books
router.get('/', controller.getAll);

// POST: /api/v1/books
router.post('/', controller.create);


export = router;
