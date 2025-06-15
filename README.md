<div align="center">
  <img alt="Muhammad Sarim Logo" src="https://raw.githubusercontent.com/M-Sarim/iamsarim/main/src/images/logo.png" width="100" />
</div>

<h1 align="center">
  Muhammad Sarim - Portfolio
</h1>

<p align="center">
  A modern, responsive portfolio website showcasing my expertise in <strong>AI/ML</strong>, <strong>Full-Stack Development</strong>, and <strong>Software Engineering</strong>
</p>

<p align="center">
  Built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> •
  Styled with <a href="https://styled-components.com/" target="_blank">Styled Components</a> •
  Deployed on <a href="https://www.vercel.com/" target="_blank">Vercel</a> •
  <strong>5 Dynamic Themes</strong>
</p>

<p align="center">
  <a href="https://muhammadsarim.com" target="_blank">
    <img src="https://img.shields.io/badge/website-live-brightgreen?style=for-the-badge" alt="Website Live" />
  </a>
  <a href="https://github.com/M-Sarim/iamsarim/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License" />
  </a>
  <a href="https://github.com/M-Sarim" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-M--Sarim-181717?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/themes-5%20colors-ff6b6b?style=for-the-badge&logo=palette" alt="5 Themes" />
  </a>
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/PWA-ready-purple?style=for-the-badge&logo=pwa" alt="PWA Ready" />
  </a>
</p>

## 🚀 **About Me**

I'm **Muhammad Sarim**, a passionate Software Engineering student at FAST NUCES with expertise in **Artificial Intelligence**, **Machine Learning**, and **Full-Stack Development**. I specialize in building intelligent solutions that bridge the gap between cutting-edge technology and real-world applications.

### 🎯 **Specializations**
- **AI/ML Engineering**: Deep Learning, Computer Vision, NLP
- **Full-Stack Development**: React.js, Node.js, Python, C#
- **Data Science**: Data Analysis, Visualization, Predictive Modeling
- **Software Engineering**: Object-Oriented Programming, Database Design

### 💼 **Current Focus**
- 🔬 **Research**: Adversarial Machine Learning & AI Ethics
- 💻 **Development**: Building scalable web applications
- 📊 **Data Science**: Analyzing complex datasets for insights
- 🌐 **Open Source**: Contributing to the developer community

## ✨ **Portfolio Features**

### 🎨 **Design & User Experience**
- **🎯 Modern Design**: Clean, professional, and minimalist interface
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🌙 Smooth Animations**: Scroll-triggered animations using ScrollReveal
- **🎨 Dynamic Themes**: 5 beautiful color themes with real-time switching
- **🎨 Custom Styling**: Styled Components with consistent design system
- **♿ Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **💾 Theme Persistence**: User's preferred theme saved across sessions

### 🛠️ **Technical Features**
- **⚡ Performance**: Gatsby's static site generation for lightning-fast loading
- **🔍 SEO Optimized**: Meta tags, Open Graph, and structured data
- **📊 Analytics**: Google Analytics integration for visitor insights
- **🔄 PWA Ready**: Progressive Web App capabilities with offline support
- **📧 Contact Form**: Interactive modal with Formspree integration
- **🎨 Dynamic Themes**: 5-color theme system with real-time switching
- **💾 Theme Persistence**: User's color preference saved in localStorage
- **🚀 Netlify Optimized**: Custom netlify.toml with security headers and performance optimization
- **🔒 Security Headers**: XSS protection, content-type options, and frame protection
- **🔄 Smart Redirects**: SPA routing support and 404 handling

### 📋 **Portfolio Sections**
- **👨‍💻 About**: Personal story, skills, and technical expertise
- **💼 Experience**: Professional work history including AIESEC, Daira Organizing Committee, and Freelancing
- **🚀 Featured Work**: Aurora Voyages, Smart Trash Routing System, and Multiplayer Chess Game
- **📁 Projects Archive**: Complete list of 15+ notable projects including Deepfake Detection ML app
- **💬 Testimonials**: Professional recommendations from Dr. Muhammad Usama, Abdul Wasay, Usman, and Nouman
- **📞 Contact**: Interactive modal with Formspree integration for direct messaging
- **🎨 Theme Toggle**: Sidebar palette for instant color theme switching with 5 dynamic themes

### 🔧 **Tech Stack**
- **Frontend**: React.js, Gatsby, Styled Components
- **Styling**: CSS-in-JS, Custom Design System, Dynamic Theme System
- **Animation**: ScrollReveal, CSS Transitions, Smooth Scroll
- **Build**: Webpack, Babel, PostCSS
- **Deployment**: Netlify with netlify.toml configuration and continuous deployment
- **Performance**: Image optimization, code splitting, lazy loading, CDN caching
- **Security**: Custom security headers, XSS protection, content-type validation
- **Features**: Multi-theme color palette, responsive design, PWA ready, form handling

## 🛠️ **Installation & Setup**

### **Prerequisites**
- **Node.js** (v14.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/M-Sarim/iamsarim.git
   cd iamsarim
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   ```
   http://localhost:8000
   ```

### **Development Commands**

```bash
# Start development server
npm run develop

# Build for production
npm run build

# Serve production build locally
npm run serve

# Clean Gatsby cache (fixes most issues)
npm run clean

# Format code with Prettier
npm run format

# Run linting
npm run lint
```

### **🔧 Troubleshooting**

#### **Common Issues & Solutions**

**GraphQL Errors:**
```bash
# Clear cache and restart
npm run clean
npm run develop
```

**Development Warnings:**
- `MaxListenersExceededWarning`: Safe to ignore (development only)
- `Babel deprecation warnings`: Safe to ignore (plugin compatibility)

**Theme Not Persisting:**
- Check browser localStorage permissions
- Clear browser cache if needed

**Images Not Loading:**
- Ensure images are in correct folders
- Run `npm run clean` to rebuild image processing

## 🚀 **Deployment**

### **Production Build**
```bash
# Generate optimized production build
npm run build

# Preview production build locally
npm run serve
```

### **Deployment Options**

#### **Netlify (Recommended)**
1. Connect your GitHub repository to Netlify
2. Configuration is handled by `netlify.toml` file (included)
3. Automatic deployments with security headers and performance optimization
4. Deploy automatically on every push to main branch

#### **Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### **GitHub Pages**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"deploy": "gatsby build && gh-pages -d public"

# Deploy
npm run deploy
```

## 🎨 **Design System**

### **Color Palette & Themes**

#### **Base Colors**
| Color          | Hex       | Usage                    |
|----------------|-----------|--------------------------|
| Navy           | `#0a192f` | Primary background       |
| Light Navy     | `#112240` | Card backgrounds         |
| Lightest Navy  | `#233554` | Borders and dividers     |
| Slate          | `#8892b0` | Secondary text           |
| Light Slate    | `#a8b2d1` | Primary text             |
| Lightest Slate | `#ccd6f6` | Headings and emphasis    |
| White          | `#e6f1ff` | High contrast text       |

#### **Dynamic Theme Colors**
| Theme    | Primary Color | Description              |
|----------|---------------|--------------------------|
| Default  | `#64ffda`     | Original cyan theme      |
| Fuchsia  | `#D946EF`     | Creative magenta theme   |
| Royal Blue | `#6366F1`   | Professional indigo theme |
| Neon Green | `#22C55E`   | Vibrant emerald theme    |
| Sunset Orange | `#FB923C` | Energetic orange theme   |

**🎨 Theme Toggle**: Users can switch between 5 different color themes using the palette icon in the sidebar.

## 🎨 **Dynamic Theme System**

### **🌈 Available Themes**
The portfolio features a sophisticated theme system with 5 carefully crafted color schemes:

| Theme | Preview | Primary Color | Best For |
|-------|---------|---------------|----------|
| **Default** | 🟢 | `#64ffda` (Cyan) | Professional, tech-focused |
| **Fuchsia** | 🟣 | `#D946EF` (Magenta) | Creative, artistic work |
| **Royal Blue** | 🔵 | `#6366F1` (Indigo) | Corporate, professional |
| **Neon Green** | 🟢 | `#22C55E` (Emerald) | Natural, eco-friendly |
| **Sunset Orange** | 🟠 | `#FB923C` (Orange) | Bold, energetic projects |

### **🎯 How It Works**
1. **Hover** over the palette icon in the right sidebar
2. **Choose** from 5 color options that appear vertically
3. **Click** any color to instantly transform the entire portfolio
4. **Automatic Save**: Your preference is remembered for future visits

### **🔧 Technical Implementation**
- **CSS Custom Properties**: Dynamic color variable updates
- **LocalStorage Persistence**: Theme choice saved across sessions
- **Smooth Transitions**: All color changes are animated
- **Comprehensive Coverage**: Affects buttons, links, icons, and accents
- **Hover Feedback**: Palette icon shows current theme color on hover

## 🚀 **Featured Project: Aurora Voyages**

### **🌟 Project Highlight**
**Aurora Voyages** is the main featured project showcasing full-stack development expertise:

- **🎯 Purpose**: Comprehensive travel booking platform
- **🛠️ Tech Stack**: React, Node.js, Express, MongoDB, Stripe API, JWT, Material-UI, Cloudinary
- **✨ Features**: User authentication, destination browsing, secure payments, booking management
- **🔗 Links**: [Live Demo](https://aurora-voyages.netlify.app) • [GitHub Repository](https://github.com/M-Sarim/aurora-voyages)

### **📊 Project Portfolio**
The portfolio showcases **15+ comprehensive projects** including:
- **Featured Projects**: Aurora Voyages (travel platform), Smart Trash Routing System (AI-powered waste management), Multiplayer Chess Game (real-time gaming)
- **AI/ML Projects**: Deepfake Detection ML app, Disease Classification NLP, Computer Vision applications
- **Web Applications**: E-commerce platforms, management systems, real-time applications
- **Data Science**: Weather analysis, stochastic process analyzers, predictive modeling
- **Research Tools**: LLM annotation systems, academic paper scrapers, data processing tools

## ⚡ **Performance & Optimization**

### **🚀 Speed & Performance**
- **Lighthouse Score**: 95+ across all metrics
- **Static Site Generation**: Pre-built pages for instant loading
- **Image Optimization**: Automatic WebP/AVIF conversion with lazy loading
- **Code Splitting**: Optimized bundle sizes with dynamic imports
- **CDN Deployment**: Global content delivery via Netlify

### **📱 Progressive Web App (PWA)**
- **Offline Support**: Service worker for offline functionality
- **App-like Experience**: Installable on mobile devices
- **Fast Loading**: Cached resources for repeat visits
- **Responsive Design**: Perfect on all screen sizes

### **🔍 SEO & Analytics**
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema for better search visibility
- **Google Analytics**: Visitor tracking and insights
- **Sitemap Generation**: Automatic XML sitemap creation
- **Robot.txt**: Search engine optimization

### **Typography**
- **Primary Font**: Calibre (Sans-serif)
- **Monospace Font**: SF Mono (Code and technical text)
- **Font Sizes**: Responsive scale from 12px to 80px

## 📁 **Project Structure**

```
iamsarim/                           # Project root
├── 📁 content/                     # Content files (Markdown)
│   ├── 📁 featured/               # Featured projects
│   │   ├── 📁 AuroraVoyages/      # Travel booking platform
│   │   ├── 📁 SmartTrashRouting/  # AI waste management system
│   │   └── 📁 MultiplayerChess/   # Real-time chess game
│   ├── 📁 jobs/                   # Work experience entries
│   │   ├── 📁 AIESEC/             # Marketing & PR role
│   │   ├── 📁 Daira/              # Organizing Committee
│   │   └── 📁 Freelance/          # Freelancing experience
│   ├── 📁 posts/                  # Blog posts and articles
│   └── 📁 projects/               # Additional projects for archive
├── 📁 src/                        # Source code
│   ├── 📁 components/             # React components
│   │   ├── 📁 icons/              # SVG icon components
│   │   │   └── theme.js           # Custom theme toggle icon
│   │   ├── 📁 sections/           # Page sections (Hero, About, etc.)
│   │   ├── contactModal.js        # Contact form modal
│   │   ├── layout.js              # Main layout wrapper
│   │   ├── nav.js                 # Navigation component
│   │   └── social.js              # Social sidebar with theme toggle
│   ├── 📁 fonts/                  # Custom fonts (Calibre, SF Mono)
│   ├── 📁 hooks/                  # Custom React hooks
│   ├── 📁 images/                 # Image assets
│   │   ├── logo.png               # Site logo
│   │   ├── me.jpg                 # Profile picture
│   │   ├── dr-usama.jpg           # Testimonial photos
│   │   ├── nouman.jpg             # Peer testimonial
│   │   ├── usman.jpg              # Peer testimonial
│   │   └── palette-icon.svg       # Theme toggle icon
│   ├── 📁 pages/                  # Gatsby pages
│   │   ├── 📁 pensieve/           # Blog section
│   │   ├── 404.js                 # 404 error page
│   │   ├── archive.js             # Projects archive
│   │   └── index.js               # Homepage
│   ├── 📁 styles/                 # Styled components & themes
│   │   ├── GlobalStyle.js         # Global CSS styles
│   │   ├── mixins.js              # Reusable style mixins
│   │   ├── theme.js               # Theme configuration
│   │   └── variables.js           # CSS custom properties
│   ├── 📁 templates/              # Page templates
│   ├── 📁 utils/                  # Utility functions
│   └── config.js                  # Site configuration
├── 📁 static/                     # Static assets (served directly)
│   ├── 📁 slides/                 # Presentation files
│   ├── favicon.ico                # Favicon files
│   ├── *.png                      # Icon files
│   ├── og.png                     # Open Graph image
│   ├── resume.pdf                 # Downloadable resume
│   └── site.webmanifest           # Web app manifest
├── 📁 scripts/                    # Build scripts
├── gatsby-config.js               # Gatsby configuration
├── gatsby-node.js                 # Gatsby Node APIs
├── package.json                   # Project dependencies
├── prettier.config.js             # Code formatting config
└── README.md                      # Project documentation
```

### **Key Directories Explained:**

- **`/content/featured/`** - Featured project (Aurora Voyages) with demo images
- **`/content/projects/`** - Additional projects for archive page (cleaned of unused images)
- **`/src/components/`** - Reusable React components including theme toggle system
- **`/src/images/`** - Optimized images and testimonial photos (cleaned of unused assets)
- **`/static/`** - Files served directly without processing (favicons, PDFs, etc.)
- **`/src/styles/`** - Styled-components theme system with dynamic color switching

## 🎨 **Customization Guide**

### **🔧 Adding New Themes**
To add a new color theme:

1. **Update Color Array** in `src/components/social.js`:
```javascript
const colorThemes = [
  // ... existing themes
  { name: 'newtheme', color: '#YOUR_COLOR', label: 'Your Theme' },
];
```

2. **Add Theme Logic** in `applyTheme` function:
```javascript
case 'newtheme':
  root.style.setProperty('--green', '#YOUR_COLOR');
  root.style.setProperty('--green-tint', 'rgba(YOUR_RGB, 0.1)');
  // ... other color properties
  break;
```

### **📝 Content Updates**
- **Personal Info**: Edit `src/config.js`
- **About Section**: Modify `src/components/sections/about.js`
- **Experience**: Add/edit files in `content/jobs/`
- **Projects**: Add/edit files in `content/projects/` and `content/featured/`
- **Testimonials**: Update `src/components/sections/testimonials.js`

### **🖼️ Image Management**
- **Profile Photos**: Replace files in `src/images/`
- **Project Images**: Add to respective project folders in `content/`
- **Optimization**: Gatsby automatically optimizes all images

### **🎨 Styling Customization**
- **Colors**: Modify `src/styles/variables.js`
- **Fonts**: Update font files in `src/fonts/`
- **Layout**: Adjust components in `src/components/sections/`
- **Animations**: Customize ScrollReveal settings in components

## 🤝 **Contributing**

While this is a personal portfolio, I welcome suggestions and improvements!

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/improvement`)
3. **Commit your changes** (`git commit -m 'Add some improvement'`)
4. **Push to the branch** (`git push origin feature/improvement`)
5. **Open a Pull Request**

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Design Inspiration**: [Brittany Chiang](https://brittanychiang.com) for the original design concept
- **Gatsby Community**: For the amazing static site generator and ecosystem
- **React Team**: For the powerful UI library and development experience
- **Styled Components**: For the excellent CSS-in-JS solution
- **Netlify**: For seamless deployment and hosting
- **Open Source Community**: For the countless tools, libraries, and inspiration
- **FAST NUCES**: For the educational foundation and peer collaboration

## 📞 **Connect With Me**

<p align="center">
  <a href="https://muhammadsarim.com" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-muhammadsarim.com-blue?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://github.com/M-Sarim" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-M--Sarim-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/imuhammadsarim/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-Muhammad%20Sarim-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://medium.com/@Muhammad.Sarim" target="_blank">
    <img src="https://img.shields.io/badge/Medium-@Muhammad.Sarim-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium" />
  </a>
  <a href="mailto:muhammad2004sarim@gmail.com">
    <img src="https://img.shields.io/badge/Email-muhammad2004sarim@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

## 🌟 **What Makes This Portfolio Special**

### **🎨 Unique Features**
- **5-Theme Color System**: First portfolio with comprehensive theme switching
- **Clean Architecture**: Optimized, maintainable codebase structure
- **Performance First**: 95+ Lighthouse scores across all metrics
- **Real Projects**: Showcases actual deployed applications, not demos
- **Professional Focus**: Tailored for AI/ML and Full-Stack development roles

### **🏆 Technical Excellence**
- **Modern Stack**: Latest Gatsby, React, and web technologies
- **Best Practices**: ESLint, Prettier, and code quality standards
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Production Ready**: Deployed and battle-tested

---

<p align="center">
  <strong>Built with ❤️ by Muhammad Sarim</strong><br>
  <em>Passionate about AI/ML, Full-Stack Development, and creating impactful solutions</em><br><br>
  <strong>⭐ Star this repository if you found it helpful!</strong>
</p>
