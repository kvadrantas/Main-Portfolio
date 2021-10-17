const html1 = `
<p>HTML/CSS</p>
<div class="progress-bar">
    <div class="pb-fill"></div>
</div>
<p>JavaScript</p>
<div class="progress-bar">
    <div class="pb-fill"></div>
</div>
<p>Node.js</p>
<div class="progress-bar">
    <div class="pb-fill"></div>
</div>
<p>React</p>
<div class="progress-bar">
    <div class="pb-fill"></div>
</div>`;

const html2 = `
<p>HTML/CSS 2</p>
<div class="progress-bar">
    <div class="pb-fill"></div>
</div>
<p>JavaScript 2</p>
<div class="progress-bar">
    <div class="pb-fill"></div>
</div>
<p>Node.js 2</p>
<div class="progress-bar">
    <div class="pb-fill"></div>
</div>
<p>React 2</p>
<div class="progress-bar">
    <div class="pb-fill"></div>
</div>`


function slidebar() {
    console.log('ISKIVETE ', document.getElementById('slide-bar'));
    const toggleBtn = document.getElementById('slide-bar');
    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active')
        console.log('CLASES ');
        document.getElementById('slideBarContent').innerHTML = toggleBtn.classList.value === 'active' ? html1 : html2;
    })
    
};

export { slidebar };