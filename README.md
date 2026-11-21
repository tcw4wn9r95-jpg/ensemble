# Vivre Ensemble Prep 🇱🇺

A mobile web app (installable on iPhone) to prepare for the Luxembourg
**"Vivre ensemble au Grand-Duché de Luxembourg"** citizenship exam.

- **3 modules** that follow the official syllabus: Fundamental Rights (10 exam questions), State & Communal Institutions (20), History & European Integration (10)
- **20 lessons** of theory, with timelines, diagrams and "key facts" boxes
- **Flashcards** for each module
- **Practice quizzes** with an explanation after every answer: by module, by lesson, mistakes only, unseen questions, true/false
- **Full mock exam**: 40 questions, 60-minute timer, flagging, question grid, pass mark 28/40, and a detailed review
- **Progress tracking** (stored on the device), dark mode, works offline (service worker)

No build step: plain HTML/CSS/JS.

## Publish on GitHub Pages
1. Repository **Settings → Pages**
2. *Source*: **Deploy from a branch**, then choose the branch and `/ (root)`
3. Open `https://<user>.github.io/<repo>/` in Safari on your iPhone, then **Share → Add to Home Screen**

## Run locally
```
python3 -m http.server 8000
```

## Content
The content is in `data/*.js`. In each question, `o[0]` is the correct answer (options are shuffled at runtime), and `tf: true` marks a true/false statement.

This is an unofficial study aid. It is based on public sources from the Ministry of Education, Guichet.lu, gouvernement.lu, monarchie.lu and the EU (see the in-app "About the exam" page). Always check the official portal for the current rules.
