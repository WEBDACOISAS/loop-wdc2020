import { DefaultCrudRepository } from '@loopback/repository';
import { Todo, TodoRelations } from '../models';
import { MiotDataSource } from '../datasources';
export declare class TodoRepository extends DefaultCrudRepository<Todo, typeof Todo.prototype.id, TodoRelations> {
    constructor(dataSource: MiotDataSource);
}
