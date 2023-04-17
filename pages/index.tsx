import { ArticleList } from '@/components/ArticleList'
import { server } from '@/config/index'

type ArticlesType = {
  userId: number
  id: number
  title: string
  body: string
}

export default function Home({ articles }: { articles: ArticlesType[] }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles,
//     },
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles,
    },
  }
}
