// @/resume/
import Image from 'next/image';
import React from 'react';

const Resume = () => {
  return( 
  <div className='min-h-[calc(100vh-60px)] h-full max-w-[1000px] flex flex-col mx-auto px-2 justify-center items-center'>
    <div className='flex space-x-4 p-4 items-center max-w-[700px] w-full'>
      <Image className='me-circle' src='/assets/images/photos/samuelhendryx.png' width='150' height='150' alt='Samuel Hendryx' />
      <div className='flex flex-col p-2'>
        <h1>Samuel Hendryx</h1>
        <h2>Software Developer</h2>
      </div>
    </div>
    <div className='p-2 max-w-[700px] w-full'>
      <div className='py-2'>
        <h2>HCL America</h2>
        <h3>Backend Developer</h3>
        <p>Developed backend Python APIs responsible for tracking, auditing, and reporting 
        Cloud Instance inventory, migration, and hydration.</p>
        <p>Technologies: Python, Jira, GitLab, AWS Boto3, SQL, NewRelic, PostMan Mockoon, etc.</p>
        <h3>QA Testing</h3>
        <p>Developed CI/CD automated integration, functional, and screen-diffing tests for 
        high availability software development documentation web application. Developed screen-diffing tests for custom 
        web elements, along with MarkDown-to-HTML compiler, image optimization pipelines, and deploy pipelines.</p>
        <p>Technologies: Python, Java, Task Manager, Piper, Protocol Buffer, Sponge, Cider, 
          Critique, Blaze, etc.</p>
      </div>
      <div className='py-2'>
        <h2>California State University, Sacramento</h2>
        <h3>Student Assistant</h3>
        <p>Managed, installed, configured, and tested lab projector system equipment. Troubleshot lab equipment and 
        assisted professors under tight deadlines. Inventoried lab equipment, documented configuration, and cabling. 
        Audited lab equipment.</p>
      </div>
      <div className='py-2'>
        <h2>California Precision Service</h2>
        <h3>IT Consultant</h3>
        <p>Designed, configured, and maintained workstations and Linux file and database 
        server. Developed data backup solutions and recovery procedures. Configured and maintained internal network, 
        active directory, and software. Designed and maintained company website.</p>
        <h3>Subcontract Manager / Lead Technician</h3>
        <p>Managed 6 lens optical repair technicians. Developed technical manuals for complex 
        adjustment equipment. Trained technicians on lens optical repair and adjustment. Reduced reworks by 10%. 
        Increased production by 30%.</p>
        <h3>Lead Canon Repair Technician</h3>
        <p>Taught myself how to repair Canon lenses and digital SLRs. Increased in-house 
        repairs by 20%. Increased profit by 25%. Decreased turn around time by 30%.</p>
      </div>
    </div>
  </div>
  );
};

export default Resume;