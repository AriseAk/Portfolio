# Portfolio Website

A modern, interactive portfolio website built with React, featuring advanced animations, WebGL effects, and a sophisticated tech stack showcase. This portfolio demonstrates full-stack development capabilities with a focus on cutting-edge frontend technologies and creative visual effects.

##Live Demo
https://akshaybhat.vercel.app/

## 🌟 Features

### Visual Effects & Animations
- **LightRays Component**: Custom WebGL shader-based light ray effects with configurable origin, color, speed, and mouse tracking
- **Loading Screen**: Cinematic boot sequence with percentage counter and GSAP animations
- **Scroll Animations**: Multiple scroll-triggered animations using GSAP ScrollTrigger
- **Text Effects**: 
  - `DecryptedText`: Character scrambling/decryption animation on view/hover
  - `BlurText`: Blur-in text reveal with directional animation
  - `Textype`: Customizable typewriter effect with multiple text support
- **Dynamic Background**: Smooth CSS variable transitions based on scroll position (dark → mid-tone → light)
- **Photo Reveal**: Slide-in animations for profile images using GSAP

### Interactive Elements
- **Sticky Dock Navigation**: macOS-style magnifying dock with Framer Motion animations
  - Smooth size transitions on hover
  - Label tooltips that appear/disappear
  - Scroll-to-section functionality
- **Hover Effects**: Sophisticated micro-interactions throughout the interface
  - Social link hover states with animated labels
  - Button hover animations with skew transforms
  - Card scaling and shadow effects
- **Responsive Design**: Fully responsive across all device sizes
- **Custom Scrollbar**: Styled scrollbar with accent colors

### Page Sections
1. **Hero Section**: 
   - Split layout with typewriter effect ("FULL STACK")
   - Large decrypted text display ("DEVELOPER" and "CASEBOOK")
   - Animated text strokes and fills
2. **About**: 
   - Dual-image layout with slide-in animations
   - Personal introduction with multi-paragraph text
   - Resume download button
   - Social media links (LinkedIn, GitHub, Email) with hover labels
3. **Skills (Tech Stack)**: 
   - Organized by categories (Languages, ML/AI, Frontend, Backend, Database, Deployment)
   - Animated skill boxes with hover effects
   - Icon integration from React Icons and custom images
   - Category-based layout with animated reveals
4. **Projects**: 
   - Grid-based project card layout
   - Each card includes:
     - Project screenshot/thumbnail
     - Title and description
     - Tech stack tags
     - Live demo and GitHub repository links
   - Scroll-triggered entrance animations
   - Hover effects with scaling and shadow
5. **Contact**: 
   - EmailJS-powered contact form with validation
   - Quick-link grid (Email, LinkedIn, GitHub, Resume)
   - Form fields: Name, Email, Message
   - Loading states and success/error feedback
6. **Footer**:
   - Copyright information
   - Back-to-top button with hover label
   - Smooth scroll-to-top functionality

## 🚀 Tech Stack

### Frontend Core
- **React 19.1.0** - UI library
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS 4.1.8** - Utility-first CSS framework

### Animation & Graphics
- **GSAP 3.13.0** - Professional-grade animation library with ScrollTrigger
- **Framer Motion 12.18.1** - React animation library for component transitions
- **OGL 1.0.11** - Lightweight WebGL library for LightRays effect

### Additional Libraries
- **EmailJS Browser 4.4.1** - Email service integration for contact form
- **React Icons 5.5.0** - Icon library (Ionicons, Bootstrap Icons, Phosphor Icons)
- **Styled Components 6.1.19** - CSS-in-JS (minimal usage)

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/AriseAk/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Variables**

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Run development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

6. **Preview production build**
```bash
npm run preview
```


## 🎨 Key Components

### LightRays
WebGL-powered light ray effect with mouse tracking:
```jsx
<LightRays
  raysOrigin="top-center"
  raysColor="#00ffff"
  raysSpeed={1.2}
  lightSpread={0.8}
  rayLength={1.2}
  followMouse={true}
  mouseInfluence={0.05}
  noiseAmount={0.05}
  distortion={0.02}
/>
```
- **Props**: Origin positioning, color, speed/spread controls, mouse influence, noise effects
- **Usage**: Full-screen background effect with pointer tracking
- **Technology**: OGL (WebGL library) with custom shaders

### LoadingScreen
Cinematic boot sequence loader:
```jsx
<LoadingScreen onComplete={callback} />
```
- **Features**: 
  - Animated percentage counter (0-100%)
  - Boot log messages that update during load
  - Progress bar with glow effect
  - GSAP timeline animations
  - Slide-up exit animation
- **Styling**: Custom font (Jersey 10) with cyberpunk aesthetic

### DecryptedText
Character scrambling animation effect:
```jsx
<DecryptedText 
  text="DEVELOPER"
  animateOn="view"
  sequential={true}
/>
```
- **Animation Modes**: On hover or on view (IntersectionObserver)
- **Options**: Sequential character reveal, custom speed, direction control
- **Use Case**: Large hero text with decrypt effect

### Textype (Typewriter)
Multi-text typewriter component:
```jsx
<Textype
  text={["FULL STACK", ""]}
  textColors={['#ffffe3']}
  typingSpeed={200}
  showCursor={true}
/>
```
- **Features**: Multiple text support, color transitions, cursor customization
- **Behaviors**: Type → Pause → Delete → Next text (looping)

### BlurText
Animated text reveal with blur effect:
```jsx
<BlurText
  text="LinkedIn"
  delay={100}
  trigger={isHovered}
/>
```
- **Usage**: Tooltip labels for social links
- **Animation**: Blur fade-in with staggered word reveal

### StickyDock
macOS-style navigation dock:
```jsx
<StickyDock 
  items={navigationItems}
  baseSize={40}
  magnify={60}
/>
```
- **Features**:
  - Framer Motion spring animations
  - Distance-based size transformation
  - Smooth label tooltips
  - Fixed positioning with scroll persistence
- **Items**: Home, Skills, Projects, Contact

## 🎯 Features Breakdown

### Animation System
The portfolio uses a sophisticated animation system combining:
- **GSAP ScrollTrigger**: 
  - Scroll-based color transitions for entire page background
  - CSS custom properties animation (`--bg-color`, `--text-primary`)
  - Photo reveal animations with slide-in effects
  - Section title animations (slide from left/right with blur)
- **Framer Motion**: 
  - StickyDock magnification effect with spring physics
  - BlurText staggered word animations
  - Exit animations on tooltips
- **WebGL Shaders (OGL)**: LightRays background effect
- **CSS Transitions**: Button hovers, card scaling, icon color changes
- **IntersectionObserver**: DecryptedText triggers on viewport entry

### Color Transition System
Unique scroll-based theme that smoothly transitions:
1. **Home Section** (#10100e) - Dark charcoal
2. **Skills Section** (#4c4c42) - Medium brown-gray
3. **Projects Section** (#b5b5a2) - Light beige-gray
4. **Contact Section** (#ffffe3) - Cream yellow

Text colors and strokes automatically adapt to maintain contrast.

⭐ If you found this project interesting, please consider giving it a star on GitHub!
