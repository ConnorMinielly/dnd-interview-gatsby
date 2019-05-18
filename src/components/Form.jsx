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
    border: 1px solid black;
  }
  select {
    font-size: 1em;
    background: white;
  }
  textarea {
    font-size: 1em;
    min-height: 7em;
  }
  input[type="submit"] {
    font-size: 1.2em;
    background: lavender;
    border: none;
  }
  label {
    display: flex;
    flex-direction: column;
    border: none;
  }
`;

const EditorNote = styled.span`
  font-style: italic;
  color: #ff7f50;
`;

const Submit = async (data, setOverlay, setMessage) => {
  const { values } = data;
  const response = await fetch('/.netlify/functions/store-submission', {
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  const res = await response.json();
  window.scrollTo(0, 0);
  if (res.success === true) {
    data.clear();
  }
  setMessage({
    message: res.message,
    title: res.title,
  });
  setOverlay(true);
};

const Form = () => {
  const [data, { text, select, textarea }] = useFormState({ class: 'Barbarian' });
  const [hasOverlay, setOverlay] = useState(false);
  const [message, setMessage] = useState({
    message: 'Give us a sec to ensorcell the envelope.',
    title: 'Prepping Letter...',
  });
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  return (
    <>
      {!hasOverlay ? (
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            Submit(data, setOverlay, setMessage);
          }}
        >
          <h2>The Acquisition Inquisition</h2>

          <label htmlFor="name">
            Please list your full name for the record:
            <input name="name" id="name" {...text('name')} />
          </label>

          <label htmlFor="class">
            What is your martial classification?
            <select name="class" value="Barbarian" {...select('class')}>
              <option>Barbarian</option>
              <option>Bard</option>
              <option>Blood Hunter</option>
              <option>Cleric</option>
              <option>Druid</option>
              <option>Fighter</option>
              <option>Monk</option>
              <option>Paladin</option>
              <option>Ranger</option>
              <option>Rouge</option>
              <option>Sorcerer</option>
              <option>Warlock</option>
              <option>Wizard</option>
              <option>Artificer</option>
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
            tribe of Froglurker Cannibals, to &quot;preserve&quot; the culture of this beautiful,
            secluded peoples. This has the handy side benefit of stopping them from summoning the
            Bone Tornado. As you make an expeditious retreat through the forest from a group of well
            meaning Froglurkers (who have misunderstood the beneficial nature of your important work
            and would now like to incorporate your entrails in some charming cultural pieces), your
            companion who is carrying the Corpse Cross falls. What do you do?
            <textarea name="scenario" id="scenario" {...textarea('scenario')} />
          </label>
          <input type="submit" value="Send Via Magical Kiosk Clerk" />
        </StyledForm>
      ) : (
        <Portal>
          <Overlay
            onClick={() => {
              setOverlay(false);
              setMessage({
                message: 'Give us a sec to ensorcell the envelope.',
                title: 'Prepping Letter...',
              });
            }}
          >
            <SubmittedText style={props}>{message.title}</SubmittedText>
            <SubmittedSubText>{message.message}</SubmittedSubText>
          </Overlay>
        </Portal>
      )}
    </>
  );
};

export default Form;
