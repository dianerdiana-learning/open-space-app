import LoadingBarContainer, {
  LoadingBar,
} from '@dimasmds/react-redux-loading-bar';
import React from 'react';

function Loading() {
  return (
    <div className='loading'>
      <LoadingBarContainer>
        <LoadingBar />
      </LoadingBarContainer>
    </div>
  );
}

export default Loading;
