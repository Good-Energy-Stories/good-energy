function chunks(array: any[], n: number): any[] {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += n) {
    const chunk = array.slice(i, i + n);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}
export default chunks;
