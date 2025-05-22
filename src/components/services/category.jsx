import React from 'react';
import Slider from 'react-slick';
import clientsData from '../../data/clients';

const ServiceCategory = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: true,
    responsive: [
      { 
        breakpoint: 1100, 
        settings: { 
          slidesToShow: 5 
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 3 
        } 
      },
      { 
        breakpoint: 575, 
        settings: { 
          slidesToShow: 2 
        } 
      }
    ]
  };

  return (
    // <!--health-cure-type-section-->
    <section className="ttm-row health-cure-type-section bg-layer-equal-height ttm-bgcolor-grey clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-heading">
              <h3 className="title font-size-26">Happy Customers & Clients</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="spacing-2">
              <div className="row mx-0">
                <Slider {...settings} className="slick_slider w-100">
                  {clientsData.map((client) => (
                    <div key={client.id} className="px-2">
                      <div className="client-box">
                        <div className="client-thumbnail">
                          <img 
                            className="img-fluid" 
                            src={client.image} 
                            alt={client.alt} 
                            width={client.width} 
                            height={client.height} 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // {/* <!--health-cure-type-section-end--> */}
  );
};

export default ServiceCategory;