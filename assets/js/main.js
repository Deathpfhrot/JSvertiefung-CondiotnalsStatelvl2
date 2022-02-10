//----------------------------

console.log("%c -------------Switch Break-------------", "color: blue;");

let bundeslandInfo = document.getElementById('bundeslandInfo')
let bundesErgebnis = document.getElementById('bundeslandInfoErgebnis')

function check(){

    let newBundesInfo = bundeslandInfo.value.toLowerCase()

    switch (true) {
        case newBundesInfo == 'baden-württemberg':
            bundesErgebnis.innerHTML = `Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt`
            break;
            case newBundesInfo == 'bayern':
                bundesErgebnis.innerHTML = `Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt
                `
                break;
                
                case newBundesInfo == 'berlin':
            bundesErgebnis.innerHTML = `Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'brandenburg':
            bundesErgebnis.innerHTML = `Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'bremen':
            bundesErgebnis.innerHTML = `Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'Hamburg':
            bundesErgebnis.innerHTML = `Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'baden-württemberg':
            bundesErgebnis.innerHTML = `Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt`
            break;

            case newBundesInfo == 'hessen':
            bundesErgebnis.innerHTML = `Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'Mecklenburg-Vorpommern':
            bundesErgebnis.innerHTML = `Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'niedersachsen':
            bundesErgebnis.innerHTML = `Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'nordrhein-westfalen':
            bundesErgebnis.innerHTML = `Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'rheinland-pfalz':
            bundesErgebnis.innerHTML = `Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'saarland':
            bundesErgebnis.innerHTML = `Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'sachsen':
            bundesErgebnis.innerHTML = `Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'sachsen-anhalt':
            bundesErgebnis.innerHTML = `Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'schleswig-holstein':
            bundesErgebnis.innerHTML = `Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt
            `
            break;

            case newBundesInfo == 'thüringen':
            bundesErgebnis.innerHTML = `Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt
            `
            break;           
        default:
            bundesErgebnis.innerHTML = `Ein solches Bundesland gibt es in Deutschland nicht.`
            break;
    }
}

//-----------------------------------

console.log("%c -------------lev2_7: Switch Break DHL-------------", "color: yellow;");

let mylist = document.getElementById('mylist')
let masse = document.getElementById('masse')


function showtxt() {

    let trueMylist = Number(mylist.value)

    switch (true) {

        case trueMylist === 0:
            masse.innerHTML = ` <b>Brief und Postkarte</b> <br>
            L: 10 - 23,5 cm
            B: 7 - 12,5 cm
            H: bis 1 cm`
            break;

        case trueMylist === 1:
            masse.innerHTML = `<b>DHL Paket 2 kg</b> <br>
            bis 60 x 30 x 15 cm`
            break;

        case trueMylist === 2:
            masse.innerHTML = `<b>DHL Paket 5 kg</b> <br>
            bis 120 x 60 x 60 cm`
            break;

        case trueMylist === 3:
            masse.innerHTML = `<b>DHL Paket 10 kg</b> <br>
            bis 120 x 60 x 60 cm`
            break;

        case trueMylist === 0:
            masse.innerHTML = ` <b>Brief und Postkarte</b> <br>
            L: 10 - 23,5 cm
            B: 7 - 12,5 cm
            H: bis 1 cm`
            break;
    
        default:
            masse.innerHTML = `<b>Extra große Größe</b>`
            break; //Braucht man das zum anzeigen oder als text zum anfang in die id=masse
    }
}









