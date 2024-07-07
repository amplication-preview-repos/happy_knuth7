import { Module } from "@nestjs/common";
import { FormulaResultModuleBase } from "./base/formulaResult.module.base";
import { FormulaResultService } from "./formulaResult.service";
import { FormulaResultController } from "./formulaResult.controller";
import { FormulaResultResolver } from "./formulaResult.resolver";

@Module({
  imports: [FormulaResultModuleBase],
  controllers: [FormulaResultController],
  providers: [FormulaResultService, FormulaResultResolver],
  exports: [FormulaResultService],
})
export class FormulaResultModule {}
