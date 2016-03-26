var app;
(function (app) {
    var Services;
    (function (Services) {
        var BookService = (function () {
            function BookService($resource) {
                this.$resource = $resource;
                this.BookResource = $resource('/api/v1/books/:id');
            }
            BookService.prototype.getAll = function () {
                return this.BookResource.query();
            };
            BookService.prototype.createBook = function (book) {
                return this.BookResource.save(book).$promise;
            };
            return BookService;
        }());
        Services.BookService = BookService;
        angular.module('app').service("BookService", BookService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCb29rU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FvQlo7QUFwQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBb0JyQjtJQXBCYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBSXRCO1lBV0UscUJBQW9CLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFDekQsSUFBSSxDQUFDLFlBQVksR0FBZSxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUNoRSxDQUFDO1lBVk0sNEJBQU0sR0FBYjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQyxDQUFDO1lBRU0sZ0NBQVUsR0FBakIsVUFBa0IsSUFBaUI7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDL0MsQ0FBQztZQUtILGtCQUFDO1FBQUQsQ0FBQyxBQWRELElBY0M7UUFkWSxvQkFBVyxjQWN2QixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUMsRUFwQmEsUUFBUSxHQUFSLFlBQVEsS0FBUixZQUFRLFFBb0JyQjtBQUFELENBQUMsRUFwQlMsR0FBRyxLQUFILEdBQUcsUUFvQloifQ==