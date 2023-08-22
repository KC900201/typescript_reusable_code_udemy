import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult.enum';
type MatchDataTuple = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  matches: MatchDataTuple[] = []

  constructor(public reader: DataReader) {}

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