import routerConf from '../router.conf';
export default class Router {
    constructor() {
        window.addEventListener('popstate', Router.onpopstate, false)
        window.addEventListener('load', Router.onpopstate, false)


        this.defaultPage = {}
        let defaultOne = true

        routerConf.forEach(e => {
            if (e.default){
                if (defaultOne) {
                    this.defaultPage = e;
                    defaultOne = false
                }
            }

            const pageDom = document.querySelector(e.target);
            if (pageDom) {
                pageDom.style.visibility = 'hidden';
            }
        })

        if (!window.location.pathname) { Router._go(this.defaultPage.code) }
    
    }

    static get404Page(){
        return routerConf.filter(e => e.code === '404')[0]
    }

    static onpopstate = () => {
        const path = window.location.pathname
        let defaultPage = Router.get404Page();
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
                window.history.pushState(page, page.code, page.path)
            } else {
                window.history.pushState({}, {}, code)
            }
        }
        Router.onpopstate()
    }

}

export function link(e) {
    e.persist();
    const code = e.target.dataset.code
    Router._go(code)
}