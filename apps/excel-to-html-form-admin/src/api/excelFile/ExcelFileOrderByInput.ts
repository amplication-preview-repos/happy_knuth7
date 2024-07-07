import { SortOrder } from "../../util/SortOrder";

export type ExcelFileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  fileContent?: SortOrder;
  fileName?: SortOrder;
};
