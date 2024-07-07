import { InputJsonValue } from "../../types";

export type ExcelFileCreateInput = {
  fileContent?: InputJsonValue;
  fileName?: string | null;
};
