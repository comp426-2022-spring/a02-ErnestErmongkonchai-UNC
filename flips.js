import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";

const args = process.argv.slice(2);

if(args[0] == null) {
    console.log(coinFlips(1));
} else {
    const flips = coinFlips(args[0]);
    console.log(flips);
    console.log(countFlips(flips));
}
