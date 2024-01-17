import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import {setupCounter} from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img alt="Vite logo" class="logo" src="${viteLogo}"/>
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
            <img alt="TypeScript logo" class="logo vanilla" src="${typescriptLogo}"/>
        </a>
        <h1>Vite + TypeScript</h1>
        <div class="card">
            <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
            Click on the Vite and TypeScript logos to learn more
        </p>
    </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
