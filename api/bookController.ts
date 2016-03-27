import * as express from 'express';
import {IBookModel} from '../models/Book';
import * as mongoose from 'mongoose';

export function controller(Book: mongoose.Model<IBookModel>) {
  return {
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update,
    remove: remove
  }

  function getAll(req: express.Request, res: express.Response, next: Function) {
    Book.find({})
      .exec((err, books) => {
      if (err) return next(err);
      res.json(books);
    })
  }

  function getOne(req: express.Request, res: express.Response, next: Function) {
    Book.find({ _id: req.params.id })
      .exec((err, data) => {
      if (err) return next(err);
      res.json(data);
    });
  }

  function create(req: express.Request, res: express.Response, next: Function) {
    req.body.dateAdded = Date.now();
    let b = new Book(req.body);
    b.save((err, book: IBookModel) => {
      if (err) return next(err);
      res.json(book);
    });
  }

  function update(req: express.Request, res: express.Response, next: Function) {
    Book.update({ _id: req.params.id }, req.body, (err, numRows) => {
      if (err) return next(err);
      res.json({ message: "Your book has been updated!" });
    });
  }
  function remove(req: express.Request, res: express.Response, next: Function) {
    Book.remove({ _id: req.params.id }, (err) => {
      if (err) return next(err);
      res.json({ message: 'Your book entry has been deleted' });
    })
  }
}
