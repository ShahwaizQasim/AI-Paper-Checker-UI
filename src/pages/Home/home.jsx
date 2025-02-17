import React from 'react'
import HeroSection from '../../Components/HeroSection/heroSection'
import ExamSection from '../../Components/ExamSection/examSection'
import PictureSection from '../../Components/PictureCaptureSection/pictureSection'
import GradeSection from '../../Components/GradeSection/gradeSection'
import Footer from '../../Components/Footer/footer'
import About from '../About/about'
import Service from '../../Components/Services/service'

function Home() {
    return (
        <>
            <GradeSection />
            <HeroSection />
            <ExamSection />
            {/* <MainS  */}
            <PictureSection />
            <About />
            <Service />
            <Footer />
        </>
    )
}

export default Home