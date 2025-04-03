# MiniKit-dashboard

MiniApps with MiniKit dashboard template.

## Structure Overview

This is a starter template using the following stack:

- Mini App - [MiniKit-JS SDK](https://docs.world.org/mini-apps/quick-start/installing)
- Framework - [Next.js 15 (App Router)](https://nextjs.org)
- Language - [TypeScript](https://www.typescriptlang.org)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn UI](https://ui.shadcn.com/)
- Formatting - [Prettier](https://prettier.io)

```text
src/
│── app/
│   ├── (dashboard)/           # Pages Directory
│   │    ├── page.tsx           # Route Pages.tsx
│   ├── api/                   # Next.js API Routes (Controller Layer)
│       ├── 1inch/route.ts     # 1inch API
│       ├── circle/route.ts    # circle API
│── services/                  # Business Logic (Service Layer)
│   ├── 1inchService.ts        # 1inch Service
│   ├── circleService.ts       # circle Service
│── lib/                       # Libraries
│   ├── db.ts                  # Mock database data
│── components/                # Shadcn UI Block
│   ├── ui                     # GUI Unit
│── assets/                    # Static data
│   ├── logo.png               # Image
│── utils/                     # Tools
│   ├── format.ts              # Formatter
│   ├── validator.ts           # Validator
.
.
.
```

## Getting Started

```
# node -v: v20.11.1
pnpm install
pnpm dev
```

You should now be able to access the application at http://localhost:3000.
