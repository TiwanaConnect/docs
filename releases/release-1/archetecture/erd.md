# 🧩 Entity Relationship Diagram (ERD) – Release 1

This document defines the core database entities and their relationships for Release 1 of TiwanaConnect.

---

## 📦 Tables Overview

### 1. `members`

- Represents a family person.
- Contains personal info only (not for login).

| Field       | Type         | Description                    |
|-------------|--------------|--------------------------------|
| id          | UUID (PK)    | Primary key                    |
| name        | String       | Full name                      |
| dob         | Date         | Date of birth                  |
| gender      | Enum         | `male`, `female`, `other`      |
| bio         | Text         | Optional short description     |
| image_url   | String       | Profile image (optional)       |
| parent_ids  | Array<UUID>  | Parent member(s)               |
| spouse_ids  | Array<UUID>  | Spouse member(s)               |

---

### 2. `users`

- Login accounts for members (admin/member role).

| Field       | Type         | Description                     |
|-------------|--------------|---------------------------------|
| id          | UUID (PK)    | Primary key                     |
| email       | String       | For login                       |
| password    | Hashed       | Bcrypt                          |
| role        | Enum         | `admin`, `member`               |
| status      | Enum         | `active`, `pending`, `disabled`|
| member_id   | UUID (FK)    | Link to `members`               |

---

### 3. `relationships`

- Optional table to model explicit links.

| Field         | Type         | Description                        |
|---------------|--------------|------------------------------------|
| id            | UUID (PK)    | Primary key                        |
| member_id     | UUID (FK)    | Source member                      |
| related_id    | UUID (FK)    | Target member                      |
| type          | Enum         | `parent`, `child`, `spouse`, etc.  |

---

> This schema will evolve with future releases (e.g., member requests, generation tags, etc.)
