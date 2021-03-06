$(function(){
    var shareTimer;
    var window_W = $(window).width();
    //處理browser resize後的回歸預設
    function resizeRest(){
        //右上角icon share reset
        var displayVaule = $(this).innerWidth()>=980 ? "block" : "none";
        $(".th-share ul").css({display:displayVaule}); 
        //infopage maincontetnt Height
        var contentH =  $(".fixedHdBg").height() + $("#footer").height() + $(".page-info .md-textlink ul").height() + $("nav").height();
        if($(window).innerHeight()> contentH){
            $(".page-info .main-content").css({
                minHeight: $(document).height()- $(".fixedHdBg").height() - $("#footer").height() - $("nav").height()
            });
        }else{
            //infopage maincontetnt Height  100是.md-textlink ul margin-top:100px
            $(".page-info .main-content").css({ minHeight:  $(".page-info .md-textlink ul").outerHeight(true)});
        }
    }
    resizeRest();
    //拉伸browser後將style回歸預設
    $(window).resize(function(){  
        if(window_W != $(window).width()){
            clearTimeout(shareTimer);
            shareTimer = setTimeout(resizeRest, 50);            
        }
        $("main").attr("style","").css({
            "min-height":$(window).height()-$("#footer").height()-($("#header").offset().top+$("#header").height())
        });
    }).resize();
    $("#backBtn").click(function(e){
        e.preventDefault();
        window.history.go(-1);
    });
});