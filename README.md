# iBuiltThis 🚀

> **A platform for developers to showcase what they've built.**

iBuiltThis is a Product Hunt–style discovery platform where developers can submit, explore, and upvote projects they've launched. It features an admin review pipeline, authenticated submissions via Clerk, and a real-time product explorer — all powered by Next.js and a serverless Postgres database.

---

## ✨ Features

- **🏠 Landing Page** — Hero section with live stats, featured products, and recently launched projects
- **🔍 Product Explorer** — Browse and filter all approved products by tags or search query
- **📄 Product Detail Pages** — Individual pages for each product with full description, tags, and links
- **📝 Product Submission** — Authenticated users can submit their projects for review (with Zod validation)
- **🛡️ Admin Dashboard** — Role-protected admin panel to approve, reject, and manage submitted products
- **📊 Stats Cards** — Live counts of approved, pending, rejected, and total products
- **🔐 Authentication** — Full auth flow powered by Clerk (sign-in, sign-up, user profiles)
- **🗳️ Voting** — Users can upvote their favourite products

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui + Radix UI |
| **Auth** | [Clerk](https://clerk.com/) |
| **Database** | [Neon](https://neon.tech/) (Serverless Postgres) |
| **ORM** | [Drizzle ORM](https://orm.drizzle.team/) |
| **Validation** | [Zod](https://zod.dev/) |
| **Icons** | Lucide React |
| **Package Manager** | pnpm |

---

## 📁 Project Structure

```
ibulithis-app/
├── app/
│   ├── page.tsx              # Landing page
│   ├── explore/              # Product explorer
│   ├── products/[slug]/      # Individual product pages
│   ├── submit/               # Product submission form
│   └── admin/                # Admin dashboard (role-protected)
├── components/
│   ├── landing-page/         # Hero, stats, featured & recent products
│   ├── products/             # Product cards, explorer, skeleton loaders
│   ├── admin/                # Admin product cards, stats, actions
│   ├── forms/                # Product submit form
│   └── common/               # Shared UI: section headers, empty states
├── db/
│   ├── schema.ts             # Drizzle table definitions
│   ├── index.ts              # DB client
│   └── seed.ts               # Seed script
├── lib/
│   ├── products/             # Server-side product queries & actions
│   └── admin/                # Admin server actions
└── types/                    # Shared TypeScript types
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **pnpm** (recommended) — install with `npm i -g pnpm`
- A [Neon](https://neon.tech/) Postgres database
- A [Clerk](https://clerk.com/) application

### 1. Clone the repository

```bash
git clone https://github.com/CharlesOsang017/iBuiltThis.git
cd iBuiltThis
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root and add the following:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Neon Database
DATABASE_URL=postgresql://...
```

### 4. Push the database schema

```bash
pnpm drizzle-kit push
```

### 5. (Optional) Seed the database

```bash
pnpm tsx db/seed.ts
```

### 6. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Admin Access

Admin privileges are managed via **Clerk public metadata**. To grant a user admin access:

1. Go to your [Clerk Dashboard](https://dashboard.clerk.com/)
2. Navigate to **Users** → select the user
3. Under **Public metadata**, add:

```json
{
  "isAdmin": true
}
```

The admin dashboard is then accessible at `/admin`.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint |
| `pnpm drizzle-kit push` | Push schema changes to the database |
| `pnpm drizzle-kit studio` | Open Drizzle Studio (DB GUI) |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m 'feat: add some feature'`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://github.com/CharlesOsang017">Charles Osango</a></p>