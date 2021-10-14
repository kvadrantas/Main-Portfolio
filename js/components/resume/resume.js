import { resumeData } from "../../data/resume/resumeData.js";

const liDOM = document.querySelectorAll('.my-resume li');

function resume() {
    liDOM.forEach((element, i) => {
        element.addEventListener('click', () => {
            document.getElementById(`res${i}`).innerHTML = resumeData[i].content;
            document.getElementById(`res${i}`).classList.toggle('active');
        })
    })
}


export { resume };