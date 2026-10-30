# Chandrika Rama Priya Bandaru – Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide React.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview
```
Requires Node.js 18+.

## Edit your content
Everything lives in **`src/data/portfolio.js`**: profile, skills, projects, internships, certifications, coding profiles.
- **Email:** set `profile.email` (it is intentionally empty; no email is invented).
- **Project demo:** add a `demo` URL to a project and a Live Demo button appears.

## Add your resume
1. Export your resume as a PDF.
2. Replace `public/resume.pdf` with it (keep the name `resume.pdf`, or change `resumeUrl` in `portfolio.js`).

## Contact form
There is no backend. With an email set, the form opens the visitor's email app (mailto). For real submissions, connect a service such as Formspree or EmailJS and change `onSubmit` in `src/components/Contact.jsx`.

## Deploy to GitHub + Vercel
```bash
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
Then on vercel.com: **Add New → Project → import the repo**. Vercel auto-detects Vite (build: `npm run build`, output: `dist`). Click Deploy.

## Structure
```
index.html            SEO metadata
public/               favicon.svg, resume.pdf (placeholder)
src/data/portfolio.js all editable content
src/hooks/useTyping.js
src/components/       Navbar, Hero, About, Skills, Projects, Experience,
                      Achievements, CodingProfiles, Contact, Footer,
                      Section, GlassCard (reusable)
```
