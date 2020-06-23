import {DefaultCrudRepository} from '@loopback/repository';
import {Client, ClientRelations} from '../models';
import {MiotDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClientRepository extends DefaultCrudRepository<
  Client,
  typeof Client.prototype.id,
  ClientRelations
> {
  constructor(
    @inject('datasources.miot') dataSource: MiotDataSource,
  ) {
    super(Client, dataSource);
  }
}
