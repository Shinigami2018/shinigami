# Neural Archive - Next Steps & Architecture

## Current Status
We have successfully built the core Next.js layout, styled the cyberpunk terminal aesthetic (glows, borders, scanlines, monospace fonts), completed the Home Page (Hero and About Me), and mapped the original local assets to use Next.js best practices.

We are now ready to implement the **Dynamic Data Layer**.

## The Hybrid API Architecture
Instead of manually typing out projects and copying video links into a CMS, the site will pull live data directly from platforms using a 3-pillar data mesh:

1. **Sanity.io (CMS)**: Exclusively used for **Blogs**. Provides the rich text editor (`/studio`) needed for long-form technical writing.
2. **GitHub API**: Used for the **Projects** page. We will hit the GitHub API to dynamically pull project titles, descriptions, and programming languages. By using Next.js `revalidate: 18000`, the server will securely fetch fresh data every 5 hours.
3. **YouTube Data API**: Used for the **Gallery/Media** page. We will fetch the latest channel uploads so the site displays new content automatically (also natively cached every 5 hours).

---

## Required Action (When You Return)

Because **Sanity CMS** requires you to authorize the database using your private Google or GitHub account, you must physically run the initialization command. 

**Step 1:** Open your terminal in the VS Code project.
**Step 2:** Run `npm create sanity@latest`
**Step 3:** Follow the interactive prompts:
   - Log in (it will open your browser).
   - Create a new project named **Neural Archive**.
   - Use the default Dataset name: **production**
   - Project template: **Clean project with no sample data**.
   - TypeScript: **Yes**
   - Package manager: **npm**

**Step 4:** Once the CLI finishes, it will generate a `sanity.cli.ts` or `sanity.config.ts` file in your code with your top-secret **Project ID**.

## Future TODOs (For the AI)
Once you have initialized the project and have the Project ID, tell the AI to:
- [ ] Install `@portabletext/react` for rendering the rich text.
- [ ] Create the `post.ts` (Blog) schema in the `src/sanity/schemas` directory.
- [x] Configure `src/app/studio/[[...index]]/page.tsx` to host the embedded visual Studio dashboard.
- [x] Write the GROQ query to fetch dynamic blogs into `src/app/blog/page.tsx`.
- [x] Build the GitHub API data fetcher in `src/app/projects/page.tsx`.
- [x] Build the YouTube Data API fetcher in `src/app/gallery/page.tsx`.
