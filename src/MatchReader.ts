import { dateStringToDate } from './utils'
import { MatchDataTuple } from './MatchData'
import { MatchResult } from './MatchResult.enum'
import { CSVFileReader } from './CSVFileReader'

interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  matches: MatchDataTuple[] = []

  constructor(public reader: DataReader) {}

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CSVFileReader(filename))
  }

  load(): void {
    this.reader.read()
    this.matches = this.reader.data.map((row: string[]): MatchDataTuple => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    })
  }
}