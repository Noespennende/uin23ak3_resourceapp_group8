updateHTML(0);

function updateHTML (index) {

    let mainHTML = `<article><h2>${resources[index].category}</h2> <p>${resources[index].text}</p> <ul>`
    resources[index].sources.map(source => mainHTML += `<li><a href="${source.url}">${source.title}</a></li>`)
    mainHTML += `</ul> </article>`
    const main = document.getElementsByTagName("main");
    main[0].innerHTML = mainHTML

    setActiveNavButton(index)

}

function setActiveNavButton (index){
    let html = document.getElementById("html").classList
    let css = document.getElementById("css").classList
    let javascript = document.getElementById("javascript").classList
    let react = document.getElementById("react").classList
    let sanity = document.getElementById("sanity").classList

    if (index === 0) {
        html.add("active")
        css.remove("active")
        javascript.remove("active")
        react.remove("active")
        sanity.remove("active")
    } else if (index === 1) {
        html.remove("active")
        css.add("active")
        javascript.remove("active")
        react.remove("active")
        sanity.remove("active")
    } else if (index === 2) {
        html.remove("active")
        css.remove("active")
        javascript.add("active")
        react.remove("active")
        sanity.remove("active")
    } else if (index === 3){
        html.remove("active")
        css.remove("active")
        javascript.remove("active")
        react.add("active")
        sanity.remove("active")
    } else if (index === 4){
        html.remove("active")
        css.remove("active")
        javascript.remove("active")
        react.remove("active")
        sanity.add("active")
    }
}
