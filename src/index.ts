import { MatchReader } from './MatchReader'
import { CSVFileReader } from './CSVFileReader'
import { MatchResult } from './MatchResult.enum'

// Create an object that satisfies DataReader interface
const csvFileReader = new CSVFileReader('./resource/csv/football.csv')

// Create an instance of MatchReader and pass in something satisfying 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)

matchReader.load()

// Data analysis
const winMatches = ['H', 'A']
const manUnitedString = 'Man United'
let manUnitedWins = 0

for (let match of matchReader.matches) {

  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins +=1
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins += 1
  }
}

console.log(`wins ${manUnitedWins}`)