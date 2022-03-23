import Testimonials from './Testimonials';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from '../public/assets/testimonials/testimonials-1.jpg'
import two from '../public/assets/testimonials/testimonials-2.jpg'
import three from '../public/assets/testimonials/testimonials-3.jpg'
import four from '../public/assets/testimonials/testimonials-4.jpg'

function CardCursor() {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
        <div className="">
                <Testimonials 
                  _name="John larson"
                  member={one}
                  _job="Designer"
                  _details="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
                />
              </div>
              <div>
                <Testimonials 
                member={two}
                  _name="Sara Wilson"
                  _job="Entrepreneur"
                  _details="Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."

                />
              </div>
              <div>
                <Testimonials 
                member={three}
                  _name="Jena karlis"
                  _job="Store owner"
                  _details="Lorem Ipsum THEY SAYING non proident lsd sdjskd SAYING non proident lsd sdjskd SAYING non proident lsd sdjskd"

                />
              </div>
              <div>
                <Testimonials 
                member={four}
                  _name="Matte Brandon"
                  _job="Freelancer"
                  _details="Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."

                />
              </div>
    </Slider>
  )
}

export default CardCursor