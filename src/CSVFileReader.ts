import fs from 'fs'
import { MatchResult } from './MatchResult.enum'


export abstract class CSVFileReader<T> {
  data: T[] = []

  constructor(public fileName: string) {}

  abstract mapRow(row:string[]): T

  read(): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    }).split('\n').map((row: string): string[] => {
      return row.split(',')}).map(this.mapRow)
  }


}