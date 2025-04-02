<p align="center">
  <img width="100%" src=".github/assets/banner.png" alt="Banner for Nobel Explorer project.">
</p>

<p align="center">
  <b>Explore Nobel laureates and their achievements with an intuitive interface.</b>
</p>

## 🖼️ Work experience

I did not create a Figma mockup because I already had a fairly clear idea of where I was going. The large amount of data represented by the Nobel laureates and prizes led me to think of this traditional "grid" layout, even if it meant sacrificing some of the site's aesthetics.

Initially, I thought I would only create a single page for displaying the laureates and prizes, but I became more invested in the project and decided to present it as if it were a real personal project. This started with using a logo for the project, a font associated with the project name, etc.

The site and this presentation are entirely in English. I made this decision after noticing that the API only offered data display in English (and sometimes Spanish for some data, etc.).

I included certain details, such as storing active filters in the page's URL to make it easier to share a search between users, and a small delay between when the user types in a search bar and when the query is sent to the API to avoid unnecessary requests.

## 🛠️ Tech stack

- [bun](https://bun.sh) : fast all-in-one JS runtime
- [Next.js](https://nextjs.org) : React framework
- [TailwindCSS](https://tailwindcss.com) : CSS framework
- [TanStack Query](https://tanstack.com/query/latest) : asynchronous state manager
- [nuqs](https://nuqs.47ng.com) : type-safe search params state manager
- [Radix UI](https://radix-ui.com) : accessible UI components
- [lucide](https://lucide.dev) : icon library
- [motion](https://motion.dev) : animation library

## 🔨 Tools used

- [Prettier](https://prettier.io) : code formatter
- [ESLint](https://eslint.org) : linting tool
- [PostCSS](https://postcss.org) : CSS processing tool
- [Turbopack](https://turbo.build/pack) : fast bundler for development
- [Swagger TS API](https://github.com/acacode/swagger-typescript-api) : TS types generator from Swagger export

## ✨ Features

- [x] A landing page with animations using `motion`
- [x] Display laureates and prizes with pagination
- [x] Add advanced filter for laureates and prizes
- [x] View detailed information about each laureate
- [ ] View detailed information about each prize
- [x] Responsive
- [x] Type-safe query management with `nuqs`
- [x] Fast and efficient data fetching using `TanStack Query`
- [x] Accessible and reusable UI components with `Radix UI`
- [x] Clean and maintainable code with `Prettier` and `ESLint`
