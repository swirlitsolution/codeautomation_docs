import { defineConfig } from 'vitepress';
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: 'Code Automation',
  description: 'A brief description of my docs',
  base: '/codeautomation_docs/',
  themeConfig: {
    sidebar: {
      '/': [
        { text: 'System Flow', link: '/start/flow' },
        { text: 'Login', link: '/start/login' },
        { text: 'Dashboard', link: '/start/dashboard' },
        { text: 'Requisition', link: '/start/requisition' },
        { text: 'Notation', link: '/start/Notation' },
        { text: 'Validation', link: '/start/operation' },
        { text: 'Admin', link: '/start/admin' },
      ],
    },
  },
 mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container 
    },
});
