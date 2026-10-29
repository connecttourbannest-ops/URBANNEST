# 🚀 Deploy UrbanNest on GitHub Pages (FREE)

## 📋 Quick Summary

You have **everything you need**. Just upload to GitHub and it's live in minutes.

---

## ✅ Step 1: Create GitHub Account

1. Go to **https://github.com**
2. Click **Sign Up**
3. Create account with email

---

## ✅ Step 2: Create a New Repository

1. Click **+** icon (top right) → **New Repository**
2. **Repository Name**: `urbannest` (or any name)
3. **Description**: "Urban Nest - Interior Design Website"
4. **Public** (required for free GitHub Pages)
5. **DO NOT** check "Add README" (we have our own)
6. Click **Create Repository**

---

## ✅ Step 3: Upload Files

### **Option A: Using GitHub Website (Easiest)**

1. You'll see an empty repo page
2. Click **uploading an existing file**
3. **Drag & drop ALL these files:**
   - index.html
   - Code.gs
   - logo.png
   - kitchen.png
   - bedroom.png
   - dining.png
   - living-room.png
   - moodboard.png
   - README.md
   - .gitignore

4. Write message: "Initial commit: UrbanNest website"
5. Click **Commit changes**

### **Option B: Using Git Command Line (Pro)**

```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/urbannest.git
cd urbannest

# Copy all files into this folder
# Then:
git add .
git commit -m "Initial commit: UrbanNest website"
git push origin main
```

---

## ✅ Step 4: Enable GitHub Pages

1. Go to **Settings** (top right of repo)
2. Scroll down to **Pages** (left sidebar)
3. **Source**: Select `main` branch
4. **Folder**: Select `/ (root)`
5. Click **Save**

**Wait 1-2 minutes...**

You'll see: "Your site is published at https://YOUR-USERNAME.github.io/urbannest/"

---

## 🌐 Your Live Website

Your website is now live at:

```
https://YOUR-USERNAME.github.io/urbannest/
```

**Share this link with anyone** - images load perfectly! ✅

---

## 📸 What's Included & Works

✅ **All Images Load** (logo, kitchen, bedroom, dining, living-room, moodboard)  
✅ **Form Submissions** → Saves to Google Sheet  
✅ **WhatsApp Link** → Click phone number  
✅ **Email Link** → Click email  
✅ **Instagram Link** → Opens profile  
✅ **Portfolio Navigation** → Clicks scroll smoothly  
✅ **Responsive Design** → Mobile, tablet, desktop  
✅ **Dark Mode** → Contact & form styling  

---

## 🔄 Update Website Later

Want to change something?

1. **From GitHub Website:**
   - Open `index.html`
   - Click edit (pencil icon)
   - Make changes
   - Click **Commit changes**

2. **From Your Computer:**
   ```bash
   cd urbannest
   # Edit files in your editor
   git add .
   git commit -m "Updated content"
   git push origin main
   ```

Changes appear on your live website in **1-2 seconds**! ⚡

---

## 🎯 File Structure in GitHub

Your repo should look like this:

```
urbannest/
├── index.html              ✓ Main website
├── Code.gs                 ✓ Backend script
├── logo.png                ✓ Logo
├── kitchen.png             ✓ Portfolio image 1
├── bedroom.png             ✓ Portfolio image 2
├── dining.png              ✓ Portfolio image 3
├── living-room.png         ✓ Portfolio image 4
├── moodboard.png           ✓ About image
├── README.md               ✓ Info file
├── GITHUB-DEPLOY.md        ✓ This file
├── SETUP-GUIDE.md          ✓ Setup guide
├── test-images.html        ✓ Test tool
└── .gitignore              ✓ Git config
```

---

## 🔐 Custom Domain (Optional)

Want `yourname.com` instead of `github.com/...`?

1. Buy domain from **Namecheap** (~$10/year)
2. Go to repo **Settings → Pages**
3. Under **Custom domain**, enter `yourname.com`
4. Update domain DNS settings (Namecheap guide provided)
5. ✅ Website now at `https://yourname.com`

---

## ✨ Extra Features

### **Add Google Analytics** (Track visitors)
```html
<!-- Add this before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### **Add Contact Form Notifications** (Email on submission)
Already configured! Form goes to your Google Sheet.

---

## 🆘 Troubleshooting

**Images not showing?**
- GitHub Pages serves files correctly
- Check file names are **lowercase**
- Hard refresh: Ctrl+Shift+R

**Form not working?**
- Verify AppScript URL is correct in index.html
- Check Google Sheet "Responses" tab exists
- Test with test-images.html first

**Changes not updating?**
- Wait 1-2 minutes for GitHub Pages to rebuild
- Hard refresh your browser: Ctrl+Shift+R
- Check repo shows your latest changes

---

## 📊 Monitor Your Website

### **View Traffic:**
1. Go to repo **Insights → Traffic**

### **Check Deployments:**
1. Go to repo **Deployments**
2. See all updates & timestamps

### **See Website Statistics:**
1. Add Google Analytics (see above)
2. Track visitors, pages, behavior

---

## 🎉 You're Done!

Your website is now:
- ✅ **Live** - Accessible globally
- ✅ **Professional** - GitHub domain
- ✅ **Free** - No hosting fees
- ✅ **Secure** - HTTPS encrypted
- ✅ **Automatic** - Updates instantly
- ✅ **Backed up** - Git version control

**Share your link:**
```
https://YOUR-USERNAME.github.io/urbannest/
```

---

## 📞 Quick Reference

| Task | Steps |
|------|-------|
| **First upload** | Create repo → Upload files → Enable Pages |
| **Edit page** | Edit file → Commit → Wait 1-2 min |
| **Share website** | Copy GitHub Pages URL |
| **Add domain** | Buy domain → Settings → Custom domain |
| **Track visitors** | Add Google Analytics |

---

## 🚀 Next Steps

1. ✅ Create GitHub account
2. ✅ Create `urbannest` repository
3. ✅ Upload 11 files
4. ✅ Enable GitHub Pages
5. ✅ Share live link
6. ✅ Watch it work!

**That's it! Completely free & professional.** 🎉

---

*Made with ❤️ by UrbanNest*
