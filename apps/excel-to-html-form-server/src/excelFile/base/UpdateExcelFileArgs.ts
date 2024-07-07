/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExcelFileWhereUniqueInput } from "./ExcelFileWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ExcelFileUpdateInput } from "./ExcelFileUpdateInput";

@ArgsType()
class UpdateExcelFileArgs {
  @ApiProperty({
    required: true,
    type: () => ExcelFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ExcelFileWhereUniqueInput)
  @Field(() => ExcelFileWhereUniqueInput, { nullable: false })
  where!: ExcelFileWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ExcelFileUpdateInput,
  })
  @ValidateNested()
  @Type(() => ExcelFileUpdateInput)
  @Field(() => ExcelFileUpdateInput, { nullable: false })
  data!: ExcelFileUpdateInput;
}

export { UpdateExcelFileArgs as UpdateExcelFileArgs };