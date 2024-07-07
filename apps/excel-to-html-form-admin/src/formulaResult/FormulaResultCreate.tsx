import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FormulaResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="formulaReference" source="formulaReference" />
        <TextInput label="formulaResult" source="formulaResult" />
      </SimpleForm>
    </Create>
  );
};
