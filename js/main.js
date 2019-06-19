$(function(){

  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62,
          easing: 'easeInOutExpo'
        }, 1500);
      }
    }
  });

/*  $('.carousel').carousel({
    interval: 3500
  });*/

 // 时间格式化
 Date.prototype.format = function(format) {
    /*
     * eg:format="yyyy-MM-dd hh:mm:ss";
     */
    var timeObj = {
        "M+" : this.getMonth() + 1, // month
        "d+" : this.getDate(), // day
        "h+" : this.getHours(), // hour
        "m+" : this.getMinutes(), // minute
        "s+" : this.getSeconds(), // second
        "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
        "S" : this.getMilliseconds()  // millisecond

    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
                        - RegExp.$1.length));
    }

    for (var k in timeObj) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? timeObj[k]
                            : ("00" + timeObj[k]).substr(("" + timeObj[k]).length));
        }
    }
    return format;
}
/*
$("#otherPublishDate")
                                .val((new Date(data.book.otherPublishDate))
                                        .format("yyyy年MM月"));  */

  var Id = 0;  //楼层ID

  $('#submit').on('click',function(e){
    e.preventDefault();
    var msgs = $('#inputMsgBoard').val();
    if(msgs == 'undefined'|| msgs == null || $.trim(msgs).length == 0){
      alert("不能为空。")
    }else{
      Id++;
      var cmt_list = $(".cmt-list").html();
      var user = $('#username').val();
      var time = new Date();
      var allTime = time.toLocaleString();
       $('#numId').text("第"+Id+"楼");
       $('#user_name').text("用户名："+user);
       $('#add_time').text("发表时间："+allTime);
      $('#cmt-content').html("<p>"+msgs+"</p>");
      //console.log(cmt_list);
    $('.cmt-container').append(cmt_list);
       localStorage.setItem("saveUser",user);
       localStorage.setItem("saveTime",allTime);
       localStorage.setItem("saveCont",msgs);

    }
  })

    //localStorage.clear();
 //console.log(localStorage.getItem("saveUser")+
   //    localStorage.getItem("saveCont"));
   $('#numId').text("过去最后一条留言");
    $('#user_name').text("用户名："+localStorage.getItem("saveUser"));
    $('#add_time').text("发表时间："+localStorage.getItem("saveTime"));
    $('#cmt-content').html("<p>"+localStorage.getItem("saveCont")+"</p>");

});

