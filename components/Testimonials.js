import Image from 'next/image'

function Testimonials({_name, _job, _details,member}) {
  return (
    <div className="max-w-5xl mx-auto">
        {/* <TitleComp 
          compName="AboutUs"
          compTitle="WHAT ARE THEY SAYING"
        /> */}
        <div className="border bg-white my-5 mx-10 sm:mx-16 p-8 md:text-center">
          <Image
            className="rounded-full"
            src={member}
            alt=""
            width="60px"
            height="60px"
            objectFit="contain"
          />
          <h2 className="text-lg font-bold mt-1">{_name}</h2>
          <h4 className="text-gray-400">{_job}</h4>
          <p className="text-lg font-serif mt-2 md:px-20">{_details}</p>
        </div>
    </div>
  )
}

export default Testimonials