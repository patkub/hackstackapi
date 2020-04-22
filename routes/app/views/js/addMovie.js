$(function () {
  // render the navbar
  const navbar = new HackStackNavBar("addMovie")
  navbar.inject("#navbar")

  $("#addNewMovie").submit(function (e) {
    const new_movie = {
      title: $("#inputTitle").val(),
      itemID: $("#inputId").val(),
      genre: $("#inputGenre").val(),
      itemDesc: $("#inputDesc").val(),
      contentRating: $("#inputContentRating").val(),
      yearReleased: $("#inputYear").val(),
      rentalStatus: "",
      isLate: "",
      fine: [],
    }
    console.log(new_movie)

    let data = {
      title: $("#inputTitle").val(),
      year: $("#inputYear").val(),
      itemID: $("#inputId").val(),
      genre: $("#inputGenre").val(),
      description: $("#inputDesc").val(),
      rating: $("inputContentRating").val(),
    }

    let posted = $.post("http://localhost:8080/movies/add", data)

    //it will return a boolean with whether or not the item was added

    return false
  })
})
