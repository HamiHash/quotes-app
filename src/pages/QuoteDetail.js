import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

function QuateDetail() {
  const params = useParams();

  return (
    <>
      <h1>Quate Detail page</h1>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuateDetail;
