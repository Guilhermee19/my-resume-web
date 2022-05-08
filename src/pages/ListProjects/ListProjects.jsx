import React from "react";
import CardProjects from "../../components/CardProjects/CardProjects";
import './style.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ListProjects({list}) {
    console.log(list);
    
    return (
        <div className="card_projects">
            <section className="title"> <h2>- Projetos -</h2> </section> 
            <Swiper 
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                className="mySwiper slider"
                autoplay= {{
                    delay: 2500,
                    disableOnInteraction: true
                }}
                >
                    {list.map((obj) => (
                        <SwiperSlide>
                            <a className="card" href={obj.link} target="_blank"> 
                                <CardProjects project={obj} /> 
                            </a>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
       
    );
}

export default ListProjects;
