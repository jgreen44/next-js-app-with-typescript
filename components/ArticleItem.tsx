import React from 'react'
import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'
import { ArticlesType } from '@/components/types'

export const ArticleItem = ({ article }: { article: ArticlesType }) => {
  return (
    <Link legacyBehavior href={'/article/[id]'} as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  )
}
