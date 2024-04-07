function bookNow(){
    document.getElementById("book-now").addEventListener("click", function() {
        document.getElementById("inputFormContainer").style.display = "flex";
        document.getElementById("inputForm").style.display = "block";
        document.querySelector(".main").style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    });
    
    document.querySelector("#inputFormContainer .ri-close-line").addEventListener("click", function() {
        document.getElementById("inputFormContainer").style.display = "none";
        document.querySelector(".main").style.backgroundColor = "#FAF2F4"
    });
    
    document.getElementById("inputForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var contactNo = document.getElementById("contact-no").value;
        var movieName = document.getElementById("movie-name").value;
        var numberOfTickets = document.getElementById("number-of-tickets").value;
        document.getElementById("inputForm").reset();
        document.getElementById("inputFormContainer").style.display = "none";
        document.querySelector(".main").style.backgroundColor = "#FAF2F4"
    });
};
bookNow();