import './render.css'
import {connectAll} from "./utils/math/baz";

export function render() {
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
    connectAll(1, 2)
}