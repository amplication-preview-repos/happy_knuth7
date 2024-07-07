import { ExcelFile as TExcelFile } from "../api/excelFile/ExcelFile";

export const EXCELFILE_TITLE_FIELD = "fileName";

export const ExcelFileTitle = (record: TExcelFile): string => {
  return record.fileName?.toString() || String(record.id);
};
