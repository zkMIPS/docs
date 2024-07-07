import Image from 'next/image'


export default {
  logo: <Image className='dark:invert' width={164} height={164} src="/assets/ZKMLogoHorizontal.png"/>,
  css: `
    .nextra-sidebar-item.active,
    .nextra-sidebar-button.active {
    color: #ff00ff !important;
    background-color: #ff00ff !important;
    }
    `,
  project: {
    link: 'https://github.com/shuding/nextra'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <div style={{ background: 'red', textAlign: 'center' }}>{title}</div>
      }

      if (title === 'FAQ') {
        return <>❓ {title}</>
      }

      return (
        <> {title}</>
  );
    }
  },
  footer: {
    text: (
      <span className="m500:text-sm dark:bg-darkText z-30 px-5 py-5 text-center font-base">
      
      <a
        target="_blank"
        href="https://www.zkm.io/"
        className="font-heading underline"
      >
        ZKM{' '}
      </a>
      is a general-purpose zkVM utilizing MIPS architecture, set to facilitate Ethereum as the Global/universal settlement layer.
    </span>
    )
  },
}