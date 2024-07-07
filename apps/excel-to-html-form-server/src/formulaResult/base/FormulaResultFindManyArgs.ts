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
import { FormulaResultWhereInput } from "./FormulaResultWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FormulaResultOrderByInput } from "./FormulaResultOrderByInput";

@ArgsType()
class FormulaResultFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FormulaResultWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FormulaResultWhereInput, { nullable: true })
  @Type(() => FormulaResultWhereInput)
  where?: FormulaResultWhereInput;

  @ApiProperty({
    required: false,
    type: [FormulaResultOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FormulaResultOrderByInput], { nullable: true })
  @Type(() => FormulaResultOrderByInput)
  orderBy?: Array<FormulaResultOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FormulaResultFindManyArgs as FormulaResultFindManyArgs };