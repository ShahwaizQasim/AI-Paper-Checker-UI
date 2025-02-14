import React from 'react'
import HeroSection from '../../Components/HeroSection/heroSection'
import ExamSection from '../../Components/ExamSection/examSection'
import PictureSection from '../../Components/PictureCaptureSection/pictureSection'
import GradeSection from '../../Components/GradeSection/gradeSection'

function Home() {
    return (
        <>
            <GradeSection />
            <HeroSection />
            <ExamSection />
            <PictureSection />
        </>
    )
}

export default Home