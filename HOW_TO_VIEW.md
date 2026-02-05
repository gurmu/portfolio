# How to View Your Portfolio Website

## ✅ OPTION 1: View on GitHub Pages (EASIEST - NO SETUP NEEDED)

Your website is automatically published at:
**https://gurmu.github.io/portfolio/**

After you push changes to GitHub, wait 1-2 minutes for GitHub Pages to rebuild, then refresh your browser.

### Troubleshooting GitHub Pages
If you get a 404 error, check your GitHub repository settings:
1. Go to https://github.com/gurmu/portfolio/settings/pages
2. Ensure "Source" is set to "Deploy from a branch"
3. Ensure "Branch" is set to "main" and folder is "/ (root)"
4. Click "Save" if you made changes

---

## ⚙️ OPTION 2: Run Jekyll Locally (For Development)

If you want to preview changes before pushing to GitHub, install Jekyll:

### Step 1: Install Ruby
1. Download Ruby+Devkit from: https://rubyinstaller.org/downloads/
2. Install with default options
3. Check installation: `ruby --version`

### Step 2: Install Jekyll
```powershell
gem install jekyll bundler
```

### Step 3: Run Local Server
```powershell
cd "c:\Users\Ashu\Desktop\Personal Portfolio Website"
bundle install
bundle exec jekyll serve
```

Then visit: **http://localhost:4000/portfolio/**

---

## 🚫 Why Opening index.html Directly Doesn't Work

When you open `index.html` directly in your browser (as `file:///...`), you see plain text because:

1. **Jekyll isn't processing the file**: The `{{ ... }}` template tags aren't converted
2. **CSS paths are broken**: Relative paths don't work with `file://` protocol
3. **No server**: Jekyll sites need a web server to work properly

**Solution**: Always use GitHub Pages (Option 1) or run Jekyll locally (Option 2).

---

## 📝 Workflow for Making Changes

1. **Edit files** locally in your favorite editor
2. **Test locally** (if Jekyll is installed): `bundle exec jekyll serve`
3. **Commit changes**: `git add .` and `git commit -m "your message"`
4. **Push to GitHub**: `git push origin main`
5. **View on GitHub Pages**: https://gurmu.github.io/portfolio/
   - Wait 1-2 minutes for rebuild
   - Refresh browser (Ctrl+F5 to clear cache)

---

## 🎯 Quick Commands

### Push Changes to GitHub
```powershell
cd "c:\Users\Ashu\Desktop\Personal Portfolio Website"
git add .
git commit -m "Updated portfolio content"
git push origin main
```

### View Site
Just visit: **https://gurmu.github.io/portfolio/**

---

## ✨ Your Enhanced Portfolio Features

Once you view it on GitHub Pages, you'll see:
- 🌙 Dark mode toggle (top right)
- 📊 Scroll progress bar
- ⬆️ Back to top button
- ✨ Smooth scroll animations
- 🎨 Vibrant gradients and glassmorphism
- 💫 Hover effects on all cards

**Enjoy your premium portfolio! 🚀**
