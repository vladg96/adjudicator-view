# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Package Management
- `npm i` - Install dependencies
- Uses both npm and bun (bun.lockb present)

## Architecture

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite with SWC
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom theme
- **State Management**: TanStack Query (React Query) for server state
- **Database**: Supabase (PostgreSQL)
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation

### Project Structure
```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   └── [feature].tsx    # Feature-specific components
├── pages/               # Route components
├── services/            # API and business logic
├── integrations/        # Third-party integrations
│   └── supabase/       # Supabase client and types
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── data/                # Mock data and constants
```

### Key Patterns

#### Data Layer
- **Supabase Integration**: Uses typed client with database types generated from schema
- **Query Management**: TanStack Query for caching, synchronization, and optimistic updates
- **Type Safety**: Full TypeScript integration with Supabase database types

#### Component Architecture
- **Modal System**: Uses Radix Dialog for complex modals with proper accessibility
- **Form Handling**: React Hook Form with Zod schemas for validation
- **State Updates**: Optimistic updates with React Query cache manipulation

#### Styling
- **Design System**: Dark theme with slate/teal color palette
- **Responsive Design**: Mobile-first approach with Tailwind responsive classes
- **Animation**: Tailwind CSS animations and transitions

### Domain Model
This is a **dispute adjudication system** for TAKAMOL Aviation:
- **Disputes**: Customer complaints about flight issues (delays, cancellations, baggage)
- **Evidence**: Supporting documents for each dispute
- **Adjudication**: Review and response process for dispute resolution

### Database Schema
- `disputes` table: Core dispute data (case_id, customer_name, status, amount, etc.)
- `evidence` table: Related documents and files
- Real-time updates supported via Supabase subscriptions

### Key Components
- **Index**: Main dashboard with filtering and search
- **CaseDetailModal**: Full-screen dispute review interface
- **CaseTimelineSidebar**: Timeline and status tracking
- **PassengerInformation**: Customer details and editable fields
- **IncidentReport**: Dispute details and evidence
- **ResponseSection**: Adjudicator response interface

### Development Notes
- Uses `@` path alias for src imports
- Lovable.dev integration for collaborative development
- ESLint with React hooks and TypeScript rules
- Relaxed TypeScript settings (no strict null checks, unused vars allowed)
- Server runs on port 8080 with IPv6 support