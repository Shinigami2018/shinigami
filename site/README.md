# Personal Portfolio Website

A modern, responsive personal website built with Next.js, React, and Tailwind CSS.

## Features

- **Modern Design** - Clean and professional layout with dark mode support
- **Responsive** - Mobile-first design that works on all devices
- **Fast Performance** - Built with Next.js for optimal speed and SEO
- **TypeScript** - Type-safe development for better code quality
- **Easy Customization** - Simple to update content and styling

## Tech Stack

- [Next.js 16.1.6](https://nextjs.org) - React framework for production
- [React 19.2.3](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS
- [ESLint](https://eslint.org) - Code quality tools

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

### Customization

Edit the following files to customize your website:

- **Homepage Content**: `src/app/page.tsx`
- **Site Metadata**: `src/app/layout.tsx`
- **Global Styles**: `src/app/globals.css`
- **Tailwind Config**: `tailwind.config.ts`

### File Structure

```
src/
├── app/
│   ├── page.tsx       - Homepage with all sections
│   ├── layout.tsx     - Root layout and metadata
│   └── globals.css    - Global styles
public/               - Static assets (images, etc.)
```

## Sections

- **Hero**: Welcome message and call-to-action buttons
- **About**: Brief biography section
- **Work**: Featured projects grid
- **Contact**: Contact information and social links
- **Navigation**: Smooth scroll navigation

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com), the creators of Next.js:

1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically build and deploy

### Other Deployment Options

- Netlify
- AWS Amplify
- DigitalOcean
- Any Node.js hosting provider

See [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) for detailed instructions.

## Next Steps

1. Update your name and contact information in `src/app/page.tsx`
2. Add your project descriptions and links
3. Add your project images to the `public/` directory
4. Customize the color scheme in `tailwind.config.ts`
5. Update metadata in `src/app/layout.tsx`
6. Deploy to your hosting platform

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/learn)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is open source and available under the MIT License.

