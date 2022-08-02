function matchPhoneNum(str) {
    let pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
    let result = [];
    let matches = pattern.exec(str);

    while (matches !== null) {
        result.push(matches[0]);
        matches = pattern.exec(str);
    }
    console.log(result.join(", "));
}
    


matchPhoneNum(
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
);
