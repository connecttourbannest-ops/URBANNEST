# 🏠 UrbanNest Website - Complete Setup Guide

## 📦 What You Have

- **index.html** - Main website (with all styling & forms embedded)
- **Code.gs** - Google Apps Script backend
- **6 PNG Images** - Logo, Kitchen, Bedroom, Dining, Living Room, Moodboard
- **test-images.html** - Image loading test tool
- **README.md** - Quick reference

---

## ✅ Step 1: Verify Files

Make sure you have **ALL these files in the SAME folder**:

```
my-website-folder/
├── index.html ✓
├── Code.gs ✓
├── logo.png ✓
├── kitchen.png ✓
├── bedroom.png ✓
├── dining.png ✓
├── living-room.png ✓
├── moodboard.png ✓
├── test-images.html (optional)
└── README.md (optional)
```

---

## 🚀 Step 2: Test Images

**Before opening the full website:**

1. **Double-click `test-images.html`** in your folder
2. **Check the image test page** - each image should show:
   - ✓ Green "Loaded Successfully" → Images are fine
   - ✗ Red "Failed to Load" → See troubleshooting below

---

## 🌐 Step 3: Open the Website

### Option A: Local (Offline) - Fastest ⚡
1. **Double-click `index.html`** - Opens in your default browser
2. Website works **instantly**, no internet needed
3. ✅ All images load from same folder

### Option B: Online (Permanent) - Recommended for Production 🌍
Upload all files to a free host:

**Netlify** (Easiest):
1. Go to https://netlify.com
2. Drag & drop your folder
3. ✅ Get a live URL instantly

**Vercel** (Also Easy):
1. Go to https://vercel.com
2. Upload your files
3. ✅ Get a live URL

**GitHub Pages** (Free):
1. Create GitHub repo
2. Upload all files
3. Enable Pages in Settings
4. ✅ Get a live URL

---

## 🔧 Troubleshooting

### Images Not Showing (Red Error in Test)

**Problem 1: Files not in same folder**
- Solution: Copy ALL files into one folder together
- Check: Windows/Mac shouldn't separate them

**Problem 2: File names have different case**
- ❌ Wrong: `Logo.PNG` (capital P)
- ✅ Correct: `logo.png` (lowercase)
- Solution: Rename files to exactly match HTML

**Problem 3: Opening from ZIP without extracting**
- ❌ Don't: Open from inside ZIP file
- ✅ Do: Extract ZIP first, then open HTML

**Problem 4: Browser cache**
- Solution: Hard refresh → Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Images Work Locally but Not Online

**Problem**: Relative paths might be case-sensitive on some servers
- Solution: Re-upload ensuring file names are **lowercase**
  - ✓ logo.png
  - ✓ kitchen.png
  - ✓ bedroom.png
  - ✓ dining.png
  - ✓ living-room.png
  - ✓ moodboard.png

---

## 📋 Features Checklist

- ✅ **Navigation** - Links to Home, About, Services, Portfolio, Contact
- ✅ **Hero Section** - Living room background image + call-to-action
- ✅ **Services** - 4-card grid with descriptions
- ✅ **About Section** - Moodboard image + company story
- ✅ **Portfolio** - 2×2 grid with real project images
- ✅ **Contact Cards** - Phone (WhatsApp), Email, Instagram (clickable)
- ✅ **Form** - Name, Email, Phone (saves to Google Sheet)
- ✅ **Responsive** - Works on mobile, tablet, desktop
- ✅ **Dark Mode** - Contact form & footer with elegant styling

---

## 🔗 Interactive Elements

All working automatically:

| Element | Action | Result |
|---------|--------|--------|
| Phone Number | Click | Opens WhatsApp (+91 9538099479) |
| Email | Click | Opens email client (connect.tourbannest@gmail.com) |
| Instagram | Click | Opens Instagram profile (@u.r.b.a.n.n.e.s.t) |
| "Explore Portfolio" | Click | Scrolls to portfolio section |
| Form Submit | Click | Data goes to your Google Sheet |

---

## 📊 Form Submissions

The form automatically saves to Google Sheets:
- **Columns**: Timestamp | Name | Email | Phone
- **Sheet Name**: "Responses" (auto-created if missing)
- **Data Source**: Your AppScript URL (already configured)

**To see submissions:**
1. Open the Google Sheet connected to your AppScript
2. Go to "Responses" tab
3. New entries appear automatically

---

## 🎨 Customization

Want to change something? Here's what to modify in `index.html`:

```html
<!-- Change phone number -->
<a href="https://wa.me/919538099479">9538099479</a>

<!-- Change email -->
<a href="mailto:connect.tourbannest@gmail.com">Email</a>

<!-- Change Instagram -->
<a href="https://www.instagram.com/u.r.b.a.n.n.e.s.t/">Instagram</a>

<!-- Change logo -->
<img src="logo.png" alt="Logo">

<!-- Change colors - Search for these in <style> section -->
--gold: #c5a880;        /* Primary accent color */
--dark: #121212;        /* Dark text/backgrounds */
--light-bg: #faf8f5;   /* Light backgrounds */
```

---

## 📱 Mobile Optimization

Website is fully responsive:
- **Mobile** (< 640px) - Single column, optimized buttons
- **Tablet** (640px - 1024px) - 2-column layouts
- **Desktop** (1024px+) - Full layouts with animations

---

## ❓ FAQ

**Q: Can I use this on my phone?**
A: Yes! Upload to a host (Netlify/Vercel) and share the link.

**Q: Can I edit the text?**
A: Yes, edit `index.html` in any text editor (search for the text you want to change).

**Q: How do I get my own domain?**
A: Buy from Namecheap/GoDaddy, then connect to your Netlify/Vercel project.

**Q: Will form submissions work offline?**
A: No, Google Sheet needs internet. But the form will still submit when online.

**Q: Can I add more services/portfolio items?**
A: Yes, copy-paste the card HTML and modify the text/images.

---

## 🎯 Next Steps

1. ✅ Download all files
2. ✅ Keep them in same folder
3. ✅ Run test-images.html to verify
4. ✅ Open index.html to see the website
5. ✅ (Optional) Upload to Netlify for online access

---

## 💬 Support

If you get stuck:
1. Check README.md
2. Run test-images.html
3. Check browser console (F12 → Console tab)
4. Verify all files are in same folder
5. Try uploading to Netlify (frees you from folder issues)

---

**Made with ❤️ by UrbanNest Design & Construction**
