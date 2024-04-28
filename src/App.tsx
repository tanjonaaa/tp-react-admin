import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { Route } from "react-router-dom";
import posts from "./operations/posts";
import CommentList from "./operations/comments/CommentList";
import CommentShow from "./operations/comments/CommentShow";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" {...posts}>
      <Route path=":postId/comments" element={<CommentList />} />
      <Route path=":postId/comments/:commentId" element={<CommentShow />} />
    </Resource>
  </Admin>
);
