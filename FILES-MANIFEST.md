# 📦 UrbanNest - Complete File Manifest

## 🎯 What to Upload to GitHub

**Total Files: 11**  
**Total Size: ~25 MB**  
**Upload Time: < 1 minute**

---

## 📋 File List

### 🔴 REQUIRED FILES (Upload These 8)

#### 1️⃣ **index.html** (Main Website)
- **Size:** ~85 KB
- **Purpose:** The complete website (HTML + CSS + JavaScript)
- **Contains:** 
  - Navigation header
  - Hero section with living room image
  - Services cards
  - About section with moodboard
  - Portfolio 2×2 grid
  - Contact section
  - Enquiry form (saves to Google Sheet)
  - Footer with links
  - Form validation & WhatsApp/Email/Instagram integration
- **Action:** Upload as-is

#### 2️⃣ **Code.gs** (Google Apps Script Backend)
- **Size:** ~2 KB
- **Purpose:** Handles form submissions → Saves to Google Sheet
- **Function:** 
  - Receives form data (name, email, phone)
  - Creates "Responses" sheet if missing
  - Appends row with timestamp
  - Returns JSON response
- **Action:** Upload as-is, then deploy in Google Apps Script

#### 3️⃣ **logo.png** (Urban Nest Logo)
- **Size:** ~1.5 MB
- **Purpose:** Header and footer branding
- **Used in:**
  - Navigation bar (top)
  - Footer (bottom)
- **Format:** PNG with transparency
- **Action:** Upload as-is

#### 4️⃣ **kitchen.png** (Portfolio Image 1)
- **Size:** ~2.3 MB
- **Purpose:** Portfolio gallery - Luxury kitchen
- **Used in:** Portfolio section (top-left)
- **Description:** Modern U-shaped kitchen with marble backsplash
- **Action:** Upload as-is

#### 5️⃣ **bedroom.png** (Portfolio Image 2)
- **Size:** ~2.2 MB
- **Purpose:** Portfolio gallery - Master bedroom
- **Used in:** Portfolio section (top-right)
- **Description:** Elegant bedroom with wood paneling & cityscape view
- **Action:** Upload as-is

#### 6️⃣ **dining.png** (Portfolio Image 3)
- **Size:** ~2.5 MB
- **Purpose:** Portfolio gallery - Dining room
- **Used in:** Portfolio section (bottom-left)
- **Description:** Modern dining with curved marble table & brass chandelier
- **Action:** Upload as-is

#### 7️⃣ **living-room.png** (Portfolio Image 4 + Hero)
- **Size:** ~2.3 MB
- **Purpose:** Portfolio gallery + Hero section background
- **Used in:**
  - Hero section (background with overlay)
  - Portfolio section (bottom-right)
- **Description:** Luxury living room with floor-to-ceiling windows
- **Action:** Upload as-is

#### 8️⃣ **moodboard.png** (About Section Image)
- **Size:** ~3.1 MB
- **Purpose:** Materials & design reference
- **Used in:**
  - About section (left image with border)
  - Contact section (subtle background texture)
- **Description:** Architecture plans, material swatches, design elements
- **Action:** Upload as-is

---

### 🟢 OPTIONAL FILES (For Documentation)

#### 9️⃣ **README.md** (Quick Reference)
- **Size:** <1 KB
- **Purpose:** Quick setup instructions
- **Contains:** Folder structure, usage options, requirements
- **Action:** Upload for reference (optional)

#### 🔟 **GITHUB-DEPLOY.md** (This Complete Guide)
- **Size:** <5 KB
- **Purpose:** Step-by-step GitHub Pages deployment
- **Contains:** All instructions, troubleshooting, FAQs
- **Action:** Upload for reference (optional)

#### 1️⃣1️⃣ **.gitignore** (Git Configuration)
- **Size:** <1 KB
- **Purpose:** Tells Git which files to ignore
- **Contains:** macOS, Windows, IDE, Node exclusions
- **Action:** Upload as-is (helps keep repo clean)

---

### 🟡 BONUS FILES (Tools & Guides)

#### 📊 **test-images.html** (Image Tester)
- **Purpose:** Tests if all images load correctly
- **When to use:** Debugging if images don't show
- **Action:** Upload (optional, useful for testing)

#### 📝 **SETUP-GUIDE.md** (Comprehensive Setup)
- **Purpose:** Detailed troubleshooting & customization guide
- **Action:** Upload for reference (optional)

#### ✅ **GITHUB-CHECKLIST.md** (Quick Checklist)
- **Purpose:** 5-minute step-by-step upload guide
- **Action:** Upload for reference (optional)

#### 📦 **FILES-MANIFEST.md** (This File)
- **Purpose:** Complete file documentation
- **Action:** This is what you're reading!

---

## 🎯 Minimum Upload (11 Files)

To get your website **fully working**, upload these 11:

```
✅ index.html              (Main website)
✅ Code.gs                 (Forms backend)
✅ logo.png                (Logo)
✅ kitchen.png             (Portfolio 1)
✅ bedroom.png             (Portfolio 2)
✅ dining.png              (Portfolio 3)
✅ living-room.png         (Portfolio 4 + Hero)
✅ moodboard.png           (About section)
✅ README.md               (Info)
✅ .gitignore              (Git config)
✅ GITHUB-DEPLOY.md        (Instructions)
```

---

## 📤 How to Upload to GitHub

### **Method 1: Website Upload (Easiest)**

1. Create repo at github.com/new
2. Click "uploading an existing file"
3. Drag & drop all 11 files
4. Write commit message
5. Click "Commit changes"
6. Enable Pages in Settings
7. **Done!** 🎉

### **Method 2: Git CLI (Advanced)**

```bash
git clone https://github.com/YOUR-USERNAME/urbannest.git
cd urbannest
cp /path/to/files/* .
git add .
git commit -m "Initial commit: UrbanNest website"
git push origin main
```

---

## ✨ Features After Upload

After uploading to GitHub Pages, all features work:

| Feature | Status |
|---------|--------|
| All images load | ✅ |
| Hero section | ✅ |
| Services cards | ✅ |
| About section | ✅ |
| Portfolio gallery | ✅ |
| Contact cards | ✅ |
| WhatsApp link | ✅ |
| Email link | ✅ |
| Instagram link | ✅ |
| Form submissions | ✅ |
| Google Sheet saving | ✅ |
| Mobile responsive | ✅ |
| Dark mode | ✅ |
| Smooth scrolling | ✅ |

---

## 📊 File Size Summary

```
Logo                    ~1.5 MB
Kitchen Image           ~2.3 MB
Bedroom Image           ~2.2 MB
Dining Image            ~2.5 MB
Living Room Image       ~2.3 MB
Moodboard Image         ~3.1 MB
HTML + CSS + JS         ~85 KB
Code.gs                 ~2 KB
Guides & Docs           ~20 KB
──────────────────────────────
TOTAL                   ~25 MB
```

---

## 🔐 GitHub Repository Structure

After upload, your repo looks like:

```
urbannest/
├── README.md
├── GITHUB-DEPLOY.md
├── GITHUB-CHECKLIST.md
├── FILES-MANIFEST.md
├── SETUP-GUIDE.md
├── test-images.html
├── .gitignore
├── index.html
├── Code.gs
├── logo.png
├── kitchen.png
├── bedroom.png
├── dining.png
├── living-room.png
└── moodboard.png
```

---

## ✅ Pre-Upload Checklist

Before uploading, verify:

- [ ] All 11 files downloaded
- [ ] No files are corrupted
- [ ] File names are **lowercase** (important!)
- [ ] Index.html opens in your browser locally
- [ ] All images visible when opened locally
- [ ] GitHub account created
- [ ] New repository created

---

## 🚀 Post-Upload Steps

After uploading to GitHub:

1. [ ] Enable GitHub Pages (Settings → Pages → Select main branch)
2. [ ] Wait 1-2 minutes for build
3. [ ] Visit: https://YOUR-USERNAME.github.io/urbannest/
4. [ ] Verify all features work
5. [ ] Share link with clients/team

---

## 🎨 File Dependencies

```
index.html (depends on)
├── logo.png
├── kitchen.png
├── bedroom.png
├── dining.png
├── living-room.png
└── moodboard.png

Code.gs (depends on)
└── Google Sheet (you create)
```

**Important:** All PNG files must be present for index.html to display correctly.

---

## 📝 Customization After Upload

Want to change something? Edit directly on GitHub:

**Change text:**
1. Open index.html in repo
2. Click pencil (edit)
3. Find text you want to change
4. Edit it
5. Click "Commit changes"

**Change images:**
1. Open image file
2. Click "..." → "Delete"
3. Upload new image with same filename
4. Commit

**Change contact info:**
In index.html, search for:
- `9538099479` → Your phone
- `connect.tourbannest@gmail.com` → Your email
- `u.r.b.a.n.n.e.s.t` → Your Instagram handle

---

## 🆘 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Images not showing | File names must be lowercase |
| Pages not loading | Wait 2-3 min, hard refresh (Ctrl+Shift+R) |
| 404 errors | Check Settings → Pages → main branch selected |
| Form not working | Verify AppScript URL in index.html |
| Links not working | Check URLs in index.html |

---

## 💡 Tips

✅ Keep repo **public** (required for free Pages)  
✅ File names are **case-sensitive** on GitHub servers  
✅ Changes live in **1-2 seconds** after commit  
✅ No build process needed (pure HTML/CSS/JS)  
✅ Free forever - no monthly costs  
✅ HTTPS automatically enabled  
✅ Custom domain support available  

---

## 📞 Support Resources

- GitHub Pages Docs: https://pages.github.com
- GitHub Help: https://help.github.com
- Troubleshooting: See SETUP-GUIDE.md
- Deployment Steps: See GITHUB-DEPLOY.md

---

## 🎉 You're Ready!

Everything is prepared. Just upload to GitHub and you're done.

**No hidden files, no missing dependencies, no complexity.**

Simple, clean, professional. ✨

---

**Created for UrbanNest Design & Construction**
