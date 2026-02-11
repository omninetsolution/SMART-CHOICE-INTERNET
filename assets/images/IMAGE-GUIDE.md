# ConnectCare Image Assets

## Image Sources & Credits

All images used in this website are sourced from Unsplash.com under their free license.

### Homepage Images

1. **Hero Image**
   - URL: `https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop`
   - Description: Technology network connectivity
   - Used in: Hero section

2. **Process Section - Image Grid**
   - Image 1: `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop`
     Description: Customer support call
   - Image 2: `https://images.unsplash.com/photo-1551135049-83ab32937082?w=400&h=300&fit=crop`
     Description: Technical guidance
   - Image 3: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop`
     Description: Data analytics

3. **Common Issues Section - Sticky Background**
   - URL: `https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop`
   - Description: Network server room
   - Used as: Parallax background

### About Page Images

1. **Story Section**
   - URL: `https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=800&fit=crop`
   - Description: Team collaboration
   - Used in: Our Story section

2. **Mission Section - Sticky Background**
   - URL: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop`
   - Description: Business meeting team
   - Used as: Parallax background

### How We Help Page Images

1. **Service Categories - Sticky Background**
   - URL: `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop`
   - Description: Laptop workspace
   - Used as: Parallax background

### Contact Page Images

1. **Contact Visual**
   - URL: `https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=800&fit=crop`
   - Description: Customer support headset
   - Used in: Primary contact section

2. **Page Header Image**
   - URL: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=400&fit=crop`
   - Description: Laptop keyboard hands
   - Used in: Page header

### FAQ Page Images

1. **Page Header - Sticky Background**
   - URL: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=600&fit=crop`
   - Description: Office desk notes
   - Used as: Parallax background

### WiFi Help Landing Page Images

1. **Process Section - Sticky Background**
   - URL: `https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&h=1080&fit=crop`
   - Description: Network technology
   - Used as: Parallax background

2. **Problems Section - Sticky Background**
   - URL: `https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop`
   - Description: Digital world map
   - Used as: Parallax background

### Slow Internet Landing Page Images

1. **Expectations Section - Sticky Background**
   - URL: `https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&h=1080&fit=crop`
   - Description: Coding laptop screen
   - Used as: Parallax background

2. **Causes Section - Sticky Background**
   - URL: `https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop`
   - Description: Server technology
   - Used as: Parallax background

### No Internet Landing Page Images

1. **Problems Section - Sticky Background**
   - URL: `https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&h=1080&fit=crop`
   - Description: Abstract technology
   - Used as: Parallax background

### 404 Error Page Images

1. **Error Hero - Sticky Background**
   - URL: `https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=1920&h=1080&fit=crop`
   - Description: Error warning screen
   - Used as: Parallax background

---

## Image Implementation

All images are loaded via Unsplash CDN with dynamic parameters:
- `w=<width>` - Width in pixels
- `h=<height>` - Height in pixels
- `fit=crop` - Crops to fill dimensions

### Benefits:
✅ No local storage needed
✅ Automatic optimization
✅ Fast CDN delivery
✅ Responsive sizing
✅ Free licensing

### To Replace with Custom Images:

1. Download images from Unsplash or use your own
2. Save to `/assets/images/` folder
3. Replace URLs in HTML files
4. Use descriptive filenames (e.g., `hero-connectivity.jpg`)

### Recommended Image Sizes:

- **Hero images**: 1600x1000px
- **Section images**: 1200x800px
- **Content images**: 800x600px
- **Thumbnail images**: 400x300px
- **Background images**: 1920x1080px

### Image Optimization Tips:

1. Compress all images (TinyPNG, ImageOptim)
2. Use WebP format for modern browsers
3. Implement lazy loading for offscreen images
4. Provide alt text for accessibility
5. Consider using `<picture>` element for responsive images

---

## Sticky Background Images

The website uses `background-attachment: fixed` for parallax sticky backgrounds:

```css
.sticky-bg {
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}
```

This creates an elegant parallax effect where content scrolls over fixed background imagery.

---

**Last Updated**: February 11, 2026
**Total Images**: 15+ across all pages
**Image Source**: Unsplash.com
**License**: Free to use (Unsplash License)
