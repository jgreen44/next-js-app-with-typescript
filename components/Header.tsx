import React from 'react'
import headerStyles from '../styles/Header.module.css'
export const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Learn something new...or don&rsquo;t. I&rsquo;m not your dad.
      </p>
    </div>
  )
}
