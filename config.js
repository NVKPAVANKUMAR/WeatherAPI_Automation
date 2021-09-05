const request = require('supertest')('http://api.openweathermap.org');
const expect = require('chai').expect;
const should = require('chai').should();
module.exports = {
  request,
  expect,
};
