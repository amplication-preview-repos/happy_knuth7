import { FormulaResult as TFormulaResult } from "../api/formulaResult/FormulaResult";

export const FORMULARESULT_TITLE_FIELD = "formulaReference";

export const FormulaResultTitle = (record: TFormulaResult): string => {
  return record.formulaReference?.toString() || String(record.id);
};
