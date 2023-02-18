var images = [
   "/mystudy/OurTrip-to-Tokyo/img/img1.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img2.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img3.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img4.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img5.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img6.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img7.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img8.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img9.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img10.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img11.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img12.jpg",
   "/mystudy/OurTrip-to-Tokyo/img/img13.jpg"
 ];
 
 var currentIndex = 0;
 var slideshow = document.getElementById("slideshow");
 
 // 3秒ごとに画像を切り替える
 setInterval(function() {
   currentIndex = (currentIndex + 1) % images.length;
   slideshow.style.opacity = 0;
   setTimeout(function() {
     slideshow.src = images[currentIndex];
     slideshow.style.opacity = 1;
   }, 1000);
 }, 3500);
