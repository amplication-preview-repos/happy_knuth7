import { FormulaResultWhereInput } from "./FormulaResultWhereInput";
import { FormulaResultOrderByInput } from "./FormulaResultOrderByInput";

export type FormulaResultFindManyArgs = {
  where?: FormulaResultWhereInput;
  orderBy?: Array<FormulaResultOrderByInput>;
  skip?: number;
  take?: number;
};
