/*
  ! THIS IS A MODIFIED FILE OF ORIGINAL PROJECT
  This file is edited to be able to work on Netlify-like
  static hosting services. If you are here to use the
  old website with full of its features, you'll have to
  use `nuxt.config.original.js`.
*/

import { resolve } from "path";
import colors from "vuetify/es5/util/colors";

export default {
  rootDir: "./",
  srcDir: "./src",
  target: "static",
  head: {
    titleTemplate: "%s - eggsy.xyz",
    title: "eggsy.xyz",
    meta: [
      {
        charset: "utf-8",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary",
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@eggsydev",
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@eggsydev",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "eggsy.xyz",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: process.env.npm_package_description,
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "eggsy.xyz",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#212121",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description,
      },
      {
        hid: "og:description",
        name: "og:description",
        content: process.env.npm_package_description,
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  },
  css: ["./stylesheets/root.scss"],
  plugins: [
    "@/plugins/util.js",
    {
      src: "@/plugins/highlight.js",
      mode: "client",
    },
    {
      src: "@/plugins/tippy.js",
      mode: "client",
    },
  ],
  modules: [
    "@nuxt/content", // has to be on top so sitemap and feed module can read data inside it
    "@nuxtjs/sitemap",
    "@nuxtjs/device",
    "@nuxtjs/pwa",
  ],
  buildModules: [
    "@nuxtjs/axios",
    "@nuxtjs/vuetify",
    ["@nuxtjs/dotenv", { path: resolve("./") }],
  ],
  pwa: {
    background_color: "#212121",
    theme_color: "#212121",
  },
  async sitemap() {
    const { $content } = require("@nuxt/content"),
      posts = await $content().fetch();

    let routes = [];
    for (const post of posts) {
      routes.push(`blog/gonderi/${post.slug}`);
    }

    return {
      hostname: "https://eggsy.xyz",
      gzip: true,
      routes: routes,
    };
  },
  content: {
    liveEdit: false,
    markdown: {
      remarkPlugins: [
        "remark-emoji",
        [
          "remark-autolink-headings",
          {
            behavior: "wrap",
          },
        ],
      ],
    },
  },
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  router: {
    middleware: ["redirection"],
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
  components: true,
  loading: { color: "#fff" },
  /* serverMiddleware: [resolve(__dirname, "src/api/index.js")], */
};
