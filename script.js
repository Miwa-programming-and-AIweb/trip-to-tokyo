var images = [
   "/trip-to-tokyo/img/img1.jpg",
   "/trip-to-tokyo/img/img2.jpg",
   "/trip-to-tokyo/img/img3.jpg",
   "/trip-to-tokyo/img/img4.jpg",
   "/trip-to-tokyo/img/img5.jpg",
   "/trip-to-tokyo/img/img6.jpg",
   "/trip-to-tokyo/img/img7.jpg",
   "/trip-to-tokyo/img/img8.jpg",
   "/trip-to-tokyo/img/img9.jpg",
   "/trip-to-tokyo/img/img10.jpg",
   "/trip-to-tokyo/img/img11.jpg",
   "/trip-to-tokyo/img/img12.jpg",
   "/trip-to-tokyo/img/img13.jpg"
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
   }, 500);
 }, 3500);
