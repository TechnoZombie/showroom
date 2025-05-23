const thisWebsiteMarkdown =
    `
# TechnoZombie's Showroom

![GitHub last commit](https://img.shields.io/github/last-commit/TechnoZombie/showroom)
![GitHub license](https://img.shields.io/github/license/TechnoZombie/showroom)

A modern, React-based showroom website showcasing projects developed by TechnoZombie during their journey as a developer.

## 📋 Overview

This showroom website serves as a digital showroom for various projects, ranging from web applications to Java-based programs and libraries. The site features a clean, responsive design with animated page transitions and an interactive sidebar navigation system.

Built with React and Vite, the website efficiently displays project information through a combination of embedded iframes, markdown rendering, and image galleries.

## 🚀 Features

- **Modern SPA Architecture**: Built with React Router for seamless navigation
- **Animated Transitions**: Page transitions using Framer Motion animations
- **Responsive Design**: Adapts to different screen sizes
- **Interactive Navigation**: Sidebar for easy access to all projects
- **Markdown Rendering**: Project descriptions rendered from markdown files
- **Image Gallery**: Lightbox-style gallery for project screenshots
- **Embedded Applications**: Direct integration of live projects via iframes

## 🧰 Tech Stack

- **React**: UI library
- **React Router**: Routing and navigation
- **Framer Motion**: Animations and transitions
- **React Icons**: Icon library
- **CSS**: Custom styling

## 🗂️ Project Structure

The website consists of several key components:

### Core Components
- **Header**: Displays the site title
- **Sidebar**: Navigation menu with links to all projects
- **Showcase**: Main content area that renders different project views based on routes
- **Button**: Custom button component with navigation capabilities

### Project Pages
- **Home**: Landing page with introduction
- **About**: Information about the developer's background
- **ThisWebsite**: Information about the showroom site itself
- **Project Pages**: Individual pages for each featured project

### Utility Components
- **ImageGallery**: Lightbox-style gallery for project screenshots
- **MarkdownRenderer**: Renders markdown content for project descriptions

## 📂 Featured Projects

The showroom showcases the following projects:

1. **PixelPainter** - A Java-based pixel art creation tool
2. **PixelPainter: Enhanced!** - An improved version with GUI and additional features
3. **Simplegraphz** - A lightweight Java graphics library (fork of simple-graphics)
4. **Currency Converter** - A web-based currency conversion tool
5. **QR Code Generator** - A tool for generating QR codes
6. **Chuck Norris: Facts** - A Chuck Norris facts generator
7. **Spacenewzz** - A space news aggregator

## 🖥️ Installation and Usage

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn

### Setup

1. Clone the repository:
\`\`\`bash
git clone https://github.com/technozombie/showroom.git
\`\`\`

2. Navigate to the project directory:
\`\`\`bash
cd showroom
\`\`\`

3. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

5. The application will be available at \`http://localhost:5173\` (or another port if 5173 is in use)

### Building for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

The production build will be available in the \`dist\` directory.

## 👨‍💻 Developer Journey

This website represents the developer's journey from a different career path into software development, beginning with a full-stack bootcamp in September 2023 and progressing to professional experience as a Java backend developer by March 2024.

The showroom demonstrates growth through various personal projects developed to enhance newly acquired skills, ranging from React applications to Java programs and libraries.

---
    `

export default thisWebsiteMarkdown;
