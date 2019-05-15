require('./mongo-db');
const Submissions = require('./submission-model');

exports.handler = async (event, context, callback) => {
  console.log('Trying thing.');
  const data = JSON.parse(event.body);
  try {
    await Submissions.create({ ...data });
    console.log('Submission executed!');
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Fuckin workin',
      }),
    };
  } catch (err) {
    console.log("Can't execute submission.");
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Naht Fuckin workin',
      }),
    };
  }
};
