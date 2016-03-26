var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var BookCreateController = (function () {
            function BookCreateController(BookService, $state) {
                this.BookService = BookService;
                this.$state = $state;
            }
            BookCreateController.prototype.create = function () {
                var _this = this;
                this.BookService.createBook(this.book).then(function (res) {
                    _this.$state.go('Home');
                });
            };
            return BookCreateController;
        }());
        Controllers.BookCreateController = BookCreateController;
        angular.module('app').controller('BookCreateController', BookCreateController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va0NyZWF0ZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCb29rQ3JlYXRlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FnQlo7QUFoQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBZ0J4QjtJQWhCYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBU0UsOEJBQ1UsV0FBcUMsRUFDckMsTUFBMkI7Z0JBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFDbEMsQ0FBQztZQVRHLHFDQUFNLEdBQWI7Z0JBQUEsaUJBSUM7Z0JBSEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzlDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUM7WUFNSCwyQkFBQztRQUFELENBQUMsQUFiRCxJQWFDO1FBYlksZ0NBQW9CLHVCQWFoQyxDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNqRixDQUFDLEVBaEJhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQWdCeEI7QUFBRCxDQUFDLEVBaEJTLEdBQUcsS0FBSCxHQUFHLFFBZ0JaIn0=