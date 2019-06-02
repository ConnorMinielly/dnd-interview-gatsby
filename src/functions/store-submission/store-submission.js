require('./mongo-db');

const Airtable = require('airtable');
const { promisify } = require('util');
const Submissions = require('./submission-model');

const table = new Airtable({ apiKey: process.env.AIRTABLE_KEY }).base('appYlBigh8JLPiFF1');
const createPlayer = promisify(table('Players').create.bind(table));
// event, context, callback
exports.handler = async (event) => {
  const player = JSON.parse(event.body);
  try {
    await Submissions.create({ ...player });
    await createPlayer({
      Description: player.description,
      Name: player.name,
      Class: player.class,
      Specialties: player.specialties,
      Role: player.role,
      Achievement: player.achievement,
      Scenario: player.scenario,
    });
    console.log('Submission executed!');
    return {
      statusCode: 200,
      body: JSON.stringify({
        title: 'Letter Submitted',
        message: "We'll be in touch soon adventurer.",
        success: true,
      }),
    };
  } catch (err) {
    console.log("Can't execute submission.");
    if (err.code === 11000) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          title: 'Submit Failed',
          message:
            "Wait...We've already interviewed someone with this Name! Are you sure we haven't seen you before?",
          success: false,
        }),
      };
    }
    return {
      statusCode: 500,
      body: JSON.stringify({
        title: 'Submit Failed',
        message: `Sometimes bad things happen... this is one of those times. Reason: ${
          err.errors.description.message
        }`,
        success: false,
      }),
    };
  }
};
