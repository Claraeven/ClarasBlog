import Head from 'next/head'
import React from 'react'
import { Button, Badge } from '@chakra-ui/react'
import styles from '../styles/global.module.scss'

function HomePage() {
  return (
    <div>
      <Head>
        <title>Clara&apos;sBlog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/blog.png" />
      </Head>
      <div>Hello</div>
      <div>
        <Button colorScheme="teal" mt={6}>
          Button
        </Button>
        <div className={styles.newBadge}>
          {/* <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge> */}
          New
        </div>
      </div>
    </div>
  )
}
export default HomePage
