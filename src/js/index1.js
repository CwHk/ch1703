$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 3000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable: true
    })

    // function selectOnchang(obj){ 
    // 	//获取被选中的option标签选项 
    // 	alert(obj.selectedIndex);
    // }  
    $('.gnjd').mouseover(function() {
        $('.jfdt').css("background-image", "url(images/guoneijf.png)");
    });
    $('.gwjd').mouseover(function() {
        $('.jfdt').css("background-image", "url(images/guowaijf.png)");
    })
    $(".navcantainer a").mouseover(function() {
        $(this).find('.toggle_box').show();
        $(this).addClass("active")
        $(this).siblings('a').removeClass('active').find('.toggle_box').hide();
    })
})