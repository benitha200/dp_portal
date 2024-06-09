"use client";
import { useState } from 'react';
import Head from 'next/head';

export default function DataControllerForm() {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  const progressPercentage = page === 1 ? 33 : page === 2 ? 66 : 100;

  return (
    <>
      <Head>
        <title>Registration as a Data Processor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <section className="container mx-auto p-8 bg-gray-100 rounded-md shadow-md max-w-3xl">
        <header className="text-2xl font-bold mb-6 text-center text-dark">Registration as a Data Controller</header>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-6 mb-6 relative">
          <div
            className={`h-6 rounded-full bg-blue-500 text-white text-xs font-medium text-center p-0.5 leading-none ${page === 1 ? 'w-1/3' : page === 2 ? 'w-2/3' : 'w-full'}`}
          >
            {progressPercentage}%
          </div>
        </div>
        <form action="#" className="form space-y-6">
          {page === 1 && (
            <>
              {/* SECTION 1 – APPLICANT DETAILS */}
              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">SECTION 1 – APPLICANT DETAILS</header>
                <div className="input-box mb-4">
                  <label className="text-dark">Entity Name</label>
                  <input type="text" placeholder="Enter entity name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Registration Number (if applicable)</label>
                    <input type="text" placeholder="Enter registration number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">License Number (if applicable)</label>
                    <input type="text" placeholder="Enter license number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Law No (if applicable)</label>
                    <input type="text" placeholder="Enter law number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Presidential order No (if applicable)</label>
                    <input type="text" placeholder="Enter presidential order number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Nature of Entity</label>
                    <div className="select-box">
                      <select required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option hidden>Select an option</option>
                        <option>Public</option>
                        <option>Private</option>
                        <option>NGO</option>
                        <option>Faith Based Organization</option>
                        <option>Political Organization</option>
                        <option>Development Partner</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Entity Sector</label>
                    <input type="text" placeholder="Enter entity sector" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Entity Address</label>
                    <input type="text" placeholder="Enter address (Country, Province, District, Sector)" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Phone Number</label>
                    <input type="text" placeholder="Enter phone number" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Email Address</label>
                    <input type="email" placeholder="Enter email address" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Website</label>
                    <input type="text" placeholder="Enter website URL" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
              </section>
              
              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">Data Protection Officer</header>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Name</label>
                    <input type="text" placeholder="Enter name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Phone Number</label>
                    <input type="text" placeholder="Enter phone number" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Email Address</label>
                  <input type="email" placeholder="Enter email address" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </section>
            </>
          )}

          {page === 2 && (
            <>
              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">Representative In Rwanda (if applicant is established outside of Rwanda)</header>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Name</label>
                    <input type="text" placeholder="Enter name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Phone Number</label>
                    <input type="text" placeholder="Enter phone number" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="column flex space-x-4 mb-4">
                  <div className="input-box flex-1">
                    <label className="text-dark">Address</label>
                    <input type="text" placeholder="Enter address (Country, Province, District, Sector)" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="input-box flex-1">
                    <label className="text-dark">Email</label>
                    <input type="email" placeholder="Enter email address" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Website</label>
                  <input type="text" placeholder="Enter website URL" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </section>

              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">SECTION 2 – PERSONAL DATA</header>
                <div className="input-box mb-4">
                  <label className="text-dark">Category of Data Subjects</label>
                  <input type="text" placeholder="Enter category of data subjects" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Purpose of Data Processing</label>
                  <input type="text" placeholder="Enter purpose of data processing" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </section>

              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">SECTION 3 – TRANSFER OF PERSONAL DATA</header>
                <div className="input-box mb-4">
                  <label className="text-dark">Transfer of personal data outside of Rwanda (Yes/No)</label>
                  <div className="select-box">
                    <select required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option hidden>Select an option</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">If yes, specify the country</label>
                  <input type="text" placeholder="Enter country" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </section>
            </>
          )}

          {page === 3 && (
            <>
              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">SECTION 4 – CATEGORIES OF PERSONAL DATA BEING PROCESSED</header>
                <div className="input-box mb-4">
                  <label className="text-dark">Categories of Personal Data</label>
                  <input type="text" placeholder="Enter categories of personal data being processed" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Sensitive Personal Data (Yes/No)</label>
                  <div className="select-box">
                    <select required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option hidden>Select an option</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </section>

              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">SECTION 5 – ADDITIONAL INFORMATION</header>
                <div className="input-box mb-4">
                  <label className="text-dark">Any other relevant information</label>
                  <textarea placeholder="Enter additional information" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
              </section>

              <section className="container mx-auto p-4 bg-white rounded-md shadow-md mb-4">
                <header className="text-xl font-bold mb-4 text-dark">Declaration</header>
                <p className="text-dark">I declare that all information provided in this application is true and accurate to the best of my knowledge.</p>
                <div className="input-box mb-4">
                  <label className="text-dark">Full Name</label>
                  <input type="text" placeholder="Enter full name" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Designation</label>
                  <input type="text" placeholder="Enter designation" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="input-box mb-4">
                  <label className="text-dark">Date</label>
                  <input type="date" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </section>
            </>
          )}

          <div className="flex justify-between">
            {page > 1 && (
              <button
                type="button"
                onClick={prevPage}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Previous
              </button>
            )}
            {page < 3 && (
              <button
                type="button"
                onClick={nextPage}
                className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Next
              </button>
            )}
            {page === 3 && (
              <button
                type="submit"
                className="ml-auto px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
