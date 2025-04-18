'use client';
import { LineShadowText } from '@/components/magicui/line-shadow-text';
import { useContext } from 'react';
import { shehuleContext, Task } from '../createingShehuleContext';
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon, X } from 'lucide-react';
const Chat = () => {
  const [addTask, setAddTask] = useContext(shehuleContext) as [
    Task[] | null,
    React.Dispatch<React.SetStateAction<Task[] | null>>
  ];
  return (
    <div className="Chat">
      <h1 className="text-center">
        Welcome to time <LineShadowText>schedule</LineShadowText>
      </h1>
      <div className="absolute"></div>
      
        <Card className="w-[600px] shadow-lg shadow-indigo-500/50 border-[2px] border-indigo-500/50">
          <CardHeader>
            <CardTitle>Your ai genereted shehule</CardTitle>
            <CardDescription>
              check if ai added your task corectly
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-[10px]">
            <ul className="flex flex-col gap-[10px]">
              {addTask?.map((obj) => {
                return (
                  <li
                    key={obj.task}
                    className="flex justify-between items-center border-t-[2px] border-t-indigo-500/50 pt-[10px]"
                  >
                    <p className="w-[163px]">{obj.task}</p>
                    <div className="flex items-center gap-[5px]">
                      <p>from</p>
                      <Input
                        className="w-[90px]"
                        defaultValue={obj['time-start']}
                      ></Input>
                    </div>
                    <div className="flex items-center gap-[5px]">
                      <p>to</p>
                      <Input
                        className="w-[90px]"
                        defaultValue={obj['time-start']}
                      ></Input>
                    </div>
                    <Button variant="destructive" className="cursor-pointer">
                      Delate <X></X>
                    </Button>
                  </li>
                );
              })}
            </ul>
            <div className="flex border-t-[2px] border-t-indigo-500/50 flex-col pt-[10px]">
              <Button className="bg-indigo-500 cursor-pointer hover:bg-indigo-500/50  ">
                Accept Tasks <CheckCircleIcon></CheckCircleIcon>
              </Button>
            </div>
          </CardContent>
        </Card>

    </div>
  );
};

export default Chat;
