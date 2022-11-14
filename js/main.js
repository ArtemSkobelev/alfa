$(function () {
   $('.adress').on('click', function () {
      $('.adress-label').hide();
      return false;
   });
   $(document).on('click', function(event){
      if( $(event.target).closest(".adress-label").length ) return;
      $(".adress-label").show();
      event.stopPropagation();
    });
   
   
});