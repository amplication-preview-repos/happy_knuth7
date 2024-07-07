import { SortOrder } from "../../util/SortOrder";

export type FormulaResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  formulaReference?: SortOrder;
  formulaResult?: SortOrder;
};
