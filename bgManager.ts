/**
 * * bgManager.(ts/js)
 * * Sub-Program for background management
 */

// * Dictionary for Background Settings
var bgNameDict: object = {
    // ! Look like it's impossible to import from other file.
    // ! Unless host through server while this project want it to work locally.
    // * Key: Value of <option> in <select>
    // * Value: Another Dictionary of property:value as shown
    // ! File extension must be declared

    // * CATEGORY: Samsung Galaxy Wallpaper
    // * Default one below
    "Default01": {
        "displayname": "Default 01",
        "filelocation": "Samsung_Galaxy/Note_10_Wallpaper_Silver.jpg"
    },
    "Default02": {
        "displayname": "Default 02",
        "filelocation": "Samsung_Galaxy/Galaxy_Tab_S7_Wallpaper_9.jpg"
    },

    // * CATEGORY: Premium-Look Wallpaper
    "Gradient Giphy": {
        "displayname": "Gradient Giphy",
        "filelocation": "GIF/Gradient_Giphy.gif"
    },

    // * CATEGORY: Nature View
    "Hua Hin Sea Resort View": {
        "displayname": "Hua Hin Sea Resort View",
        "filelocation": "HuaHin_Luxury_Resort_View.jpg"
    },

    // * CATEGORY: Anime | アニメ
    // * Source: 魔女の旅々
    "Elaina & Bubble Tea": { 
        "displayname": "Elaina & Bubble Tea (Cute)",
        "filelocation": "Anime/イレイナとชานมไข่มุก.jpg"
    }, 
    // * Source: 鬼滅の刃
    "Infinity Castle": {
        "displayname": "Infinity Castle",
        "filelocation": "Anime/無限城.jpg"
    },

    // * CATEGORY: Minecraft
    "Arendelle Castle": {
        "displayname": "MC: Arendelle Castle",
        "filelocation": "./Minecraft/Arendelle_Castle.jpg"
    },
    "Desert Village": {
        "displayname": "MC: Desert Village",
        "filelocation": "./Minecraft/Desert_Village.jpg"
    },
    "Nether Highway": {
        "displayname": "MC: Nether Highway",
        "filelocation": "./Minecraft/Nether_Highway_View.jpg"
    },
    "Ocean Village View": {
        "displayname": "MC: Ocean Village View",
        "filelocation": "./Minecraft/Ocean_Village_View.jpg"
    },
    "Rainy Day": {
        "displayname": "MC: Rainy Day",
        "filelocation": "./Minecraft/Rainy_Day.jpg"
    },
    "Snow Village": {
        "displayname": "MC: Snow Village",
        "filelocation": "./Minecraft/Snow_Village.jpg"
    },
    "Village Airview": {
        "displayname": "MC: Village Airview",
        "filelocation": "./Minecraft/Village_Airview.jpg"
    },
    "Void Ocean": {
        "displayname": "MC: Unpleasant Ocean",
        "filelocation": "./Minecraft/Void_Ocean.jpg"
    }
}

// * Add Select Options from Dictionary to HTML
function addBgOptions() {
    let optionNode:HTMLElement = document.getElementById("bgOptions")
    for (let background in bgNameDict) {
        let bgOptionChildNode: HTMLOptionElement = document.createElement("option")
        bgOptionChildNode.value = background
        let displayText: Text = document.createTextNode(bgNameDict[background]["displayname"])
        bgOptionChildNode.appendChild(displayText)
        optionNode.appendChild(bgOptionChildNode)
    }
}

// * Set Background
function SetBackground() {
    let selectBg: string = (<HTMLInputElement>document.getElementById("bgOptions")).value
    let filelocation: string = `./assets/${bgNameDict[selectBg]["filelocation"]}`
    let bgString: string = `url(${filelocation})`
    document.getElementById("Body").style.backgroundImage = bgString
    console.log(`Set background to ${filelocation}`)
}
