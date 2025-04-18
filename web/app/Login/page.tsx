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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { logIn } from '../actions_login_register';

const LoginPage = () => {
  const formSchema = z.object({
    email: z.string().min(1, { message: 'required' }).max(50, {
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
      password: '',
    },
  }); // Initialize the form

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Login in to your Timenoter account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-[5px]"
              onSubmit={form.handleSubmit(logIn)}
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
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href={'/Register'} className="text-sm underline">
            You do not have account Register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
