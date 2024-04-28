import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  ShowButton,
  TextField,
} from "react-admin";
import CommentsButton from "../../components/commentsButton";

export default function PostList() {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="userId" reference="users">
          <TextField source="username" />
        </ReferenceField>
        <CommentsButton />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
