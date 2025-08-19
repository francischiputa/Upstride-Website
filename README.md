# Upstride Tradez Limited Website

A modern, responsive Next.js website for Upstride Tradez Limited - your trusted partner in office solutions, technology, and sustainable energy.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach with full responsiveness
- 🎠 Interactive hero carousel with auto-play
- 🏢 Comprehensive business sections (About, Products, Projects, Contact)
- ⚡ Built with Next.js 14 and Tailwind CSS v4
- 🎯 SEO optimized with proper meta tags
- 🔧 TypeScript for type safety
- 🎭 Smooth scrolling navigation
- 📦 Component-based architecture

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone or download this project
2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and Tailwind configuration
├── components/
│   ├── ui/                 # Reusable UI components (shadcn/ui)
│   ├── navigation.tsx      # Main navigation component
│   ├── hero-carousel.tsx   # Hero section with carousel
│   ├── about-section.tsx   # About us section
│   ├── products-section.tsx # Products showcase
│   ├── projects-section.tsx # Projects and capabilities
│   ├── contact-section.tsx  # Contact information and form
│   └── footer.tsx          # Site footer
├── public/
│   └── images/             # Static images and assets
├── lib/
│   └── utils.ts            # Utility functions
└── hooks/                  # Custom React hooks
\`\`\`

## Customization

### Colors and Styling
- Edit `app/globals.css` to modify the color scheme
- The project uses Tailwind CSS v4 with custom CSS variables
- Colors are defined using OKLCH color space for better consistency

### Content
- Update company information in the respective component files
- Replace placeholder images in the `public/images/` directory
- Modify contact information in `components/contact-section.tsx`

### Fonts
- The project uses Inter and Source Sans 3 from Google Fonts
- Font configuration is in `app/layout.tsx`

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Embla Carousel** - Carousel functionality
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## License

This project is private and proprietary to Upstride Tradez Limited.

## Support

For support or questions about this website, please contact:
- Email: info@upstridetradez.com
- Phone: +123-456-7890
