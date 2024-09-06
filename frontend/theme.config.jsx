import Image from 'next/image'

export default {
  logo: (
    <Image
      className="dark:invert"
      width={164}
      height={164}
      src="/assets/ZKMLogoHorizontal.png"
    />
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ZKM" />
    </>
  ),
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
        width="30"
        height="30"
        style={{
          borderRadius: '50%',
        }}
        src="/assets/ZKMLogomark.png"
      />
    ),
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://playground.zkm.io/" target="_blank">
        🎉 Our playground is live! →
      </a>
    ),
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ background: 'red', textAlign: 'center' }}>{title}</div>
        )
      }

      if (title === 'FAQ') {
        return <>❓ {title}</>
      }

      return <> {title}</>
    },
    defaultMenuCollapseLevel: 1,
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
        Ethereum as the Global/universal settlement layer.
      </span>
    ),
  },
}
