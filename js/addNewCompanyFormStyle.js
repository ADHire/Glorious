(function($){
var $addNewInfo;

$("body").on('click','.btn',function(){
  console.log('poop')
    $addNewInfo = $(this);
    $addNewInfo.addClass('active');
});

$ref = $(".btn-group");

$("body").on('click',$ref.selector+' .btn',function(){
    if($(this).hasClass('active')){
        $(this).addClass('focus');
    }
});


var $textInput = $('input:text');
$('#theform').on('submit', function(e){
  console.log('poop');
    e.preventDefault();
    var name = $textInput.val();
    $textInput.val(null);
    var $theUl = $('#theUL');
    $theUl.append("<li> Taken by, " + name + "!</li>");
    $addNewInfo.text(name);
    $addNewInfo.addClass('unavailable');
});

})(jQuery);
