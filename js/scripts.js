$(document).ready(function(){
  $("form#luck-survey").submit(function(event){
    event.preventDefault();
    
    $("#work-responses").show();
    var bad_luck = 0
    var good_luck = 0
    $("input:checkbox[name=bad-luck]:checked").each(function(){
      bad_luck += 1
    });
    $("input:checkbox[name=good-luck]:checked").each(function(){
      good_luck += 1
    });
    if (good_luck > bad_luck) {
      $("#good-luck").show()
    }
    else {
      $("#bad-luck").show()
    }
    $('#luck-survey').hide();
  });
});