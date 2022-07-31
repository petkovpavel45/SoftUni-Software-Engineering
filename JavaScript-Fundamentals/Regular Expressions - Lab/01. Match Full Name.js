function matchFullName(str) {
  let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g;

  let match = pattern.exec(str);
  let res = [];
  while (match !== null) {
    res.push(match[0]);
    match = pattern.exec(str);
  }
  console.log(res.join(" "));
}

matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
