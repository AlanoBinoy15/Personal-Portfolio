# Portfolio Website

A modern, responsive portfolio built with React and Vite.

## Features

- 🎨 Bold brutalist design with refined typography
- ✨ Custom cursor and smooth animations
- 📱 Fully responsive
- ⚡ Built with Vite for fast development
- 🎭 Parallax effects and micro-interactions

## Getting Started

### Prerequisites

- Node.js 16+ installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Your Information

1. **Name & Bio**: Edit `src/components/Hero.jsx` and `src/components/Navbar.jsx`
2. **Projects**: Modify the `projectsData` array in `src/components/Projects.jsx`
3. **Skills**: Update the `skillsData` array in `src/components/Skills.jsx`
4. **Contact Info**: Change links in `src/components/Contact.jsx`
5. **Colors**: Adjust CSS variables in `src/index.css`:
   - `--bg`: Background color
   - `--text`: Text color
   - `--accent`: Accent color (currently red)
   - `--border`: Border color

### Deploy

This project can be deployed to:
- Vercel: `vercel deploy`
- Netlify: Drag and drop the `dist` folder
- GitHub Pages: Use gh-pages package

## Tech Stack

- React 18
- Vite
- CSS3 with custom animations
- Google Fonts (Playfair Display + DM Mono)

## License

MIT
