export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

export * from './tools';
export * from './ajax/ajax';
export * from './ajax/tools';
export * from './eventEmitter/eventEmitter';
