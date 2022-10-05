import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName="ann"
        userSecret={process.env.REACT_APP_USER_SECRET}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
