import * as graphql from "@nestjs/graphql";
import { FormulaResultResolverBase } from "./base/formulaResult.resolver.base";
import { FormulaResult } from "./base/FormulaResult";
import { FormulaResultService } from "./formulaResult.service";

@graphql.Resolver(() => FormulaResult)
export class FormulaResultResolver extends FormulaResultResolverBase {
  constructor(protected readonly service: FormulaResultService) {
    super(service);
  }
}
