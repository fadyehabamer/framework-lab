Vue.component('slotcomp', {
    'template': `
    <div>
        <header>
            <slot name="header"> HEADER Default Content </slot>
        </header>
        <main> 
            <slot> Main DEFAULT content </slot>
        </main>
        <footer>
            <slot name="footer"> FOOTER Default Content </slot>
        </footer>

    </div>`

})


// create new vue instance
new Vue({
    'el': "#app",

})
