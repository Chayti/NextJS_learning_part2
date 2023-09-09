# Day-1:
- [NextJS js installation & configuration](https://nextjs.org/docs/getting-started/installation)
- Making component inside page.js (Home page) & reusing it
- 'use client' directive in parent component for CSR
- Event handlers with props
- State
- Component inside component (call as component, call as function)
- [next-config-js page from docs](https://nextjs.org/docs/app/api-reference/next-config-js)
- Understood folder structure

# Day-2:
- Deep concept of server component/ client component
- [react-essentials page from docs](https://nextjs.org/docs/getting-started/react-essentials)

# Day-3:
- Basic file based routing (App Router)
- pattern -> localhost:3000/login
    - src/login/page.js/ .jsx
    - src/about/page.js/ .jsx
    - folder name is in small letter matched with the route name
    - page.js is present in every folder
- Linking (link using anchor: won't effect the website)
- Navigation (button, menu etc: effects front-end & back-end)
- [Link](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
- [useRouter](https://nextjs.org/docs/app/api-reference/functions/use-router)
- Nested Routing

# Day-4
- [App Routing & it's sub categories](https://nextjs.org/docs/app/building-your-application/routing)
- [Layout](https://nextjs.org/docs/app/api-reference/file-conventions/layout)
- Conditional Layout
- [usePathname](https://nextjs.org/docs/app/api-reference/functions/use-pathname)
- Catch-all segments in routing
- Global 404 page
- Route specific 404 page using catch-all segments
- [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Rendering & all of it's subcategories](https://nextjs.org/docs/app/building-your-application/rendering)

# Day-5
- CSR vs SSR
- [Fetch API data in client component](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
- [Fetch API in server component](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns)
- Client component with server component
- [CSS with NextJS](https://nextjs.org/docs/app/building-your-application/styling)
    - Global css
    - Inline css
    - style with usestate on button click
    - internal css not allowed in nextJS
    - CSS Modules
    - Conditional style
- Import path outside app.js with @

# Day-6
- [Optimization](https://nextjs.org/docs/app/building-your-application/optimizing)
    - Image optimization
        - Public folder image shown
        - Configuration for external image url
    - Font Optimization
    - generateMetadata()
    - Script component
    - Loading feature
    - Static assets
- Production build
    - [Export static html page](https://nextjs.org/docs/app/building-your-application/deploying)
- [Default file conventions](https://nextjs.org/docs/app/api-reference/file-conventions)
- [Default Components](https://nextjs.org/docs/app/api-reference/components)
