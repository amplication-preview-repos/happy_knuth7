import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CellServiceBase } from "./base/cell.service.base";

@Injectable()
export class CellService extends CellServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
