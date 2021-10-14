const liDOM = document.querySelectorAll('.my-resume li');

function resume() {
    console.log(liDOM);
    liDOM.forEach((element, i) => {
        element.addEventListener('click', () => {
            console.log('clicked', i);
            // element.classList.toggle("active");
            document.getElementById('res1').classList.toggle('active');
        })
    })
}


export { resume };