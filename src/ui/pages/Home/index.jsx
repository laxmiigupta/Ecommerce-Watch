import React from 'react';
import "./index.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from "../../../assets/Banners/mainpage_desktop.png";
import banner2 from "../../../assets/Banners/secondbanner.jpg"
import diverwatch from "../../../assets/secondbanner/divers_banner_desktop.png"
import top15watch from "../../../assets/secondbanner/Blog_Thumbnails.png"
import Milus from "../../../assets/Homeimages/25milus_banner_home_page_website.png"
import Celebrityimg1 from "../../../assets/Celebrity-images/image1.jpg"
import Celebrityimg2 from "../../../assets/Celebrity-images/image2.jpeg"
import Celebrityimg3 from "../../../assets/Celebrity-images/image3.jpg"
import Celebrityimg4 from "../../../assets/Celebrity-images/iamge4.jpg"
import Celebrityimg5 from "../../../assets/Celebrity-images/image5.jpg"
import Celebrityimg6 from "../../../assets/Celebrity-images/image6.jpeg"
import Celebrityimg7 from "../../../assets/Celebrity-images/iamge7.jpg"
import Celebrityimg9 from "../../../assets/Celebrity-images/image9.jpg"
import Celebrityimg10 from "../../../assets/Celebrity-images/image10.jpg"
import Celebrityimg11 from "../../../assets/Celebrity-images/image11.jpg"
import Celebrityimg13 from "../../../assets/Celebrity-images/image13.jpeg"
import Celebrityimg14 from "../../../assets/Celebrity-images/image14.jpeg"
import Celebrityimg15 from "../../../assets/Celebrity-images/image15.jpg"
import Celebrityimg16 from "../../../assets/Celebrity-images/image16.jpg"
import Celebrityimg17 from "../../../assets/Celebrity-images/image17.jpg"
import timepicece from "../../../assets/Homeimages/loveEarthnew.jpg"
import img1 from "../../../assets/Homeimages/23MOBILE.jpg"
import img2 from "../../../assets/Homeimages/MOBILE607200.jpeg"

export default function Home() {
  const onChange = (index) => {
    console.log("Carousel slide changed to index", index);
  };

  const onClickItem = (index, item) => {
    console.log(`Clicked on item ${index}`, item);
  };

  const images = [Celebrityimg1,  Celebrityimg3,Celebrityimg4, Celebrityimg2,  Celebrityimg5, Celebrityimg6, Celebrityimg7, Celebrityimg9, Celebrityimg10, Celebrityimg11, Celebrityimg13,Celebrityimg14, Celebrityimg15, Celebrityimg16, Celebrityimg17, Celebrityimg7]
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };
  const imageChunks = chunkArray(images, 2.7);


  return (
    <>
      {/* Silder Section  */}
      <div className='main-banner'>
        <Carousel
          showArrows={false}
          autoPlay={true}
          interval={5000}
          showThumbs={false}
          onChange={onChange}
          onClickItem={onClickItem}
        >

          <div>
            <img src={banner1} alt="Banner 1" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={banner1} alt="Banner 2" />
            {/* <p className="legend">Legend 2</p> */}
          </div>


        </Carousel>
      </div>
      {/* Explore Collection */}
      <div className='exporesection d-flex justify-content-center gap-3'>
        <div className="firstbanner">
          <img src={diverwatch} alt="" />
        </div>
        <div className="secondbanner">
          <img src={top15watch} alt="" />
        </div>
      </div>
      {/* Milus Section  */}
      <div className="milunssec">
        <img src={Milus} alt="" />
      </div>
      {/* Celebrity looks */}

      <div className="celebrity">
        <div className="block-title">
          <strong>Shop The Celebrity Look</strong>
        </div>
        <div className="celebrity-sliders">
          <Carousel
            showArrows={false}
            autoPlay={true}
            interval={5000}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            onChange={onChange}
            onClickItem={onClickItem}>

{imageChunks.map((chunk, index) => (
          <div key={index}>
            <div style={{ display: 'flex' }}>
              {chunk.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Banner ${index * 2.7 + idx + 1}`}
                  style={{ width: `${100 / 2.7}%`, marginRight: '1.5%', borderRadius: '1.5rem' }}
                />
              ))}
            </div>
            {/* You can adjust the legend accordingly */}
          </div>
        ))}

          </Carousel>
        </div>
      </div>

      {/* Love Earthnew */}
      <div className="loveEarthnew">
        <img src={timepicece} alt="" />
      </div>

      {/* Museum Classic */}

      <div className="museum-classic d-flex justify-content-center gap-4">
        <div className="sec1">
          <img src={img1} alt="" />
        </div>
        <div className="sec2">
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
}
