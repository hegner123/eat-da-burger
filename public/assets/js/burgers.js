// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newburger = 1;

    var newBurgerState = {
      devoured: newburger
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed devoured to", newburger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bur").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
