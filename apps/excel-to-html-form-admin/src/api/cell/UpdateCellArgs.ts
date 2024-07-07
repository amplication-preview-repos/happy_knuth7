import { CellWhereUniqueInput } from "./CellWhereUniqueInput";
import { CellUpdateInput } from "./CellUpdateInput";

export type UpdateCellArgs = {
  where: CellWhereUniqueInput;
  data: CellUpdateInput;
};
