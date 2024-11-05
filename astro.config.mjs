// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'Peppermint Documentation',
      social: {
          github: 'https://github.com/Peppermint-Lab/peppermint',
          discord: 'https://discord.gg/cyj86Ncygn',
      },
      sidebar: [
          {
              label: 'Guides',
              items: [
                  // Each item here is one entry in the navigation menu.
                  { label: 'Welcome', slug: 'guides/welcome' },
                  { label: 'Install with Docker(Official)', slug: 'guides/docker' },
                  { label: 'Easy-Installer (Spearmint)', slug: 'guides/easy' },
                  { label: 'Reverse Proxy', slug: 'guides/proxy' },
                  { label: 'OpenID Connect (OIDC)', slug: 'guides/oidc' },
                  { label: 'Local Development Environment', slug: 'guides/local' },
                  { label: 'Adding a New Language', slug: 'guides/language' },
              ],
              
          },
          /*{
              label: 'Reference',
              autogenerate: { directory: 'reference' },
          },*/
      ],
  }),],

});