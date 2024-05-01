export const sliderSettings1 = {
   className: 'center',
   infinite: true,
   centerPadding: '60px',
   slidesToShow: 3,
   swipeToSlide: true,
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
         },
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
         },
      },
   ],
};
