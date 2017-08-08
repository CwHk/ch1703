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
    $('.tab-hot').on('click','.tab-item',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

})