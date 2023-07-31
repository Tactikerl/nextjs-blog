import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ blogs }) {
  return (
    <div className={styles['container']}>
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
        <p>
          Dette er ett testmiljø der utvikler vil teste funksjonalitet og design
          før ferdig produksjon publiseres
        </p>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // List of files in blogs folder
  const filesInBlogs = fs.readdirSync('./content/blogs')

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.')),
    }
  })

  return {
    props: {
      blogs,
    },
  }
}
