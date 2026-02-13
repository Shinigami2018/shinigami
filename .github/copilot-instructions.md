# Personal Website - Next.js Project

## Project Overview
This is a Next.js personal portfolio website built with:
- **Next.js 16.1.6** - React framework for production
- **React 19.2.3** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code quality and style enforcement

## Project Structure
```
src/
├── app/
│   ├── layout.tsx      - Root layout with metadata
│   ├── page.tsx        - Home page with hero, about, work, and contact sections
│   └── globals.css     - Global styles and Tailwind configuration
└── ...
public/                 - Static assets
package.json            - Dependencies and scripts
tsconfig.json           - TypeScript configuration
tailwind.config.ts      - Tailwind CSS configuration
next.config.ts          - Next.js configuration
```

## Available Scripts
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Development Guidelines

### Customization
1. Update navigation links in [src/app/page.tsx](src/app/page.tsx#L35)
2. Edit the About section in [src/app/page.tsx](src/app/page.tsx#L76)
3. Replace placeholder project cards in [src/app/page.tsx](src/app/page.tsx#L86)
4. Update contact information in [src/app/page.tsx](src/app/page.tsx#L114)
5. Change site metadata in [src/app/layout.tsx](src/app/layout.tsx#L15)

### Adding Pages
- Create new files in `src/app/` directory (e.g., `src/app/blog/page.tsx`)
- Use the App Router structure for automatic routing
- Update navigation in the header component as needed

### Styling
- All styles use Tailwind CSS with dark mode support
- Responsive design with breakpoints: `sm`, `md`, `lg`, `xl`
- Color scheme uses slate with dark mode variants

### Images & Assets
- Place images in the `public/` directory
- Import using Next.js Image component for optimization

## Deployment
Ready to deploy to Vercel, Netlify, or any Node.js hosting:
- Build: `npm run build`
- Start: `npm start`

## Next Steps
1. Customize the homepage content in [src/app/page.tsx](src/app/page.tsx)
2. Update site metadata and branding
3. Add your project images and descriptions
4. Configure your contact information
5. Deploy to your preferred hosting platform
