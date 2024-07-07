import { Cell as TCell } from "../api/cell/Cell";

export const CELL_TITLE_FIELD = "cellValue";

export const CellTitle = (record: TCell): string => {
  return record.cellValue?.toString() || String(record.id);
};
