import Image from 'next/image';
import React from 'react';

const Resume = () => {
  return( 
  <div className='min-h-[calc(100vh-85px)] h-full max-w-[1000px] mx-auto px-2 text-gray-200'>
    <div className='flex space-x-4 p-4 items-center'>
      <Image className='me_circle' src='/assets/images/photos/samuelhendryx.png' width='150' height='150' alt='Samuel Hendryx' />
      <div className='flex flex-col p-2'>
        <h1>Samuel Hendryx</h1>
        <h2>Software Developer</h2>
      </div>
    </div>
    <div className='p-2'>
      <div className='py-2'>
        <h2>HCL America</h2>
        <h3>Backend Developer</h3>
        <p className='max-w-[600px]'>Developed backend Python APIs responsible for tracking, auditing, and reporting 
        Cloud Instance inventory, migration, and hydration.</p>
        <p className='max-w-[600px]'>Technologies: Python, Jira, GitLab, AWS Boto3, SQL, NewRelic, PostMan Mockoon, etc.</p>
        <h3>QA Testing</h3>
        <p className='max-w-[600px]'>Developed CI/CD automatted integration, functional, and screendiffing tests for 
        high availability software development documentation web application. Developed screendiffing tests for custom 
        web elements, along with MarkDown-to-HTML compiler, image optimization pipelines, and deploy pipelines.</p>
        <p className='max-w-[600px]'>Technologies: Python, Java, Task Manager, Piper, Protocol Buffer, Sponge, Cider, 
          Critique, Blaze, etc.</p>
      </div>
      <div className='py-2'>
        <h2>California State University, Sacramento</h2>
        <h3>Student Assistant</h3>
        <p className='max-w-[600px]'>Managed, installed, configured, and tested lab projector system equipment. 
        Troubleshooted lab equipment and assisted professors under tight deadlines.</p>
      </div>
      <div className='py-2'>
        <h2>California Precision Service</h2>
        <h3>IT Consultant</h3>
        <p className='max-w-[600px]'>Designed, configured, and maintained workstations and Linux file and database 
        server. Developed data backup solutions and recovery proceedures. Configured and maintained internal network, 
        active directory, and software. Designed and maintained company website.</p>
        <h3>Subcontract Manager / Lead Technician</h3>
        <p className='max-w-[600px]'>Managed 6 lens optical repair technicians. Developed technical manuals for complex 
        adjustment equipment. Trained technicians on lens optical repair and adjustment. Reduced reworks by 10%. 
        Increased production by 20%.</p>
        <h3>Lead Canon Repair Technician</h3>
        <p className='max-w-[600px]'>Taught myself how to repair Canon lenses and digital SLRs. Increased in-house 
        repairs by 400%. Increased profit by 30%. Decreased turn around time by 30%.</p>
      </div>
    </div>
  </div>
  );
};

export default Resume;