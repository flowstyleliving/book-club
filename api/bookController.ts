import * as express from 'express';
import {Book, IBookModel} from '../models/Book';

export function getAll(req: express.Request, res: express.Response, next: Function) {
  Book.find({})
  .exec((err, books) => {
    if(err) return next(err);
    res.json(books);
  })
}

export function create(req: express.Request, res: express.Response, next: Function) {
  req.body.dateAdded = Date.now();
  let b = new Book(req.body);
  b.save((err, book: IBookModel) => {
    if(err) return next(err);
    res.json(book);
  });
}
