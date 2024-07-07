import { JsonValue } from "type-fest";

export type ExcelFile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  fileContent: JsonValue;
  fileName: string | null;
};
