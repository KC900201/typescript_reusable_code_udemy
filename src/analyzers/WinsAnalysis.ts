import { MatchDataTuple } from "../MatchData";
import { MatchResult } from "../MatchResult.enum";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {

  }

  run(matches: MatchDataTuple[]): string {
    let wins = 0

    for (let match of matches) {

      if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins +=1
      } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        wins += 1
      }
    }

    return `Team ${this.team} won ${wins} matches`
  }
}