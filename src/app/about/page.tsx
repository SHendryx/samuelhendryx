// @/about/
import React from 'react';
import Image from 'next/image';
import {FaBars} from 'react-icons/fa';

const About = () => {
  return(
  <div className='min-h-[calc(100vh-60px)] h-full m-auto max-w-[1000px] px-2'>
    {/* xl sub-menu */}
    <div className='hidden xl:fixed xl:flex xl:flex-col top-[80px] xl:left-[0px] xl:w-[140px] xl:mx-0'>
      <a href='#career'>Career</a>
      <a className='hidden' href='#hobbies'>Hobbies</a>
    </div>
    {/* sm sub-menu */}
    <div className='xl:hidden fixed top-[60px] left-[0px] p-1 '>
    <FaBars size={20} />
    </div>
    <div id='career' className='mx-4'>
      <h1>Career</h1>
      <Image className='float-start mr-4 border rounded-lg' src='/assets/images/zork.png' width='200' height='200' alt='Zork I' />
      <p>
        I grew up in a small rural town just south of Placerville CA. As a young boy I fell in love with computers and 
        video games, and was very fond of a text-based adventure game named&nbsp;
        <a href='https://store.steampowered.com/app/570580/Zork_Anthology/' target='_blank' rel='noopener noreferrer'><u>Zork</u></a>. My uncle would read the 
        descriptions of the rooms to us and ask us what we wanted to do and then would enter our commands into the prompt.
      </p>
      <p>
        I am also fond of tinkering with electronics and mechanical things. I made a little alarm for my toy box with 
        a metal coat hanger, a bell, and an electro-magnet. I still love taking things apart to see how they work and 
        how they were put together.
        </p>
      <Image className='float-end ml-4 border rounded-lg' src='/assets/images/photos/shutter-close-up.png' width='200' height='200' alt='Camera shutter close up' />
      <p>
        After highschool I started working for a Camera repair company that was the repair facility for Ricoh cameras. 
        I began repairing cameras a year after I started, and was transferred to headquarters less than a year later. 
        At California Precision Service I learned how to repair Fuji and Pentax cameras, along with Tamron lenses. Once 
        my experience and expertise grew, I was asked to manage technicians repairing Tamron lenses. I learned a great 
        deal about how to support staff by providing them with everything they needed to succeed, and how to overcome 
        operational, and personnel challenges. I even had to learn some of the least fun tasks of letting staff go if 
        things weren&apos;t working out.
      </p>
      <p>
        During this time I noticed we were sending virtually all equipment made by Canon to the factory for repair. 
        I decided to take a lens apart to see if I could figure out what was damaged, and if I could fix it. I found 
        that there wasn&apos;t anything outside of my expertise about this lens, and the damage was obvious and fairly 
        simple to repair. Over time, I was fixing virtually all of the Canon equipment that came into the shop. I 
        learned a lot about how each customer required service that fit their needs, how to provide this service, how 
        to navigate challenging customers, and how to focus on quality first.
      </p>
      <p>
        There came a time where smart phones were making severe impacts to the digital camera market and market shifts 
        made by manufacturers drastically impacted the repair industry. Parts became more difficult to obtain through 
        legitimate sources, so I decided to invest more into my education.
      </p>
      <Image className='float-start mr-4 border rounded-lg' src='/assets/images/photos/pandemic-store-shelves.png' width='200' height='272' alt='store shelves during the pandemic' />
      <p>
        I graduated during the height of the global pandemic. It was a very strange and unique time for all of us. I 
        applied to many positions in my field of Computer Science, but was unsuccessful. I worked for an Amazon 
        delivery station for about a year before finding employment with HCL America.
      </p>
      <p>
        My first project was for an 
        international technology company developing CI/CD automated tests. I temporarily led 
        our team during our manager&apos;s leave of absence and onboarded new hires. After the project ended, I received 
        recognition for leadership from the client.
      </p>
      <p>
        During my second project, with a telecommunications company, I developed backend APIs which retrieved cloud 
        instance data across all cloud providers (AWS, GCP, Azure, and OCI), an SQL database, and other in-house APIs. 
        The APIs provided data to an application that was used by the IT team to retrieve, monitor, and report on 
        usage, compliance, inventory, and security auditing metrics.
      </p>
    </div>
  </div>
  );
};

export default About;