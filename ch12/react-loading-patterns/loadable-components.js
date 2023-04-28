import loadable from '@loadable/component';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ErrorBoundary from './ErrorBoundary';


const EmojiPicker = loadable(
  () => import('./EmojiPicker'), {
    fallback: <div>Loading...</div>
  }
);

const Channel = () => {
  // ...
  return (
    <ErrorBoundary>
      <div>
        <MessageList />
        <MessageInput />
        {emojiPickerOpen && (
          <EmojiPicker />
        )}
      </div>
    </ErrorBoundary>
  );
};