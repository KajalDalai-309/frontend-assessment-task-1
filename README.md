# frontend-assessment-task-1

This is my personal portfolio website that I built as part of a frontend assessment. It's a single page site with sections for About, Skills, Projects, Blog and a Contact form.

No frameworks used — just plain HTML, CSS and JavaScript.

---

## How to run it

Just download or clone the repo and open `index.html` in your browser. That's it, no install needed.

```bash
git clone https://github.com/KajalDalai-309/frontend-assessment-task-1.git
cd frontend-assessment-task-1
```

Then open `index.html` by double clicking it. If you want live reload while editing, use the Live Server extension in VS Code.

---

## Folder structure

```
frontend-assessment-task-1/
├── index.html
├── styles.css
├── script.js
├── photo.jpg
└── README.md
```

---

## What's inside

**Header** — sticky nav with links that scroll to each section. On mobile it turns into a hamburger menu.

**About** — short bio with my photo.

**Skills** — rendered using JavaScript from an array of objects. Each skill has a name and proficiency level shown as a progress bar.

**Projects** — 3 real projects laid out using CSS Grid. Each card has a description, tech stack, and links to the live site and GitHub.

**Blog** — fetches 6 posts from JSONPlaceholder API. Shows a loading message while fetching, an error message with a retry button if it fails, and a "no posts" message if the list is empty.

**Contact form** — has Name, Email, Phone, Subject and Message fields with validation on each one. On submit it sends a POST request to JSONPlaceholder (mock API). Shows the returned ID on success, and keeps the form data if it fails so you don't have to retype everything.

**Footer** — year is set dynamically using JavaScript.

---

## API

Blog posts → `GET https://jsonplaceholder.typicode.com/posts?_limit=6`

Contact form → `POST https://jsonplaceholder.typicode.com/posts` (this is a mock, it doesn't actually send an email)

---

## Validations

- Name → required, 3–40 chars, only letters and spaces
- Email → required, proper format, no spaces
- Phone → optional, but if filled must be exactly 10 digits
- Subject → must pick one from the dropdown
- Message → required, 20–500 chars, live counter shown below the field

---

## Known limitations

- JSONPlaceholder is a mock API so the contact form doesn't actually send anything
- Blog content is placeholder text, not real articles
- No backend, everything runs on the client side
