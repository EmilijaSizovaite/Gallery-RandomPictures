
const rodyti = document.querySelector('.rodyti')
const maisyti = document.querySelector('.maisyti')
const ul = document.querySelector('ul').style.listStyle = "none";
let  images

//BUTTONS
maisyti.style.display = "none"

rodyti.onclick = ()=>{
    for(let i = 1; i <= 10; i++){
        const li = document.createElement('li')
        li.className = "col-sm-3"
        li.style.height = "250px"
        li.style.padding = "1em"
        const img = document.createElement('img')
        document.querySelector('ul').appendChild(li).appendChild(img)
    }
    images = document.querySelectorAll('img')
    newImage()
    cover()
    rodyti.style.display = "none"
    maisyti.style.display = "inline"
}

maisyti.onclick = ()=>{
    newImage()
}
///////////////


let usedNumbers = []
const randomPictureNumber = ()=>{
    let randomNum = Math.floor((Math.random() * 10)+1)
    if(usedNumbers.includes(randomNum)){
        return randomPictureNumber()
    }
    else{
        usedNumbers.push(randomNum)
        return randomNum
    }
}

const newImage = ()=>{
    for(let image of images){
        image.src = `img/img${randomPictureNumber()}.jpeg`
        image.style.objectFit = "cover"
        // image.style.objectPosition = "center"
        image.style.height = "100%"
        image.style.width = "100%"
    }
    usedNumbers = []

}


const cover = ()=>{
    for(let image of images){
        image.ondblclick = (e)=>{
            e.target.src = "img/img11.jpeg"
        }
    }
}
