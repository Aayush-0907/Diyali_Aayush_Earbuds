(() => {
  
  const hotspots = document.querySelectorAll(".Hotspot");
  const modelViewer = document.querySelector('model-viewer');
  
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
    }
  ];

  // Function definitions
  function populateHotspotContent() {
    hotspotsContents.forEach((content, index) => {
      const selectedHotspot = document.querySelector(`#hotspot-${index + 1}`);
      
      if (selectedHotspot) {
        const imageElement = document.createElement('img');
        const titleElement = document.createElement('h2');
        const textElement = document.createElement('p');
        
        imageElement.src = content.image;
        imageElement.alt = content.alt;
        titleElement.textContent = content.title;
        textElement.textContent = content.text;
        
        selectedHotspot.appendChild(imageElement);
        selectedHotspot.appendChild(titleElement);
        selectedHotspot.appendChild(textElement);
      }
    });
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

})();

































