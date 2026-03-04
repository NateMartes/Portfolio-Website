import { useEffect, useState } from 'react'

export default function About() {
  
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <section id="about" className="text-white w-screen flex flex-col place-items-center p-10">
      <div>
        <h2 className="text-lg md:text-xl mb-3">A Little About Me . . .</h2>
        <p className={`max-w-150 transition transform ease-in ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          I'm a developer driven by the "eureka" moments found in work, 
          academia, and passion projects. I thrive on the ever-evolving landscape of 
          tech and aim to deliver high-quality code across the entire stack.
        </p>
      </div>
    </section>
  )
}