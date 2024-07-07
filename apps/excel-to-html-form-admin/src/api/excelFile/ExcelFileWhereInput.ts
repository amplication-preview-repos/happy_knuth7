import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExcelFileWhereInput = {
  id?: StringFilter;
  fileContent?: JsonFilter;
  fileName?: StringNullableFilter;
};
