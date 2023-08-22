"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const reader = new MatchReader_1.MatchReader('./resource/csv/football.csv');
reader.read();
console.table(reader.data[0]);
// Data analysis
const winMatches = ['H', 'A'];
const manUnitedString = 'Man United';
let manUnitedWins = 0;
