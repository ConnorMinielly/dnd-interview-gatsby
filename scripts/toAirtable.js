require('dotenv').config();
require('./mongo-db');
const Airtable = require('airtable');
const Submissions = require('./submission-model');

const table = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base('appYlBigh8JLPiFF1');
(async () => {
  const players = await Submissions.find({}).exec();
  // eslint-disable-next-line no-restricted-syntax
  for (const player of players) {
    const data = {
      Description: player.description,
      Name: player.name,
      Class: player.class,
      Specialties: player.specialties,
      Role: player.role,
      Achievement: player.achievement,
      Scenario: player.scenario,
    };
    table('Players').create(data, (err, res) => {
      if (err) console.log(err);
      else console.log('Success');
    });
  }
})();
