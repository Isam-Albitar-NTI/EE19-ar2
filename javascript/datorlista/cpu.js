// Hitta element vi behöver 
const rutaNamn = document.querySelector("input");
const meny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");

// Vad händer när man klickar på knappen?

knapp.addEventListener("click", function () {
    console.log("Du har klickat på knappen");

    // Läs av texten och lagra i en variabel
    var namn = rutaNamn.value;
    console.log(namn);

    // Läs in valet i meny
    var cpu = meny.value;
    console.log(cpu);
    // Skriv i ul-listan
    if (cpu == "i7") {
        lista.innerHTML =
            "<li>" +
            "<img src=\"https://inetimg2.se/img/688x386/5301267_2.jpg\">" +
            "Intel Core i7 9700K" +
            "Socket 1200 Comet Lake-S / 6-kärnor / 4.1 GHz / 12MB" +
            "</li>";
    }
    if (cpu == "i9") {
        lista.innerHTML =

            "<li>" +
            "<img src=\"https://inetimg.se/img/688x386/5303238_1.jpg\">" +
            "Intel Core i9 9900K" +
            "Socket 1151 Coffee Lake-S Refresh / 8-kärnor / 3.6 GHz / 16 MB" +
            "</li>";
    }
    if (cpu == "i5") {
        lista.innerHTML =

            "<li>" +
            "<img src=\"https://inetimg3.se/img/86x86/5303123_0.jpg\">" +
            "Intel Core i5-10600K"+
            "Socket 1200 Comet Lake-S / 6-kärnor / 4.1 GHz / 12 MB" +
            "</li>";
    }
    if (cpu == "amd9") {
        lista.innerHTML =

            "<li>" +
            "<img src=\"https://inetimg3.se/img/688x386/5303476_5.jpg\">" +
            "AMD Ryzen 9 5900X" +
            "Socket AM4 / 12-kärnor / 3.7 GHz / 64 MB" +
            "</li>";
    }
    if (cpu == "amd5") {
        lista.innerHTML =

            "<li>" +
            "<img src=\"https://inetimg.se/img/688x386/5303474_2.jpg\">" +
            "AMD Ryzen 5 5600X" +
            "Socket AM4 / 6-kärnor / 3.7 GHz / 32 MB" +
            "</li>";
    }
    if (cpu == "amd7") {
        lista.innerHTML =

            "<li>" +
            "<img src=\"https://inetimg2.se/img/688x386/5301791_0.jpg\">" +
            "AMD Ryzen 7 3700X" +
            "Socket AM4 / 8-kärnor / 3.6 GHz / 32 MB" +
            "</li>";
    }

});