document.addEventListener("DOMContentLoaded", function() {
    const workList = document.getElementById("worklist");
    const workImage = document.getElementById("workImage");
    const workDescription = document.getElementById("workDescription");
    const workDetails = document.querySelector(".work-details");

    workList.addEventListener("mouseover", function(event) {
        if (event.target.tagName === "A") {
            const imageUrl = event.target.getAttribute("data-image");
            const description = event.target.getAttribute("data-description");

            if (imageUrl && description) {
                workImage.src = imageUrl;
                workDescription.textContent = description;
                workDetails.style.display = "block";
            }
        }
    });

    workList.addEventListener("mouseout", function() {
        workDetails.style.display = "none";
    });
});
