import React from 'react';
import styled from 'styled-components';
import Signature from '../images/TheCurator.jpg';

const StyledIntro = styled.div`
  display: grid;
  grid-template-rows: fit-content(100%);
  grid-template-areas: "m m" "a i";
  font-family: Merriweather;
  font-size: 1.25em;
`;

const MainBox = styled.div`
  grid-area: m;
`;

const AsideBox = styled.div`
  grid-area: a;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.75em;
  font-style: italic;
  p {
    margin: 0.4em;
  }
`;

const ImgBox = styled.div`
  grid-area: i;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-items: right;
`;

const Intro = () => (
  <StyledIntro>
    <MainBox>
      <p>Hello Adventurers, Researchers, Academics, and Grave Robbers alike!</p>
      <p>
          &emsp; Thank you for expressing an interest In a career with The Museum (The Halls of
          Timelessness, the Records of Zsh'Tilosh, The Spine of History, The Home of the Golden Oak,
          The Artificary, The Keep of Things Past, Pleaz-Luk-Doth-Nay-Touch, M-space, etc...). We
          receive applications from millions of Sentients every year, and many dozens from
          pseudo-sentients. Congratulations on being one of few selected for the second stage of the{' '}
        <em>Acquisition!</em>
      </p>
      <p>
          &emsp; Please Complete this form Promptly and submit it to your nearest Kiosk. Upon
          submission your worth shall be judged, your very soul weighed in an objective measure of
          your usefulness on this Plane and to our Institution. If you are deemed worthy you shall
          be Contacted by an evaluator for a Whiteboard* examination. Pending that a practical "take
          Home" quest shall be issued that can be completed on your own time, followed by admission
          to the <em>Lectury</em> for a brief 6 month course. If you complete the course in the 70th
          percentile you will officially begin your unpaid internship! An exciting and fulfilling
          career with ample benefits and competitive wages awaits the Interns who Impress their
          supervisors!**
      </p>
      <p>History has already happened, so what are YOU waiting for?!</p>
    </MainBox>
    <AsideBox>
      <p>
          *The Whiteboard does not cause lasting damage, only slightly singes the eyes of those in
          possession of wicked hearts, ignore reports the contrary
      </p>
      <p>
          **Those who fail to impress their supervisors will have their minds wiped and be deposited
          at a location chosen at random, as per the Mystical Secrets Act.
      </p>
    </AsideBox>
    <ImgBox>
      <img src={Signature} alt="The Curator" />
    </ImgBox>
  </StyledIntro>
);

export default Intro;
