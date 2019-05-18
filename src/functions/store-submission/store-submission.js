require('./mongo-db');
const Submissions = require('./submission-model');

// event, context, callback
exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  try {
    await Submissions.create({ ...data });
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
