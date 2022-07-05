// const { expect } = require('chai');
// const { describe, it, beforeEach } = require('mocha');
// const sinon = require('sinon');
// const connection = require('../../models/connection');
// const { createTasks } = require('../../models/Tasks');

// describe('Model test', () => {
//   beforeEach(sinon.restore);
//   describe('Tasks', () => {
//     it('create db fail', () => {
//       sinon.stub(connection, 'execute').rejects();
//       expect(createTasks()).to.be.false();
//     });
//     it('create db ok');
//   });
// });

const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const { beforeEach, it, describe } = require('mocha');
const { expect } = require('chai');
const model = require('../../models/Tasks');
const app = require('../../app');

chai.use(chaiHttp);

describe('testar a entidade Tasks', () => {
  beforeEach(sinon.restore);

  it('testa se a função getAllTasks retorna os dados corretos do banco', async () => {
    sinon.stub(model, 'getAllTasks').resolves([{ id: 2, tasks: 'testTasks', completed: true }]);
    const response = await chai.request(app).get('/tasks');
    expect(response.status).to.be.equal(200);
    expect(response.body)
      .to.be.eql([{ id: 2, tasks: 'testTasks', completed: true }]);
  });
  it('testa se a função createTasks', async () => {
    sinon.stub(model, 'createTasks').resolves({ id: 2, tasks: 'testTasks', completed: false });
    const response = await chai.request(app).post('/tasks');
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.eql({ id: 2, tasks: 'testTasks', completed: false });
  });
});
