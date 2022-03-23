import React from 'react'

function SmallCart({Icon, _title, color}) {
  return (
    <div className="flex items-center space-x-4 p-4 border mx-8 lg:mx-3 md:mx-10 my-2 hover:border-green-500 hover:text-green-500">
        <Icon className="h-8" />
        <p className="">{_title}</p>
    </div>
  )
}

export default SmallCart