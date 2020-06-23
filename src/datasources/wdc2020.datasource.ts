import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'wdc2020',
  connector: 'mongodb',
  url: 'mongodb+srv://wdcmiot:wdcmiot123@cluster0-hq6rn.mongodb.net/wdc2020?retryWrites=true&w=majority',
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
export class Wdc2020DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'wdc2020';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.wdc2020', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
