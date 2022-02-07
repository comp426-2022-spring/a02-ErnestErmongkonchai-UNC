import { coinFlip, coinFlips } from "./modules/coin.mjs";

const args = process.argv.slice(2);

if(args[0] == null) {
    console.log(coinFlips(1));
} else {
    console.log(coinFlips(args[0]));
}
