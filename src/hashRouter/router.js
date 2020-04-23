import routerConf from '../router.conf';
export default class Router {
    constructor() {
        window.addEventListener('hashchange', this.onhashchange, false)
        window.addEventListener('load', this.onhashchange, false)


        this.defaultPage = {}
        let defaultOne = true
        this.page404 = {}

        routerConf.forEach(e => {
            if (e.default){
                if (defaultOne) {
                    this.defaultPage = e;
                    defaultOne = false
                }
            }

            if (e.code === '404') {
                this.page404 = e
            }

            const pageDom = document.querySelector(e.target);
            if (pageDom) {
                pageDom.style.visibility = 'hidden';
            }
        })

        if (!window.location.hash) { Router._go(this.defaultPage.code) }
    
    }
    onhashchange = () => {
        const path = window.location.hash.replace('#', '')
        let defaultPage = this.page404
        routerConf.forEach(e => {
            if (e.path === path){
                defaultPage = e
            }
            const page = document.querySelector(e.target)
            if (page) {
                page.style.visibility = 'hidden'
            }
        })
        const page = document.querySelector(defaultPage.target)
        if(page){
            page.style.visibility = 'unset'
        }
    }

    static _go(code) {
        if(code) {
            const page = routerConf.filter(e => e.code === code)[0]
            if (page) {
                window.location.hash = page.path
            } else {
                window.location.hash = code
            }
        }
    }

}

export function link(e) {
    e.persist();
    const code = e.target.dataset.code
    Router._go(code)
}