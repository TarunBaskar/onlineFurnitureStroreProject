import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './simpleImageSlider';
function simpleImageSlider() {
   const sliderImages = [
      {
         url: "https://bestwallpapers.net/desktop/wp-content/uploads/2021/02/Furniture-Interior-Design-Gift-HD-Wallpapers-For-Desktop.jpg",
      },
      {
         url: "https://w.forfun.com/fetch/38/3837cfc4925c0bd20a591533e728fbae.jpeg",
      },
      {
         url: "https://i.pinimg.com/originals/25/07/59/2507596496fbb022872d65b362bd6ff7.jpg",
      },
      {
         url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WbLIzCAFdGiITZEOqZGuLwOzd_vEF7mhtw&usqp=CAU",
      },
      {
         url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      },
      {
         url: "https://www.wallpapers4u.org/wp-content/uploads/furniture_design_white_living_room_10400_1920x1080.jpg",
      },
      {
         url: "https://images.wallpaperscraft.com/image/single/kitchen_furniture_interior_design_86611_1920x1080.jpg",
      },
   ];
   return (
      <div>
         
         <SimpleImageSlider style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'}}
            width={1000}
            height={500}
            images={sliderImages}
            showNavs={true}
         />
      </div>
   );
}
export default simpleImageSlider;