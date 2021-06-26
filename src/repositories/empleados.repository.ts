import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RegistroDboDataSource} from '../datasources';
import {Empleados, EmpleadosRelations} from '../models';

export class EmpleadosRepository extends DefaultCrudRepository<
  Empleados,
  typeof Empleados.prototype.empleadoId,
  EmpleadosRelations
> {
  constructor(
    @inject('datasources.RegistroDBO') dataSource: RegistroDboDataSource,
  ) {
    super(Empleados, dataSource);
  }
}
