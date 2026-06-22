# WFP LA South Bay — GitHub Pages Site

Single-page landing site for the Working Families Party LA South Bay chapter.

**Live site:** [https://www.wfplasouthbay.com/](https://www.wfplasouthbay.com/)

## Quick edits

| What to change | File |
|----------------|------|
| Outbound links (signup, donate, Discord, etc.) | `js/config.js` |
| Page copy and sections | `index.html` |
| Colors and layout | `css/styles.css` |
| Form behavior | `js/main.js` |

No build step required — edit files and push to `main` to deploy.

## Formspree setup (required before form works)

The contact form uses [Formspree](https://formspree.io/) with a placeholder form ID.

1. Create a free account at [formspree.io](https://formspree.io/).
2. Create a new form and set the notification email to `info@wfplasouthbay.com` (or your preferred inbox).
3. Copy your form ID (the part after `/f/` in the form URL).
4. Update `js/config.js`:
   ```js
   formspreeId: "YOUR_ACTUAL_FORM_ID",
   ```
5. Commit and push — `main.js` sets the form `action` automatically from `config.js`.

The form includes a honeypot field (`_gotcha`) for spam protection.

## Custom domain DNS

The repo includes a `CNAME` file set to `www.wfplasouthbay.com`.

At your domain registrar, add these records:

| Type | Host | Value |
|------|------|-------|
| CNAME | `www` | `<github-username>.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

Then in GitHub: **Settings → Pages → Custom domain** → enter `www.wfplasouthbay.com` and enable **Enforce HTTPS**.

Optional: redirect apex `wfplasouthbay.com` → `www.wfplasouthbay.com` at your registrar.

Allow up to 24 hours for DNS propagation and TLS certificate provisioning.

## GitHub Pages

- **Source:** Deploy from branch `main`, root `/`
- **Repo:** Public repository hosting these static files

## Outbound URLs

All parent-org links live in `js/config.js` and were verified from [caworkingfamilies.org](https://www.caworkingfamilies.org/) on 2026-06-21. Update them if CA WFP changes signup, donate, or organizer pages.

## License

Site content © California Working Families Party. Chapter volunteers may update copy and links as needed.
