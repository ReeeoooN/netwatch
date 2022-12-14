const btn = document.querySelector('.treadsend')
const treadtext = document.querySelector('.treadcreate')
var delTreadBtn = document.querySelectorAll('.fa-trash')
const url = 'http://localhost:3000/'

function nwtread (){
    const treadfield = document.querySelector('.treadblock')
    let newtread = document.createElement('div');
    newtread.className = 'mainblock newtreadanim'
    treadfield.prepend(newtread)
    let autor = document.createElement('div')
    autor.className = 'creator'
    newtread.append(autor)
    let name = document.createElement('div')
    name.className = 'uname'
    name.innerHTML = 'Name'
    autor.append(name)
    let date = document.createElement('div')
    date.className = 'treaddate'
    let dateNow = new Date()
    date.innerHTML = `${dateNow.getDate()}.${dateNow.getMonth()+1}.${dateNow.getFullYear()} ${dateNow.getHours()}:${dateNow.getMinutes()}`
    autor.append(date)
    let delBtn = document.createElement('i')
    delBtn.className = 'fa fa-trash'
    autor.append(delBtn)
    let content = document.createElement('div')
    content.className = 'treadcontent'
    newtread.append(content)
    let textcontent = document.createElement('p')
    textcontent.innerHTML = treadtext.value
    content.append(textcontent)
    let tegs = document.createElement('div')
    tegs.className = 'tegs'
    newtread.append(tegs)
    let teg = document.createElement('div')
    teg.innerHTML = 'Тег 2'
    tegs.append(teg)
    let comments = document.createElement('div')
    comments.className = 'treadcomments'
    comments.innerHTML = 'Комментарии'
    newtread.append(comments)
    let eye = document.createElement('i')
    eye.className = 'fa fa-eye'
    comments.append(eye)
    treadtext.value = ''; 
    delTreadBtn = document.querySelectorAll('.fa-trash')
    let treadsend = {
        text: treadtext.value,
        date: dateNow,
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(treadsend)
    })
}

btn.onclick = nwtread
treadtext.onfocus = ()=>{
    document.addEventListener('keydown', (key)=>{
        if (treadtext.value !== '' && (key.code == 'Enter' && key.shiftKey)){
            console.log(treadtext);
            nwtread()
        } 
    })
}
delTreadBtn.onclick = ()=>{
    console.log(delTreadBtn.parrentNode);
}
