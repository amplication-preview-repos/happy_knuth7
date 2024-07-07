import { Module } from "@nestjs/common";
import { CellModuleBase } from "./base/cell.module.base";
import { CellService } from "./cell.service";
import { CellController } from "./cell.controller";
import { CellResolver } from "./cell.resolver";

@Module({
  imports: [CellModuleBase],
  controllers: [CellController],
  providers: [CellService, CellResolver],
  exports: [CellService],
})
export class CellModule {}
