import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import ProjectSection from '@/components/ProjectSection'
import TextSection from '@/components/TextSection'
import Achievements from '@/components/Achievements'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0f0f0f] ">
      <Navbar/>
      <div className="container mt-32 mx-auto px-12 py-4">
      <HeroSection/>
      <Achievements/>
      <TextSection/>
      <AboutSection/>
      <ProjectSection/>
      </div>
    </main>
  )
}
