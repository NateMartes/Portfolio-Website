import { LibraryBig, Briefcase, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react'


export default function Banner() {
  
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`flex flex-col place-items-center w-screen mt-10 mb-10 ease-in transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
      <h1 className="font-bold text-white mb-5 md:mt-5 text-xl md:text-3xl">Hey, I'm Nathaniel!</h1>
      <img src="/assets/talk.jpg" className="relative w-48 h-48 md:w-56 md:h-56 object-cover shadow-2xl mb-5"/>
      <div className="flex flex-col md:place-items-center md:flex-row gap-4">
        <div className="flex flex-col text-white text-lg gap-2">
          <p className="flex gap-2"><Briefcase />Software Developer Intern</p>
          <p className="flex gap-2"><MapPin /><a href="https://vetsez.com/" className="hover:underline hover:text-white underline-offset-4">VetsEZ</a></p>
          <p className="flex gap-2"><LibraryBig /><a href="https://wilkes.edu/" className="hover:underline hover:text-white underline-offset-4">Wilkes University</a></p>
      </div>
    </div>
    </div>   
  )
}