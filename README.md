# 🛒 Orebi | Production-Ready eCommerce Platform

Orebi is a modern, high-performance eCommerce frontend built to simulate real-world production challenges. The architecture focuses heavily on scalable component design, pixel-perfect UI precision, and efficient asynchronous data synchronization between complex REST APIs and global state.

[✨ Live Demo](https://react-orebi-e-commerce.vercel.app/) 

## ⚡ Architecture & Key Features

* **Asynchronous Data Layer:** Fully integrated with REST APIs for real-time product discovery, dynamic sorting, and server-side filtering.
* **Global State Engine:** Engineered using **Redux Toolkit** to manage predictable states for authentication, persistent cart mechanics, and cross-component communication.
* **Modern UI/UX System:** Built on top of **Shadcn UI** primitives and customized via **Tailwind CSS** to achieve an accessible, highly interactive, and fluid user experience.
* **Performance Focused:** Implemented defensive code patterns, responsive image loading, and strict layout constraint rendering for smooth 60fps scrolling across mobile and desktop.

---

## 🛠️ Engineering Stack

* **Core:** React.js (Hooks, Context)
* **State:** Redux Toolkit (RTK)
* **UI Architect:** Tailwind CSS + Shadcn UI (Radix Primitives)
* **Data Fetching:** Axios / Native Fetch (Async/Await)

---

## 🧠 Technical Challenges & Engineering Solutions

### 🎯 The Challenge: Asynchronous API Synchronization & Race Conditions
The core engineering hurdle was managing complex asynchronous lifecycles. Integrating multiple endpoints (Products, Categories, Cart actions) often led to unpredictable data flows, unauthorized state mismatches during network latencies, and redundant component re-renders that degraded user performance.

### 💡 The Engineering Solution:
* **Predictable Redux Slices:** Centralized API payloads into decoupled Redux slices. Used RTK mechanics to ensure a strict "single source of truth," instantly syncing the global cart state with dynamic product lists.
* **Resilient Error Boundaries & States:** Designed custom UI skeletons and error catchers to elegantly handle network timeouts or empty API responses, eliminating application crashes.
* **Strict Payload Validation:** Implemented structural checks on incoming JSON payloads inside lifecycle hooks before firing state updates, completely preventing runtime crashes from broken or incomplete API structural changes.
