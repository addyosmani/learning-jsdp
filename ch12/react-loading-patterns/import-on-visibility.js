import React from 'react';
import loadableVisibility from 'react-loadable-visibility/loadable-components';
import MessageList from './MessageList';
import MessageInput from './MessageInput';


const GifFinder = loadableVisibility(
  () => import('./GifFinder'), {
    fallback: <div>Loading...</div>
  }
);

const Channel = () => {
  // ...
  return (
    <div>
      <MessageList />
      <MessageInput />
      <GifFinder />
    </div>
  );
};