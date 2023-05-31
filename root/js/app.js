$(document).ready(function() {
  $("#explore-btn").click(function() {
    $("#splash").hide();
    $("#explore-container").show();
  });


  $("#book-now-btn").click(function() {
    $("#explore-container").hide();
    $("#book-now-page").show(); 
  });

  $("#learn-more-btn").click(function() {
    $("#explore-container").hide();
    $("#book-now-page").show(); 
  });

  $(".home").click(function() {
    $("#explore-container").show(); 
  });

  $(".home2").click(function() {
    $("#book-now-page").hide();
    $("#explore-container").show(); 
  });

  $(".home3").click(function() {
    $("#info-page").hide();
    $("#explore-container").show(); 
  });

  $(".home4").click(function() {
    $("#checkout").hide();
    $("#explore-container").show(); 
  });


  $("#learn-more-btn2").click(function() {
    $("#explore-container").hide();
    $("#book-now-page").show(); 
  });

  $(".showPlanet").click(function() {
    $("#book-now-page").hide();
    $("#info-page").show(); 
  });

  
  $("#book-button").click(function() {
    $("#info-page").hide();
    $("#checkout").show(); 
  });

  $(".planets1").click(function() {
    $("#explore-container").hide();
    $("#book-now-page").show(); 
  });

  $(".planets3").click(function() {
    $("#info-page").hide();
    $("#book-now-page").show(); 
  });

  $(".planets3").click(function() {
    $("#info-page").hide();
    $("#book-now-page").show(); 
  });

  $(".planets4").click(function() {
    $("#checkout").hide();
    $("#book-now-page").show(); 
  });

  $(".cart-icon").click(function() {
    $("#explore-container").hide();
    $("#checkout").show(); 
  });

  $(".cart-icon").click(function() {
    $("#book-now-page").hide();
    $("#checkout").show(); 
  });

  $(".cart-icon").click(function() {
    $("#info-page").hide();
    $("#checkout").show(); 
  });


  $("#back-button-1").click(function() {
    $("#book-now-page").hide();
    $("#explore-container").show(); 
  });

  $("#back-button-2").click(function() {
    $("#info-page").hide();
    $("#book-now-page").show(); 
  });

  $("#back-button-3").click(function() {
    $("#checkout").hide();
    $("#info-page").show(); 
  });

});

