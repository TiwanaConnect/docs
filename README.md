# 🌳 TiwanaConnect – Project Documentation

**TiwanaConnect** is a private, full-stack web application to digitally connect and organize the extended Tiwana family.  
This platform enables family members to view a dynamic family tree, preserve relationships, and access relevant family data with privacy and care.

---

## 🏗️ Project Overview

| Layer      | Stack/Tool                          |
|------------|-------------------------------------|
| Frontend   | Next.js, Tailwind CSS, shadcn/ui    |
| Tree UI    | React Flow (planned)                |
| Backend    | NestJS, PostgreSQL, Prisma          |
| Auth       | Clerk/Auth.js or custom JWT         |
| Infra      | Docker, Railway, GitHub Actions     |
| Future DB  | Neo4j (graph DB for relationships)  |
| AI Tools   | GitHub Copilot, bugbot (TBD)        |

---

## 🚀 Releases

| Release      | Description                                        | Status       |
|--------------|----------------------------------------------------|--------------|
| Release 1    | First full version with login, member tree, roles  | In Progress  |
| Release 2    | Self-signup, request flow, approvals                | Planned      |
| Release 3    | Roles expansion, chat, inheritance, Neo4j backend  | Ideation     |

Each release has its own document under the `releases/` folder.

---

## 🧱 Documentation Structure

tiwanaconnect-docs/ ├── README.md                   # This overview ├── architecture/               # ERDs, DB design, API map │   ├── erd-v1.png │   ├── db-models.md │   ├── api-map.md │   └── future-graph-model.md ├── releases/                   # Specifications per release │   ├── release-1.md │   ├── release-2.md │   └── ...

---

## 🛣️ Roadmap (High-Level)

- [ ] 🔒 Controlled login system (admin creates member logins)
- [ ] 🧑‍🤝‍🧑 Add & view family members and link relationships
- [ ] 🌳 Render an interactive family tree (from backend data)
- [ ] 📩 Admin-driven invites & account activation
- [ ] 🧠 Setup for future: role-based control, Neo4j graph support

---

## 🤝 Maintained By

**Muhammad Arslan**  
Lead Developer, Architect & Founder of TiwanaConnect  
> “Building this with love for my entire family 💛”
