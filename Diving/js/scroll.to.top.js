function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}
let scrollToTopElement = document.getElementById("scrollToTop");


function scrollListener() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopElement.style.display = "block";
    } else {
        scrollToTopElement.style.display = "none";
    }
}


window.onscroll = function() {
    scrollListener();
};

$(window).on('slideChange',function(event, number, element){
    if('home' !== $(element).data('name')){
        scrollToTopElement.style.display = "block";
    } else {
        scrollToTopElement.style.display = "none";
    }
    console.log( "Current slide is " + $(element).data('title') + " #" + number);
});