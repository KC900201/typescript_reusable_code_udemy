import { MatchReader } from './MatchReader'

const reader = new MatchReader('./resource/csv/football.csv')

reader.read()

console.table(reader.data[0])

// Data analysis
const winMatches = ['H', 'A']
const manUnitedString = 'Man United'
let manUnitedWins = 0