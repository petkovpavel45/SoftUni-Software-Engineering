function echoType(params) {
    let paramAsType = typeof params;
    console.log(paramAsType);
    console.log(paramAsType === "number" || paramAsType === "string" ? params : 'Parameter is not suitable for printing');
}
echoType("Hello, JavaScript!");
echoType(18);
echoType(null);