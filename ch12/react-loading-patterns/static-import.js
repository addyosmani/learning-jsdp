/*
    Static Import
    - Importing a module at the top of a file
    - The module is loaded when the file is parsed
    - The module is available immediately 
*/
import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import EmojiPicker from './EmojiPicker';

const Channel = () => {
  // ...
  return (
    <div>
      <MessageList />
      <MessageInput />
      {emojiPickerOpen && <EmojiPicker />}
    </div>
  );
};