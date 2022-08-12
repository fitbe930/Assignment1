
async function func() {
    let response = await fetch("./nzbird.json");
    let birds = await response.json();

    let e = document.getElementById('sort');
    let value = e.value;
    if (value == "Lenght(Shortest)") {
        birds.sort((a, b) => a.size.length.value - a.size.length.value);
    };
    //alert(value);

    for (i = 0; i < birds.length; i++) {

        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let circle = document.createElement('div');
        let parent = document.querySelector('#panels');
        let src = birds[i].photo.source;
        let table = document.createElement('table');
        circle.setAttribute('class', 'circle');
        p.setAttribute("class", "credit");
        h1.setAttribute("class", "name");
        div.setAttribute("class", "cards");
        //add bird image to panels
        div.innerHTML = "<img src =" + src + " alt =" + birds[i].primary_name + "/>"
        p.innerHTML = "Credit: " + birds[i].photo.credit;
        h1.innerHTML = birds[i].primary_name;
        h3.innerHTML = birds[i].english_name;
        weight_pds =

            // create table of bird info to panels
            table.innerHTML = "<tr><td> Scientific Name: <td><td class = 'sci'>" + birds[i].scientific_name
            + "</td></tr><tr><td> Order: <td><td class = 'ord'>" + birds[i].order
            + "</td></tr><tr><td> Length: <td><td class = 'length'>" + birds[i].size.length.value + birds[i].size.length.units
            + "</td></tr><tr><td> Weight: <td><td class = 'weight'>" + birds[i].size.weight.value + birds[i].size.weight.units + "</td></tr>";

        div.append(p);      // photo credit
        div.append(circle); // conservation coloured circle
        div.append(h1);     // Maori name heading
        div.append(table)   // bird information table
        div.append(h3);     // english name top right corner
        parent.append(div); // all added to main div

        //set circle colors
        if (birds[i].status == "Not Threatened") {
            circle.style.backgroundColor = "#02a028";
        } else if (birds[i].status == "Naturally Uncommon") {
            circle.style.backgroundColor = "#649a31";
        } else if (birds[i].status == "Relicit") {
            circle.style.backgroundColor = "#99cb68";
        } else if (birds[i].status == "Recovering") {
            circle.style.backgroundColor = "#fecc33";
        } else if (birds[i].status == "Declining") {
            circle.style.backgroundColor = "#fe9a01";
        } else if (birds[i].status == "Nationally Increasing") {
            circle.style.backgroundColor = "#c26967";
        } else if (birds[i].status == "Nationally Vulnerable") {
            circle.style.backgroundColor = "#9b0000";
        } else if (birds[i].status == "Nationally Endangered") {
            circle.style.backgroundColor = "#660032";
        } else if (birds[i].status == "Nationally Critical") {
            circle.style.backgroundColor = "#320033";
        } else if (birds[i].status == "Data Deficient") {
            circle.style.backgroundColor = "black";



        }
        //alert(circle.style.backgroundColor);
    }
}
func();





function searchFunc() {

    let input = document.querySelector("#search_bar");
    let filter = input.value.toUpperCase(); // get textfield input
    let list = document.getElementsByClassName("cards");

    for (let i = 0; i < list.length; i++) {



        let e = document.getElementById('info');
        let value = e.value;


        // change b depending on 'search by' selection
        if (value == "English Name") {
            b = list[i].getElementsByTagName('h3')[0];
        } else if (value == "Maori Name") {
            b = list[i].getElementsByClassName('name')[0];
        } else if (value == "Scientific Name") {
            b = list[i].getElementsByClassName('sci')[0];
        } else if (value == "Order") {
            b = list[i].getElementsByClassName('ord')[0];

        }



        let f = document.getElementById('status');
        let value2 = f.value;

        if (value == "NT") {

        }


        let c = b.innerHTML.toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu, "") //ignores any special maori characters


        if (c.indexOf(filter) > -1) {
            list[i].style.display = ''
        } else {
            list[i].style.display = 'none';
        }


    }

}






