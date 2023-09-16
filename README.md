## Good Energy Playbook

### Installation

Install the project dependencies:

```
npm i
```

This will download the project's dependencies.

You may need to run `npm i --force`, due to upgrade to `npm@7` where `npm install` will fail when it encounters conflicting peerDependencies. This is due to package `nextjs-breadcrumbs`. See [this link](https://stackoverflow.com/a/74418970).

Add the `.env.local` file to the root directory of this repo. Please contact an admin for the environment variables.

To run the site locally, run:

```
npm run dev
```

To locally run the CMS, Sanity, go into the `studio/` folder. From the project root, run `cd studio` in a terminal.

To install the [Sanity CLI](https://www.sanity.io/docs/cli), run:
```
npm install --g sanity@latest
```

Run `npm install` again in this directory, then run:

```
sanity install
```

and then:

```
sanity start
```

### Changing content

To create a new content section on the website, there are three steps:

- **Define the [document](https://www.sanity.io/docs/document-type) and [schema](https://www.sanity.io/docs/schema-types).** These files are defined in `.js` and live under `/studio/schemas/[schema-file-name].js`.Updates to the schema files will trigger a reload of the local studio (run with `sanity start`).
  - Next, add that schema to the main list of schemas at `/studio/schemas/page-content.js` and `studio/schemas/schema.js`.
- **Define a [GROQ query](https://www.sanity.io/docs/how-queries-work) to request this document.** These queries are defined in `/data/queries/`.
  - Add the query to the main query ingestion point, originating at `data/index.js`.
- **Render the query in that same shape on the page.** Queries are passed to `sanity.fetch` to request data from the frontend. React components are created under `components/[ComponentType]/[SubComponentType].tsx`.
  - Add your new component to the component renderer at `components/Page/PageContent.tsx`.

Content is never stored locally. Data is always stored in Sanity's hosted Content Lake. This means you can make changes to local data schemas without changing any other existing content.

**** WARNING: **** This also means that components may be in use on the site that aren't referenced outside the renderer. Be careful when changing components, because those components may be in use elsewhere on the site. Check the CMS and schema to confirm.

### Testing

To build your Studio for production locally, run the following command in the Studio project folder:

```sh
npm run build
```

### Deployment and infrastructure

Environment variables are managed through Vercel. Contact a Good Energy workspace admin to be added to the Vercel project.

### FAQs

#### What is the tech stack?

- CMS: Sanity.io
- Website: Next.js, React
- Webhost, CIs, and deploy: Vercel
  - Deploys are managed through Github CI
  - Feature branches are deployed to staging
  - Staging links can be accessed through Vercel and should follow this naming convention:
    - https://good-energy-git-[your-branch-name]-good-energy-stories.vercel.app/
  - Once feature branches are merged into `main`, that automatically triggers a production deploy to goodenergystories.com

#### Where is CMS data requested from Sanity, and how does it trickle down to components?

CMS data is requested through [`getStaticProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props), which is a Next.js specific function. Next.js will pre-render any page with an exported `getStaticProps` function and pre-render that page at build-time.

#### What is `usePreviewSubscription`?

`usePreviewSubscription` is a Sanity function that keeps track of all the data that has changed, without publishing the page. It creates a production page guarded by a secret.
