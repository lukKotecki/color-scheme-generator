console.log("Hello")

const colorSamplesContainer = document.getElementById('color-samples-container')
const colorPreviewArray = document.getElementsByClassName('color-preview')
const colorCodeArray = document.getElementsByClassName('color-code')
const colorPicker = document.getElementById("color-picker")
const colorScheme = document.getElementById('color-scheme')
const colorPick =document.getElementById('color-pick')

// fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')


function getColorProbe(){
    
}

colorPicker.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('kliknieto'+colorPick.value)

    renderColorsFromAPI(colorPick.value, colorScheme.value)
})

function renderColorsFromAPI(color = '#111111', mode = 'monochrome'){

    color = color.substring(1,7)
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=6`)
    .then(res => res.json())
    .then(data =>{
        for (let i=0;i<colorPreviewArray.length; i++){
            colorPreviewArray[i].style.backgroundColor = `${data.colors[i].hex.value}`
            colorCodeArray[i].textContent = data.colors[i].hex.value
        }
    })
}






