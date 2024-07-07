import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ExcelFileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ExcelFiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="fileContent" source="fileContent" />
        <TextField label="fileName" source="fileName" />
      </Datagrid>
    </List>
  );
};
