import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Blog({ blogs }) {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Demo Blog</title>
      </Head>
      <h1 className={styles['header']}>
        Sture Halvorsens legat for musikkstuderende i Finnmark
      </h1>
      <p className={styles['subtitle']}>
        Dette er ett testmiljø der utvikler vil teste funksjonalitet og design
        før ferdig produksjon publiseres
      </p>
      <ul className={styles['blog-list']}>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              {blog.date}:{blog.title}
            </Link>
          </li>
        ))}
      </ul>
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
