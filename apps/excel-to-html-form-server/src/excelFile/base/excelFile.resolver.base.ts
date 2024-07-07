/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ExcelFile } from "./ExcelFile";
import { ExcelFileCountArgs } from "./ExcelFileCountArgs";
import { ExcelFileFindManyArgs } from "./ExcelFileFindManyArgs";
import { ExcelFileFindUniqueArgs } from "./ExcelFileFindUniqueArgs";
import { CreateExcelFileArgs } from "./CreateExcelFileArgs";
import { UpdateExcelFileArgs } from "./UpdateExcelFileArgs";
import { DeleteExcelFileArgs } from "./DeleteExcelFileArgs";
import { UploadExcelInput } from "../UploadExcelInput";
import { ExcelFileService } from "../excelFile.service";
@graphql.Resolver(() => ExcelFile)
export class ExcelFileResolverBase {
  constructor(protected readonly service: ExcelFileService) {}

  async _excelFilesMeta(
    @graphql.Args() args: ExcelFileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ExcelFile])
  async excelFiles(
    @graphql.Args() args: ExcelFileFindManyArgs
  ): Promise<ExcelFile[]> {
    return this.service.excelFiles(args);
  }

  @graphql.Query(() => ExcelFile, { nullable: true })
  async excelFile(
    @graphql.Args() args: ExcelFileFindUniqueArgs
  ): Promise<ExcelFile | null> {
    const result = await this.service.excelFile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ExcelFile)
  async createExcelFile(
    @graphql.Args() args: CreateExcelFileArgs
  ): Promise<ExcelFile> {
    return await this.service.createExcelFile({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ExcelFile)
  async updateExcelFile(
    @graphql.Args() args: UpdateExcelFileArgs
  ): Promise<ExcelFile | null> {
    try {
      return await this.service.updateExcelFile({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ExcelFile)
  async deleteExcelFile(
    @graphql.Args() args: DeleteExcelFileArgs
  ): Promise<ExcelFile | null> {
    try {
      return await this.service.deleteExcelFile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => String)
  async ConvertExcelToHtml(
    @graphql.Args()
    args: UploadExcelInput
  ): Promise<string> {
    return this.service.ConvertExcelToHtml(args);
  }

  @graphql.Mutation(() => UploadExcelInput)
  async UploadExcelFile(
    @graphql.Args()
    args: UploadExcelInput
  ): Promise<UploadExcelInput> {
    return this.service.UploadExcelFile(args);
  }
}