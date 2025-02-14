import React from 'react'
import HeroSection from '../../Components/HeroSection/heroSection'
import ExamSection from '../../Components/ExamSection/examSection'
import PictureSection from '../../Components/PictureCaptureSection/pictureSection'
import GradeSection from '../../Components/GradeSection/gradeSection'
import Footer from '../../Components/Footer/footer'

function Home() {
    return (
        <>
            <GradeSection />
            <HeroSection />
            <ExamSection />
            <PictureSection />
            <Footer />
        </>
    )
}

export default Home