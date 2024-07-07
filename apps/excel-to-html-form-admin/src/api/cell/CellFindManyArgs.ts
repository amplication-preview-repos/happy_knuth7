import { CellWhereInput } from "./CellWhereInput";
import { CellOrderByInput } from "./CellOrderByInput";

export type CellFindManyArgs = {
  where?: CellWhereInput;
  orderBy?: Array<CellOrderByInput>;
  skip?: number;
  take?: number;
};
