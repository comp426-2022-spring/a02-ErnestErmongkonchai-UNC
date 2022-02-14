import * as coin from "./modules/coin.mjs"
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
args['number'];

const number = args.number || 1;

const flips = coin.coinFlips(number);
console.log(flips);
console.log(coin.countFlips(flips));
