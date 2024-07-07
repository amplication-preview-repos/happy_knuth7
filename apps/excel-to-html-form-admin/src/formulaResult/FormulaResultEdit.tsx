import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FormulaResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="formulaReference" source="formulaReference" />
        <TextInput label="formulaResult" source="formulaResult" />
      </SimpleForm>
    </Edit>
  );
};
