export type Cell = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  cellValue: string | null;
  cellType?: "Option1" | null;
  cellReference: string | null;
};
