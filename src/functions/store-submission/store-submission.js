require('./mongo-db');
const Submissions = require('./submission-model');

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  try {
    await Submissions.create({ ...data });
    console.log('Submission executed!');
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "We'll be in touch soon adventurer.",
        success: true,
      }),
    };
  } catch (err) {
    console.log("Can't execute submission.");
    console.log(err);
    if (err.code === 11000) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message:
            "Wait...We've already interviewed someone with this Name! Are you sure we haven't seen you before?",
          success: false,
        }),
      };
    }
    return {
      statusCode: 500,
      error: JSON.stringify(err),
    };
  }
};
