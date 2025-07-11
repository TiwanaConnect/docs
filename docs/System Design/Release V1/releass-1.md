# Specification

**Version:** Release 1  
**Status:** In Progress  
**Target:** Fully functional web app for internal family launch  
**Author:** Muhammad Arslan  
**Last Updated:** [Add Date]

---

## 🎯 Objective

This release aims to deliver the **first live version** of TiwanaConnect — a private web app to manage and visualize the Tiwana family's digital structure.

This version will be **handed over to family elders/admins** for real use and adoption.

---

## 🧑‍🤝‍🧑 User Roles & Access

### 1. Admin (Family Lead)
- Full control: add/edit/delete members
- Add relationships
- Create login credentials for members
- Activate/deactivate user accounts

### 2. Member (Family Person)
- View family tree
- See their own profile
- No editing or access to others

> 📌 Only **admins** can create accounts.  
> **No public signup** in this release.

---

## 🔐 Auth Flow (Controlled Access)

- Admin will:
  - Add member to `members` table (just info)
  - When needed, create a login in `users` table (linked to that member)
  - Share password manually
- Only active users with `status = active` can log in

---

## 🗃️ Database Structure

### `users` Table

| Field       | Type    | Description              |
|-------------|---------|--------------------------|
| id          | UUID    | Primary key              |
| email       | String  | Login email              |
| password    | Hashed  | Login password (bcrypt)  |
| role        | Enum    | `admin`, `member`        |
| status      | Enum    | `pending`, `active`      |
| member_id   | UUID    | FK to `members` table    |

---

### `members` Table

| Field       | Type       | Description                  |
|-------------|------------|------------------------------|
| id          | UUID       | Primary key                  |
| name        | String     | Full name                    |
| dob         | Date       | Date of birth                |
| gender      | Enum       | `male`, `female`, `other`    |
| bio         | Text       | Short info                   |
| image_url   | String     | Profile picture              |
| parent_ids  | Array(UUID)| For multiple parents         |
| spouse_ids  | Array(UUID)| For linking spouses          |

---

### `relationships` Table

| Field         | Type      | Description                          |
|---------------|-----------|--------------------------------------|
| id            | UUID      | PK                                   |
| member_id     | UUID      | Person in focus                      |
| related_id    | UUID      | Person related to                    |
| type          | Enum      | `parent`, `child`, `spouse`, etc.    |

---

## 📚 Features & Scope (Final for Release 1)

| Feature              | Status  |
|----------------------|---------|
| Admin login          | ✅       |
| Admin dashboard      | ✅       |
| Add/edit members     | ✅       |
| Link relationships   | ✅       |
| View family tree     | ✅       |
| Member login         | ✅       |
| View-only access     | ✅       |
| Manual invite (no email) | ✅   |
| Profile image upload | Optional |

---

## 📊 API Endpoints (Minimal Scope)

### Auth
- `POST /auth/login` → Login
- `GET /auth/me` → Current user

### Users (Admin only)
- `POST /users` → Create login
- `PATCH /users/:id/activate`
- `PATCH /users/:id/deactivate`

### Members
- `GET /members`
- `GET /members/:id`
- `POST /members`
- `PUT /members/:id`
- `DELETE /members/:id`

### Relationships
- `POST /relationships`
- `DELETE /relationships/:id`

### Tree
- `GET /tree` → Full data for frontend
- `GET /tree/:id` → Subtree

---

## 🧱 Architecture Notes

| Layer     | Tools                    |
|-----------|--------------------------|
| Backend   | NestJS + Prisma + PostgreSQL  
| Frontend  | Next.js + Tailwind + shadcn/ui  
| Auth      | JWT / Clerk (finalize)  
| Infra     | Docker, GitHub Actions, Railway  
| GraphDB   | Neo4j (used from Day One) ✅

---

## 🧠 Neo4j GraphDB (Used from Day One)

TiwanaConnect will use **Neo4j alongside PostgreSQL** from the very beginning to power graph-based relationships and enable efficient family tree traversal.

### ✅ Purpose
- Simplified tree traversal (e.g., grandparents, siblings, cousins)
- Natural relationship queries
- Backbone for future visualization tools

---

### 📦 Node Design

Each `member` in PostgreSQL will have a corresponding node in Neo4j.

| Field      | Type   | Description                                |
|------------|--------|--------------------------------------------|
| `id`       | UUID   | Same as the `members.id` in PostgreSQL     |
| `gender`   | Enum   | `male`, `female`, `other` (for traversal)  |

Example Node:
```cypher
(:Person { id: "uuid", gender: "male" })
```

---

## 🔗 Relationship Types

| Type        | From → To                      | Example                  |
|-------------|--------------------------------|---------------------------|
| `PARENT_OF` | (parent)-[:PARENT_OF]->(child) | One or both directions    |
| `SPOUSE_OF` | (A)-[:SPOUSE_OF]->(B)          | Undirected or both sides |

These relationships will be automatically created alongside member additions in the backend service.

---

## 🧪 Sample Cypher Queries

```cypher
// Find children of a member
MATCH (p:Person {id: $id})<-[:PARENT_OF]-(child)
RETURN child

// Find all ancestors (any depth)
MATCH path = (p:Person {id: $id})<-[:PARENT_OF*]-(ancestor)
RETURN path
```

---

## 🔁 Sync Strategy

- **Primary source of truth = PostgreSQL**
- Every update in `members` / `relationships` triggers a parallel write to Neo4j
- Failures are logged and retried by the backend service

---

## ⚠️ Notes

- Neo4j is used for **traversal only**, not for auth or core logic
- NestJS service layer handles **bi-directional sync**
- Future releases may include:
  - Neo4j-powered UIs
  - GraphQL over graph data
  - Advanced traversal features (e.g., relation suggestions)

---

## 📝 Delivery Checklist

- [ ] ✅ Complete backend API with proper validation & guards  
- [ ] ✅ Responsive frontend (mobile-friendly)  
- [ ] ✅ Family tree UI: zoom, click → view profile  
- [ ] ✅ Admin panel to manage members & users  
- [ ] ✅ Deployment on Railway or Fly.io  
- [ ] ✅ GitHub repo with clean commits  
- [ ] ✅ Documentation & handover notes  

---

## ✅ Final Output

> A clean, fully working, deployed app ready to be used by your family.

- Admin can manage all data  
- Members can log in and view their family  
- Hosted online  
- Code and infrastructure prepared for future growth

---

## 🙏 Built With Purpose

Created by **Muhammad Arslan**  
For the **Tiwana Family**

> “One day, our children will browse this tree and smile.”
