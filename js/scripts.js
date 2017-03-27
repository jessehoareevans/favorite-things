$(document).ready(function(){
  $("#formOne").submit(function(event){
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    var array1 = [];

    array1.push(person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput);

    var array2 = [array1[1] + " " + array1[2]];

    $("ul").append("<li>" + array1[0] + "</li>");

    console.log(array2);



    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

  event.preventDefault();
  });
});
