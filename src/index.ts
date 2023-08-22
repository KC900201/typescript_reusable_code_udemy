import { CSVFileReader } from './CSVFileReader'

const reader = new CSVFileReader('./resource/csv/football.csv')

reader.read()

console.table(reader.data[0])

// Data analysis
const winMatches = ['H', 'A']
const manUnitedString = 'Man United'
let manUnitedWins = 0