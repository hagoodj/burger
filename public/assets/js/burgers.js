$(function () {
    $(".devour").on("click", function (event) {
        console.log("devour clicked")
        var id = $(this).data("id");
        var newDevoured = true;

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var name = $("#ca").val().trim();
        
        if (name.length > 0) {
            var newBurger = {
                burger_name: name,
                devoured: 0
            };
        } else {
            var newBurger = {
                burger_name: "burger",
                devoured: 0
            };
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});