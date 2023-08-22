"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const reader = new CSVFileReader_1.CSVFileReader('./resource/csv/football.csv');
reader.read();
console.table(reader.data[0]);
// Data analysis
const winMatches = ['H', 'A'];
const manUnitedString = 'Man United';
let manUnitedWins = 0;
