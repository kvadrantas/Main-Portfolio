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
    return html;
}

const html1 = renderHtml(0);
const html2 = renderHtml(1);

document.getElementById('slideBarContent').innerHTML =  html1;

function slidebar() {
    const toggleBtn = document.getElementById('slide-bar');
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active')
        document.getElementById('slideBarContent').innerHTML = toggleBtn.classList.value === 'active' ? html2 : html1;
    })
    
};

export { slidebar };