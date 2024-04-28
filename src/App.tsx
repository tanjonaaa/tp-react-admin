import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./users";
import posts from "./operations/posts";
import comments from "./operations/comments";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" {...posts} />
    <Resource name="users" list={UserList} recordRepresentation="name" />
    <Resource name="comments" {...comments} />
  </Admin>
);
