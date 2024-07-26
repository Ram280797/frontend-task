import React from 'react';
import Buttons from '../Buttons';
import Counter from '../Counter';
import StatusMessage from '../StatusMessage';

function About() {
  return (
   <>
    <div className='container'>
      <h1> About </h1>
      <Buttons/>
      <Counter/>
      <StatusMessage/>
    </div>
   </>
  )
}

export default About