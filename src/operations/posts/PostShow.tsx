import { ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";
import CommentsButton from "../../components/commentsButton";

export default function PostShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" />
        <TextField source="title" />
        <TextField source="body" />
        <CommentsButton />
      </SimpleShowLayout>
    </Show>
  );
}
