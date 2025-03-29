import { Textarea } from '@heroui/input';

const ChatInput = () => {
  return (
    <div className="ChatInput">
      <Textarea
        className="h-[fit-content] "
        disableAnimation
        classNames={{
          input:
            'resize-none outline-none max-h-30 min-h-[40px] flex align-center',
        }}
        placeholder="Ask your Time Asistant"
      />
    </div>
  );
};

export default ChatInput;
