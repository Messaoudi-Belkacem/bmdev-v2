# Project Images Setup Guide

## 📁 Directory Structure

Create a `projects` folder in your `public` directory:
```
public/
  └── projects/
      ├── homeseeker.png
      ├── moviesdb.png
      ├── unipath.png
      ├── portfolio.png
      ├── ecommerce.png
      ├── analytics.png
      └── scripts.png
```

## 🖼️ Image Requirements

### Recommended Specifications:
- **Format**: PNG or JPG (PNG preferred for transparency)
- **Dimensions**: 1200x800px (3:2 aspect ratio) or 1920x1080px (16:9)
- **File Size**: Under 500KB for optimal loading
- **Quality**: High resolution but optimized for web

### Image Types Needed:

1. **homeseeker.png** - Screenshot of HomeSeeker Android app
2. **moviesdb.png** - Screenshot of MoviesDB Android app
3. **unipath.png** - Screenshot of UniPath Admin Panel for ENSSEA
4. **portfolio.png** - Screenshot of this portfolio website
5. **ecommerce.png** - Placeholder for e-commerce project
6. **analytics.png** - Placeholder for analytics dashboard
7. **scripts.png** - Placeholder for automation scripts

## 🎨 Tips for Great Project Images:

### For Mobile Apps:
- Use device frames (mockups) to showcase the app
- Show key screens or features
- Consider using tools like:
  - Figma mockups
  - Device frames from MockUPhone
  - Android Studio screenshot tool with device frame

### For Web Projects:
- Full browser window screenshot
- Show the hero section or main interface
- Use tools like:
  - Full page screenshots (browser extensions)
  - Screely.com for browser mockups
  - Responsive design screenshots

### For Coming Soon Projects:
- Create placeholder images with:
  - Gradient backgrounds
  - Tech stack icons
  - "Coming Soon" overlay
  - Tools like Canva or Figma

## 🚀 Quick Setup Steps:

1. Create the `public/projects` folder if it doesn't exist
2. Add your project images with the exact names listed above
3. If you don't have an image yet, the carousel will show a gradient placeholder
4. Images will be automatically optimized by Next.js Image component

## 🔄 Adding More Projects Later:

When adding new projects:
1. Add the project object in `Projects.tsx`
2. Add the `image: "/projects/your-image.png"` property
3. Place the image in `public/projects/`
4. The carousel will automatically include it

## ⚡ Current Setup:

The carousel is configured with:
- ✅ Smooth slide transitions
- ✅ Navigation arrows with gradient hover effects
- ✅ Dot indicators for each project
- ✅ Responsive image loading with Next.js Image
- ✅ Gradient placeholder backgrounds for missing images
- ✅ Individual carousels for each category (Mobile, Web, AI, Scripts)

## 📸 Temporary Placeholder:

Until you add images, each project will display a gradient background matching its category color scheme.

