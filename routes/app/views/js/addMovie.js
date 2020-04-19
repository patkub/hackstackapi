$(function () {
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
    return false
  })
})
