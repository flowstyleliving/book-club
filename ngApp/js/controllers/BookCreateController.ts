namespace app.Controllers {
  export class BookCreateController {
    public book: app.i.IBook;

    public create() {
      this.BookService.createBook(this.book).then((res) => {
        this.$state.go('Home');
      });
    }

    constructor(
      private BookService: app.Services.BookService,
      private $state: ng.ui.IStateService
    ) {}
  }
  angular.module('app').controller('BookCreateController', BookCreateController);
}
