# 🛠️ GitHub Setup – TiwanaConnect

---

## 🏢 GitHub Organization

- **Org Name**: `TiwanaConnect`
- **Repos**:
  - `tiwanaconnect-backend` → NestJS backend
  - `tiwanaconnect-frontend` → Next.js frontend
  - `tiwanaconnect-docs` → Project documentation

---

## 🔗 Repo Layout

Each repo is independent and has its own README, CI/CD, and deployment pipeline.

```
tiwanaconnect-backend/
├── src/
├── test/
├── .env.example
├── Dockerfile
└── README.md

tiwanaconnect-frontend/
├── app/
├── components/
├── public/
├── .env.example
└── README.md
```

---

## ⚙️ GitHub Actions (Each Repo)

```
# .github/workflows/deploy.yml

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - run: npm run deploy
```

---

## 🔐 Required Secrets (in both repos)

Set these in GitHub → Settings → Secrets and Variables → Actions

| Key             | Use                      |
|------------------|---------------------------|
| `DATABASE_URL`   | PostgreSQL connection     |
| `NEO4J_URL`      | Neo4j bolt URI            |
| `NEO4J_USER`     | Neo4j username            |
| `NEO4J_PASSWORD` | Neo4j password            |
| `JWT_SECRET`     | JWT signing (backend)     |
| `RAILWAY_TOKEN`  | (Optional) CLI deploy     |
