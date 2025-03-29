import AppNavbar from './components/appNavbar';
import Chat from './components/chat';
import ChatInput from './components/chatInput';

export default function Home() {
  return (
    <div className="MainPage">
      <AppNavbar />
      <ChatInput />
      <Chat />
    </div>
  );
}
