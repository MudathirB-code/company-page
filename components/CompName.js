import React from 'react'

function CompName({_title, _details}) {
  return (
    <div className="bg-green-500">
        <div className="max-w-5xl mx-auto text-white w-full h-full p-10 text-center">
                <h2 className="text-4xl font-semibold mb-6">{_title}</h2>
                <p className="text-lg">{_details}</p>
            </div>
    </div>
  )
}

export default CompName