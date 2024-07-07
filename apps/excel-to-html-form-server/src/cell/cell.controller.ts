import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CellService } from "./cell.service";
import { CellControllerBase } from "./base/cell.controller.base";

@swagger.ApiTags("cells")
@common.Controller("cells")
export class CellController extends CellControllerBase {
  constructor(protected readonly service: CellService) {
    super(service);
  }
}
