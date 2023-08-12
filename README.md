## Good Energy Playbook

### Installation

To run the project locally:

```
npm i
```

This will download the project's dependencies.

You may need to run `npm i --force`, due to upgrade to `npm@7` where `npm install` will fail when it encounters conflicting peerDependencies. This is due to package `nextjs-breadcrumbs`. See [this link](https://stackoverflow.com/a/74418970).

Add the `.env.local` file to the root directory of this repo. Please contact an admin for the environment variables.

Then run

```
npm run dev
```

To run sanity locally go into the `studio/` folder. From the project root, run `cd studio` in a terminal.

Then, run:

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

### Testing

To build your Studio for production locally, run the following command in the Studio project folder:

```sh
npm run build
```

### Deployment and infrastructure

Environment variables are managed through Vercel. Contact a Good Energy workspace admin to be added to the Vercel project.

### FAQs

#### Where is CMS data requested from Sanity, and how does it trickle down to components?

CMS data is requested through [`getStaticProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props), which is a Next.js specific function. Next.js will pre-render any page with an exported `getStaticProps` function and pre-render that page at build-time.

#### What is `usePreviewSubscription`?

`usePreviewSubscription` is a Sanity function that keeps track of all the data that has changed, without publishing the page. It creates a production page guarded by a secret.
