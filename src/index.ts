import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

// Create an instance of MatchReader and pass in something satisfying 'DataReader' interface
const matchReader =  MatchReader.fromCsv('./resource/csv/football.csv')
matchReader.load()

// Data analysis
const summary = Summary.winsAnalysisWithHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches)