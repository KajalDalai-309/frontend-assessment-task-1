document.getElementById('year').textContent = new Date().getFullYear();

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3 / Flexbox / Grid', level: 85 },
  { name: 'JavaScript (ES6+)', level: 78 },
  { name: 'Responsive Design', level: 82 },
  { name: 'Git & GitHub', level: 70 },
  { name: 'REST APIs / Fetch', level: 72 },
  { name: 'Problem Solving', level: 75 },
  { name: 'VS Code', level: 88 },
];

const projects = [
  {
    title: 'Northline Roofing Estimator',
    desc: 'A roofing cost estimator web app that helps users calculate estimates quickly and accurately based on their project requirements.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    live: 'https://northline-roofing-estimator.onrender.com',
    github: 'https://github.com/KajalDalai-309/northline-roofing-estimator',
  },
  {
    title: 'Travel Unbounded',
    desc: 'A travel inspiration website showcasing destinations and trip ideas with a clean, responsive design for wanderlust explorers.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://travel-unbounded-liard.vercel.app',
    github: 'https://github.com/KajalDalai-309/travel-unbounded',
  },
  {
    title: 'Kanban Board',
    desc: 'A drag-and-drop Kanban board for managing tasks across different stages — To Do, In Progress and Done.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://kanban-konb.onrender.com',
    github: 'https://github.com/KajalDalai-309/Kanban',
  },
];

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = skills.map(s => `
    <div class="skill-card">
      <div class="skill-name">${s.name}</div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${s.level}"></div>
      </div>
      <div class="skill-percent">${s.level}%</div>
    </div>
  `).join('');

  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.level + '%';
    });
  }, 200);
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = projects.map(p => `
    <div class="project-card">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tech-tags">
        ${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${p.live}" target="_blank" rel="noopener">Live Demo ↗</a>
        <a href="${p.github}" target="_blank" rel="noopener">GitHub ↗</a>
      </div>
    </div>
  `).join('');
}

async function loadBlogPosts() {
  const statusBox = document.getElementById('blogStatus');
  const grid = document.getElementById('blogGrid');

  statusBox.innerHTML = '<div class="blog-status-box">Loading posts...</div>';
  grid.innerHTML = '';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    if (!res.ok) throw new Error('Server returned ' + res.status);

    const posts = await res.json();
    statusBox.innerHTML = '';

    if (posts.length === 0) {
      statusBox.innerHTML = '<div class="blog-status-box">No posts available right now.</div>';
      return;
    }

    grid.innerHTML = posts.map(post => `
      <div class="blog-card">
        <h3>${post.title}</h3>
        <p>${post.body.substring(0, 100)}...</p>
      </div>
    `).join('');
  } catch (err) {
    statusBox.innerHTML = `
      <div class="blog-status-box">
        <p>Could not load posts. Please check your connection.</p>
        <button class="btn btn-outline" id="retryBtn">Try again</button>
      </div>
    `;
    document.getElementById('retryBtn').addEventListener('click', loadBlogPosts);
  }
}

function validate() {
  let valid = true;

  const name = document.getElementById('name').value.trim();
  const nameErr = document.getElementById('nameError');
  const nameInput = document.getElementById('name');
  if (!name) {
    nameErr.textContent = 'Name is required.';
    nameInput.classList.add('invalid');
    valid = false;
  } else if (name.length < 3 || name.length > 40) {
    nameErr.textContent = 'Name must be between 3 and 40 characters.';
    nameInput.classList.add('invalid');
    valid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameErr.textContent = 'Only letters and spaces allowed.';
    nameInput.classList.add('invalid');
    valid = false;
  } else {
    nameErr.textContent = '';
    nameInput.classList.remove('invalid');
  }

  const email = document.getElementById('email').value.trim();
  const emailErr = document.getElementById('emailError');
  const emailInput = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    emailErr.textContent = 'Email is required.';
    emailInput.classList.add('invalid');
    valid = false;
  } else if (!emailRegex.test(email) || email.includes(' ')) {
    emailErr.textContent = 'Enter a valid email address.';
    emailInput.classList.add('invalid');
    valid = false;
  } else {
    emailErr.textContent = '';
    emailInput.classList.remove('invalid');
  }

  const phone = document.getElementById('phone').value.trim();
  const phoneErr = document.getElementById('phoneError');
  const phoneInput = document.getElementById('phone');
  if (phone !== '' && !/^\d{10}$/.test(phone)) {
    phoneErr.textContent = 'Phone must be exactly 10 digits.';
    phoneInput.classList.add('invalid');
    valid = false;
  } else {
    phoneErr.textContent = '';
    phoneInput.classList.remove('invalid');
  }

  const subject = document.getElementById('subject').value;
  const subjectErr = document.getElementById('subjectError');
  const subjectInput = document.getElementById('subject');
  if (!subject) {
    subjectErr.textContent = 'Please select a subject.';
    subjectInput.classList.add('invalid');
    valid = false;
  } else {
    subjectErr.textContent = '';
    subjectInput.classList.remove('invalid');
  }

  const message = document.getElementById('message').value.trim();
  const messageErr = document.getElementById('messageError');
  const messageInput = document.getElementById('message');
  if (!message) {
    messageErr.textContent = 'Message is required.';
    messageInput.classList.add('invalid');
    valid = false;
  } else if (message.length < 20) {
    messageErr.textContent = 'Message must be at least 20 characters.';
    messageInput.classList.add('invalid');
    valid = false;
  } else if (message.length > 500) {
    messageErr.textContent = 'Message cannot exceed 500 characters.';
    messageInput.classList.add('invalid');
    valid = false;
  } else {
    messageErr.textContent = '';
    messageInput.classList.remove('invalid');
  }

  return valid;
}

document.getElementById('message').addEventListener('input', function () {
  document.getElementById('charCount').textContent = this.value.length;
});

document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  if (!validate()) return;

  const btn = document.getElementById('submitBtn');
  const statusEl = document.getElementById('formStatus');

  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value.trim(),
  };

  btn.disabled = true;
  btn.textContent = 'Sending...';
  statusEl.innerHTML = '<span class="status-loading">Sending your message...</span>';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error('Request failed');

    const data = await res.json();
    statusEl.innerHTML = `<span class="status-success">✓ Message sent! Reference ID: #${data.id}</span>`;
    document.getElementById('contactForm').reset();
    document.getElementById('charCount').textContent = '0';
  } catch (err) {
    statusEl.innerHTML = `<span class="status-error">Message could not be sent. Please try again.</span>`;
    document.getElementById('name').value = formData.name;
    document.getElementById('email').value = formData.email;
    document.getElementById('phone').value = formData.phone;
    document.getElementById('subject').value = formData.subject;
    document.getElementById('message').value = formData.message;
    document.getElementById('charCount').textContent = formData.message.length;
  } finally {
    btn.disabled = false;
    btn.textContent = 'Send Message';
  }
});

document.getElementById('menuToggle').addEventListener('click', function () {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('open');
});

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mainNav').classList.remove('open');
  });
});

renderSkills();
renderProjects();
loadBlogPosts();

