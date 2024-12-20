import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'body',
            label: 'Body',
            isBody: true,
            required: true,
          },
          {
            type: 'string',
            name: 'signup',
            label: 'Signup header',
            required: true,
          },
          {
            type: 'string',
            name: 'signupContent',
            label: 'Signup Content',
            required: true,
          },
          {
            type: 'image',
            label: 'Hero image',
            name: 'imgSrc',
          },
          {
            type: 'string',
            name: 'newsHeader',
            label: 'News Header',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'newsBody',
            label: 'Body',
            required: true,
          },
          {
            type: 'string',
            name: 'newsLink',
            label: 'Update Link',
            required: true,
          },
          {
            type: 'image',
            label: 'News image',
            name: 'imgNews',
          },
        ],
      },
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
