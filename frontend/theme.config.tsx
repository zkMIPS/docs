import Image from 'next/image'
import { useRouter } from 'next/router'
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <Image
      alt="ZKM Logo"
      className="dark:invert"
      width={120}
      height={120}
      src="/assets/ZKMLogoHorizontal.png"
    />
  ),
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url = `https://docs.zkm.io${
      defaultLocale === locale ? asPath : `/${locale}${asPath}`
    }`

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'ZKM Docs'} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            'Building the Universal Settlement Network'
          }
        />
        <meta
          property="og:image"
          content="https://docs.zkm.io/assets/zkm-main.jpg"
        />
        <meta
          property="description"
          content={
            frontMatter.description ||
            'Building the Universal Settlement Network'
          }
        />

        <link rel="icon" type="image/x-icon" href="/icon.ico" />
        <title>{frontMatter.title || 'ZKM Docs'}</title>
      </>
    )
  },
  primaryHue: { dark: 29, light: 29 },
  primarySaturation: { dark: 100, light: 100 },
  useNextSeoProps() {
    return {
      titleTemplate: 'ZKM Docs',
    }
  },
  project: {
    link: 'https://www.zkm.io/',
    icon: (
      <Image
        alt="ZKM Logo"
        width="30"
        height="30"
        style={{
          borderRadius: '50%',
        }}
        src="/assets/ZKMLogomark.png"
      />
    ),
  },
  // banner: {
  //   key: '1.0-release',
  //   text: (
  //     <a href="https://playground.zkm.io/" target="_blank">
  //       🎉 Our playground is live! →
  //     </a>
  //   ),
  // },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <div style={{ opacity: 0.75, margin: '-10px 0' }}>{title}</div>
      }

      return <> {title}</>
    },
  },
  footer: {
    component: <></>,
  },
  docsRepositoryBase: 'https://github.com/zkMIPS/docs/tree/main/frontend',
  chat: {
    link: 'https://discord.gg/zkm',
  },
}

export default config
