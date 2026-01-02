# BMDev Portfolio v2 🚀

A modern, performant portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This project showcases my work as a full-stack developer with a focus on mobile and web development.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4
- **Smooth Animations**: Framer Motion for fluid, engaging animations
- **Responsive Design**: Mobile-first approach with a clean, minimalist aesthetic
- **Dynamic Projects**: JSON-based project data structure for easy maintenance
- **Interactive Components**: Expandable project cards, smooth scrolling, and section navigation
- **Contact Form**: Integrated contact form for reaching out
- **Tech Stack Showcase**: Visual display of technologies and tools I work with
- **Dark Mode Ready**: Modern UI with support for dark themes

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev), [React Icons](https://react-icons.github.io/react-icons/), [@icons-pack/react-simple-icons](https://www.npmjs.com/package/@icons-pack/react-simple-icons)
- **UI Components**: [Radix UI](https://www.radix-ui.com)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bmdev-v2.git
cd bmdev-v2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Development

- Edit pages by modifying files in the `app/` directory
- The page auto-updates as you edit files
- Add new projects by updating `app/data/projects.json`

## 📁 Project Structure

```
bmdev-v2/
├── app/
│   ├── components/
│   │   ├── Header/          # Navigation with smooth scroll
│   │   ├── Hero/            # Landing section with CTA
│   │   ├── Tech/            # Technology stack showcase
│   │   ├── Projects/        # Project showcase with filtering
│   │   ├── About/           # About me section
│   │   ├── Contact/         # Contact form
│   │   └── Footer/          # Footer with social links
│   ├── data/
│   │   └── projects.json    # Project data (easy to update!)
│   ├── assets/              # Images, icons, and logos
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   └── ui/                  # Reusable UI components (shadcn/ui)
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🎨 Key Features

### Dynamic Project Management
Projects are managed through a simple JSON file (`app/data/projects.json`), making it easy to:
- Add new projects without touching the code
- Update project details, technologies, and status
- Control which projects are featured
- Organize projects by category (Mobile, Web, Desktop, etc.)

### Smooth Animations
All interactions feature smooth, performant animations using Framer Motion:
- Page transitions
- Project card expansions
- Scroll-triggered animations
- Interactive hover effects

### Responsive & Accessible
- Mobile-first responsive design
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 Adding New Projects

Simply edit `app/data/projects.json` and add a new project object:

```json
{
  "id": "project-id",
  "title": "Project Title",
  "description": "Project description...",
  "category": "Mobile",
  "technologies": ["React", "TypeScript", "Node.js"],
  "features": ["Feature 1", "Feature 2"],
  "status": "completed",
  "image": "/assets/pictures/project-image.png",
  "icon": "/assets/logo-project.svg",
  "github": "https://github.com/username/repo",
  "demo": "https://demo-url.com",
  "date": "2024-01",
  "featured": true
}
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

Feel free to reach out if you have any questions or want to collaborate!

- Email: wailmessaoudi806@gmail.com
- GitHub: [Your GitHub](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

Built with ♥ & Next.js
