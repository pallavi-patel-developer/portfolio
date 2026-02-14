<div align="center">

# ✨ Pallavi Patel — Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

<p align="center">
  A modern, responsive, and interactive developer portfolio built with <strong>Next.js 16</strong>, <strong>React 19</strong>, and <strong>Tailwind CSS 4</strong>.  
  Featuring smooth animations, floating tech logos, animated progress bars, and a sleek dark theme with teal accents.
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-contact">Contact</a>
</p>

---

</div>

## 📸 Screenshots

<div align="center">

| Hero Section | Skills Section |
|:---:|:---:|
| ![Hero](public/Screenshot%202026-02-14%20020019.png) | ![Skills](public/Screenshot%202026-02-14%20020043.png) |

</div>

---

## 🚀 Live Demo

> 🔗 **[View Live Portfolio →](#)** *(Update with your deployed URL)*

---

## ✨ Features

| Section | Highlights |
|---------|-----------|
| 🏠 **Hero** | Floating SVG tech logos (16+ icons) with CSS animations, GitHub & LinkedIn links, CV download button |
| 👤 **About Me** | Personal introduction with "Read More" page navigation |
| 💼 **Experience** | Animated vertical timeline with hover-glow effects, alternating left/right layout, tech pills |
| 🛠️ **Skills** | 12 skill cards with real SVG logos, animated progress bars with brand colors, hover glow effects |
| 📂 **Projects** | Filterable project grid (All/Backend/Full Stack/DevOps), image previews with gradient fallbacks, hover overlays with GitHub & Live Demo links |
| 📬 **Contact** | Interactive contact form with focus glow, info cards (email, location, website), social links with brand colors |
| 🧭 **Navbar** | Clean navigation with smooth scroll anchors to all sections |

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white) |
| **UI Library** | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) |
| **Styling** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) |
| **Language** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Icons** | ![Lucide](https://img.shields.io/badge/Lucide_React-F56565?style=flat-square&logo=feather&logoColor=white) + Custom SVGs |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

</div>

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/pallavi-patel-developer/portfolio.git

# 2. Navigate to the project directory
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

🌐 Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── public/                     # Static assets (images, icons, CV)
│   ├── person.png              # Hero profile image
│   ├── projects/               # Project screenshot images
│   └── ...
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles & CSS animations
│   │   ├── layout.js           # Root layout with fonts
│   │   ├── page.js             # Main landing page (assembles all sections)
│   │   └── read-more/
│   │       └── page.js         # Read More about page
│   └── components/
│       ├── Navbar.jsx           # Navigation bar with anchor links
│       ├── Hero.jsx             # Hero section with floating tech logos
│       ├── About.jsx            # About Me section
│       ├── Experience.jsx       # Timeline-based experience section
│       ├── Skills.jsx           # Skills grid with progress bars
│       ├── Projects.jsx         # Filterable project cards
│       ├── Contact.jsx          # Contact form & social links
│       └── readMore.jsx         # Read More content component
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#1e2029` | Page background (dark) |
| `--foreground` | `#ffffff` | Primary text color |
| `--accent` | `#00bfa5` | Teal accent (buttons, highlights, hovers) |
| Font | **Outfit** | Primary sans-serif font |

---

## 🖼️ Adding Project Images

To display real screenshots in your project cards:

1. Create a `projects/` folder inside `public/`
2. Add images named:
   - `ecommerce.png`
   - `chatapp.png`  
   - `taskboard.png`
   - `auth.png`
   - `blogcms.png`
   - `devops.png`
3. The gradient fallbacks will be replaced by your actual images automatically

---

## 📄 Customization

### Update Your Info
- **Name & Title** → `Hero.jsx` and `Navbar.jsx`
- **About Me text** → `About.jsx`
- **Experience entries** → `Experience.jsx` (edit the `experiences` array)
- **Skills & proficiency** → `Skills.jsx` (edit the `skills` array)
- **Projects** → `Projects.jsx` (edit the `projects` array)
- **Contact info** → `Contact.jsx` (email, location, social links)
- **GitHub & LinkedIn URLs** → `Hero.jsx` (update `href` values)
- **CV/Resume** → Place your `cv.pdf` in the `public/` folder

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📬 Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-pallavi--patel--developer-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pallavi-patel-developer)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Pallavi_Patel-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com)
[![Email](https://img.shields.io/badge/Email-pallavi.patel@example.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pallavi.patel@example.com)

</div>

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by **Pallavi Patel**

<img src="https://github-readme-stats.vercel.app/api?username=pallavi-patel-developer&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false" height="150" alt="stats graph" />
<img src="https://github-readme-stats.vercel.app/api/top-langs?username=pallavi-patel-developer&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false" height="150" alt="languages graph" />

</div>
