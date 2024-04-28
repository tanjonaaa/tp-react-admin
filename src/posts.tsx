import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  Show,
  SimpleShowLayout,
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Create,
  ListButton,
} from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="userId" reference="users" />
      <ListButton label="Comments" resource="comments" />
    </Datagrid>
  </List>
);

export const PostShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users" />
      <TextField source="title" />
      <TextField source="body" />
    </SimpleShowLayout>
  </Show>
);

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Create>
);
