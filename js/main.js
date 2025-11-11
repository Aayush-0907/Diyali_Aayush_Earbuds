(() => {

    const hotspots = document.querySelectorAll(".Hotspot");

    function showInfo(){
        console.log(`Showing info for ${this.slot}`);
        const annotation = this.querySelector('.HotspotAnnotation');
        if (annotation) {
            gsap.to(annotation, {duration: 1, autoAlpha: 1});
        }
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

})();

































