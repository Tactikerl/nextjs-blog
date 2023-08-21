import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home({ frontmatter, markdown }) {
  return (
    <div className={styles['container']}>
      <div className={styles['mexicanHedge']}>
        <div className={styles['mexicanWall']}>
          <img
            src="../images/radiospilling.png"
            className={styles['mexicanImage-1']}
          />
          <img src="../images/barna.png" className={styles['mexicanImage-2']} />
          <img src="../images/brev.png" className={styles['mexicanImage-3']} />
          <img
            src="../images/dansbrakka.png"
            className={styles['mexicanImage-4']}
          />
          <img
            src="../images/dansmengde.png"
            className={styles['mexicanImage-5']}
          />
          <img src="../images/kaia.png" className={styles['mexicanImage-6']} />
          <img
            src="../images/medlemsliste.png"
            className={styles['mexicanImage-7']}
          />
          <img src="../images/park.png" className={styles['mexicanImage-8']} />
          <img
            src="../images/poserer.png"
            className={styles['mexicanImage-9']}
          />
          <img
            src="../images/Instrumentbytte.png"
            className={styles['mexicanImage-10']}
          />
          <img
            src="../images/Snappy.png"
            className={styles['mexicanImage-11']}
          />
          <img
            src="../images/snappyinthewild.png"
            className={styles['mexicanImage-12']}
          />
          <img
            src="../images/snappyjenter.png"
            className={styles['mexicanImage-13']}
          />
          <img
            src="../images/snappypose.png"
            className={styles['mexicanImage-14']}
          />
          <img
            src="../images/snappypose2.png"
            className={styles['mexicanImage-15']}
          />
          <img
            src="../images/snappypractice.png"
            className={styles['mexicanImage-16']}
          />
          <img
            src="../images/Sture.png"
            className={styles['mexicanImage-17']}
          />
          <img
            src="../images/stureogodd.png"
            className={styles['mexicanImage-18']}
          />
          <img
            src="../images/tormod.png"
            className={styles['mexicanImage-19']}
          />
          <img
            src="../images/venner.png"
            className={styles['mexicanImage-20']}
          />
        </div>
      </div>
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
        <ul className={styles['galleryList']}>
          {frontmatter.imageGallery.map((item, index) => (
            <li key={index}>
              <div className={styles['imageContainer']}>
                <img
                  src={item.image}
                  className={styles['contentImg']}
                  alt={item.alt}
                />
              </div>
              <div className={styles['textContainer']}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const fileContent = matter(
    fs.readFileSync(`./content/pages/gallery/index.md`, 'utf8'),
  )
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter, markdown },
  }
}
