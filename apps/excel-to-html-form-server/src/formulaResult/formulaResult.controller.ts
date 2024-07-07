import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FormulaResultService } from "./formulaResult.service";
import { FormulaResultControllerBase } from "./base/formulaResult.controller.base";

@swagger.ApiTags("formulaResults")
@common.Controller("formulaResults")
export class FormulaResultController extends FormulaResultControllerBase {
  constructor(protected readonly service: FormulaResultService) {
    super(service);
  }
}
