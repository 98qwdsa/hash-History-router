import routerConfig from '../routerConfig';

export default class Router{
  constructor(){
    window.addEventListener('popstate',Router.onpopstate,false)
    window.addEventListener('load',Router.onpopstate,false)

    this.defaultPage ={}
    let defaultB = true

    routerConfig.forEach(e=>{
      if(e.default){
        if(defaultB){
          this.defaultPage = e;
          defaultB = false;
        }
      }

      const pageDom = document.querySelector(e.target);
      if(pageDom){
        pageDom.style.visibility = 'hidden';
      }
    })

    if(!window.location.pathname){
      Router._go(this.defaultPage.code)
    }
  }

  static get404page(){
    return routerConfig.filter(e=>e.code === '404'[0])
  }

  static onpopstate = ()=>{
    const path = window.location.pathname
    let defaultPage = Router.get404page();
    routerConfig.forEach(e=>{
      if(e.path === path){
        defaultPage = e
      }
      const page = document.querySelector(e.target)
      if(page){
        page.style.visibility = 'hidden';
      }
    })

    const page = document.querySelector(defaultPage.target)
    if(page){
      page.style.visibility = 'unset'
    }
  }

  static  _go = (code)=>{
    if(code){
      const page = routerConfig.filter(e=> e.code === code)[0]
      if(page){
        window.history.pushState(page,page.code,page.path);
      }else{
        window.history.pushState({},{},code)
      }
    }
    Router.onpopstate();
  }
}

export function link(e){
  e.persist();
  const code = e.target.dataset.code
  Router._go(code)
}