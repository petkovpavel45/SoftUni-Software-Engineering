function fishLand (input){
    let priceSkumriaPerKG = Number(input[0]);
    let priceCacaPerKg = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safritKg = Number(input[3]);
    let MidiKg = Number(input[4]);

    let pricePalamudPerKg = priceSkumriaPerKG + (priceSkumriaPerKG * 0.60);
    let pricePalamud = pricePalamudPerKg * palamudKg;
    let priceSafridPerKg = priceCacaPerKg + (priceCacaPerKg * 0.80);
    let priceSafrid = priceSafridPerKg * safritKg;
    let priceMidi = MidiKg * 7.50;
    let fullPrice = priceMidi + priceSafrid + pricePalamud;
    console.log(fullPrice.toFixed(2));
}
fishLand(["6.90", "4.20", "1.5", "2.5", "1"])