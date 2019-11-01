$('.navbar-button button').click(function(){
    $('.navbar-button button .child1').toggleClass('rotate1');
    $('.navbar-button button .child2').toggleClass('hide');
    $('.navbar-button button .child3').toggleClass('rotate2');
    $('.navbar-header .navbar-content').slideToggle(500);
})

// $('.navbar-header ul.content .item-title > a').hover(function(){
//     $(this).next().css({
//         opacity: 1,
//         top: 44 +'px'
//     })
// },function(){
//     $(this).next().css({
//         opacity: 0,
//         top: 80 +'px'
//     })
// })
$(document).scroll(function(){
    if( $(this).scrollTop() >200 ){
        $('.toTop').css('display','block');
        
    }else{
        $('.toTop').css('display','none');
    }
    
  })