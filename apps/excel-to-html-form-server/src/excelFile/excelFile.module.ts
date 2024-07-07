import { Module } from "@nestjs/common";
import { ExcelFileModuleBase } from "./base/excelFile.module.base";
import { ExcelFileService } from "./excelFile.service";
import { ExcelFileController } from "./excelFile.controller";
import { ExcelFileResolver } from "./excelFile.resolver";

@Module({
  imports: [ExcelFileModuleBase],
  controllers: [ExcelFileController],
  providers: [ExcelFileService, ExcelFileResolver],
  exports: [ExcelFileService],
})
export class ExcelFileModule {}
