const tagsContainer = document.querySelector('.tags')
const textarea = document.querySelector('textarea')

function textChange(ele) {
    const string = ele.target.value.trim();
    const tagItemsArray = string.split(',').filter(value => value !== '')

    tagsContainer.innerHTML = '';

    tagItemsArray.forEach((value) => {
        const tagElemtent = document.createElement('div');
        tagElemtent.classList.add('tag')
        tagElemtent.innerText = value;
        tagsContainer.appendChild(tagElemtent)
    })


    if(ele.key == "Enter"){
        const changeInterval = setInterval(() => {
            const randomEle = getRandomElement();
            randomEle.classList.add('highlight')
        }, 100);

        setTimeout(() => {
            clearInterval(changeInterval);
            const randomEle = getRandomElement();
            randomEle.classList.add('highlight')
        }, 5000);
    }



}

textarea.addEventListener('keyup', textChange);


function getRandomElement(){
    const allTags = document.querySelectorAll('.tag')
    allTags.forEach((onetag)=>{
      onetag.classList.remove('highlight')
    })
    const randomElement = allTags[Math.floor(Math.random() * allTags.length)]
    return randomElement;
}