// server/index.js
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';

const app = express();

app.get('*', (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  
  res.set('content-type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div id='root'>${html}</div>
      </body>
    </html>
  `);
});
// ...

// client/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement, {
  hydrate: true
}).render(<App />);

// client/App.js
import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

const MessageList = lazy(() => import('./MessageList'));
const MessageInput = lazy(() => import('./MessageInput'));
const EmojiPicker = lazy(() => import('./EmojiPicker'));

const Channel = () => {
  // ...
  return (
    <ErrorBoundary>
      <div>
        <Suspense fallback={<div>Loading MessageList...</div>}>
          <MessageList />
        </Suspense>
        <Suspense fallback={<div>Loading MessageInput...</div>}>
          <MessageInput />
        </Suspense>
        {emojiPickerOpen && (
          <Suspense fallback={<div>Loading EmojiPicker...</div>}>
            <EmojiPicker />
          </Suspense>
        )}
      </div>
    </ErrorBoundary>
  );
};

const App = () => (
  <div>
    // ...
    <Channel />
  </div>
);
// ...