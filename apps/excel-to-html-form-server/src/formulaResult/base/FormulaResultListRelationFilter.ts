/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FormulaResultWhereInput } from "./FormulaResultWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FormulaResultListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FormulaResultWhereInput,
  })
  @ValidateNested()
  @Type(() => FormulaResultWhereInput)
  @IsOptional()
  @Field(() => FormulaResultWhereInput, {
    nullable: true,
  })
  every?: FormulaResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => FormulaResultWhereInput,
  })
  @ValidateNested()
  @Type(() => FormulaResultWhereInput)
  @IsOptional()
  @Field(() => FormulaResultWhereInput, {
    nullable: true,
  })
  some?: FormulaResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => FormulaResultWhereInput,
  })
  @ValidateNested()
  @Type(() => FormulaResultWhereInput)
  @IsOptional()
  @Field(() => FormulaResultWhereInput, {
    nullable: true,
  })
  none?: FormulaResultWhereInput;
}
export { FormulaResultListRelationFilter as FormulaResultListRelationFilter };