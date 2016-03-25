namespace app.Services {
  interface IBookResource extends ng.resource.IResource<IBookResource>, app.i.IBook {}
  interface IBookClass extends ng.resource.IResourceClass<IBookResource> {}

  export class BookService {
    private BookResource: IBookClass;

    constructor(private $resource: ng.resource.IResourceService) {
      this.BookResource = <IBookClass>$resource('/api/v1/books/:id')
    }
  }
  angular.module('app').service("BookService", BookService);
}
