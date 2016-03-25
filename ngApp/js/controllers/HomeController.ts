namespace app.Controllers {
  export class HomeController {

    public books: Array<app.i.IBook>;

    constructor(private BookService: app.Services.BookService) {
      this.books = BookService.getAll();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
