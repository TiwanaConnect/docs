# 🗄️ Database Schema Notes – PostgreSQL + Neo4j

This doc explains how our app uses PostgreSQL as the primary DB, and Neo4j as a secondary sync graph DB.

---

## 🧾 PostgreSQL (Main Source of Truth)

All primary data (members, users, relationships) lives here.

- Normalized schema
- Strict validations
- Handles login, roles, and core CRUD
- Synced to Neo4j for traversal

---

## 🧠 Neo4j (Used for Tree Traversal)

Each member becomes a Node in Neo4j with only 2 fields:

| Property | Type  | Description                     |
|----------|-------|---------------------------------|
| id       | UUID  | Same as `members.id`            |
| gender   | Enum  | Needed for visual tree logic    |

---

### 🔗 Neo4j Relationships

| Type        | From → To                      | Purpose                        |
|-------------|--------------------------------|--------------------------------|
| PARENT_OF   | (parent)-[:PARENT_OF]->(child) | Core family tree structure     |
| SPOUSE_OF   | (A)-[:SPOUSE_OF]->(B)          | For future marital links       |

These are created alongside relational data in PostgreSQL via the NestJS service layer.

---

## ⚙️ Sync Logic

- Write/update in SQL → Mirror in Neo4j
- NestJS handles dual-write logic
- Logs failed syncs for retry

---

## 📌 Notes

- Neo4j has no business logic — just used for graph traversal
- Queries powered via Cypher
- Ready for visualization layer in frontend
