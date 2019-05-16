import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFormState } from 'react-use-form-state';
import { Portal } from 'react-portal';
import { useSpring } from 'react-spring';
import Overlay, { SubmittedText, SubmittedSubText } from './Overlay';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-family: Merriweather;
  font-size: 1.25em;
  label,
  input,
  select,
  textarea {
    line-height: 1.25em;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
    min-height: 2em;
  }
  select {
    font-size: 1em;
  }
  textarea {
    font-size: 1em;
    min-height: 7em;
  }
  input[type="submit"] {
    font-size: 1em;
  }
  label {
    display: flex;
    flex-direction: column;
  }
`;

const EditorNote = styled.span`
  font-style: italic;
  color: #ff7f50;
`;

const Submit = async (data, setSubmitted) => {
  const { values } = data;
  try {
    const { res } = await fetch('/.netlify/functions/store-submission', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    window.scrollTo(0, 0);
    data.clear();
    setSubmitted(true);
    console.log(res.json().message);
  } catch (err) {
    console.log('Submission failed');
    console.log(err);
  }
};

const Form = () => {
  const [data, { text, select, textarea }] = useFormState();
  const [submitted, setSubmitted] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  useEffect(() => {
    // console.log(data.values);
  });
  return (
    <>
      {!submitted ? (
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            Submit(data, setSubmitted);
          }}
        >
          <h2>The Acquisition Inquisition</h2>

          <label htmlFor="name">
            Please list your full name for the record:
            <input name="name" id="name" {...text('name')} />
          </label>

          <label htmlFor="class">
            What is your martial classification?
            <select name="class" {...select('class')}>
              <option>Bard</option>
              <option>Barbarian</option>
            </select>
          </label>

          <label htmlFor="description">
            Describe yourself (Race, gender, likes, dislikes, general aesthetic, what kind of
            underwear you're wearing, etc):
            <EditorNote>
              {' '}
              [EDITORS NOTE: Christ Roger, I know this have been lonely since Capricia left but you
              really can't hit on new hires in the bloody Acquisition letter. Obviously clean this
              up!]
            </EditorNote>
            <textarea name="description" {...textarea('description')} />
          </label>

          <label htmlFor="specialties">
            Specify your academic specialties/areas of prowess (Archeology, geology, ancient
            languages, slaying crypt-stalkers, etc):
            <textarea name="specialties" {...textarea('specialties')} />
          </label>

          <label htmlFor="role">
            What role do you see yourself taking in a field team?
            <textarea name="role" {...textarea('role')} />
          </label>

          <label htmlFor="achievement">
            What achievement are you most proud of? How do you hope to match or exceed it in the
            future?
            <textarea name="achievement" {...textarea('achievement')} />
          </label>
          <label htmlFor="scenario">
            <strong>Scenario:</strong> Your team and you are sent to retrieve the Corpse Cross of a
            tribe of Froglurker Cannibals, to "preserve" the culture of this beautiful, secluded
            peoples. This has the handy side benefit of stopping them from summoning the Bone
            Tornado. As you make an expeditious retreat through the forest from a group of well
            meaning Froglurkers (who have misunderstood the beneficial nature of your important work
            and would now like to incorporate your entrails in some charming cultural pieces), your
            companion who is carrying the Corpse Cross falls. What do you do?
            <textarea name="scenario" id="scenario" {...textarea('scenario')} />
          </label>
          <input type="submit" value="Send Via Magical Kiosk Clerk" />
        </StyledForm>
      ) : (
        <Portal>
          <Overlay onClick={() => setSubmitted(false)}>
            <SubmittedText style={props}>Job Submitted</SubmittedText>
            <SubmittedSubText>We'll be in touch soon adventurer.</SubmittedSubText>
          </Overlay>
        </Portal>
      )}
    </>
  );
};

export default Form;
