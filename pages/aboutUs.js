import About_us from "../components/About_us"
import CardCursor from "../components/CardCursor"
import CompName from "../components/CompName"
import Counts from "../components/Counts"
import Footer from "../components/Footer"
import Header from "../components/Header"
import TitleComp from "../components/TitleComp"

function AboutUs() {
  return (
    <div>
        <Header />
        <div className="">
          <CompName 
            _title="About us"
            _details="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."
          />
        </div>
        <section className="max-w-5xl mx-auto">
          <About_us />
        </section>
        <section className="bg-gray-100">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
            <Counts 
              number= {1232}
              title= "Students"
            />
            <Counts 
              number= {64}
              title= "Courses"
            />
            <Counts 
              number= {42}
              title= "Events"
            />
            <Counts 
              number= {15}
              title= "Trainer"
            />
          </div>
        </section>
        <section>
          <TitleComp 
            compName="Testimonials"
            compTitle="WHAT ARE THEY SAYING"
          />
          <CardCursor />
        </section>
        <Footer />
    </div>
  )
}

export default AboutUs