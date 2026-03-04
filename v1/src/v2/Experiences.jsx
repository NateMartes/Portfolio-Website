import Experience from "./Experience";
import { TimelineLayout } from "@/components/timeline/timeline-layout";
import { Briefcase } from 'lucide-react';
 

export default function Experiences() {
  return (
    <section id="experiences" className="text-white flex flex-col w-screen place-items-start p-10">
      <h2 className="text-lg md:text-xl mb-3">Experiences</h2>
      <TimelineLayout
        animate
        className=""
        connectorColor="primary"
        iconColor="primary"
        items={[
          {
            icon: <Briefcase/>,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            id: 1,
            title: 'First event'
          },
          {
            icon: <Briefcase/>,
            description: 'Aut eius excepturi ex recusandae eius est minima molestiae.',
            id: 2,
            title: 'Second event'
          },
          {
            icon: <Briefcase/>,
            description: 'Sit culpa quas ex nulla animi qui deleniti minus.',
            id: 3,
            title: 'Third event'
          }
        ]}
        size="md"
      />
    </section>
  );
}