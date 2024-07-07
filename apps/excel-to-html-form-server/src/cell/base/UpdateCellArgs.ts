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
import { CellWhereUniqueInput } from "./CellWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CellUpdateInput } from "./CellUpdateInput";

@ArgsType()
class UpdateCellArgs {
  @ApiProperty({
    required: true,
    type: () => CellWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CellWhereUniqueInput)
  @Field(() => CellWhereUniqueInput, { nullable: false })
  where!: CellWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CellUpdateInput,
  })
  @ValidateNested()
  @Type(() => CellUpdateInput)
  @Field(() => CellUpdateInput, { nullable: false })
  data!: CellUpdateInput;
}

export { UpdateCellArgs as UpdateCellArgs };