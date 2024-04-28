import { Datagrid, EmailField, List, TextField } from "react-admin";

export const CommentList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);
