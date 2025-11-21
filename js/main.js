(() => {

<<<<<<< Updated upstream
    const hotspots = document.querySelectorAll(".Hotspot");

    function showInfo(){
        console.log(`Showing info for ${this.slot}`);
        const annotation = this.querySelector('.HotspotAnnotation');
        if (annotation) {
            gsap.to(annotation, {duration: 1, autoAlpha: 1});
        }
=======
  // Hamburger Menu Toggle with Accessibility
  const burgerButton = document.querySelector("#button");
  const burgerContainer = document.querySelector("#burger-con");

  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("expanded");
    burgerContainer.classList.toggle("slide-toggle");
    // Update aria-expanded attribute for accessibility
    const isExpanded = burgerButton.classList.contains("expanded");
    burgerButton.setAttribute("aria-expanded", isExpanded);
  });
  
  const hotspots = document.querySelectorAll(".Hotspot");
  const modelViewer = document.querySelector("model-viewer");
  
  const hotspotsContents = [
    {
      title: "Premium Branding",
      text: "Distinctive logo design that represents quality and innovation in audio technology.",
      image: "images/Logo.png",
      alt: "Brand Logo"
    },
    {
      title: "Soft Silicon Eartip",
      text: "Ultra-comfortable silicone tips that provide the perfect seal for enhanced sound isolation and all-day comfort.",
      image: "images/silicon-eartip.png",
      alt: "Silicon Eartip"
    },
    {
      title: "Smart Proximity Sensor",
      text: "Advanced sensor technology that detects when earbuds are in your ears, automatically managing playback for seamless user experience.",
      image: "images/proximity-sensor.png",
      alt: "Proximity Sensor"
    },
    {
      title: "Intuitive Touch Control",
      text: "Smart touch sensor that lets you control music playback, answer calls, and activate voice assistant with simple gestures.",
      image: "images/touch-control.png",
      alt: "Touch Control"
    },
    {
      title: "Charging Contact",
      text: "Magnetic charging contacts provide secure and efficient power transfer for quick and reliable charging of your earbuds.",
      image: "images/Charging-contact.png",
      alt: "Charging Contact"
>>>>>>> Stashed changes
    }

    function hideInfo(){
        console.log(`Hiding info for ${this.slot}`);
        const annotation = this.querySelector('.HotspotAnnotation');
        if (annotation) {
            gsap.to(annotation, {duration: 1, autoAlpha: 0});
        }
    }

    hotspots.forEach( function(hotspot) {
        hotspot.addEventListener("mouseenter", showInfo);
        hotspot.addEventListener("mouseleave", hideInfo);

    });
<<<<<<< Updated upstream
=======
  }

  function showHotspotFeatures() {
    const selectedElement = document.querySelector(`#${this.slot}`);
    if (selectedElement) {
      gsap.to(selectedElement, { duration: 1, autoAlpha: 1 });
    }
  }

  function hideHotspotFeatures() {
    const selectedElement = document.querySelector(`#${this.slot}`);
    if (selectedElement) {
      gsap.to(selectedElement, { duration: 1, autoAlpha: 0 });
    }
  }

  function handleProgressUpdate(event) {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    
    if (updatingBar) {
      updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    }
    
    if (event.detail.totalProgress === 1) {
      if (progressBar) {
        progressBar.classList.add('hide');
      }
      event.target.removeEventListener('progress', handleProgressUpdate);
    } else {
      if (progressBar) {
        progressBar.classList.remove('hide');
      }
    }
  }

  function addHotspotEventListeners(hotspot) {
    hotspot.addEventListener("mouseenter", showHotspotFeatures);
    hotspot.addEventListener("mouseleave", hideHotspotFeatures);
  }

  populateHotspotContent();

  // Event listeners
  hotspots.forEach(addHotspotEventListeners);
  
  if (modelViewer) {
    modelViewer.addEventListener('progress', handleProgressUpdate);
  }

// scrollling animation

  const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

   
    const frameCount = 390;
    

    const images = [];

  
    const buds = {
        frame : 0
    }

   
    for ( let i = 0; i<frameCount; i++ ) {
        const img = new Image();
        img.src = `images/final render_${(i+1).toString().padStart(5, '0')}.webp`;
        images.push(img);
    }

    gsap.to(buds, {
        frame: 390,
        snap: "frame",
        scrollTrigger : {
            trigger: "#explode-view",
            pin: true,
            scrub: 1,
            start: "top top",
           

        },
        onUpdate: render

    })

    images[0].addEventListener("load", render);

    function render() {
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
    }

// slider

    const divisor = document.querySelector("#divisor");
    const slider = document.querySelector("#slider");

    function moveDivisor() {
        divisor.style.width = `${slider.value}%`;
        // Update aria-valuenow for accessibility
        slider.setAttribute("aria-valuenow", slider.value);
    }

    function resetSlider() {
        slider.value = 50;
        slider.setAttribute("aria-valuenow", 50);
    }

    slider.addEventListener("input", moveDivisor);
    window.addEventListener("load", resetSlider);
>>>>>>> Stashed changes

})();

































