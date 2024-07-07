import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CellWhereInput = {
  id?: StringFilter;
  cellValue?: StringNullableFilter;
  cellType?: "Option1";
  cellReference?: StringNullableFilter;
};
