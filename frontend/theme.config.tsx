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
        <link rel="icon" type="image/x-icon" href="/icon.ico" />
        <title>{frontMatter.title || 'ZKM Docs'}</title>
        <meta
          property="description"
          content={
            frontMatter.description ||
            'Building the Universal Settlement Network'
          }
        />
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
          content="https://docs.zkm.io/assets/zkm-main.webp"
        />
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
    text: (
      <span className="m500:text-sm z-30 px-5 py-5 text-center font-base">
        <a
          target="_blank"
          href="https://www.zkm.io/"
          className="font-heading underline"
        >
          ZKM{' '}
        </a>
        is a general-purpose zkVM utilizing MIPS architecture, set to facilitate
        the Universal Settlement Network
      </span>
    ),
  },
  docsRepositoryBase: 'https://github.com/zkMIPS/docs/tree/main/frontend',
  chat: {
    link: 'https://discord.gg/zkm',
  },
}

export default config
