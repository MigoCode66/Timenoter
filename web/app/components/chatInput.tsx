'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@heroui/input';
import { SendHorizonal } from 'lucide-react';
import {
  FormEvent,
  KeyboardEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createEvent } from '../actions';
import { shehuleContext } from '../createingShehuleContext';
import { Task } from '../createingShehuleContext';
const ChatInput = () => {
  const [shehule, setShehule] = useContext(shehuleContext) as [
    Task[] | null,
    React.Dispatch<React.SetStateAction<Task[] | null>>
  ];
  const [value, setValue] = useState('');

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const Value = value;
    setValue('');
    const event = await createEvent(Value);

    if (event) {
      setShehule(event);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent adding a new line
      const form = e.currentTarget.closest('form') as HTMLFormElement;
      form?.requestSubmit(); // Programmatically submit the form
    }
  };

  return (
    <form className="ChatInput flex items-center" onSubmit={submitHandler}>
      <Textarea
        className="shadow-2xl resize-none rounded-sm"
        classNames={{
          input: 'resize-none outline-none h-auto w-[500px] min-h-[72px] ', // Removed padding here
        }}
        placeholder="Ask your Time Assistant"
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        className="w-[50px] h-[50px]  rounded-sm cursor-pointer"
        type="submit"
      >
        <SendHorizonal size={16} />
      </Button>
    </form>
  );
};

export default ChatInput;
