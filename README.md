# 🚀 Next.js 15 Fullstack Application

A modern fullstack web application built using **Next.js 15 App Router**, **TypeScript**, **Tailwind CSS**, and **Clerk Authentication**. This project demonstrates a clean architecture, dynamic routing, API integration, and server/client components to create a scalable and performant web app.

---

## 📁 Project Structures

```
.
├── public/                   # Static assets (images, icons)
├── src/
│   ├── app/                  # App Router pages & API routes
│   │   ├── api/              # RESTful API routes
│   │   ├── components/       # Reusable UI components
│   │   ├── mock-users/       # Page to manage mock users
│   │   ├── users-server/     # Server component to fetch users
│   │   ├── users-client/     # Client component to fetch users
│   │   ├── products/[id]/    # Dynamic route for product details
│   │   ├── layout.tsx        # Root layout (with <html> structure)
│   │   └── page.tsx          # Homepage
│   ├── middleware.ts         # Clerk route protection middleware
│   ├── styles/               # Global CSS (Tailwind)
│   └── utils/                # Utility functions
├── .env.local                # Clerk environment variables
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # NPM scripts & dependencies
└── README.md                 # Project documentation
```

---

## ✨ Features

- ✅ App Router with Layouts & Nested Routes
- 🎨 Tailwind CSS for styling
- 🔐 Auth with [Clerk](https://clerk.dev/)
- 🔄 Server and Client Components
- 🔧 Custom API Routes (RESTful)
- 🔁 Server Actions for forms
- 📦 Dynamic Routing with `params`
- ⚙️ Environment Variable Support
- 🧪 Error & Loading Boundaries
- 📘 TypeScript-first approach

---

## 🧱 Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.dev/) for authentication
- [TypeScript](https://www.typescriptlang.org/)

---

## 🚦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Colyzo466/Nextjs-Fullstack-app.git
cd Nextjs-Fullstack-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🚀

---

## 🔒 Authentication with Clerk

- **Middleware** in `middleware.ts` protects routes like `/mock-users`.
- **Hooks** (`useAuth`, `useUser`) manage session and user data in components.
- **SignInButton**, **UserButton** used in the UI for auth interactions.

---

## 🧠 Key Components

### ✅ Navigation

```tsx
// src/app/components/navigation.tsx
<Navigation />
```

- Active link highlighting
- Login/logout via Clerk

### 📈 Counter (Client)

```tsx
// src/app/components/counter.tsx
<Counter />
```

- Uses `useState` and Clerk's `useAuth` for state + auth control

### 🌐 Server Data Fetching

```tsx
// src/app/users-server/page.tsx
const res = await fetch("https://jsonplaceholder.typicode.com/users")
```

### 📡 Client Data Fetching

```tsx
// src/app/users-client/page.tsx
useEffect(() => fetch(...), [])
```

### 🛠️ Mock Users Page

- Uses server actions
- Fetches and posts data to a mock API (`mockapi.io`)

---

## 📡 API Routes

### `GET /api/users`

Fetch all users

### `POST /api/users`

Add a user

### `GET /api/users/[id]`

Fetch user by ID

---

## 🧰 Utility Functions

Located in `src/utils/fetchUsers.ts`, used in both server and client user pages for DRY code.

---

## 📐 Styling

- Configured via `tailwind.config.ts`
- Global styles in `src/styles/globals.css`

---

## 🧪 Error & Loading States

- `loading.tsx`: Displays spinner
- `error.tsx`: Displays error message

---

## 🧭 Routing

### Static Routes

- `/` - Homepage
- `/users-server` - Server-side fetched users
- `/users-client` - Client-side fetched users
- `/mock-users` - Protected CRUD interface

### Dynamic Routes

- `/products/[id]` - Displays product by ID

---

## 🚀 Deployment

You can deploy this app using:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- Custom Node.js server

Ensure you add your environment variables in the hosting dashboard.

---

## 🧩 Potential Enhancements

- ✅ Unit & Integration Tests
- 🧠 API Caching / Pagination
- 🔍 Search & Filter functionality
- 📊 Analytics & Telemetry

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Victor Oguike**  
[GitHub](https://github.com/Colyzo466) • [Portfolio](https://yourwebsite.com) • [LinkedIn](https://linkedin.com/in/yourname)

