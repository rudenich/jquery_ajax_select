(function($){
    var idField = 'id';
    var titleField = 'title';

    var old  = $.fn.load;
    $.fn.load = function(){
        var params = Array.prototype.slice.call(arguments);
        this.each(function(){
            var
                _this = $(this)
            ;
            if(this.nodeName.toLowerCase()=='select'){
                $.ajax({
                    url:url,
                    dataType:'json',
                    success:function(response){
                        var result = '';
                        for(var i=0;i<response.length;i++){
                            var temp = response[i];
                            result+="<option value='"+temp[idField]+"'>"+temp[titleField]+"</option>"
                        }
                        _this.html(result);
                    }
                });

            }else{
                /*console.log(_this);
                console.log(old);
                console.log(params);*/
                old.apply(_this,params);
            }
        });
    }


})(jQuery);