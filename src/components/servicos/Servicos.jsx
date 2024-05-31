"use client";

import Api from "@/utils/Api";

import React, {  useEffect, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  useEffect(() => {
    const getServices = async () => {
      const servicosRes = await Api();
      setServicos(servicosRes);
    }

    getServices();
  }, []);

  return (
    <>
      <Swiper
      id="mobileGallerySlider"
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={0}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {servicos?.length > 0 ? (
          servicos.map((servico) => (
            // aumenta a altura do cartão
            <SwiperSlide  key={servico.id_servico} className="servico__item">
              <div>
                <h3>{servico.nome}</h3>
                <div className="servicos__item_contain">
                  <p>{servico.preco}€</p>
                  <p>{servico.a_partir_de}m</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : <p>Não existem serviços</p>}
      </Swiper>
      {/* <style jsx global>{`
      #mobileGallerySlider .swiper-button-next {
      }

      #mobileGallerySlider .swiper-button-prev {

      }
      #mobileGallerySlider swiper-slide {
        margin-right: 50px;
      }

      `}</style> */}
    </>
  );
}
