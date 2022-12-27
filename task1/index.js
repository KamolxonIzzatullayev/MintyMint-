const apiUrl = "https://pokeapi.co/api/v2/pokemon/1/";

async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    let data = await response.json();
    console.log(data);
    document.getElementById('pokemon-name').innerText += " '" + data.species.name + "'";

    data.moves.forEach(element => {
        document.getElementById('moves-list').innerHTML += '<li><a href="' + element.move.url + '">' + element.move.name + '</a>' + getSubCategory(element) + '</li>'
    });
}

function getSubCategory(obj) {
    let a = undefined;
    if (obj.version_group_details.length) {
        a = '<ul>'
        obj.version_group_details.forEach(element => {
            a += '<li> <ul> <li> Level learned at: ' + element.level_learned_at + '</li> <li> Move learn method: <a href=' +
                + element.move_learn_method.url + '>' + element.move_learn_method.name + '</a></li> <li> Version group: <a href=' +
                + element.version_group.url + '>' + element.version_group.name + '</a></li> </ul></li>'
        });

        a += '</ul>'
    }

    return a
}

getapi(apiUrl)
