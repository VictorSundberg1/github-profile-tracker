# GitHub Profile Viewer - Copilot Instructions

## Project Overview

A modern GitHub profile viewer built with TanStack Start, Tailwind CSS, and shadcn/ui. Users can search for GitHub users and view their profiles, repositories, and statistics in a beautiful, responsive interface.

**Tech Stack:**

- **TanStack Start** - Full-stack React framework
- **TypeScript** (strict mode)
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality React components
- **GitHub REST API v3** - Data source (unauthenticated for MVP)
- **localStorage** - Client-side data persistence

**Deployment Target:** Netlify

---

## ⚠️ IMPORTANT: Development Order & Dependencies

### When assisting with this project, ALWAYS follow this order:

#### Phase 0: Setup (Must be completed first)

1. ✅ Project initialization (TanStack Start)
2. ✅ Tailwind CSS setup
3. ✅ shadcn/ui initialization
4. ✅ Basic folder structure created
5. ✅ TypeScript configured

**🚫 DO NOT help with any feature implementation until setup is complete!**

---

#### Phase 1: Foundation (Build in this exact order)

**Step 1: Types & API Layer**

```
1. 1 Create lib/types.ts with GitHub API interfaces
1.2 Create lib/github-api.ts with fetch functions
1.3 Test API functions work (can fetch user data)
```

**🚫 DO NOT create components before types are defined!**

**Step 2: Basic UI Components**

```
2.1 Install needed shadcn components (Card, Button, Input, Avatar)
2.2 Create basic layout structure
2.3 Set up dark mode (ThemeToggle component)
```

**🚫 DO NOT build complex features before basic UI works!**

**Step 3: Home Page & Search**

```
3.1 Build index.tsx route (home page)
3.2 Create SearchBar component
3.3 Implement navigation to user page on search
```

**🚫 DO NOT build user profile page before search works!**

**Step 4: User Profile Page**

```
4.1 Create user.$username.tsx route
4.2 Implement server function to fetch user data
4.3 Create UserProfile component
4.4 Add loading states
4.5 Add error handling
```

**🚫 DO NOT build repo list before user profile works!**

**Step 5: Repository List**

```
5.1 Update server function to fetch repos
5.2 Create RepoCard component
5.3 Create RepoList component
5.4 Implement basic display
```

**🚫 DO NOT add sorting/filtering before basic display works!**

**Step 6: Enhanced Features**

```
6.1 Add repo sorting (stars, forks, updated)
6.2 Add language badges with colors
6.3 Polish responsive design
6.4 Add animations/transitions
```

**Step 7: Final Polish**

```
7.1 Test all error states
7.2 Verify mobile responsiveness
7.3 Check dark mode on all pages
7.4 Performance optimization
```

**Step 8: Deployment**

```
8.1 Test production build locally
8.2 Deploy to Netlify
8.3 Test deployed version
```

---

### 🎯 Dependency Checklist

Before helping with any task, verify these dependencies:

| **If user asks about... ** | **First verify this exists:**           |
| -------------------------- | --------------------------------------- |
| Creating a component       | ✅ Types defined, shadcn installed      |
| Fetching data              | ✅ API functions created, types defined |
| User profile page          | ✅ Search functionality works           |
| Repository list            | ✅ User profile displays correctly      |
| Sorting repos              | ✅ Basic repo list renders              |
| Dark mode styling          | ✅ ThemeToggle component exists         |
| Deployment                 | ✅ All features work locally            |

---

### 🚨 When User Jumps Ahead

If the user asks about a feature that requires incomplete prerequisites:

**DO THIS:**

1. ✅ Acknowledge their question
2. ✅ Explain what needs to be built first
3. ✅ Offer to help with the prerequisite
4. ✅ Show the dependency chain

**Example Response:**

```
"Great question about adding repo sorting! Before we implement that,
we need to make sure the basic repo list is working first.

Here's what we need:
1. ✅ Types defined (lib/types.ts)
2. ✅ API function to fetch repos
3. ⏳ Basic RepoList component rendering
4. ⏳ Sorting logic (what you're asking about)

Let's start with #3 - creating the basic RepoList component.
Once that's rendering repos correctly, we can add sorting on top!

Would you like me to help with the basic RepoList first?"
```

---

### 📊 Progress Tracking

Keep track of what's been completed. When user asks for help, first check:

**"What have we completed so far?"**

If unsure, ask:

- "Have you set up TanStack Start yet?"
- "Do you have the API functions created?"
- "Is the search page working?"
- "Can you see user profiles?"

**Adjust help based on current progress!**

---

### 🔄 When to Suggest Refactoring

Only suggest refactoring AFTER:

- ✅ Feature works end-to-end
- ✅ User has tested it
- ✅ No blocking bugs exist

**Don't optimize prematurely!**

---

## Core Principles

### 1. Type Safety First

- Use TypeScript strictly
- Define interfaces for all GitHub API responses
- No `any` types - use `unknown` if truly necessary
- Properly type all component props

### 2. Mobile-First Responsive Design

- Always design for mobile first, then scale up
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Test layouts at different breakpoints

### 3. Component-Driven Architecture

- Small, focused, reusable components
- Co-locate related logic with components
- Use shadcn/ui components as base building blocks

### 4. Performance & User Experience

- Implement proper loading states (use shadcn Skeleton)
- Handle errors gracefully with user-friendly messages
- Optimize images (use Next-gen formats where possible)
- Show loading feedback for all async operations

### 5. Dark Mode Support

- Implement dark mode from the start using Tailwind's dark mode
- Use shadcn's theming system
- Ensure all custom components respect theme

---

## Project Structure

```
app/
├── routes/
│   ├── index.tsx                 # Home page with search
│   └── user.$username.tsx        # Dynamic user profile page
├── components/
│   ├── ui/                       # shadcn components (generated)
│   ├── SearchBar.tsx             # Main search component
│   ├── UserProfile.tsx           # User info card
│   ├── RepoList.tsx              # Repository list container
│   ├── RepoCard.tsx              # Individual repo card
│   ├── LanguageTag.tsx           # Language badge with color
│   ├── ErrorMessage.tsx          # Error display component
│   └── ThemeToggle.tsx           # Dark mode toggle
├── lib/
│   ├── github-api.ts             # GitHub API functions
│   ├── types.ts                  # TypeScript interfaces
│   └── utils.ts                  # Utility functions (cn, etc.)
└── styles/
    └── global.css                # Global styles and Tailwind imports
```

---

## MVP Features (Phase 1)

### Must Have:

1. ✅ Search for GitHub users by username
2. ✅ Display user profile information (avatar, bio, stats)
3. ✅ List user's public repositories
4. ✅ Show repo details (name, description, language, stars, forks)
5. ✅ Sort repositories (by stars, forks, updated)
6. ✅ Responsive design (mobile → desktop)
7. ✅ Loading states
8. ✅ Error handling (user not found, API errors)
9. ✅ Dark mode toggle

### Nice to Have (if time permits):

- Search history in localStorage
- Skeleton loading states
- Animated transitions
- Language color coding (use GitHub's language colors)

---

## GitHub API Integration

### Endpoints Used:

```typescript
// User profile
GET https://api.github.com/users/{username}

// User repositories
GET https://api.github.com/users/{username}/repos? sort=updated&per_page=100
```

### Rate Limits:

- **Unauthenticated**: 60 requests/hour
- Sufficient for development and MVP
- Consider adding PAT (Personal Access Token) later for production

### API Response Types:

```typescript
// lib/types.ts - Define interfaces for:
- GitHubUser (profile data)
- GitHubRepo (repository data)
- APIError (error responses)
```

### Error Handling:

- 404: User not found
- 403: Rate limit exceeded
- Network errors
- Display user-friendly error messages

---

## Styling Guidelines

### Tailwind Best Practices:

1. **Use Tailwind's design tokens:**

   ```tsx
   // Good
   <div className="space-y-4 p-6 rounded-lg">

   // Avoid arbitrary values unless necessary
   <div className="space-y-[17px] p-[23px]">
   ```

2. **Consistent spacing scale:**
   - Use `space-y-{n}` for vertical stacks
   - Use `gap-{n}` for flex/grid layouts
   - Prefer: 2, 4, 6, 8, 12, 16 (consistent scale)

3. **Color usage:**

   ```tsx
   // Use semantic colors from shadcn theme
   ;(bg - background, text - foreground)
   ;(bg - card, text - card - foreground)
   ;(bg - primary, text - primary - foreground)
   border - border
   ```

4. **Responsive patterns:**
   ```tsx
   // Mobile first
   <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-4">
   ```

### shadcn/ui Components to Use:

- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`
- `Button` (variants: default, outline, ghost)
- `Input` (for search)
- `Badge` (for languages, stats)
- `Avatar`, `AvatarImage`, `AvatarFallback`
- `Skeleton` (loading states)
- `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` (for organizing content)
- `Alert`, `AlertDescription` (for errors)

---

## Component Patterns

### 1. Server Functions (TanStack Start)

```typescript
// In route files - use server functions for API calls
import { createServerFn } from '@tanstack/start'

export const getUser = createServerFn('GET', async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`)
  if (!response.ok) throw new Error('User not found')
  return response.json()
})
```

### 2. Loading States

Always show loading feedback:

```tsx
{
  isLoading ? (
    <div className="space-y-4">
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-24 w-full" />
    </div>
  ) : (
    <RepoList repos={repos} />
  )
}
```

### 3. Error Boundaries

Implement error handling at route level and component level.

### 4. Reusable Components

Example structure:

```tsx
// components/RepoCard.tsx
interface RepoCardProps {
  repo: GitHubRepo
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{repo.name}</CardTitle>
        <CardDescription>{repo.description}</CardDescription>
      </CardHeader>
      <CardContent>{/* Stats */}</CardContent>
    </Card>
  )
}
```

---

## Data Flow

1. **User searches** → Input in SearchBar component
2. **Navigation** → Navigate to `/user/{username}` route
3. **Server function** → Fetch user data from GitHub API
4. **Display** → Show UserProfile + RepoList
5. **Interactions** → Sort repos, toggle dark mode, etc.

---

## File Naming Conventions

- **Components**: PascalCase (`UserProfile. tsx`, `RepoCard.tsx`)
- **Routes**: kebab-case with TanStack conventions (`index.tsx`, `user.$username.tsx`)
- **Utilities**: kebab-case (`github-api.ts`, `utils.ts`)
- **Types**: kebab-case (`types.ts`)

---

## Code Style Preferences

### Import Order:

```typescript
// 1. External libraries
import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

// 2. Internal utilities
import { cn } from '~/lib/utils'
import type { GitHubUser } from '~/lib/types'

// 3. Components
import { Button } from '~/components/ui/button'
import { UserProfile } from '~/components/UserProfile'
```

### Function Components:

```typescript
// Prefer named exports
export function ComponentName({ prop }: ComponentNameProps) {
  // Component logic
}

// Not:  export default function ComponentName() {}
```

### Async Patterns:

```typescript
// Use async/await over . then()
const data = await fetchUser(username)

// Handle errors with try/catch
try {
  const data = await fetchUser(username)
} catch (error) {
  // Handle error
}
```

---

## Testing Strategy (MVP)

**Skip for initial MVP** - Focus on shipping fast.

Consider adding later:

- Vitest for unit tests
- Testing Library for component tests
- Playwright for E2E tests

---

## Deployment (Netlify)

### Setup:

1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `.output/public`
4. TanStack Start will auto-detect Netlify

### Environment Variables:

For future when adding PAT:

```
GITHUB_TOKEN=ghp_xxxxx
```

---

## Future Enhancements (Phase 2)

Once MVP is complete, consider:

1. **Contribution Graph** - Visualize user activity
2. **Language Statistics** - Pie chart of languages used
3. **Compare Users** - Side-by-side comparison
4. **Favorites System** - Save favorite profiles (localStorage → DB later)
5. **Organization Support** - View org profiles
6. **Repository Search** - Filter within user's repos
7. **Advanced Stats** - More detailed analytics
8. **Share URLs** - SEO-friendly user pages
9. **GitHub Authentication** - Higher rate limits, view private repos

---

## Common Pitfalls to Avoid

❌ **Don't** fetch data in components - use TanStack Start server functions
❌ **Don't** use `any` types - be explicit
❌ **Don't** ignore loading/error states
❌ **Don't** use inline styles - use Tailwind classes
❌ **Don't** forget mobile responsiveness
❌ **Don't** hardcode colors - use theme tokens

✅ **Do** use server functions for API calls
✅ **Do** handle all edge cases (no repos, rate limits, etc.)
✅ **Do** use semantic HTML (`<main>`, `<article>`, etc.)
✅ **Do** optimize images (lazy loading, proper sizing)
✅ **Do** test on different devices/browsers

---

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Build for production**: `npm run build`
3. **Preview production build**: `npm run start`
4. **Add shadcn component**: `npx shadcn@latest add [component]`

---

## Questions to Ask When Implementing Features

Before implementing any feature, consider:

1. **Does this need to be a server function or client component?**
2. **What loading state should users see?**
3. **What happens if this fails?**
4. **Is this responsive on mobile?**
5. **Does this respect dark mode?**
6. **Can this component be reused? **
7. **Are all types properly defined?**

---

## Success Criteria

The MVP is complete when:

✅ Users can search for any GitHub user
✅ Profile information displays correctly
✅ Repositories list with sorting
✅ Works on mobile and desktop
✅ Dark mode functions properly
✅ Loading states are smooth
✅ Errors are handled gracefully
✅ Deployed and accessible on Netlify

---

## Additional Context

**Learning Goals:**

- Master TanStack Start's routing and server functions
- Build production-ready UI with shadcn/ui
- Practice Tailwind CSS patterns
- Work with external APIs
- Ship a complete project

**Target Timeline:**

- Day 1: Setup + Basic search + User profile
- Day 2: Repository list + Sorting + Styling
- Day 3: Polish + Dark mode + Error handling + Deploy

---

## Resources

- [TanStack Start Docs](https://tanstack.com/start)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [GitHub REST API Docs](https://docs.github.com/en/rest)
- [GitHub Language Colors](https://github.com/ozh/github-colors)

---

**Remember:** Ship fast, iterate based on usage. Don't over-engineer the MVP. Get it working, then make it beautiful! 🚀
