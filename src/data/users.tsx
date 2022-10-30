/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from '@docusaurus/Translate';
import { sortBy } from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE
 *
 * Please don't submit a PR yourself: use the Github Discussion instead:
 * https://github.com/facebook/docusaurus/discussions/7826
 *
 * Instructions for maintainers:
 * - Add the site in the json array below
 * - `title` is the project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of the project
 * - Use relevant tags to categorize the site (read the tag descriptions on the
 *   https://docusaurus.io/showcase page and some further clarifications below)
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If a website is open-source, add a source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Resize images: node admin/scripts/resizeImage.js
 * - Run optimizt manually (see resize image script comment)
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/7620
 */

// LIST OF AVAILABLE TAGS
// Available tags to assign to a showcase site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export type TagType =
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  | 'favorite'
  | 'javascript'
  | 'typescript'
  | 'node'
  | 'react'
  | 'next'
  | 'redux'
  | 'vue'
  | 'vuex'
  | 'pinia'
  | 'scss'
  | 'tailwind'
  | 'bootstrap'
  | 'antd'
  | 'mui'
  | 'vite'
  | 'webpack'
  | 'express'
  | 'testing'
  | 'cicd'
  | 'docker'
  | 'firebase'
  | 'aws'
  | 'gcp'
  | 'mongodb'
  | 'product'
  | 'template'
  | 'design'
  | 'i18n';

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'AgileTs',
    description: 'Global State and Logic Framework for reactive Applications',
    preview: require('./portfolio/agilets.png'),
    website: 'https://agile-ts.org/',
    source: 'https://github.com/agile-ts/documentation',
    tags: ['react', 'design'],
  },
  {
    title: 'AI-Speaker',
    description: 'Local, reliable, fast and private Audio and IoT gate.',
    preview: require('./portfolio/aispeaker.png'),
    website: 'https://ai-speaker.com/',
    source: 'https://github.com/sviete/AIS-WWW',
    tags: ['react'],
  },
  {
    title: 'Aide Jeune',
    description:
      'French Discord server that helps young people who have been bullied or feel bad about themselves',
    preview: require('./portfolio/aide_jeune.png'),
    website: 'https://aidejeune.fr',
    source: 'https://aidejeune.fr',
    tags: ['favorite'],
  },

  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  favorite: {
    label: translate({ id: 'portfolio.filters.tag.favorite.label' }),
    description: translate({
      id: 'portfolio.filters.tag.favorite.description',
    }),
    color: '#e9669e',
  },
  javascript: {
    label: translate({ id: 'portfolio.filters.tag.javascript.label' }),
    description: translate({
      id: 'portfolio.filters.tag.javascript.description',
    }),
    color: '#f7df1e',
  },
  typescript: {
    label: translate({ id: 'portfolio.filters.tag.typescript.label' }),
    description: translate({
      id: 'portfolio.filters.tag.typescript.description',
    }),
    color: '#087ea4',
  },
  node: {
    label: translate({ id: 'portfolio.filters.tag.node.label' }),
    description: translate({
      id: 'portfolio.filters.tag.node.description',
    }),
    color: '#026e00',
  },
  react: {
    label: translate({ id: 'portfolio.filters.tag.react.label' }),
    description: translate({
      id: 'portfolio.filters.tag.react.description',
    }),
    color: '#149eca',
  },
  next: {
    label: translate({ id: 'portfolio.filters.tag.next.label' }),
    description: translate({
      id: 'portfolio.filters.tag.next.description',
    }),
    color: '#fff',
  },
  redux: {
    label: translate({ id: 'portfolio.filters.tag.redux.label' }),
    description: translate({
      id: 'portfolio.filters.tag.redux.description',
    }),
    color: '#764abc',
  },
  vue: {
    label: translate({ id: 'portfolio.filters.tag.vue.label' }),
    description: translate({
      id: 'portfolio.filters.tag.vue.description',
    }),
    color: '#42b883',
  },
  vuex: {
    label: translate({ id: 'portfolio.filters.tag.vuex.label' }),
    description: translate({
      id: 'portfolio.filters.tag.vuex.description',
    }),
    color: '#42b883',
  },
  pinia: {
    label: translate({ id: 'portfolio.filters.tag.pinia.label' }),
    description: translate({
      id: 'portfolio.filters.tag.pinia.description',
    }),
    color: '#ffd859',
  },
  scss: {
    label: translate({ id: 'portfolio.filters.tag.scss.label' }),
    description: translate({
      id: 'portfolio.filters.tag.scss.description',
    }),
    color: '#bf4080',
  },
  tailwind: {
    label: translate({ id: 'portfolio.filters.tag.tailwind.label' }),
    description: translate({
      id: 'portfolio.filters.tag.tailwind.description',
    }),
    color: '#0ea5e9',
  },
  bootstrap: {
    label: translate({ id: 'portfolio.filters.tag.bootstrap.label' }),
    description: translate({
      id: 'portfolio.filters.tag.bootstrap.description',
    }),
    color: '#712cf9',
  },
  antd: {
    label: translate({ id: 'portfolio.filters.tag.antd.label' }),
    description: translate({
      id: 'portfolio.filters.tag.antd.description',
    }),
    color: '#1890ff',
  },
  mui: {
    label: translate({ id: 'portfolio.filters.tag.mui.label' }),
    description: translate({
      id: 'portfolio.filters.tag.mui.description',
    }),
    color: '#007fff',
  },
  vite: {
    label: translate({ id: 'portfolio.filters.tag.vite.label' }),
    description: translate({
      id: 'portfolio.filters.tag.vite.description',
    }),
    color: '#9699ff',
  },
  webpack: {
    label: translate({ id: 'portfolio.filters.tag.webpack.label' }),
    description: translate({
      id: 'portfolio.filters.tag.webpack.description',
    }),
    color: '#8dd6f9',
  },
  express: {
    label: translate({ id: 'portfolio.filters.tag.express.label' }),
    description: translate({
      id: 'portfolio.filters.tag.express.description',
    }),
    color: '#fff',
  },
  testing: {
    label: translate({ id: 'portfolio.filters.tag.testing.label' }),
    description: translate({
      id: 'portfolio.filters.tag.testing.description',
    }),
    color: '#15c213',
  },
  cicd: {
    label: translate({ id: 'portfolio.filters.tag.cicd.label' }),
    description: translate({
      id: 'portfolio.filters.tag.cicd.description',
    }),
    color: '#39ca30',
  },
  docker: {
    label: translate({ id: 'portfolio.filters.tag.docker.label' }),
    description: translate({
      id: 'portfolio.filters.tag.docker.description',
    }),
    color: '#2496ed',
  },
  firebase: {
    label: translate({ id: 'portfolio.filters.tag.firebase.label' }),
    description: translate({
      id: 'portfolio.filters.tag.firebase.description',
    }),
    color: '#edc742',
  },
  aws: {
    label: translate({ id: 'portfolio.filters.tag.aws.label' }),
    description: translate({
      id: 'portfolio.filters.tag.aws.description',
    }),
    color: '#252F3E',
  },
  gcp: {
    label: translate({ id: 'portfolio.filters.tag.gcp.label' }),
    description: translate({
      id: 'portfolio.filters.tag.gcp.description',
    }),
    color: '#EA4335',
  },
  mongodb: {
    label: translate({ id: 'portfolio.filters.tag.mongodb.label' }),
    description: translate({
      id: 'portfolio.filters.tag.mongodb.description',
    }),
    color: '#00ED64',
  },
  i18n: {
    label: translate({ id: 'portfolio.filters.tag.i18n.label' }),
    description: translate({
      id: 'portfolio.filters.tag.i18n.description',
    }),
    color: '#d3adf7',
  },
  product: {
    label: translate({ id: 'portfolio.filters.tag.product.label' }),
    description: translate({
      id: 'portfolio.filters.tag.product.description',
    }),
    color: '#fa8c16',
  },
  template: {
    label: translate({ id: 'portfolio.filters.tag.template.label' }),
    description: translate({
      id: 'portfolio.filters.tag.template.description',
    }),
    color: '#ff7875',
  },
  design: {
    label: translate({ id: 'portfolio.filters.tag.design.label' }),
    description: translate({
      id: 'portfolio.filters.tag.design.description',
    }),
    color: '#13c2c2',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
