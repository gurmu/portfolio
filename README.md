# Portfolio Website

This site is built with Jekyll and hosted on GitHub Pages.

## Quick Start (GitHub Pages)
1. Create a GitHub repo named `your-username.github.io`.
2. Upload the contents of this folder to that repo.
3. In GitHub, go to **Settings > Pages** and select the `main` branch root.
4. Your site will be live at `https://your-username.github.io`.

## Add a Blog Post
1. Create a new file in `_posts` named `YYYY-MM-DD-title.md`.
2. Use this front matter:

```yaml
---
layout: default
title: "Your Post Title"
date: YYYY-MM-DD
---
```

3. Write your content below the front matter.

## Newsletter / Subscription
The subscribe form currently sends an email to `agurmu@gmail.com` using FormSubmit. This lets you manually add subscribers.

If you want automated subscriptions, replace the form action in `index.html` with a provider of your choice (Buttondown, Substack, Mailchimp). The RSS feed is available at `/feed.xml`.

## Notes
- Legacy files were moved into `archive/legacy/`.
- Update `_config.yml` with your preferred title/description if needed.
