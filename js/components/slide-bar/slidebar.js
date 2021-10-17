import { slidebarData } from "../../data/slide-bar/slidebarData.js";

function renderHtml(i) {
    let html= '';
    slidebarData[i].forEach(el => {
        html += `
            <p>${el.name}</p>
            <div class="progress-bar">
                <div class="pb-fill" style="width: ${el.value}%"></div>
                <div class="percentBox">${el.value}%</div>
            </div>`
    });
    console.log('HTMLSAS ', html);
    return html;
}

const html1 = renderHtml(0);
const html2 = renderHtml(1);

console.log(slidebarData);

document.getElementById('slideBarContent').innerHTML =  html1;

function slidebar() {
    console.log('ISKIVETE ', document.getElementById('slide-bar'));
    const toggleBtn = document.getElementById('slide-bar');
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active')
        console.log('CLASES ');
        document.getElementById('slideBarContent').innerHTML = toggleBtn.classList.value === 'active' ? html2 : html1;
    })
    
};

export { slidebar };