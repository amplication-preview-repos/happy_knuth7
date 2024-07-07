import { InputJsonValue } from "../../types";

export type ExcelFileUpdateInput = {
  fileContent?: InputJsonValue;
  fileName?: string | null;
};
