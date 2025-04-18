'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React, { useActionState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { singUp } from '../actions_login_register';
const LoginPage = () => {
  const formSchema = z.object({
    email: z.string().min(1, { message: 'required' }).max(50, {
      message: 'Username must be 50 characters or less',
    }),
    username: z.string().min(1, { message: 'required' }).max(50, {
      message: 'Username must be 50 characters or less',
    }),
    password: z.string().min(1, { message: 'required' }).max(50, {
      message: 'Password must be 50 characters or less',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  }); // Initialize the form

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>Create Timenoter account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(singUp)}
              className="flex flex-col gap-[5px]"
            >
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@Timenoter.pl" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />{' '}
              <Button type="submit" className="cursor-pointer">
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href={'/Login'} className="text-sm underline">
            You have account Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
