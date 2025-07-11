# Deployment Plan

---

## 📦 Repositories

| Repo                    | Description          |
|-------------------------|----------------------|
| `tiwanaconnect-backend` | NestJS backend       |
| `tiwanaconnect-frontend`| Next.js frontend     |

Each repo is deployed **independently** on its own platform or service.

---

## 🌐 Platforms

| Service     | Platform     | Notes                         |
|-------------|--------------|-------------------------------|
| Backend     | Railway      | Fast deploy + Postgres built-in |
| Frontend    | Railway / Vercel | Static hosting + custom domain |
| PostgreSQL  | Railway DB   | Auto-managed DB instance      |
| Neo4j       | Neo4j Aura / Docker | Used for graph traversal   |

---

## 🧑‍💻 Local Development Setup

1. Clone backend & frontend repos
2. Add `.env` files in each repo

### 📁 Backend `.env` Example

```
DATABASE_URL=postgres://...
NEO4J_URL=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=test
JWT_SECRET=my-secret-key
```

### 📁 Frontend `.env` Example

```
NEXT_PUBLIC_API_URL=https://your-backend-host/api
```

3. (Optional) Run Neo4j locally:

```bash
docker run -p 7474:7474 -p 7687:7687 \
  -e NEO4J_AUTH=neo4j/test \
  neo4j:5
```

---

## ⚙️ Deploy via Railway CLI (Backend)

```bash
# One-time setup
railway login
railway init

# Then deploy
railway up
```

> Railway auto-detects `Dockerfile` or `start` script from `package.json`.

---

## 🚦 Frontend Deploy Options

**Option 1**: Vercel  
- Auto-deploy from `main` branch  
- Connect GitHub → Select repo → Done

**Option 2**: Railway  
- Choose static site project  
- Set build command: `npm run build`  
- Output dir: `.next`

---

## 🔐 Secrets to Set (in Railway / GitHub)

| Key             | Where       |
|------------------|-------------|
| `DATABASE_URL`   | Backend repo / Railway |
| `NEO4J_URL`      | Backend repo / Railway |
| `JWT_SECRET`     | Backend repo / Railway |
| `NEXT_PUBLIC_API_URL` | Frontend repo |

---

## ✅ Future Enhancements

- Custom domain setup (e.g., `family.tiwana.dev`)
- Auto-preview URLs per PR (Vercel)
- Rollbacks using Railway snapshots
