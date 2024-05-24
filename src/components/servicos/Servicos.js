"use client";

import React, { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Api from "@/utils/Api";

export default function Servicos() {
  const [servicos, setServicos] = useState([]);
  useEffect(() => {
    const getServices = async () => {
      const servicosRes = await Api();
      console.log(servicosRes)
      setServicos(servicosRes);
    }

    getServices();
  }, []);

  console.log("Servicos", servicos);

  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {servicos?.length > 0 ? (
          servicos.map((servico) => (
            // aumenta a altura do cartão
            <SwiperSlide className="servico__item">
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
    </>
  );
}
