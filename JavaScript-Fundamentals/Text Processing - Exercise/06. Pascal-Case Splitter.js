function pascalCase(text) {
    const result = text.split(/(?=[A-Z])/);
    console.log(result.join(', '));
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')