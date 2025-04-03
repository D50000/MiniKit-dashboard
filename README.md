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

During the deployment, Vercel will prompt you to create a new Postgres database. This will add the necessary environment variables to your project.

Inside the Vercel Postgres dashboard, create a table based on the schema defined in this repository.

```
CREATE TYPE status AS ENUM ('active', 'inactive', 'archived');

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  image_url TEXT NOT NULL,
  name TEXT NOT NULL,
  status status NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  stock INTEGER NOT NULL,
  available_at TIMESTAMP NOT NULL
);
```

Then, uncomment `app/api/seed.ts` and hit `http://localhost:3000/api/seed` to seed the database with products.

Next, copy the `.env.example` file to `.env` and update the values. Follow the instructions in the `.env.example` file to set up your GitHub OAuth application.

```bash
npm i -g vercel
vercel link
vercel env pull
```

Finally, run the following commands to start the development server:

```
pnpm install
pnpm dev
```

You should now be able to access the application at http://localhost:3000.
