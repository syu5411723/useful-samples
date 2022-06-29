import React from 'react'
import { createContext } from 'react'
import { AnimatedBackground } from '../../components/pages/AnimatedBackground'
import { ChangeColor } from '../../components/pages/ChangeColor'
import { DrinkCard } from '../../components/pages/DrinkCard'
import { Dropmorphism } from '../../components/pages/Dropmorphism'
import { Energy } from '../../components/pages/Energy'
import { FingerScan } from '../../components/pages/FingerScan'
import { Fire } from '../../components/pages/Fire'
import { InfinitLiquid } from '../../components/pages/InfinitLiquid'
import { LiquidLoader } from '../../components/pages/LiquidLoader'
import { Scatter } from '../../components/pages/Scatter'
import { Smokeanimation } from '../../components/pages/Smokeanimation'
import { WaveText } from '../../components/pages/WaveText'
import { WavyCircle } from '../../components/pages/WavyCircle'
// import { Detail } from '../../components/pages/Detail'
import { PostData } from '../../lib/PostData'


type Context = {
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

// export const DataContext = createContext({} as ContextProps)

const DetailPage = ({ postData }) => {
    return (
        <>
            {/* <Detail /> */}
            {/* <InfinitLiquid /> */}
            {/* <WavyCircle /> */}
            {/* <ChangeColor /> */}
            {/* <DrinkCard /> */}
            {/* <Energy /> */}
            {/* <LiquidLoader /> */}
            {/* <FingerScan /> */}
            {/* <Scatter /> */}
            {/* <Dropmorphism /> */}
            {/* <AnimatedBackground /> */}
            {/* <Smokeanimation /> */}
            {/* <Fire /> */}
            <WaveText />

        </>
    )
}

export default DetailPage
