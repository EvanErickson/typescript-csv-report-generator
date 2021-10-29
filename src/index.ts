import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
);

// matchReader.matches is our array of match data tuples
summary.buildAndPrintReport(matchReader.matches);