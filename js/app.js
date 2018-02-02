
$(document).ready(function(){
  //ocultar main
    $("main").slideUp(4000);

    //Creando Elementos
  function printData() {
    for (var i in data) {
      
      var $contenetRestaurant = $("<div />");
      var $titleRestaurant = $("<h2 />");
      var $sheduleRestaurant = $("<p />");
      var $priceRestaurant = $("<p />");

      var $title = data[i].name;
      var $shedule = data[i].horarios;
      var $price = data[i].precios;

      titleRestaurant.text(title);
      sheduleRestaurant.text(shedule);
      priceRestaurant.text(price);

      console.log("titleRestaurant.text(title)");
      $("#restaurant").append($contenetRestaurant)
      $contenetRestaurant.append($titleRestaurant);
      $contenetRestaurant.append($sheduleRestaurant);
      $contenetRestaurant.append($priceRestaurant);

  }


  // var x = $("#foodOne").a7}ttr("data[i]");


  //funcion de modales
  // $('#exampleModal').on('show.bs.modal', function (event) {
  //   var button = $(event.relatedTarget) // Button that triggered the modal
  //   var recipient = button.data("whatever");
  //   console.log(recipient); // Extract info from data-* attributes
  //   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  //   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  //   var modal = $(this)
  //   modal.find('.modal-title').text('New message to ' + recipient)
  //   modal.find('.modal-body input').val(recipient)
  // })
  // $("#foodOne").click(function() {
  //
  //   $("#exampleModal").html(objRestaurantList);
  // })



}










})
