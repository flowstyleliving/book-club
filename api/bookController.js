"use strict";
var Book_1 = require('../models/Book');
function controller(Book) {
    return {
        getAll: getAll,
        getOne: getOne,
        create: create,
        update: update,
        remove: remove
    };
}
exports.controller = controller;
function getAll(req, res, next) {
    Book_1.Book.find({})
        .exec(function (err, books) {
        if (err)
            return next(err);
        res.json(books);
    });
}
function getOne(req, res, next) {
    Book_1.Book.find({ _id: req.params.id })
        .exec(function (err, data) {
        if (err)
            return next(err);
        res.json(data);
    });
}
function create(req, res, next) {
    req.body.dateAdded = Date.now();
    var b = new Book_1.Book(req.body);
    b.save(function (err, book) {
        if (err)
            return next(err);
        res.json(book);
    });
}
function update(req, res, next) {
    Book_1.Book.update({ _id: req.params.id }, req.body, function (err, numRows) {
        if (err)
            return next(err);
        res.json({ message: "Your book has been updated!" });
    });
}
function remove(req, res, next) {
    Book_1.Book.remove({ _id: req.params.id }, function (err) {
        if (err)
            return next(err);
        res.json({ message: 'Your book entry has been deleted' });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscUJBQStCLGdCQUFnQixDQUFDLENBQUE7QUFHaEQsb0JBQTJCLElBQWdDO0lBQ3pELE1BQU0sQ0FBQztRQUNMLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsTUFBTTtRQUNkLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLE1BQU07S0FDZixDQUFBO0FBQ0gsQ0FBQztBQVJlLGtCQUFVLGFBUXpCLENBQUE7QUFFRCxnQkFBZ0IsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQWM7SUFDekUsV0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7U0FDWixJQUFJLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztRQUNmLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxnQkFBZ0IsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQWM7SUFDekUsV0FBSSxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxDQUFDO1NBQzlCLElBQUksQ0FBQyxVQUFDLEdBQUcsRUFBRSxJQUFJO1FBQ2QsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGdCQUFnQixHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBYztJQUN6RSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDaEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHLEVBQUUsSUFBZ0I7UUFDM0IsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGdCQUFnQixHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBYztJQUN6RSxXQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUcsRUFBRSxPQUFPO1FBQ3ZELEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSw2QkFBNkIsRUFBQyxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsZ0JBQWdCLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUFjO0lBQ3pFLFdBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsRUFBRSxVQUFDLEdBQUc7UUFDcEMsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLGtDQUFrQyxFQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMifQ==