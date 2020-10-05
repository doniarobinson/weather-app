const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// tester should fill a real api key in here
let api_key = 'abc123';

describe("API", () => {
  it("is not authorized", done => {
    chai.request('https://api.openweathermap.org')
      .get("/data/2.5/onecall?lat=41.8781&lon=-87.6298&units=imperial&exclude=minutely&APPID=abc")
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("is authorized", done => {
    chai.request('https://api.openweathermap.org')
      .get(`/data/2.5/onecall?lat=41.8781&lon=-87.6298&units=imperial&exclude=minutely&APPID=${api_key}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it("gets multiple days of temperatures", done => {
    chai.request('https://api.openweathermap.org')
      .get(`/data/2.5/onecall?lat=41.8781&lon=-87.6298&units=imperial&exclude=minutely&APPID=${api_key}`)
      .end((err, res) => {
        expect(Object.keys(res.body.daily)).to.have.lengthOf(8);
        done();
      });
  });
});