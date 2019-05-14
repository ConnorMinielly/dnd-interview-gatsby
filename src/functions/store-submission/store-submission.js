require('./mongo-db');
const Submissions = require('./submission-model');

exports.handler = async event => {
  console.log('Trying thing.');
  const data = JSON.parse(event.body);
  try {
    await Submissions.create({ ...data });
    console.log('Submission executed!');
  } catch (err) {
    console.log("Can't execute submission.");
    console.log(err);
  }
};
