# Prof. Dr. Dries Faems - Professional Website

A modern, single-page professional website showcasing academic profile, research interests, publications, and contact information.

## 🌟 Features

- **Single-page design** with smooth scrolling navigation
- **Responsive layout** optimized for mobile, tablet, and desktop
- **WHU brand colors** (Navy #002855, professional blue palette)
- **Accessibility compliant** (WCAG 2.2 Level AA)
- **Modern animations** with fade-in effects and smooth transitions
- **No dependencies** - Pure HTML, CSS, and vanilla JavaScript

## 📁 File Structure

```
design_website/
├── index.html          # Main HTML file with all content
├── css/
│   └── styles.css      # Complete styling with WHU branding
├── js/
│   └── main.js         # Interactive features (navigation, animations)
├── images/
│   └── profile.jpg     # Profile photo (currently placeholder SVG)
└── README.md           # This file
```

## 🚀 Getting Started

### Viewing the Website

1. **Open locally:** Double-click [index.html](index.html) to open in your default browser
2. **Or use a local server:**
   ```bash
   # Python 3
   python -m http.server 8000

   # Then visit: http://localhost:8000
   ```

### Customization

#### 1. Replace Profile Photo

Replace [images/profile.jpg](images/profile.jpg) with your professional headshot:
- Recommended size: 300x300px or larger (square format)
- Supported formats: JPG, PNG, or WebP
- Keep the filename as `profile.jpg` or update the `<img>` tag in index.html

#### 2. Update Content

Edit [index.html](index.html) to customize:
- **Hero section:** Name, title, institution, GenAI expertise
- **About section:** Bio text and current positions
- **GenAI Workshops section:** YouTube channel, executive education programs
- **Research section:** Research interests and focus areas
- **Publications section:** Featured publications and links
- **Career section:** Education and academic positions
- **Contact section:** Email, location, and professional links

#### 3. Modify Design

Edit [css/styles.css](css/styles.css) to change:
- **Colors:** Modify CSS variables at the top of the file (`:root` section)
- **Fonts:** Change `--font-heading` and `--font-body` variables
- **Spacing:** Adjust spacing variables for more/less whitespace
- **Layout:** Modify grid columns and breakpoints for different layouts

## 🎨 WHU Brand Colors

The website uses official WHU colors:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Navy Blue | `#002855` | Headers, links, accents |
| Dark Navy | `#001a3d` | Text, strong emphasis |
| White | `#ffffff` | Primary background |
| Light Gray | `#f5f7fa` | Alternate section backgrounds |
| Medium Blue | `#0066cc` | Interactive elements |

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 767px (single column layout)
- **Tablet:** 768px - 1023px (two-column layout)
- **Desktop:** 1024px+ (full multi-column layout)

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels for navigation and interactive elements
- Keyboard navigation support (Tab, Enter keys)
- Visible focus indicators
- Skip-to-content link for screen readers
- Minimum color contrast ratios (WCAG 2.2 AA)
- Respects `prefers-reduced-motion` user preference
- Alt text for all images

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop your website folder
3. Get instant deployment with HTTPS

### Option 3: Vercel (Free)

1. Create account at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with automatic HTTPS

### Option 4: WHU Hosting

Contact WHU IT services about hosting on WHU servers with a custom domain (e.g., faems.whu.edu).

## 🔧 Technical Details

- **HTML Version:** HTML5
- **CSS Version:** CSS3 (Grid, Flexbox, Custom Properties)
- **JavaScript:** ES6+ (Vanilla JS, no frameworks)
- **Fonts:** Google Fonts (Inter, Playfair Display)
- **Icons:** Inline SVG icons (no icon library required)
- **Performance:** Target page load < 2 seconds
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)

## 📝 Sections Overview

### 1. Hero Section
- Large profile photo
- Name and title
- Quick social media links
- Eye-catching gradient background

### 2. About Section
- Professional biography (3 paragraphs)
- Current positions and affiliations
- Two-column layout (desktop) / single column (mobile)

### 3. GenAI Workshops Section
- Prominent YouTube Channel showcase (GenAI Nerd Channel)
- WHU Executive Education Programs:
  - Online Bootcamp: Mastering GenAI Trends & Tools
  - Innovation & Corporate Entrepreneurship Essentials
  - Custom Corporate Workshops
- WHU & OpenAI Collaboration highlight
- Eye-catching design with YouTube branding

### 4. Research Interests
- Grid of research focus areas
- Icon-based cards with descriptions
- Hover effects for interactivity

### 5. Publications Section
- Featured publications list
- Citation count highlight
- Link to full ResearchGate profile
- Professional formatting with hover effects

### 6. Academic Background
- Education timeline
- Career progression timeline
- Visual markers for current position

### 7. Contact Section
- Email and location information
- Professional profile links
- Clean, accessible layout

## 🎯 Best Practices Implemented

✅ Mobile-first responsive design
✅ Semantic HTML for better SEO
✅ Optimized performance (no heavy frameworks)
✅ Accessibility compliance (WCAG 2.2 AA)
✅ Clean, maintainable code
✅ Professional WHU branding
✅ Cross-browser compatibility
✅ Print-friendly styles

## 📊 Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (phone, tablet)
- [ ] Verify all links work correctly
- [ ] Check smooth scrolling navigation
- [ ] Test mobile menu toggle
- [ ] Verify form responsiveness
- [ ] Run Lighthouse audit (target 90+ scores)
- [ ] Validate HTML with W3C validator
- [ ] Test keyboard navigation
- [ ] Check color contrast ratios

## 🆘 Troubleshooting

### Issue: Fonts not loading
**Solution:** Check internet connection (Google Fonts requires internet). Alternatively, download and self-host fonts.

### Issue: Images not displaying
**Solution:** Verify file paths are correct and case-sensitive. Ensure `images/profile.jpg` exists.

### Issue: JavaScript not working
**Solution:** Check browser console for errors. Ensure `main.js` is loaded with `defer` attribute.

### Issue: Mobile menu not working
**Solution:** Clear browser cache and reload. Verify JavaScript is enabled.

## 📈 Future Enhancements

Consider adding these features later:

- **Blog Integration:** Link to Medium articles or add blog section
- **Publications Database:** Searchable/filterable publication list
- **Teaching Section:** Course information and resources
- **News/Updates:** Latest achievements and speaking engagements
- **Contact Form:** Direct message capability
- **Dark Mode:** User preference toggle
- **Multilingual:** German/English language switcher
- **Analytics:** Google Analytics or privacy-friendly alternative

## 📧 Support

For questions or issues:
- Email: dries.faems@whu.edu
- WHU IT Support: [Contact WHU](https://www.whu.edu)

## 📄 License

© 2026 Prof. Dr. Dries Faems. All rights reserved.

---

**Built with Claude Code** | Last updated: January 2026