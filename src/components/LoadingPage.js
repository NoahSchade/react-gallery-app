import React from 'react';
import LoadingPage from './LoadingPage.gif';

const Loading = (props) => {
  return (
    <img src={LoadingPage} alt='' style={{height: "200px"}}></img>
  );
}

export default Loading;