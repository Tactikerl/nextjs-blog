import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ImageLoader from '../../components/ImageLoader'

export default function Home({ frontmatter, markdown }) {
  return (
    <div className={styles['container']}>
      <ImageLoader numberOfImages={9} />
      <Head>
        <title>Sture & Tormod Halvorsens legat</title>
      </Head>
      <div className={styles['logo']}>
        <h1 className={styles['logo-text']}>
          Sture Halvorsens legat for musikkstuderende i Finnmark
        </h1>
        <div className={styles['menuContainer']}>
          <ul className={styles['menu']}>
            <li>
              <Link href="/" className={styles['button']}>
                Hjem
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles['button']}>
                Om oss
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={styles['button']}>
                Galleri
              </Link>
            </li>
            <li>
              <Link href="/legal" className={styles['button']}>
                Vedtekter
              </Link>
            </li>
            <li>
              <Link href="/application" className={styles['button']}>
                Søknad
              </Link>
            </li>
            <li>
              <Link href="/blog" className={styles['button']}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['content']}>
        <h2>{frontmatter.title}</h2>
        <ReactMarkdown>{markdown}</ReactMarkdown>
        <ul className={styles['profileList']}>
          {frontmatter.profileGallery.map((item, index) => (
            <li key={index}>
              <div className={styles['imageContainer']}>
                <img
                  src={item.image}
                  className={styles['contentImg']}
                  alt={item.alt}
                />
              </div>
              <div className={styles['textContainer']}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles['footer']}></footer>
    </div>
  )
}

export async function getStaticProps() {
  const fileContent = matter(
    fs.readFileSync(`./content/pages/about/index.md`, 'utf8'),
  )
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter, markdown },
  }
}
