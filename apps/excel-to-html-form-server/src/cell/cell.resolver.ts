import * as graphql from "@nestjs/graphql";
import { CellResolverBase } from "./base/cell.resolver.base";
import { Cell } from "./base/Cell";
import { CellService } from "./cell.service";

@graphql.Resolver(() => Cell)
export class CellResolver extends CellResolverBase {
  constructor(protected readonly service: CellService) {
    super(service);
  }
}
