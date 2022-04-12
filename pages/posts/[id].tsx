import React from 'react'
import { createContext } from 'react'
const PostData = [
    {
        id: '1',
        image: "tetete",
    },
    {
        id: '2',
        image: "tetet",
    },
]

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

const DetailPage = ({postData}) => {
    console.log(postData[0].image)
    return (
        <>
        <p>{postData[0].image}</p>

        </>
    )
}

export default DetailPage
