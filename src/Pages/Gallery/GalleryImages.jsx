import React from 'react'
import { useLocation } from 'react-router-dom'
import { PaddingStyle } from '../../styles/globalStyles'
import styled from 'styled-components'
import MansonryLayout from '../../components/Mansory/Mansory'
import One from "../../image/Man/one.jpeg"
import Two from "../../image/Man/two.jpeg"
import Three from "../../image/Man/three.jpeg"
import Four from "../../image/Man/four.jpeg"
import Five from "../../image/Man/five.jpeg"
import Six from "../../image/Man/six.jpeg"
import Seven from "../../image/Man/seven.jpeg"
import Eight from "../../image/Man/eight.jpeg"
import Nine from "../../image/Man/nine.jpeg"
import Ten from "../../image/Man/ten.jpeg"
import Eleven from "../../image/Man/eleven.jpeg"
import Twelve from "../../image/Man/twelve.jpeg"
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery'
import useProgressiveImage from '../../hooks/useProgressiveImage/useProgressiveImage'
import { Clip } from '../../components/Loader/Spinner'
import Error from '../../components/Error/Error'


const Data = [
    {
        id: 1,
        image: One
    },
    {
        id: 2,
        image: Two
    },
    {
        id: 3,
        image: Three
    },
    {
        id: 4,
        image: Four
    },
    {
        id: 5,
        image: Five
    },
    {
        id: 6,
        image: Six
    },
    {
        id: 7,
        image: Seven
    },
    {
        id: 8,
        image: Eight
    },
    {
        id: 9,
        image: Nine
    },
    {
        id: 10,
        image: Ten
    },
    {
        id: 11,
        image: Eleven
    },
    {
        id: 12,
        image: Twelve
    },
]

const Section  = styled.section`
`
const Main = styled.main`
    ${PaddingStyle}
    margin: 2rem 0;
`

const GalleryImages = () => {
    const Query = useMediaQuery("(min-width: 600px)")
    const { pathname } = useLocation()
    const onePic = useProgressiveImage(One)
    const twoPic = useProgressiveImage(Two)
    const threePic = useProgressiveImage(Three)
    const fourPic = useProgressiveImage(Four)
    const fivePic = useProgressiveImage(Five)
    const sixPic = useProgressiveImage(Six)
    const sevenPic = useProgressiveImage(Seven)
    const eightPic = useProgressiveImage(Eight)
    const ninePic = useProgressiveImage(Nine)
    const tenPic = useProgressiveImage(Ten)
    const elevenPic = useProgressiveImage(Eleven)
    const twelvePic = useProgressiveImage(Twelve)


    if(pathname === '/gallery/videos'){ 
        return (
            <Main paddingleft="true" paddingRight="true" >
                <Error title="We are updating our gallery. Please check back." />
            </Main>
            )
    }

    if(pathname === '/gallery/cars' ) { 
        return (
            <Main paddingleft="true" paddingRight="true" >
                <Error title="We are updating our gallery. Please check back." />
            </Main>
        )
    }

    if(pathname === '/gallery/apartments' || 'gallery/apartments') {
        return ( 
            <Main paddingleft="true" paddingRight="true" >
                    {onePic && twoPic && threePic && fourPic && fivePic 
                        && sixPic && sevenPic && eightPic && ninePic && tenPic && elevenPic && twelvePic ?
                        (<MansonryLayout  data={Data} column={Query ? 3 : 2}/> )
                        : (<div style={{height: '100vh', position: 'relative', margin: '1rem'}}>
                                <Clip type='TailSpin' />
                            </div>
                        )
                    }
            </Main>
        )
    }

    

    return (
        <Section>
            {pathname === '/gallery/apartments' && (
                <Main paddingleft="true" paddingRight="true" >
                    {onePic && twoPic && threePic && fourPic && fivePic 
                        && sixPic && sevenPic && eightPic && ninePic && tenPic && elevenPic && twelvePic ?
                        (<MansonryLayout  data={Data} column={Query ? 3 : 2}/> )
                        : (<div style={{height: '100vh', position: 'relative', margin: '1rem'}}>
                                <Clip type='TailSpin' />
                            </div>
                        )
                    }
                </Main>
            )}
        </Section>
    )
}

export default GalleryImages