function onClickTimeToVisitTab() {
    document.getElementById("aboutTab").classList.add("d-none");
    document.getElementById("timeToVisitTab").classList.remove("d-none");
    document.getElementById("attractionsTab").classList.add("d-none");

    document.getElementById("aboutButton").classList.remove("selected-button");
    document.getElementById("timeToVisitButton").classList.add("selected-button");
    document.getElementById("attractionsButton").classList.remove("selected-button");
}

function onClickAttractionsTab() {
    document.getElementById("aboutTab").classList.add("d-none");
    document.getElementById("timeToVisitTab").classList.add("d-none");
    document.getElementById("attractionsTab").classList.remove("d-none");

    document.getElementById("aboutButton").classList.remove("selected-button");
    document.getElementById("timeToVisitButton").classList.remove("selected-button");
    document.getElementById("attractionsButton").classList.add("selected-button");
}

function onClickAboutTab() {
    document.getElementById("aboutTab").classList.remove("d-none");
    document.getElementById("timeToVisitTab").classList.add("d-none");
    document.getElementById("attractionsTab").classList.add("d-none");

    document.getElementById("aboutButton").classList.add("selected-button");
    document.getElementById("timeToVisitButton").classList.remove("selected-button");
    document.getElementById("attractionsButton").classList.remove("selected-button");
}