import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FormulaResultWhereInput = {
  id?: StringFilter;
  formulaReference?: StringNullableFilter;
  formulaResult?: StringNullableFilter;
};
