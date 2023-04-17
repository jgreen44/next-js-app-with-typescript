import React from 'react'
import articleStyles from '../styles/Article.module.css'
import { ArticlesType } from '@/components/types'
import { ArticleItem } from '@/components/ArticleItem'
export const ArticleList = ({ articles }: { articles: ArticlesType[] }) => {
  console.log(articles)
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  )
}
