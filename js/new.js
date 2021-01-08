const list = [1, 2, 3, 4]
const task = async () => {
  for (const item of list) {
    await new Promise(r => setTimeout(r, 1000));
    console.log('Yello, D\'oh');
  }
}