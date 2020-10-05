const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// not ideal to put the API key here, but with more time, I'd set up a proper environment!
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
      .get("/data/2.5/onecall?lat=41.8781&lon=-87.6298&units=imperial&exclude=minutely&APPID=a5d0020f1e0212bc37def4492b2218ba")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it("gets multiple days of temperatures", done => {
    chai.request('https://api.openweathermap.org')
      .get("/data/2.5/onecall?lat=41.8781&lon=-87.6298&units=imperial&exclude=minutely&APPID=a5d0020f1e0212bc37def4492b2218ba")
      .end((err, res) => {
        expect(Object.keys(res.body.daily)).to.have.lengthOf(8);
        done();
      });
  });
});