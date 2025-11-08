# Project Images & Icons Setup Guide

## 📁 Directory Structure

Create a `projects` folder with an `icons` subfolder in your `public` directory:
```
public/
  └── projects/
      ├── homeseeker.png
      ├── moviesdb.png
      ├── dalail.png
      ├── unipath.png
      ├── portfolio.png
      ├── ecommerce.png
      ├── analytics.png
      ├── scripts.png
      └── icons/
          ├── homeseeker-icon.png
          ├── moviesdb-icon.png
          ├── dalail-icon.png
          ├── unipath-icon.png
          ├── portfolio-icon.png
          ├── ecommerce-icon.png
          ├── analytics-icon.png
          └── scripts-icon.png
```

## 🖼️ Image Requirements

### Background Images:
- **Format**: PNG or JPG (PNG preferred for transparency)
- **Dimensions**: 1200x800px (3:2 aspect ratio) or 1920x1080px (16:9)
- **File Size**: Under 500KB for optimal loading
- **Quality**: High resolution but optimized for web

### Project Icons:
- **Format**: PNG with transparent background
- **Dimensions**: 512x512px (square) or 256x256px minimum
- **File Size**: Under 200KB
- **Style**: Should be recognizable even at small sizes
- **Background**: Transparent (will be overlaid on blurred image)

## 🎨 Hover Effect Behavior

### Default State (Not Hovering):
- **Background Image**: Blurred (blur-md)
- **Icon**: Centered and visible with semi-transparent dark overlay
- **Effect**: Icon appears prominently on blurred background

### Hover State:
- **Background Image**: Unblurs smoothly
- **Icon**: Sweeps away to the right and fades out
- **Duration**: 500ms smooth transition
- **Result**: Full, clear background image revealed

### Image & Icon Pairs Needed:

#### Background Images:
1. **homeseeker.png** - Screenshot of HomeSeeker Android app
2. **moviesdb.png** - Screenshot of MoviesDB Android app
3. **dalail.png** - Screenshot of Dalail Tarbawiyya Android app
4. **unipath.png** - Screenshot of UniPath Admin Panel for ENSSEA
5. **portfolio.png** - Screenshot of this portfolio website
6. **ecommerce.png** - Placeholder for e-commerce project
7. **analytics.png** - Placeholder for analytics dashboard
8. **scripts.png** - Placeholder for automation scripts

#### Icons (in icons/ subfolder):
1. **homeseeker-icon.png** - App icon or logo for HomeSeeker
2. **moviesdb-icon.png** - App icon or logo for MoviesDB
3. **dalail-icon.png** - App icon or logo for Dalail Tarbawiyya
4. **unipath-icon.png** - Logo for UniPath Admin Panel
5. **portfolio-icon.png** - Personal logo or brand mark
6. **ecommerce-icon.png** - Shopping cart or store icon
7. **analytics-icon.png** - Chart or graph icon
8. **scripts-icon.png** - Terminal or code icon

## 🎨 Tips for Great Project Images:

### For Mobile Apps:
- Use device frames (mockups) to showcase the app
- Show key screens or features
- Consider using tools like:
  - Figma mockups
  - Device frames from MockUPhone
  - Android Studio screenshot tool with device frame

### For Mobile App Icons:
- Export the actual app icon from your project
- Use launcher icons (adaptive icons work great)
- Ensure transparent background
- Should be the icon users see on their phone

### For Web Projects:
- Full browser window screenshot
- Show the hero section or main interface
- Use tools like:
  - Full page screenshots (browser extensions)
  - Screely.com for browser mockups
  - Responsive design screenshots

### For Web Project Icons:
- Use your website logo or favicon
- Brand mark or symbol
- Can be a lettermark (first letter of project name)
- Keep it simple and recognizable

### For Coming Soon Projects:
- Create placeholder images with:
  - Gradient backgrounds
  - Tech stack icons
  - "Coming Soon" overlay
  - Tools like Canva or Figma

### For Icon Resources:
- **Your Own Assets**: Best option - use actual app/project icons
- **Icon Libraries**: Flaticon, Icons8, Iconfinder (check licenses)
- **Create Custom**: Figma, Canva, Adobe Illustrator
- **Placeholder**: Use category icon (phone for mobile, globe for web, etc.)

## 🚀 Quick Setup Steps:

1. Create the `public/projects` folder if it doesn't exist
2. Create the `public/projects/icons` subfolder
3. Add your project background images to `public/projects/`
4. Add your project icons to `public/projects/icons/`
5. Both images and icons will be automatically loaded
6. The hover effect will work automatically:
   - **No hover**: Icon visible on blurred background
   - **On hover**: Icon sweeps away, background unblurs smoothly

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

