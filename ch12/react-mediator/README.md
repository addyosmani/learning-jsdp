## Brief tutorial

The Mediator pattern is useful in situations where you have multiple components that need to communicate with each other, but you want to avoid tight coupling between them. By introducing a mediator, you centralize the communication logic and make your components more reusable and maintainable.

Let's create a simple chat application using React Hooks and the Mediator pattern. The app will have three components: UserList, MessageList, and MessageInput. These components need to communicate with each other, but we'll avoid direct connections by using a mediator.

First, create the mediator - ChatMediator:

```javascript
class ChatMediator {
  constructor() {
    this.components = {};
  }

  register(component) {
    this.components[component.name] = component;
  }

  send(message, from, to) {
    if (to) {
      // Send message to a specific user
      this.components[to].receive(message, from);
    } else {
      // Broadcast message to all users except the sender
      for (const key in this.components) {
        if (this.components.hasOwnProperty(key) && key !== from) {
          this.components[key].receive(message, from);
        }
      }
    }
  }
}
```

Create the ChatProvider to share the mediator through the context:

```javascript

import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [mediator] = useState(() => new ChatMediator());
  return (
    <ChatContext.Provider value={mediator}>{children}</ChatContext.Provider>
  );
};
```

Create the UserList component that displays a list of users and highlights the user when a message is received:

```javascript
import React, { useState, useEffect } from "react";
import { useChat } from "./ChatProvider";

const UserList = ({ name }) => {
  const mediator = useChat();
  const [users, setUsers] = useState([]);
  const [highlightedUser, setHighlightedUser] = useState(null);

  useEffect(() => {
    mediator.register({ name, receive });
  }, [mediator, name]);

  const receive = (message, from) => {
    setHighlightedUser(from);
    setTimeout(() => setHighlightedUser(null), 2000);
  };

  const addUser = (username) => {
    setUsers([...users, username]);
  };

  return (
    <div>
      <h3>User List</h3>
      {users.map((user) => (
        <div
          key={user}
          style={{
            fontWeight: highlightedUser === user ? "bold" : "normal",
          }}
        >
          {user}
        </div>
      ))}
      <button onClick={() => addUser(`User${users.length + 1}`)}>
        Add User
      </button>
    </div>
  );
};
```

Create the MessageList component that displays messages:

```javascript
import React, { useState, useEffect } from "react";
import { useChat } from "./ChatProvider";

const MessageList = ({ name }) => {
  const mediator = useChat();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    mediator.register({ name, receive });
  }, [mediator, name]);

  const receive = (message, from) => {
    setMessages([...messages, { from, message }]);
  };

  return (
    <div>
      <h3>Message List</h3>
      {messages.map((msg, idx) => (
        <p key={idx}>
          <strong>{msg.from}: </strong>
          {msg.message}
        </p>
  ))}
</div>
);
};
```


5. Create the MessageInput component that sends messages:

```javascript
import React, { useState, useEffect } from "react";
import { useChat } from "./ChatProvider";

const MessageInput = ({ name }) => {
  const mediator = useChat();
  const [message, setMessage] = useState("");

  useEffect(() => {
    mediator.register({ name, receive });
  }, [mediator, name]);

  const receive = (message, from) => {};

  const sendMessage = () => {
    mediator.send(message, name);
    setMessage("");
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
```

Finally, use the components in your main App component:

```javascript
import React from "react";
import { ChatProvider } from "./ChatProvider";
import UserList from "./UserList";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const App = () => {
  return (
    <ChatProvider>
      <UserList name="UserList" />
      <MessageList name="MessageList" />
      <MessageInput name="MessageInput" />
    </ChatProvider>
  );
};

export default App;
```

In this example, the ChatMediator class acts as a mediator that allows communication between the components without direct connections. Each component registers itself to the mediator using the register method, and sends messages to other components using the send method. The mediator handles the message routing and calls the receive method on the target components. We use the ChatProvider component to pass the mediator through the context so that all components have access to it.

This design allows you to easily add, remove or modify components without affecting the communication between them. The components are more reusable and maintainable because they don't have any direct dependencies on each other.