import React from 'react';
import styled from 'styled-components';

const StyledDesc = styled.div`
  font-family: Merriweather;
  font-size: 1.25em;
`;

const EditorNote = styled.span`
  font-style: italic;
  color: #ff7f50;
`;

const Description = () => {
  return (
    <StyledDesc>
      <h2>Job Description</h2>
      <hr />
      <h3>Agent of the Guild of Fetchers and Finders, Junior</h3>
      <p>
        &emsp; As a member of the Guild of Fetchers and Finders (the{' '}
        <strong>GFF</strong>) you will be responsible for going out into the
        world to retrieve all manner of artifacts and items of great magical and
        historical import. You will work alongside a small field team of other
        agents, a group assembled based on a synergy of talents and
        personalities. Probably anyway, sometimes they're just a bunch of other
        jackasses who's teams got killed{' '}
        <EditorNote>
          [EDITORS NOTE: Roger remove this immediately before the letter gets
          sent out, and see me in my office]
        </EditorNote>
        . You will also delve into the <em>Outer Exhibits</em> of The Museum,
        fetching relics which are pertinent to modern research. Agents will be
        asked to:
      </p>
      <ul>
        <li>Take an interest in magical artifacts, cultures, and history.</li>
        <li>
          Discourse, sometimes physically, with unlicensed grave robbers and
          competing Gallery Agents.
        </li>
        <li>Explore forgotten ruins, citadels, and crypts.</li>
        <li>
          Identify and "preserve" WMDs (Weapons of Magical Destruction) that may
          be in the hands of uncivilized groups who may not be entirely aware of
          their... historic value.{' '}
          <EditorNote>
            [EDITORS NOTE: Roger, dammit, get rid of the quotes around preserve,
            we ARE preserving the items. Sometimes preserving and stealing look
            very similar from a distance of course but I can't help it if you
            have poor eyesight.]{' '}
          </EditorNote>
        </li>
        <li>
          Assist the animal Archivists and the Guild in cleaning and organizing
          The Museum/defending it from interplaner thieves.
        </li>
        <li>
          Visiting and recording wondrous locations for our periodical, Nat'geo
        </li>
        <li>
          Developing and leading research projects, expeditions, and
          reclamations.
        </li>
        <li>And many other tasks...</li>
      </ul>
    </StyledDesc>
  );
};

export default Description;
