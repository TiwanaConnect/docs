# 📡 API Map – Release 1

This file outlines all the available REST APIs in Release 1 with access levels and basic purpose.

---

## 🔐 Auth

| Method | Endpoint        | Access     | Description           |
|--------|------------------|------------|------------------------|
| POST   | `/auth/login`    | Public     | User login             |
| GET    | `/auth/me`       | Logged in  | Get current user info  |

---

## 👥 Users (Admin-only)

| Method | Endpoint            | Description                       |
|--------|---------------------|------------------------------------|
| POST   | `/users`            | Create a user account manually     |
| PATCH  | `/users/:id/activate`   | Activate login                    |
| PATCH  | `/users/:id/deactivate` | Disable account                   |

---

## 🧑 Members

| Method | Endpoint         | Access      | Description            |
|--------|------------------|-------------|-------------------------|
| GET    | `/members`       | Admin       | Get all members         |
| GET    | `/members/:id`   | Admin       | Get one member          |
| POST   | `/members`       | Admin       | Add member              |
| PUT    | `/members/:id`   | Admin       | Update member           |
| DELETE | `/members/:id`   | Admin       | Remove member           |

---

## 🔗 Relationships

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| POST   | `/relationships`     | Create a family relationship    |
| DELETE | `/relationships/:id` | Remove a relationship           |

---

## 🌳 Tree

| Method | Endpoint         | Description                         |
|--------|------------------|-------------------------------------|
| GET    | `/tree`          | Fetch full family tree              |
| GET    | `/tree/:id`      | Fetch subtree from specific node    |
