import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface GreetingContext {
  from?: string;
  company?: string;
  role?: string;
  name?: string;
  team?: string;
  timeOfDay: string;
  dayOfWeek: string;
  device?: string;
  browser?: string;
  os?: string;
  darkMode?: boolean;
  returningVisitor?: boolean;
  timezone?: string;
}

function getTimeOfDay(): string {
  const hour = new Date().getHours();
  if (hour < 5) return "late night";
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  if (hour < 21) return "evening";
  return "night";
}

function getDayOfWeek(): string {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[new Date().getDay()];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const context: GreetingContext = {
      ...body,
      timeOfDay: getTimeOfDay(),
      dayOfWeek: getDayOfWeek(),
    };

    const systemPrompt = `You are a friendly, warm, and slightly witty assistant generating personalized greetings for a software developer's portfolio website. Keep greetings SHORT (under 20 words), warm, and professional yet playful. Don't use emojis. Don't be cheesy. Be genuine and clever.`;

    let userPrompt = `Generate a personalized greeting for someone visiting my portfolio. Here's the context:
- Time: ${context.timeOfDay} on ${context.dayOfWeek}`;

    if (context.from) userPrompt += `\n- They came from: ${context.from}`;
    if (context.company) userPrompt += `\n- They're from company: ${context.company}`;
    if (context.role) userPrompt += `\n- They're interested in: ${context.role} role`;
    if (context.name) userPrompt += `\n- Their name is: ${context.name}`;
    if (context.team) userPrompt += `\n- Specific team: ${context.team}`;
    if (context.device) userPrompt += `\n- Device: ${context.device}`;
    if (context.browser) userPrompt += `\n- Browser: ${context.browser}`;
    if (context.os) userPrompt += `\n- OS: ${context.os}`;
    if (context.darkMode) userPrompt += `\n- They prefer dark mode`;
    if (context.returningVisitor) userPrompt += `\n- They've visited before`;
    if (context.timezone) userPrompt += `\n- Timezone: ${context.timezone}`;

    userPrompt += `\n\nGenerate just the greeting text, nothing else. Make it feel personal and memorable.`;

    const response = await openai.chat.completions.create({
      model: "gpt-5.1-2025-11-13",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 60,
      temperature: 0.8,
    });

    const greeting = response.choices[0]?.message?.content?.trim() || "Welcome to my portfolio.";

    return NextResponse.json({ greeting });
  } catch (error) {
    console.error("Greeting API error:", error);
    
    // Fallback greeting based on time
    const hour = new Date().getHours();
    let fallback = "Welcome to my portfolio.";
    if (hour < 12) fallback = "Good morning! Welcome to my portfolio.";
    else if (hour < 17) fallback = "Good afternoon! Glad you're here.";
    else fallback = "Good evening! Thanks for stopping by.";
    
    return NextResponse.json({ greeting: fallback });
  }
}

