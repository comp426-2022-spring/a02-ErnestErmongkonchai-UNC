import { flipACoin, coinFlip } from "./modules/coin.mjs";

const args = process.argv.slice(2);
if(args[0] == null) {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");

} else {
    console.log(flipACoin(args[0]));
}