import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useFormState } from 'react-use-form-state';
import axios from 'axios';

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
    min-height: 6em;
  }
  button {
    font-size: 1em;
  }
`;

const EditorNote = styled.span`
  font-style: italic;
  color: #ff7f50;
`;

const Submit = async data => {
  const { values } = data;
  try {
    await axios.post('/.netlify/functions/store-submission', values);
  } catch (err) {
    console.log('Submission failed');
    console.log(err);
  }
};

const Form = () => {
  const [data, { text, select, textarea }] = useFormState();
  useEffect(() => {
    // console.log(data.values);
  });
  return (
    <StyledForm onSubmit={() => Submit(data)}>
      <h2>The Acquisition Inquisition</h2>
      <label htmlFor="name">Please list your full name for the record:</label>
      <input name="name" {...text('name')} />
      <label htmlFor="class">What is your martial classification?</label>
      <select name="class" {...select('class')}>
        <option>Bard</option>
        <option>Barbarian</option>
      </select>
      <label htmlFor="description">
        Describe yourself (Race, gender, likes, dislikes, general aesthetic,
        what kind of underwear you're wearing, etc):
        <EditorNote>
          {' '}
          [EDITORS NOTE: Christ Roger, I know this have been lonely since
          Capricia left but you really can't hit on new hires in the bloody
          Acquisition letter. Obviously clean this up!]
        </EditorNote>
      </label>
      <textarea name="description" {...textarea('description')} />
      <label htmlFor="specialties">
        Specify your academic specialties/areas of prowess (Archeology, geology,
        ancient languages, slaying crypt-stalkers, etc):
      </label>
      <textarea name="specialties" {...textarea('specialties')} />
      <label htmlFor="role">
        What role do you see yourself taking in a field team?
      </label>
      <textarea name="role" {...textarea('role')} />
      <label htmlFor="achievement">
        What achievement are you most proud of? How do you hope to match or
        exceed it in the future?
      </label>
      <textarea name="achievement" {...textarea('achievement')} />
      <label htmlFor="scenario">
        <strong>Scenario:</strong> Your team and you are sent to retrieve the
        Corpse Cross of a tribe of Froglurker Cannibals, to "preserve" the
        culture of this beautiful, secluded peoples. This has the handy side
        benefit of stopping them from summoning the Bone Tornado. As you make an
        expeditious retreat through the forest from a group of well meaning
        Froglurkers (who have misunderstood the beneficial nature of your
        important work and would now like to incorporate your entrails in some
        charming cultural pieces), your companion who is carrying the Corpse
        Cross falls. What do you do?
      </label>
      <textarea name="scenario" {...textarea('scenario')} />
      <button type="submit">Send Via Magical Kiosk Clerk</button>
    </StyledForm>
  );
};

export default Form;
