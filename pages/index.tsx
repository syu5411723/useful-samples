import Head from 'next/head'
import React from 'react'
import { createContext } from "react"

const PostData = [
  {
    id: "1",
    title: "1",
    text: "1",
    image: "",
  },
]

type ContextProps = {
  postData: any
}

import { Layout } from '../components/design/Layout'
import { Home } from '../components/pages/Home'

// export const getStaticPaths = async () => {
//   const paths = PostData.map(data => ({
//     params: { id: data.id }
//   }))
//   return { paths, fallback: false }
// }

export const getStaticProps = async () => {
  const data = await PostData
  const postData = data
  return {
    props: {
      postData,
    }
  }
}

export const DataContext = createContext({} as ContextProps)

const index = ({ postData }) => {
  console.log(postData)
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Layout>
        <DataContext.Provider value={{ postData }}>
          <Home />
        </DataContext.Provider>
      </Layout>
    </>
  )
}

export default index
