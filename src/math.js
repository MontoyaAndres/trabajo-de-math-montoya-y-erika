function lagrange(cx, cy, x) {
  var suma = 0;
  var prod = "";
  let content = [];
  let sumaContent = [];

  for (var j = 0; j < cx.length; j++) {
    prod = 1;
    for (var i = 0; i < cx.length; i++) {
      if (i !== j) {
        prod *= (x - cx[i]) / (cx[j] - cx[i]);
        content.push(`(${x} - ${cx[i]}) / (${cx[j]} - ${cx[i]}) = ${prod}`);
      }
    }
    suma += prod * cy[j];
    sumaContent.push(`${prod} * ${cy[j]} = ${suma}`);
  }

  return {
    suma,
    content,
    sumaContent,
  };
}

export function intlag(coordx, coordy, xint) {
  const cx = coordx.split(" ");
  const cy = coordy.split(" ");

  const { suma, content, sumaContent } = lagrange(cx, cy, xint);

  return { suma, content, sumaContent };
}
