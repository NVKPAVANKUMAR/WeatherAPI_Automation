const { request, expect } = require('../config');
var destination = 'Sydney';
var dayOfTheWeek = 'Thursday';
var getDayOfWeek = require('../utils/getdayfromdate');
require('dotenv').config();

describe('A happy holidaymaker', function () {
  it('like to holiday in sydney', function (done) {
    request
      .get(
        '/data/2.5/forecast?q=' + destination + '&appid=' + process.env.appid
      )
      .set('Accept', 'application/x-www-form-urlencoded')
      .expect('Content-Type', /json/)
      .expect(200) // The response is valid JSON
      .end(function (err, response) {
        if (err) return done(err);
        response.status.should.equal(200);
        expect(response.body.city.name).to.equal(destination); // Verifying whether city is Sydney or not
        done();
      });
  });

  it('like to holiday on Thursdays and the temperature is warmer than 10 degrees', function (done) {
    request
      .get(
        '/data/2.5/forecast?q=' +
          destination +
          '&appid=' +
          process.env.appid +
          '&units=metric'
      )
      .set('Accept', 'application/x-www-form-urlencoded')
      .expect('Content-Type', /json/)
      .expect(200) // The response is valid JSON
      .end(function (err, response) {
        if (err) return done(err);
        response.status.should.equal(200);
        for (var datesCount = 0; datesCount < response.body.cnt; datesCount++) {
          var date = response.body.list[datesCount].dt_txt.substring(0, 10);
          if (getDayOfWeek(date) == dayOfTheWeek) {
            // Verifying whether any day in the forecast falls on Thursday
            expect(getDayOfWeek(date)).to.equal(dayOfTheWeek);
            dayFound = true;
            break;
          }
        }
        if (dayFound) {
          console.log(
            date +
              'is a Thursday which means forecast has a day which is Thursday'
          );
          // Verifying whether for that day, the temperature is more than 10 degrees
          expect(response.body.list[datesCount].main.temp).to.greaterThan(10);
        }
        done();
      });
  });
});
