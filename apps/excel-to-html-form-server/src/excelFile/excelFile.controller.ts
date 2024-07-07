import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExcelFileService } from "./excelFile.service";
import { ExcelFileControllerBase } from "./base/excelFile.controller.base";

@swagger.ApiTags("excelFiles")
@common.Controller("excelFiles")
export class ExcelFileController extends ExcelFileControllerBase {
  constructor(protected readonly service: ExcelFileService) {
    super(service);
  }
}
