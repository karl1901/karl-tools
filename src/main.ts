import './style.css';
import typescriptLogo from './typescript.svg';
import * as karlTools from '../lib/index';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <p class="read-the-docs">
      This is an open source TypeScript library by Karl
    </p>
  </div>

  <button id="counter">选择文件</button>
`;

document.querySelector<HTMLButtonElement>('#counter')!.addEventListener('click', () => {
    karlTools.openChooseFile(async (files) => {
        if (files && files.length > 0) {
            const startTime = Date.now();
            const chunks = await karlTools.cutAndHashFile(files[0]);
            const endTime = Date.now();
            console.log(`文件分片和哈希计算完成，耗时: ${(endTime - startTime) / 1000} 秒`);
            console.log('分片信息:', chunks);
        }
    });
});
