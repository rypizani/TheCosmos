import React, { useState } from 'react'
// pexels.com for free stock videos
import Video from '../../videos/mundo.mp4'
import img from '../../images/Logo Original 2.png'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    Img
} from './StyledHero'

import { Button } from '../ButtonElement'

const Hero = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>

            <Img src={img}/>

                <HeroH1>Eficiência, Organização E Colaboração </HeroH1>
                <HeroP> 
                    Sign up for a new account today and receive 
                    free access to the world's first interactive guga.
                </HeroP>
                <HeroBtnWrapper>
                     <Button 
                        to="signup" 
                        onMouseEnter={ onHover } 
                        onMouseLeave={ onHover }
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass='active'
                        exact='true'
                        > 
                        Conheça Mais 
                        {hover ? <ArrowForward/> : <ArrowRight/>} 
                    </Button> 
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero