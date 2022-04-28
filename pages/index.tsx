import Head from 'next/head'
import { Header } from '../components/design/header/templates/Header'

import { Layout } from '../components/design/Layout'
import { Home } from '../components/pages/Home'
// import { Main } from '../components/templates/Home/Main'

// export const getStaticPaths = async () => {
//   const paths = PostData.map(data => ({
//     params: { id: data.id }
//   }))
//   return { paths, fallback: false }
// }

// export const getStaticProps = async () => {
//   const data = await PostData
//   const postData = data
//   return {
//     props: {
//       postData,
//     }
//   }
// }



const index = () => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      {/* <Layout> */}
    <Header />
        <Home />
        {/* <Main /> */}
      {/* </Layout> */}
    </>
  )
}

export default index

