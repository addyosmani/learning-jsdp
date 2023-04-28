// server/index.js
import express from 'express';
import React from 'react';
import { ChunkExtractor } from '@loadable/server';
import { renderToNodeStream } from 'react-dom/server';

const app = express();

app.get('*', (req, res) => {
  res.write('<html><head><title>Test</title></head><body>');
  const statsFile = path.resolve('../dist/loadable-stats.json');
  const extractor = new ChunkExtractor({statsFile});
  const jsx = extractor.collectChunks(<App />);
  const stream = renderToNodeStream(jsx);
  
  stream.pipe(res, {end: false});
  stream.on('end', () => 
    res.end(`${chunkExtractor.getScriptTags()}</body></html>`)
  );
});
...

// client/index.js
import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import App from './App';

loadableReady(() => {
  const root = document.getElementById('root');
  hydrate(<App />, root);
});

// client/App.js
import React from 'react';
import loadable from '@loadable/component';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ErrorBoundary from './ErrorBoundary';


const EmojiPicker = loadable(() => import('./EmojiPicker'), {
  fallback: <div>Loading...</div>
});

const Channel = () => {
  ...
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

const App = () => (
  <div>
    ...
    <Channel />
  </div>
);
...