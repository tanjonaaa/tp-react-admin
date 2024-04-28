import { Admin, ListGuesser, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostCreate, PostEdit, PostList, PostShow } from "./posts";
import { UserList } from "./users";
import { CommentList } from "./commets";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      show={PostShow}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource name="users" list={UserList} recordRepresentation="name" />
    <Resource name="comments" list={CommentList} />
  </Admin>
);
