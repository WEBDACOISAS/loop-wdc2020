import { DefaultCrudRepository } from '@loopback/repository';
import { Client, ClientRelations } from '../models';
import { MiotDataSource } from '../datasources';
export declare class ClientRepository extends DefaultCrudRepository<Client, typeof Client.prototype.id, ClientRelations> {
    constructor(dataSource: MiotDataSource);
}
