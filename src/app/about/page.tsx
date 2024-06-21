// @/about/
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return(
  <div className='min-h-[calc(100vh-60px)] h-full m-auto max-w-[1000px] pb-[100px]'>
    <div id='career' className='mx-4'>
      <h1>Career</h1>
      <Image className='float-start mr-4 border rounded-lg' src='/assets/images/zork.png' width='200' height='200' alt='Zork I' />
      <p>
        I grew up in a small rural town just south of Placerville CA. As a young boy I fell in love with computers and 
        video games, and was very fond of a text-based adventure game named&nbsp;
        <Link href='https://store.steampowered.com/app/570580/Zork_Anthology/' target='_blank' rel='noopener noreferrer'><u>Zork</u></Link>. My uncle would read the 
        descriptions of the rooms to us and ask us what we wanted to do and then would enter our commands into the prompt.
      </p>
      <p>
        I am also fond of tinkering with electronics and mechanical things. I made a little alarm for my toy box with 
        a metal coat hanger, a bell, and an electro-magnet. I still enjoy taking things apart to see how they work and 
        how they were put together.
        </p>
      <Image className='float-end ml-4 border rounded-lg' src='/assets/images/photos/shutter-close-up.png' width='200' height='200' alt='Camera shutter close up' />
      <p>
        After highschool I started working for a Camera repair company that was the repair facility for Ricoh cameras. 
        I began repairing cameras a year after I started, and was transferred to headquarters less than a year later. 
        At California Precision Service I learned how to repair Fuji and Pentax cameras, along with Tamron lenses. Once 
        my experience and expertise grew, I was asked to manage technicians repairing Tamron lenses. I learned a great 
        deal about how to support staff by providing them with everything they needed to succeed, and how to overcome 
        operational, and personnel challenges.
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
        applied to many positions in my field of Computer Science, and I worked for an Amazon delivery station for 
        about a year before finding employment with HCL America.
      </p>
      <p>
        My first project was for an international technology company developing CI/CD automated tests. I temporarily 
        led our team during our manager&apos;s leave of absence and onboarded new hires. After the project ended, I 
        received recognition for leadership from the client.
      </p>
      <p>
        During my second project, with a telecommunications company, I developed backend APIs which retrieved cloud 
        instance data across all cloud providers (AWS, GCP, Azure, and OCI), databases, and in-house APIs. My APIs 
        provided data to an application that was used by the IT team to retrieve, monitor, and report on usage, 
        compliance, inventory, and security auditing metrics.
      </p>
    </div>
    <div id='family' className='mx-4'>
      <h1>Family</h1>
      <Image className='float-end ml-4 border rounded-lg' src='/assets/images/photos/family/bodega_bay.jpg' width='200' height='113' alt='Bodega Bay' />
      <p>
        In the summer of 2020, I met Sarah. She was a single mom raising two wonderful boys, one of which is mostly
        non-verbal with autism. I was attracted her honesty, compassion, and endless desire to love and care for
        everyone in her life. We met each other in an interesting time in our lives where neither of us overly invested
        in trying to win each other over. We bonded over the reality and sometimes insanity of our lives, and over our
        struggles and successes. I&apos;m not sure either of us were sure where we were headed, or even if we cared. We 
        were looking for someone we could relate to, admire, and enjoy being around.
      </p>
      <Image className='float-start mr-4 border rounded-lg' src='/assets/images/photos/family/our_wedding.jpg' width='200' height='134' alt='Ryan and Me' />
      <p>
        Despite us both stating that neither of us were looking for a serious relationship, let alone marriage, we 
        tied the knot in the summer of 2023. We decided on a beautiful private ceremony with our immediate families. We 
        bought a house in the fall of 2023, and we couldn&apos;t be happier or have ever planned that our lives would 
        have turned out as amazing as they have.
      </p>
      <Image className='float-end ml-4 border rounded-lg' src='/assets/images/photos/family/ryan_and_me.jpg' width='200' height='150' alt='Ryan and Me' />
      <p>
        I met Sarah&apos;s oldest son, Ryan, when he was 14 years old. He was struggling with the emotions of his 
        father no longer being around, his grandfather passing away, changing hormones, and it all coupled with his 
        limited ability to communicate and express himself. He and I started on very shaky ground, and I could have 
        never imagined then, that we&apos;d now be the best of buds. We&apos;ve got a special bond and can communicate 
        very well with very few words. He is raw and uncut and one of a kind.
      </p>
      <Image className='float-start mr-4 border rounded-lg' src='/assets/images/photos/family/beckett_jeeping.jpg' width='200' height='151' alt='Ryan and Me' />
      <p>
        Beckett is Sarah&apos;s youngest son, and he was 12 years old when I met him. He&apos;s incredibly bright, has 
        a great smile, and loves joking around. He wants to make games when he&apos;s older. We&apos;re so proud of him 
        for always being responsible, curious, kind, and self sufficient. He&apos;s learning how to drive, and 
        we&apos;re very excited for these next few years, as he enters adulthood.
      </p>
    </div>
  </div>
  );
};

export default About;