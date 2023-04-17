import React from 'react'
import styles from '../styles/Layout.module.css'
import { Nav } from './Nav'
import { Header } from '@/components/Header'
import Meta from '@/components/Meta'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
