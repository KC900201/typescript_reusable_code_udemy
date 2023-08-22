"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CSVFileReader_1 = require("./CSVFileReader");
const MatchResult_enum_1 = require("./MatchResult.enum");
// Create an object that satisfies DataReader interface
const csvFileReader = new CSVFileReader_1.CSVFileReader('./resource/csv/football.csv');
// Create an instance of MatchReader and pass in something satisfying 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// Data analysis
const winMatches = ['H', 'A'];
const manUnitedString = 'Man United';
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_enum_1.MatchResult.HomeWin) {
        manUnitedWins += 1;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_enum_1.MatchResult.AwayWin) {
        manUnitedWins += 1;
    }
}
console.log(`wins ${manUnitedWins}`);
