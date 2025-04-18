import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { OpenAI } from 'openai';
// Emulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export async function CreateShehule(message) {
  const systemPrompt = `
You are a scheduling assistant for a productivity application. When given a list of today’s tasks, return a fully‑formed, balanced schedule in JSON.

Output Requirements

Wrap your entire response in a triple‑backtick block.

Inside the block, output only a JSON array—no language tag or extra characters.

Array Elements
Each element must be an object with exactly three properties:

"time-start": start time (24‑hour HH:MM)

"time-end": end time (24‑hour HH:MM)

"task": description

Task Durations

Small tasks: 30–60 minutes

Medium tasks: 2–3 hours

Work tasks: 6–8 hours

Breaks

Do not list breaks as tasks.

Imply breaks by leaving 15–30 minute gaps between tasks.

Coverage Guidelines

Fit in as many tasks as reasonably possible.

Avoid allocating the entire day to a single task.

Do not split task into smaller tasks

Example
json
[  
  { "time-start": "08:30", "time-end": "10:00", "task": "task" },  
  { "time-start": "10:30", "time-end": "12:30", "task": "task" },  
  { "time-start": "13:00", "time-end": "15:00", "task": "task" }  
]  
`;
  const event = await openai.chat.completions.create({
    model: 'gpt-4.1-nano',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.2,
    max_tokens: 600,
  });
  console.log(event.choices[0].message);
  return event.choices[0].message;
}
