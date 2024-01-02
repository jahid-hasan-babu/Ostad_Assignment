import React from "react";

const Reviews = () => {
  return (
    <div className="w-[80%] mx-auto items-center text-center">
      <h1 className="text-6xl font-bold py-10">Client Feedback</h1>
      <p className="text-xl">
        There are many variations of passages of Lorem Ipsum available
      </p>
      <div className="carousel w-full h-[70vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="pt-20">
            <img
              src="https://htmldemo.net/hmart/hmart/assets/images/testimonial/1.png"
              className="w-[100px] h-[100px] rounded-[50%] mx-auto"
            />
            <h3 className="text-blue-700">Regan Rosen</h3>
            <p>Client</p>
            <p className="w-[70%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              repudiandae magnam incidunt eveniet perferendis accusantium
              libero! Perspiciatis voluptas ipsum ut? Ea placeat recusandae
              corrupti numquam enim beatae asperiores mollitia incidunt, nobis
              tempore deleniti. Maiores cum adipisci nesciunt beatae iste hic
              quis? Odit molestias autem tempora perspiciatis perferendis rerum,
              delectus assumenda.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="pt-20">
            <img
              src="https://htmldemo.net/hmart/hmart/assets/images/testimonial/1.png"
              className="w-[100px] h-[100px] rounded-[50%] mx-auto"
            />
            <h3 className="text-blue-700">Regan Rosen</h3>
            <p>Client</p>
            <p className="w-[70%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              repudiandae magnam incidunt eveniet perferendis accusantium
              libero! Perspiciatis voluptas ipsum ut? Ea placeat recusandae
              corrupti numquam enim beatae asperiores mollitia incidunt, nobis
              tempore deleniti. Maiores cum adipisci nesciunt beatae iste hic
              quis? Odit molestias autem tempora perspiciatis perferendis rerum,
              delectus assumenda.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="pt-20">
            <img
              src="https://htmldemo.net/hmart/hmart/assets/images/testimonial/1.png"
              className="w-[100px] h-[100px] rounded-[50%] mx-auto"
            />
            <h3 className="text-blue-700">Regan Rosen</h3>
            <p>Client</p>
            <p className="w-[70%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              repudiandae magnam incidunt eveniet perferendis accusantium
              libero! Perspiciatis voluptas ipsum ut? Ea placeat recusandae
              corrupti numquam enim beatae asperiores mollitia incidunt, nobis
              tempore deleniti. Maiores cum adipisci nesciunt beatae iste hic
              quis? Odit molestias autem tempora perspiciatis perferendis rerum,
              delectus assumenda.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="pt-20">
            <img
              src="https://htmldemo.net/hmart/hmart/assets/images/testimonial/1.png"
              className="w-[100px] h-[100px] rounded-[50%] mx-auto"
            />
            <h3 className="text-blue-700">Regan Rosen</h3>
            <p>Client</p>
            <p className="w-[70%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              repudiandae magnam incidunt eveniet perferendis accusantium
              libero! Perspiciatis voluptas ipsum ut? Ea placeat recusandae
              corrupti numquam enim beatae asperiores mollitia incidunt, nobis
              tempore deleniti. Maiores cum adipisci nesciunt beatae iste hic
              quis? Odit molestias autem tempora perspiciatis perferendis rerum,
              delectus assumenda.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
