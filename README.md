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

### Deployment and infrastructure

Environment variables are managed through Vercel. Contact a workspace admin to be added to the Vercel project.
