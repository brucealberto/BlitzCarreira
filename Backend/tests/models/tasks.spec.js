const { expect } = require('chai');
const { describe, it, beforeEach } = require('mocha');
const sinon = require('sinon');
const connection = require('../../models/connection');
const { createTasks } = require('../../models/Tasks');

describe('Model test', () => {
  beforeEach(sinon.restore);
  describe('Tasks', () => {
    it('create db fail', () => {
      sinon.stub(connection, 'execute').rejects();
      expect(createTasks()).to.be.false();
    });
    it('create db ok');
  });
});
