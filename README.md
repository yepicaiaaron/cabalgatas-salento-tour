# 🐴 Cabalgatas Salento Tour - Luxury Website

A stunning, high-end parallax website for a premium horseback riding tour company in Salento, Colombia.

![Cabalgatas Salento](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800)

## ✨ Features

### 🐎 Galloping Horse Animation
- **Scroll-synced horse silhouette** that gallops across the screen as you scroll
- **Dynamic animation speed** - scroll faster = horse gallops faster
- **Realistic animations** including leg movement, body bobbing, tail swishing, and mane flowing
- **Dust particle effects** trailing behind the horse
- **Final gallop animation** in the footer section

### 🎨 Premium Design
- **Luxury color palette** inspired by the Colombian coffee region
- **Elegant typography** using Cormorant Garamond and Montserrat
- **Parallax scrolling** with multiple background layers
- **Smooth scroll-reveal animations** for content sections
- **Responsive design** optimized for mobile, tablet, and desktop

### 📱 Sections
1. **Hero** - Dramatic hero with animated title and call-to-action
2. **About/Experience** - Four feature cards highlighting the experience
3. **Tours & Pricing** - Three pricing tiers with elegant cards
4. **WhatsApp CTA** - Prominent booking section
5. **Gallery** - Image grid with lightbox functionality
6. **Footer** - Contact information and final horse animation

### 💬 WhatsApp Integration
- **Fixed floating WhatsApp button** that appears after scrolling
- **Pre-filled booking messages** for each tour package
- **Mobile-optimized** WhatsApp links

### ♿ Accessibility
- **Reduced motion support** for users with motion sensitivity
- **Semantic HTML** structure
- **Keyboard navigation** support
- **ARIA labels** for interactive elements

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser:
```bash
open index.html
```

### Option 2: Local Server (Recommended)
For the best experience with all features working correctly:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### Option 3: Deploy to Hosting
Upload all files to any static web hosting:
- Netlify
- Vercel
- GitHub Pages
- Any web server

## 📁 File Structure

```
cabalgatas-salento/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # All JavaScript
└── README.md           # This file
```

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `css/styles.css`:

```css
:root {
    --color-primary: #2C1810;      /* Main dark brown */
    --color-secondary: #5D3A1A;    /* Secondary brown */
    --color-accent: #C9A962;       /* Gold accent */
    --color-cream: #F5F0E8;        /* Background cream */
    --color-sage: #7A8B6E;         /* Green accent */
    --color-forest: #3D4F3A;       /* Dark green */
}
```

### Changing WhatsApp Number
Replace the phone number in `index.html`:

```html
<!-- Replace 573123456789 with your number -->
<a href="https://wa.me/573123456789?text=...">
```

And in `js/main.js`:
```javascript
const WHATSAPP_NUMBER = '573123456789';
```

### Changing Prices
Edit the pricing section in `index.html`:

```html
<div class="pricing-price">
    <span class="price-currency">$</span>
    <span class="price-amount">180,000</span>  <!-- Change this -->
    <span class="price-unit">COP</span>
</div>
```

### Changing Images
Replace the Unsplash URLs in `index.html` with your own images:

```html
<img src="YOUR_IMAGE_URL" alt="Description">
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No framework dependencies
- **GSAP** - Advanced animations (loaded via CDN)
- **Google Fonts** - Cormorant Garamond & Montserrat

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐎 Horse Animation Details

The horse animation consists of:

1. **SVG Silhouette** - Custom-designed horse with articulated legs
2. **CSS Keyframe Animations**:
   - `gallop` - Leg rotation simulating running
   - `bodyBob` - Up and down body movement
   - `tailSwish` - Tail swaying
   - `maneFlow` - Mane blowing in wind
   - `dustFloat` - Dust particles behind horse

3. **JavaScript Control**:
   - Scroll position determines horse position
   - Scroll velocity determines animation speed
   - Dust particles generated dynamically

## 📝 SEO & Meta Tags

The site includes:
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text on all images
- Mobile viewport configuration

For production, add these to the `<head>`:

```html
<meta name="description" content="Cabalgatas Salento Tour - Experiencias de cabalgata de lujo en el Valle de Cocora, Colombia.">
<meta name="keywords" content="cabalgatas, Salento, Valle de Cocora, Colombia, turismo, caballos">
<meta property="og:title" content="Cabalgatas Salento Tour">
<meta property="og:description" content="Donde la aventura encuentra el alma">
<meta property="og:image" content="URL_TO_PREVIEW_IMAGE">
```

## 🤝 Credits

- **Images**: Unsplash photographers
- **Icons**: Emoji & SVG
- **Fonts**: Google Fonts
- **Animations**: GSAP & Custom CSS

## 📄 License

This website template is created for Cabalgatas Salento Tour.

---

Made with ❤️ in the Colombian Coffee Region
