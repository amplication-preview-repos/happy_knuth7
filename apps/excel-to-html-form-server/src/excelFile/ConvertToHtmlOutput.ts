import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class ConvertToHtmlOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    htmlContent!: string;
}

export { ConvertToHtmlOutput as ConvertToHtmlOutput };