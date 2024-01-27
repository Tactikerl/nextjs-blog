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
              <Link href="/about">Om oss</Link>
            </li>
            <li>
              <Link href="/gallery">Galleri</Link>
            </li>
            <li>
              <Link href="/legal">Vedtekter</Link>
            </li>
            <li>
              <Link href="/application">Søknad</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['content']}>
        <h2>{frontmatter.title}</h2>
        <ReactMarkdown>{markdown}</ReactMarkdown>
        <p>
          <a href="mailto:someone@example.com">Send email</a>
        </p>
      </div>
      <footer className={styles['footer']}></footer>
    </div>
  )
}

export async function getStaticProps() {
  const fileContent = matter(
    fs.readFileSync(`./content/pages/application/index.md`, 'utf8'),
  )
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter, markdown },
  }
}
