"use strict";
var mongoose = require('mongoose');
;
var bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    datePub: { type: Number },
    dateAdded: { type: String },
    imgUrl: { type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxY7n6J4PZqzhJrPDUEJAGz_UJHI_heOpvdoIscea1sj2MVVToS6czgq_' },
    numPages: { type: Number, required: true }
});
exports.Book = mongoose.model('Book', bookSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksUUFBUSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ2dDLENBQUM7QUFFdEUsSUFBSSxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ25DLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUNyQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDdEMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUN2QixTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0lBQ3pCLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNO1FBQ25CLE9BQU8sRUFBRSxrSEFBa0gsRUFBQztJQUM5SCxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7Q0FDekMsQ0FBQyxDQUFDO0FBRVEsWUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQWEsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDIn0=