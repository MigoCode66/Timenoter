import AppNavbar from './components/appNavbar';
import Chat from './components/chat';
import ChatInput from './components/chatInput';
import ShehuleContextProvider from './createingShehuleContext';
export default function Home() {
  // Show a loading state while authentication is being checked
  return (
    <ShehuleContextProvider>
      <div className="MainPage">
        <AppNavbar />
        <ChatInput />
        <Chat />
      </div>
    </ShehuleContextProvider>
  );
}
