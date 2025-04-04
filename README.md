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

### Feature Integration

#### World

Prizes
📲 Best Mini App ⸺ $17,500

```text
🥇1st place $10,000
🥈2nd place $5,000
🥉3rd place $2,500
```

Show us your best Mini Apps! Projects that build and deploy a Mini App using MiniKit are eligible for this prize.
Qualification Requirements

- ✅ build a Mini App with MiniKit
- ✅ integrate any of the Minikit SDK Commands
- ✅ if your Mini App uses on-chain activity, deploy your contracts to World Chain
- ✅ your project must not be gambling or chance based
- ✅ proof validation is required and needs to occur in a web backend or smart contract

🏊 World Pool Prize ⸺ $2,500
_Split evenly between all qualifying projects_
This pool prize is for all projects that build within the World ecosystem (and don't receive another prize from World)!
Qualification Requirements

- ✅ make a good-faith effort to integrate World ID, build a Mini App, and/or build on World Chain
- ✅ your project must not be gambling or chance based
