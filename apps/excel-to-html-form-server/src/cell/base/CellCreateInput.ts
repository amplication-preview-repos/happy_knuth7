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
import { IsString, MaxLength, IsOptional, IsEnum } from "class-validator";
import { EnumCellCellType } from "./EnumCellCellType";

@InputType()
class CellCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cellValue?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumCellCellType,
  })
  @IsEnum(EnumCellCellType)
  @IsOptional()
  @Field(() => EnumCellCellType, {
    nullable: true,
  })
  cellType?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cellReference?: string | null;
}

export { CellCreateInput as CellCreateInput };
