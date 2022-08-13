
async function func() {
    let response = await fetch("./nzbird.json");
    let birds = await response.json();

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
        //add credits
        p.innerHTML = "Credit: " + birds[i].photo.credit;
        //add maori name
        h1.innerHTML = birds[i].primary_name;
        //add english name
        h3.innerHTML = birds[i].english_name;


        // create table of bird info to panels
        table.innerHTML = "<tr><td> Scientific Name: <td><td class = 'sci'>" + birds[i].scientific_name
            + "</td></tr><tr><td> Order: <td><td class = 'ord'>" + birds[i].order
            + "</td></tr><tr><td> Family: <td><td class = 'family'>" + birds[i].family
            + "</td></tr><tr><td> Length: <td><td class = 'length'>" + birds[i].size.length.value + birds[i].size.length.units
            + "</td></tr><tr><td> Weight: <td><td class = 'weight'>" + birds[i].size.weight.value + birds[i].size.weight.units + "</td></tr>"


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

    }
}
func();





function searchFunc() {

    let input = document.querySelector("#search_bar");
    let filter = input.value.toUpperCase(); // get textfield input
    let list = document.getElementsByClassName("cards");
    let count = 0;

    for (let i = 0; i < list.length; i++) {

        list[i].style.display = '';


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
        } else if (value == "Family") {
            b = list[i].getElementsByClassName('family')[0];
        }


        let goal_col = ""
        let stat = document.getElementById('status');
        let stat_val = stat.value;
        let circ_col = list[i].getElementsByClassName('circle')[0].style.backgroundColor;

        //sets goal_col to the correct conservation status colour
        if (stat_val == "NT") {
            goal_col = "rgb(2, 160, 40)";
        } else if (stat_val == "NU") {
            goal_col = "rgb(100, 154, 49)";
        } else if (stat_val == "R") {
            goal_col = "rgb(153, 203, 104)";
        } else if (stat_val == "Re") {
            goal_col = "rgb(254, 204, 51)";
        } else if (stat_val == "D") {
            goal_col = "rgb(254, 154, 1)";
        } else if (stat_val == "NI") {
            goal_col = "rgb(194, 105, 103)";
        } else if (stat_val == "NV") {
            goal_col = "rgb(155, 0, 0)";
        } else if (stat_val == "NE") {
            goal_col = "rgb(102, 0, 50)";
        } else if (stat_val == "NC") {
            goal_col = "rgb(50, 0, 51)";
        } else if (stat_val == "DD") {
            goal_col = "black";
        } else if (stat_val == "empty") {
            goal_col = circ_col;
        }


        let c = b.innerHTML.toUpperCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""); //ignores any special maori characters

        // hide cards if they dont contain search string and conservation colour is wrong
        if (c.indexOf(filter) > -1 && circ_col == goal_col) {
            list[i].style.display = '';
            count = count + 1;
        } else {
            list[i].style.display = 'none';

        }




    }
    if (count == 0) {
        document.getElementById('no_result').innerHTML = "No Results Found!";
    } else {
        document.getElementById('no_result').innerHTML = "";
    }


}






