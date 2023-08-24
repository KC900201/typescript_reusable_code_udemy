import { MatchDataTuple } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis"
import { HtmlReport } from "./reportTargets/HtmlReport"

export interface Analyzer {
  run(matches: MatchDataTuple[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}

  // construct static method
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    )
  }

  buildAndPrintReport(matches: MatchDataTuple[]): void {
    const report = this.analyzer.run(matches)

    this.outputTarget.print(report)
  }
}