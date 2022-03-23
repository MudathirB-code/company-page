import CompName from '../components/CompName'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TitleComp from '../components/TitleComp'
import TrainCart from '../components/TrainCart'
import trainer from '../public/assets/trainers/trainer-1.jpg'
import trainer2 from '../public/assets/trainers/trainer-2.jpg'
import trainer3 from '../public/assets/trainers/trainer-3.jpg'

function Trainers() {
  return (
    <div>
        <Header />
        <CompName 
            _title="Trainers"
            _details="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."
        />
         <section className="max-w-5xl mx-auto my-8 ">
          <div className="mx-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
            <TrainCart 
              _img={trainer}
              c_name="Walter White"
              c_job="Web Development"
              c_desc="Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"
            />
            <TrainCart 
              _img={trainer2}
              c_name="Sarah Jhinson"
              c_job="Marketing"
              c_desc="Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"
            />
            <TrainCart 
              _img={trainer3}
              c_name="William Anderson"
              c_job="Content"
              c_desc="Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"
            />
          </div>

        </section>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Trainers