import * as coin from "./modules/coin.mjs"
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
args['call'];

if(args.call != "tails" && args.call != "heads") {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
} else {
    console.log(coin.flipACoin(args.call));
}