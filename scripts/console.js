var ul, li;
function dumper(event){
    var x = event.key;
    if(document.querySelector('input').value == '/level' && x == "Enter"){
        setConsoleID();
        for(let i = 0; i < nbSources; i++){
            addLi("level ", sources[i].level, i)
        }
    } 
    else if(document.querySelector('input').value == "/position" && x == "Enter"){
        setConsoleID();
        for(let i = 0; i < nbSources; i++){
            addLi("position ", sources[i].x, i)
        }
    }
    else if(document.querySelector('input').value == "/contraction" && x == "Enter"){
        setConsoleID();
        for(let i = 0; i < nbSources; i++){
            addLi("contraction ", sources[i].contraction, i)
        }
    }
    else if(document.querySelector('input').value == "/doppler" && x == "Enter"){
        setConsoleID();
        for(let i = 0; i < nbSources; i++){
            addLi("doppler amount", sources[i].doppler_Amount, i)
        }
    }
}

function setConsoleID(){
 ul = document.createElement('ul')
    id = Math.floor(random(900))
    ul.setAttribute("id", id)
    consoleId.push(id);
    document.getElementById('Console').appendChild(ul)
}

function addLi(args, value, i){
    // Create new li for each item
        li = document.createElement('li')
        li.style.listStyleType = 'none';
        ul.appendChild(li)
        dataSources.push(args+": "+Math.floor(value))
        li.innerHTML += dataSources[i]
}

function eraseConsole(){
    for(let i = 0; i < consoleId.length; i++){
        var cId = document.getElementById(consoleId[i])	
        Console.removeChild(cId)
        // Erase the input text value
        document.querySelector('input').value = "";
    }
    // Clean console
    consoleId.length = 0;
    dataSources.length = 0;
}