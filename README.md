# eResume - Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcase my projects, skills, and experience with smooth animations and a beautiful UI.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Project Showcase**: Display your projects with images, technologies, and links
- **Skills Section**: Highlight your technical skills and expertise
- **Contact Form**: Get in touch with visitors through a contact form
- **Resume Section**: Showcase your professional experience and education

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Supabase** - Backend services (optional)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/manojjadhav2004/portfolio>
   cd eresume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📁 Project Structure

```
eresume/
├── src/
│   ├── components/
│   │   ├── About.tsx          # About section
│   │   ├── Contact.tsx        # Contact form
│   │   ├── Footer.tsx         # Footer component
│   │   ├── Hero.tsx           # Hero/landing section
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Resume.tsx         # Resume section
│   │   └── Skills.tsx         # Skills section
│   ├── contexts/
│   │   └── ThemeContext.tsx   # Dark mode context
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`)
   - Update name, title, and description

2. **About Section** (`src/components/About.tsx`)
   - Add your bio and personal information

3. **Skills Section** (`src/components/Skills.tsx`)
   - Update your skills and proficiency levels

4. **Projects Section** (`src/components/Projects.tsx`)
   - Add your projects with:
     - Title
     - Description
     - Technologies used
     - GitHub URL
     - Live demo URL
     - Project image (optional)

5. **Contact Section** (`src/components/Contact.tsx`)
   - Update contact information
   - Configure form submission (currently uses Supabase)

### Theme Customization

Edit `tailwind.config.js` to customize colors, fonts, and other design tokens.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms
The `dist` folder contains static files that can be deployed to any static hosting service.

## 🔧 Configuration

### Supabase Setup (Optional)
If you want to use the contact form with Supabase:

1. Create a Supabase project
2. Set up environment variables:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. Update the contact form handler in `src/components/Contact.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Jadhav Manoj**
- Software Engineering Student
- Aspiring Full-Stack Developer

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

Made with ❤️ using React and TypeScript
