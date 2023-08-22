import { CSVFileReader } from "./CSVFileReader"
import { dateStringToDate } from '../utils'
import { MatchResult } from '../MatchResult.enum'

type MatchDataTuple = [Date, string, string, number, number, MatchResult, string]


export class MatchReader extends CSVFileReader<MatchDataTuple> {
  mapRow(row:string[]): MatchDataTuple {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ]
  }
}