(() => {

    const hotspots = document.querySelectorAll(".Hotspot");

    function showInfo(){
        console.log(`#${this.slot}`);
        const selected = document.querySelector(`#${this.slot}`);
        gsap.to(selected, {duration: 1, autoAlpha: 1});
    }

    function hideInfo(){
        console.log(`#${this.slot}`);
        const selected = document.querySelector(`#${this.slot}`);
        gsap.to(selected, {duration: 1, autoAlpha: 0});
    }

    hotspots.forEach( function(hotspot) {
        hotspot.addEventListener("mouseenter", showInfo);
        hotspot.addEventListener("mouseleave", hideInfo);

    });

})();

































