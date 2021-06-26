import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'RegistroDBO',
  connector: 'mssql',
  url: 'mssql://jared:1234@DESKTOP-914IUVT/Registro',
  host: 'DESKTOP-914IUVT',
  port: 1433,
  user: 'jared',
  password: '1234',
  database: 'Registro'
};
@lifeCycleObserver('datasource')
export class RegistroDboDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'RegistroDBO';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.RegistroDBO', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
