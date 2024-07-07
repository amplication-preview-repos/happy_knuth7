import { SortOrder } from "../../util/SortOrder";

export type CellOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  cellValue?: SortOrder;
  cellType?: SortOrder;
  cellReference?: SortOrder;
};
