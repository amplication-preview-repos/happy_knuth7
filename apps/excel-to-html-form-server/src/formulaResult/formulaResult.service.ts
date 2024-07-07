import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FormulaResultServiceBase } from "./base/formulaResult.service.base";

@Injectable()
export class FormulaResultService extends FormulaResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
