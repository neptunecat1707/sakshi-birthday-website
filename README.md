# Sakshi's Birthday Website 🎉

A modern, responsive personal birthday website built with Next.js, featuring interactive animations, confetti effects, and a wishes collection system.

## ✨ Features

- **Modern Design**: Responsive layout with gradient backgrounds and smooth animations
- **Interactive Animations**: Framer Motion animations and canvas-confetti effects
- **Wishes Collection**: 9 customizable wish slots with persistent storage
- **Birthday Theme**: Personalized content for Sakshi's 22nd birthday
- **Mobile Responsive**: Optimized for all device sizes
- **Local Storage**: Wishes are saved locally in the browser
- **API Routes**: Backend support for wishes management

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Effects**: Canvas Confetti
- **Icons**: Lucide React
- **Language**: TypeScript
- **Storage**: Local Storage + JSON API

## 📁 Project Structure

```
sakshi-website/
├── src/
│   ├── app/
│   │   ├── api/wishes/          # API routes for wishes
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main page
│   ├── components/
│   │   ├── HeroSection.tsx      # Birthday hero section
│   │   ├── ActivitiesSection.tsx # Activities suggestions
│   │   ├── PlaylistSection.tsx  # Music playlist section
│   │   ├── WishesSection.tsx    # Wishes collection
│   │   ├── WishModal.tsx        # Modal for adding/editing wishes
│   │   └── Footer.tsx           # Footer component
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   └── lib/                     # Utility functions
├── public/                      # Static assets
├── data/                        # JSON data storage
└── package.json
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sakshi-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:12000](http://localhost:12000)

## 📜 Available Scripts

- `npm run dev` - Start development server on port 12000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run export` - Export static files (for static hosting)

## 🎨 Customization

### Changing Content
- **Name**: Replace "Sakshi" in components with desired name
- **Age**: Replace "22" throughout the codebase
- **Activities**: Modify the `activities` array in `ActivitiesSection.tsx`
- **Wish Slots**: Update `initialSlots` in `WishesSection.tsx`

### Styling
- **Colors**: Modify Tailwind classes in components
- **Animations**: Adjust Framer Motion configurations
- **Layout**: Update component structures as needed

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### GitHub Pages
1. Run `npm run build`
2. Deploy the `out` folder to GitHub Pages

### Other Platforms
The app is configured for deployment on:
- Netlify
- Railway
- DigitalOcean App Platform
- Any Node.js hosting service

## 🎯 Wishes System

The wishes collection includes:
- **9 Pre-defined Slots**: Friend 1-3, Family Members, Colleagues, etc.
- **CRUD Operations**: Add, edit, delete wishes
- **Image Support**: Upload images or use URLs
- **Persistent Storage**: Saves to localStorage and optional JSON API
- **Responsive Design**: Works on all devices

### Wish Structure
```typescript
interface Wish {
  id: string;
  recipientName: string;
  message: string;
  authorName: string;
  image?: string;
  createdAt: string;
}
```

## 🎊 Animations & Effects

- **Confetti**: Triggers on page load
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive button and card animations
- **Modal Transitions**: Smooth modal open/close animations

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality.

### Next.js Configuration
- **Images**: Configured to allow external image URLs
- **API Routes**: Set up for wishes management
- **Static Export**: Configured for static hosting

## 🐛 Troubleshooting

### Common Issues
1. **Port already in use**: Change port in package.json scripts
2. **Images not loading**: Check Next.js image configuration
3. **Wishes not saving**: Verify localStorage is enabled

### Development Tips
- Use browser dev tools to debug animations
- Check console for any JavaScript errors
- Ensure all dependencies are installed

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Credits

- Design inspired by [ash-day.vercel.app](https://ash-day.vercel.app/)
- Wishes system based on [happy-birthday-aarin](https://github.com/AlenVelocity/happy-birthday-aarin)
- Built with love for Sakshi's 22nd birthday!

---

**Happy Birthday Sakshi! 🎂✨**

Made with 💜 by the development team
