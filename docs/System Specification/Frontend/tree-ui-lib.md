# Family Tree UI – Library Planning

This document explores options for building the interactive family tree on the frontend.

---

## 🎯 Goal

- Display a scrollable, zoomable family tree
- Show member name/photo
- On click → show basic details
- Support spouse, parent, children relations
- Tree should load from backend data structure

---

## 🔍 UI Library Options

| Library            | Pros                                         | Cons                            |
|--------------------|----------------------------------------------|---------------------------------|
| `react-d3-tree`    | Mature, zoom/pan, fit to screen, huge usage  | Complex customization, SVG-only|
| `family-tree.js`   | Purely for family trees, plug-n-play         | Less flexible, not maintained   |
| `react-family-tree`| Simple, easy to use                          | Weak docs, needs custom styles  |
| `react-flow`       | Modern, powerful flow renderer               | Too generic, needs tweaking     |
| Custom Canvas/SVG  | Full control                                 | Long effort, not for v1         |

---

## ✅ Likely Choice: `react-d3-tree`

```bash
npm install react-d3-tree
