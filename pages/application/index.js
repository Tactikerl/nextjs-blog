import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home({ frontmatter, markdown }) {
  return (
    <div>
      <Head>
        <title>Demo Blog | {frontmatter.title}</title>
      </Head>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>
      <hr />
      <ReactMarkdown>{markdown}</ReactMarkdown>
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
