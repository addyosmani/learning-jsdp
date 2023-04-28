import React, { lazy, Suspense, Component } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';


const EmojiPicker = lazy(() => import('./EmojiPicker'));

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <p>Loading failed! Please reload.</p>;
    }

    return this.props.children;
  }
}

const Channel = () => {
  // ...
  return (
    <ErrorBoundary>
      <div>
        <MessageList />
        <MessageInput />
        {emojiPickerOpen && (
          <Suspense fallback={<div>Loading...</div>}>
            <EmojiPicker />
          </Suspense>
        )}
      </div>
    </ErrorBoundary>
  );
};