# Personal Website

A modern, responsive personal portfolio website built with React, TypeScript, and Vite. Features a sleek dark theme with smooth animations, interactive sections, and a functional contact form.

![Website Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.6-purple)

## ✨ Features

- **Modern Dark Theme** - Sleek dark UI with gradient accents and glassmorphism effects
- **Smooth Animations** - Fade-in scroll animations using Framer Motion
- **Responsive Design** - Fully responsive across all device sizes
- **Interactive Sections**:
  - Hero section with animated background
  - About section with profile and journey
  - Academic profile showcase
  - Projects portfolio with detailed views
  - Passions & hobbies section
  - Contact form with EmailJS integration
- **Project Details** - Individual project pages with full descriptions
- **Smooth Scrolling** - Enhanced navigation with react-scroll
- **Performance Optimized** - Fast loading with Vite build tool

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.6
- **Styling**: Tailwind CSS 4.1.13
- **Animations**: Framer Motion 12.23.16
- **Routing**: React Router DOM 7.9.3
- **Form Handling**: EmailJS 4.4.1
- **Icons**: Heroicons 2.2.0

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd personal-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional - for contact form)

   Create a `.env` file in the root directory:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   See [Contact Form Setup](#contact-form-setup) for detailed instructions.

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Building for Production

Build the project:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

Preview the production build:

```bash
npm run preview
```

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly from the client. To set it up:

1. **Create an EmailJS account** (free tier available)

   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add an Email Service**

   - Go to "Email Services" in the dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Follow the connection instructions
   - Copy the Service ID

3. **Create an Email Template**

   - Go to "Email Templates"
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Set "To Email" to your email address
   - Copy the Template ID

4. **Get your Public Key**

   - Go to "Account" → "General"
   - Copy your Public Key

5. **Add to `.env` file**
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

**Note**: If EmailJS is not configured, the form will fall back to opening the user's email client with a pre-filled message.

## 📁 Project Structure

```
personal-website/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/
│   │   ├── Layout.tsx   # Main layout wrapper
│   │   ├── Navbar.tsx   # Navigation bar
│   │   ├── Footer.tsx   # Footer component
│   │   ├── ScrollToTop.tsx
│   │   ├── pages/
│   │   │   └── ProjectDetail.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Academics.tsx
│   │       ├── Projects.tsx
│   │       ├── Passions.tsx
│   │       └── Contact.tsx
│   ├── data/
│   │   └── projects.ts  # Project data
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Public assets
├── dist/                # Production build (generated)
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Updating Content

- **Projects**: Edit `src/data/projects.ts`
- **About Section**: Edit `src/components/sections/About.tsx`
- **Academics**: Edit `src/components/sections/Academics.tsx`
- **Passions**: Edit `src/components/sections/Passions.tsx`
- **Contact Info**: Edit `src/components/sections/Contact.tsx`

### Styling

The project uses Tailwind CSS. Customize colors and styles in:

- `src/index.css` - Global styles and theme
- Individual component files - Component-specific styles

### Images

Replace images in `src/assets/` with your own:

- Profile photo: `me.jpg`
- Project images: Add to `src/assets/` and reference in `projects.ts`
- Background: `background.jpg` (for hero section)

## 🚢 Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Or connect your Git repository on Vercel dashboard

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

**Important**: For React Router to work on GitHub Pages, you may need to configure a redirect rule or use HashRouter.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio website. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nameer Beedassy**

- GitHub: [@NMB-UNIVERSAL](https://github.com/NMB-UNIVERSAL)
- LinkedIn: [nameer-beedassy](https://www.linkedin.com/in/nameer-beedassy-091228338/)
- Email: nameerbeedassy@gmail.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Heroicons](https://heroicons.com/)

---

⭐ If you find this project helpful, please consider giving it a star!
