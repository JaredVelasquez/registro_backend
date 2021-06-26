import {Client, expect} from '@loopback/testlab';
import {RegistroApplication} from '../..';
import {setupApplication} from './test-helper';

describe('EmpleadoController', () => {
  let app: RegistroApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('Deberia retornarnos un objeto del empleado nuevo', async () => {
    const resultado = await client.post('/empleados').send({
      codigo: '1234TJ',
      nombre: 'Jared',
      fechaNacimiento: '11/07/1999',
      estadoCivil: 'Soltero',
      estado: 'Activo'
    }).expect(200);
    expect(resultado.body).to.containEql({
      empleadoId: resultado.body.empleadoId,
      codigo: '1234TJ',
      nombre: 'Jared',
      fechaNacimiento: '11/07/1999',
      estadoCivil: 'Soltero',
      estado: 'Activo'
    });
  });

  it('Eliminamos elemento y esperamos que nos responda con un status code 200', async () => {
    const resultado = await client.delete('/empleados/1').expect(204);
  });






});
