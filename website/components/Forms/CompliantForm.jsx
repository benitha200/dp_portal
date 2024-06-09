"use client"
import { useState } from 'react';
import Head from 'next/head';

export default function CompliantForm() {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  const progressPercentage = page === 1 ? 50 : 100;

  return (
    <>
      <Head>
        <title>Compliant Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      {/* <section className="container mx-auto p-8 bg-gray-100 rounded-md shadow-lg max-w-3xl"> */}
      <section className="container mx-auto p-8 bg-gray-100 rounded-md max-w-3xl" style={{ boxShadow: '5px 0 15px -5px rgba(0,0,0,0.1), -5px 0 15px -5px rgba(0,0,0,0.1), 0 5px 15px -5px rgba(0,0,0,0.1), 0 -5px 15px -5px rgba(0,0,0,0.3)' }}>

        <header className="text-2xl font-bold mb-6 text-center text-dark">Compliant Form</header>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-6 mb-6 relative">
          <div
            className={`h-6 rounded-full bg-blue-500 text-white text-xs font-medium text-center p-0.5 leading-none ${page === 1 ? 'w-1/2' : 'w-full'}`}
          >
            {progressPercentage}%
          </div>
        </div>
        <form action="#" className="form space-y-6">
          {page === 1 && (
            <>
              <div className="input">
                <label className="block mb-1 font-medium text-dark">Full Name:</label>
                <input type="text" placeholder="Enter full name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex flex-col space-y-6">
                <div className="input">
                  <label className="block mb-1 font-medium text-dark">ID Number / Passport Number:</label>
                  <input type="number" placeholder="Enter ID Number / Passport Number" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="input">
                  <label className="block mb-1 font-medium text-dark">Full Address:</label>
                  <div className="select">
                    <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option hidden>Province</option>
                      <option>District</option>
                      <option>Sector</option>
                      <option>Cell</option>
                      <option>Village</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="inputBox">
                  <label className="block mb-1 font-medium text-dark">E-mail address:</label>
                  <input type="email" placeholder="Enter email address" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="inputBox">
                  <label className="block mb-1 font-medium text-dark">Phone Number:</label>
                  <input type="tel" placeholder="Enter phone number" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="inputBox">
                <label className="block mb-1 font-medium text-dark">Complaint is against:</label>
                <input type="text" placeholder="Name of the data controller or data processor" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="inputBox">
                <label className="block mb-1 font-medium text-dark">Contact Person:</label>
                <input type="text" placeholder="Name of your contact person at the data controller or data processor" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="button" onClick={nextPage} className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Next</button>
            </>
          )}
          {page === 2 && (
            <>
              <div className="inputBox">
                <label className="block mb-1 font-medium text-center text-dark"><b>Description Of Complaint</b></label>
              </div>
              {[
                { label: "Information Security Concern", placeholder: "You are concerned about how your information is secured." },
                { label: "Request for Information", placeholder: "An organization will not give you details on information it has about you." },
                { label: "Inaccurate Information", placeholder: "An organization is holding information about you that is inaccurate or incomplete and has not made corrections when requested." },
                { label: "Deletion Request", placeholder: "An organization has not honored your request to destroy or delete a record of your personal data held by them which is inaccurate, irrelevant, excessive, out of date, incomplete, misleading, obtained unlawfully or they no longer have the authority to retain." },
                { label: "Unauthorized Sharing", placeholder: "Your personal details have been shared with another organization without your consent or no legal basis for doing so." },
                { label: "Direct Marketing", placeholder: "Your personal details have been used for direct marketing without your consent." },
                { label: "Lack of Informed Consent", placeholder: "The organization has not given you enough information to enable you make an informed consent prior to the collection of your personal data." },
                { label: "Unauthorized Collection", placeholder: "An organization collects and uses your personal data without your prior consent in circumstances that required them to obtain your consent." },
                { label: "Child Data Collection", placeholder: "An organization collects or uses personal data relating to children without obtaining prior consent of the parent or guardian or any other person having authority to make decisions on behalf of the child." },
                { label: "Non-compliance with Request", placeholder: "Your request to an organization to stop using, holding, storing or sharing your personal data has not been honored and this has led or likely to lead to your distress or cause you unwarranted substantial damage." },
                { label: "Automated Decision Making", placeholder: "An organization makes an automated decision without any human involvement and such decision has a significant adverse effect on you in relation to your personal data." },
                { label: "Complaint Handling System", placeholder: "You become aware of an organization collecting or using your personal data and it does not have a complaint handling system to deal with complaints from individuals whose information is collected and used." },
                { label: "Purpose Change", placeholder: "An organization is using your personal data for a purpose other than one for which your information was collected and that new purpose is not compatible with the original purpose, and neither have you given your consent in relation to the new purpose." },
                { label: "Others", placeholder: "Please specify other complaints" },
              ].map((item, index) => (
                <div key={index} className="inputBox">
                  <label className="block mb-1 font-medium text-dark">{item.label}:</label>
                  <textarea placeholder={item.placeholder} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
              ))}
              <div className="inputBox flex items-center">
                <input type="checkbox" id="terms" required className="mr-2" />
                <label htmlFor="terms" className="font-medium text-dark">I agree to the terms and conditions</label>
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={prevPage} className="px-4 py-2 bg-gray-300 text-dark rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">Previous</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
              </div>
            </>
          )}
        </form>
      </section>
    </>
  );
}
