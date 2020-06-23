import { DefaultCrudRepository } from '@loopback/repository';
import { Client, ClientRelations } from '../models';
import { Wdc2020DataSource } from '../datasources';
export declare class ClientRepository extends DefaultCrudRepository<Client, typeof Client.prototype.id, ClientRelations> {
    constructor(dataSource: Wdc2020DataSource);
}
