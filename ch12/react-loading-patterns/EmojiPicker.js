import React from 'react';

const EmojiPicker = ({ onSelectEmoji }) => {
  const emojis = ['😀', '😂', '😍', '🥰', '😘', '🤔', '🙄', '😒', '😎', '🥳'];

  return (
    <div>
      {emojis.map((emoji, index) => (
        <button
          key={index}
          onClick={() => onSelectEmoji(emoji)}
          style={{ border: 'none', background: 'transparent', fontSize: '1.5em', cursor: 'pointer' }}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default EmojiPicker;
