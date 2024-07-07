import * as graphql from "@nestjs/graphql";
import { ExcelFileResolverBase } from "./base/excelFile.resolver.base";
import { ExcelFile } from "./base/ExcelFile";
import { ExcelFileService } from "./excelFile.service";

@graphql.Resolver(() => ExcelFile)
export class ExcelFileResolver extends ExcelFileResolverBase {
  constructor(protected readonly service: ExcelFileService) {
    super(service);
  }
}
