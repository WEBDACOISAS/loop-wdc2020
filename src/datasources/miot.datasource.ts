import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'miot',
  connector: 'mongodb',
  url: 'mongodb+srv://19809:hiqIjsu5ZLIAEnqh@cluster0-dws0l.mongodb.net/test?retryWrites=true&w=majority',
  //url: 'mongodb+srv://iotecosmiot:iotecos123@cluster0-dws0l.mongodb.net/test?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MiotDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'miot';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.miot', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
