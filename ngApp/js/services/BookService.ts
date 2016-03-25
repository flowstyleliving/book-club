namespace app.Services {
  interface IBookResource extends ng.resource.IResource<IBookResource>, app.i.IBook {}
  interface IBookClass extends ng.resource.IResourceClass<IBookResource> {}

  export class BookService {
    private BookResource: IBookClass;

    public getAll() {
      return this.BookResource.query();
    }

    public createBook(book: app.i.IBook) {
      return this.BookResource.save(book).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService) {
      this.BookResource = <IBookClass>$resource('/api/v1/books/:id')
    }
  }
  angular.module('app').service("BookService", BookService);
}
