﻿import React from 'react'
import { createContext } from 'react'
import { InfinitLiquid } from '../../components/pages/InfinitLiquid'
import { WavyCircle } from '../../components/pages/WavyCircle'
// import { Detail } from '../../components/pages/Detail'
import { PostData } from '../../lib/PostData'


type ContextProps = {
    postData: any
}
export const getStaticPaths = async () => {
    const paths = PostData.map(data => ({
        params: {
            slug: data.id
        }
    }))
    return { paths, fallback: false }
}
export const getStaticProps = async (context) => {
    const data = await PostData
    const { slug } = context.params
    const postData = data.filter(item => item.id === slug);
    return {
        props: {
            postData,
        }
    }
}

export const DataContext = createContext({} as ContextProps)

const DetailPage = ({ postData }) => {
    return (
        <>
            {/* <Detail /> */}
            {/* <InfinitLiquid /> */}
            <WavyCircle />
        </>
    )
}

export default DetailPage