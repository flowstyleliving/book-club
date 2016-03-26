var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(BookService) {
                this.BookService = BookService;
                this.books = BookService.getAll();
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIb21lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FXWjtBQVhELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQVd4QjtJQVhhLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDekI7WUFJRSx3QkFBb0IsV0FBcUM7Z0JBQXJDLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEMsQ0FBQztZQUNILHFCQUFDO1FBQUQsQ0FBQyxBQVBELElBT0M7UUFQWSwwQkFBYyxpQkFPMUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUFYYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFXeEI7QUFBRCxDQUFDLEVBWFMsR0FBRyxLQUFILEdBQUcsUUFXWiJ9