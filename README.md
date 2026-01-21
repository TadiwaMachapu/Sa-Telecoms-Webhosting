# SA Telecoms - Web Hosting Services

A modern, responsive marketing page for SA Telecoms' web hosting services built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with full tablet and desktop support
- **Component-Based Architecture**: Modular, reusable components
- **Accessible**: Semantic HTML with keyboard navigation support
- **Interactive Elements**: Hover dropdowns, mobile menu, floating widgets

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global styles and Tailwind setup
│   ├── page.tsx                # Home page (redirects to web-hosting)
│   └── web-hosting/
│       └── page.tsx            # Main web hosting page
├── components/
│   ├── site/
│   │   ├── TopBar.tsx          # Top contact bar with social links
│   │   ├── Navbar.tsx          # Main navigation with dropdowns
│   │   ├── Footer.tsx          # Footer with YIP banner and links
│   │   └── FloatingWidgets.tsx # WhatsApp, phone, and online badge
│   └── sections/
│       ├── HeroWebHosting.tsx  # Hero section with gradient
│       ├── HowItWorks.tsx      # How it works explanation
│       ├── KeyFeatures.tsx     # 5 feature cards
│       ├── WebsiteDesignBlock.tsx # Blue CTA section
│       └── PricingOptions.tsx  # Pricing card and add-ons
├── data/
│   └── webHostingContent.ts    # All content and configuration
└── public/                     # Static assets (add images here)
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will automatically redirect to `/web-hosting`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Content

All content is centralized in `data/webHostingContent.ts`. Edit this file to update:
- Navigation links and dropdowns
- Hero section text
- Feature cards
- Pricing information
- Footer content

### Styling

The project uses Tailwind CSS with custom color scheme:
- **Primary**: Maroon/Red (#8B1538)
- **Accent Blue**: #1E3A8A
- **Accent Yellow**: #FDB913
- **Dark**: #111111

Modify colors in `tailwind.config.ts`.

### Components

Each component is self-contained and can be customized independently:
- Navbar dropdowns open on hover (desktop) and click (mobile)
- Mobile menu includes hamburger toggle
- Floating widgets are positioned fixed at bottom corners

## Key Sections

1. **Top Bar**: Contact information and social media links
2. **Navigation**: Multi-level dropdown menus with active state
3. **Hero**: Red gradient background with CTA buttons
4. **How It Works**: Explanation with visual grid
5. **Key Features**: 5 cards with icons and hover effects
6. **Website Design Block**: Blue CTA section with yellow button
7. **Pricing**: Card layout with feature list and add-ons
8. **Footer**: YIP app banner and multi-column links
9. **Floating Widgets**: WhatsApp, phone, and online status

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML5 elements
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus states for interactive elements

## License

© 2024 SA Telecoms. All rights reserved.
