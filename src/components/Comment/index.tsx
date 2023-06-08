import React from 'react';
import { useThemeConfig, useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ThemeConfig } from '@docusaurus/preset-classic';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Giscus, { GiscusProps } from '@giscus/react';

interface CustomThemeConfig extends ThemeConfig {
  giscus: GiscusProps & { darkTheme: string };
}

const defaultConfig: Partial<GiscusProps> & { darkTheme: string } = {
  id: 'comments',
  mapping: 'title',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  lang: 'en',
  theme: 'light',
  darkTheme: 'dark',
};

export default function Comment(): JSX.Element {
  const themeConfig = useThemeConfig() as CustomThemeConfig;
  const { i18n } = useDocusaurusContext();

  // merge default config
  const giscus = { ...defaultConfig, ...themeConfig.giscus };

  if (!giscus.repo || !giscus.repoId || !giscus.categoryId) {
    throw new Error('You must provide `repo`, `repoId`, and `categoryId` to `themeConfig.giscus`.');
  }

  giscus.theme = useColorMode().colorMode === 'dark' ? giscus.darkTheme : giscus.theme;
  // use i18n.currentLocale directly will cause error about "Content Security Policy directive: "frame-ancestors 'self'" 
  giscus.lang = i18n.currentLocale === 'en' ? 'en': 'zh-TW';

  return (
    <BrowserOnly fallback={<div>Loading Comments...</div>}>
      {() => (
        <div style={{ marginTop: '3rem' }}>
          <Giscus {...giscus} />
        </div>
      )}
    </BrowserOnly>
  );
}
