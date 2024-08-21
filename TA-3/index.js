function removeFromArray(arreglo, item) {
  console.log(arreglo.filter((i) => i !== item));
}

removeFromArray([1, 2, 3, 4], 3);
