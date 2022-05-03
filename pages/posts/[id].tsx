import React from 'react'
import { createContext } from 'react'
import { Detail } from '../../components/pages/Detail'
import { PostData } from '../../lib/PostData'


type ContextProps = {
    postData: any
}
export const getStaticPaths = async () => {
    const paths = PostData.map(data => ({
        params: {
            id: data.id
        }
    }))
    return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
    const data = await PostData
    const { id } = context.params
    const postData = data.filter(item => item.id === id);
    return {
        props: {
            postData,
        }
    }
}

export const DataContext = createContext({} as ContextProps)

const DetailPage = ({ postData }) => {
    console.log(postData.id)
    return (
        <>
            <Detail />
        </>
    )
}

export default DetailPage
