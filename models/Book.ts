import * as mongoose from 'mongoose';

export interface IBookModel extends app.i.IBook, mongoose.Document {};

let bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  datePub: {type: Number},
  dateAdded: {type: String},
  imgUrl: {type: String,
    default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxY7n6J4PZqzhJrPDUEJAGz_UJHI_heOpvdoIscea1sj2MVVToS6czgq_'},
  numPages: {type: Number, required: true}
});

export let Book = mongoose.model<IBookModel>('Book', bookSchema);
