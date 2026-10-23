var toggles = document.getElementsByClassName("list-toggle");
for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", function() {
        var nodes = this.parentElement.querySelectorAll(".collapsable");

        for (var j = 0; j < nodes.length; j++) {
            nodes[j].classList.toggle("show");
        }
    });
}

var entries = document.getElementById("entries")?.children
for (var i = 0; i < entries?.length; i++) {
    var link = entries[i].querySelector("#youtube-link")
    if (link == null) {
        continue
    }

    var tokens = entries[i].querySelector("#duration-dates").innerHTML.split(" | ", 3)
    if (tokens.length < 2) {
        continue
    }

    var date = Date.parse(tokens[tokens.length-1])
    if (date == NaN || date < Date.now()) {
        continue
    }
    
    link.classList.add("disabled")
    link.removeAttribute("href")
    link.innerHTML = "UPCOMING ON YOUTUBE"

    entries[i].querySelector("#thumbnail-img").setAttribute("src", "../../youtube_upcoming.png")
}

document.getElementById("scroll-to-bottom").addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

document.getElementById("scroll-to-top").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
