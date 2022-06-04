function cone(radius, height) {
    let volume = (1 / 3) * Math.PI * radius * radius * height;
    let baseSurfaceArea = Math.PI * radius * radius;
    let lateralSurfaceArea = Math.PI * radius * (Math.sqrt(radius * radius + height * height));
    let totalSurfaceArea = baseSurfaceArea + lateralSurfaceArea;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
cone(3, 5)