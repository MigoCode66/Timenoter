'use server';

import { getUser } from './Data/user';
import React from 'react';
import { CreateShehule } from '../../openAi/Index';

export async function createEvent(inputedData: string) {
  const user = await getUser();

  // Ensure the user has the correct role
  if (user.role !== 'admin') {
    console.error('Unauthorized: User is not an admin');
    return;
  }

  try {
    // Call CreateShehule and handle the response
    const schedule = await CreateShehule(inputedData);
    if (schedule.content !== null) {
      if (
        JSON.parse(schedule.content.replace('json\n', '') as string)
          .schedule !== undefined
      ) {
        return JSON.parse(schedule?.content.replace('json\n', '') as string)
          .schedule;
      } else if (
        JSON.parse(schedule?.content.replace('json\n', '') as string).tasks !==
        undefined
      ) {
        console.log('i');
        return JSON.parse(schedule?.content.replace('json\n', '') as string)
          .tasks;
      } else {
        return JSON.parse(schedule?.content.replace('json\n', '') as string);
      }
    } else {
      return JSON.parse(
        schedule?.refusal?.replace('json\n', '').replace('```', '') as string
      );
    } // Return the parsed schedule
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
}
