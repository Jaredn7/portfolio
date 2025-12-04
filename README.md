# Portfolio

A playful, premium portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Warm, playful design** - Cream backgrounds, dark contrast sections, serif headlines
- ✨ **AI-powered greetings** - Personalized greetings using OpenAI GPT-5.1
- 🎭 **Interactive elements** - Magnetic buttons, tilt cards, scroll-triggered animations
- 📱 **Fully responsive** - Optimized for all screen sizes
- 🚀 **Vercel-ready** - Deploy with one click

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Personalized Greetings

The hero section features AI-generated personalized greetings. You can customize the greeting by adding URL parameters:

- `?from=linkedin` - Source of the visitor
- `?company=Google` - Company name
- `?role=frontend` - Role type
- `?name=Sarah` - Visitor's name
- `?team=payments` - Specific team

Example: `yoursite.com?from=linkedin&company=Stripe&role=frontend`

## Customization

### Content

Update the placeholder content in:
- `components/Hero.tsx` - Headline and tagline
- `components/About.tsx` - Bio and stats
- `components/Projects.tsx` - Project details
- `components/Skills.tsx` - Skills and technologies
- `components/Experience.tsx` - Work history
- `components/Contact.tsx` - Social links and contact info

### Colors

Edit the color palette in `app/globals.css`:

```css
:root {
  --cream: #FDF8F3;
  --coral: #FF7F6E;
  --lilac: #C4B5E0;
  /* ... */
}
```

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

Don't forget to add your `OPENAI_API_KEY` environment variable in Vercel's project settings.

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [OpenAI](https://openai.com/) - AI greetings

## License

MIT

