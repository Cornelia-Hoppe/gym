

export default function closeLoadingModal(){

    const none = () => document.querySelector('#loading-screen').style.display="none"
    
    document.querySelector('#loading-screen').style.opacity="0"
    setTimeout(none, 300)

    
}