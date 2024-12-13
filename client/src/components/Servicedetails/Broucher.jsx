import React from 'react'
import { FaRegFileAlt, FaRegFilePdf } from 'react-icons/fa'

function Broucher() {
  return (
    <section className="p-4 mx-auto mb-4 rounded-lg lg:mx-0 bg-tertiary">
          <h2 className="mb-4 text-lg font-bold text-secondary">Brochures</h2>
          <div className="space-y-3">
            <button className="flex items-center w-full bg-white border border-gray-200 rounded-lg">
              <span className="h-full p-3 font-medium text-white rounded-l-lg bg-secondary">
                <FaRegFilePdf />
              </span>
              <p className="ml-4 text-[#42545e] font-medium hover:text-primary">
                Download.pdf
              </p>
            </button>
            <button className="flex items-center w-full bg-white border border-gray-200 rounded-lg">
              <span className="h-full p-3 font-medium text-white rounded-l-lg bg-secondary">
                <FaRegFileAlt />
              </span>
              <p className="ml-4 text-[#42545e] font-medium hover:text-primary">
                Download.txt
              </p>
            </button>
          </div>
        </section>
  )
}

export default Broucher