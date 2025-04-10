import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function SBreadcrumb({ textSecond, textThird, urlSecond }) {
  const navigate = useNavigate();
  console.log(textSecond);
  return (
    <Breadcrumb className="my-2">
      <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
      {!textThird && <Breadcrumb.Item active>{textSecond}</Breadcrumb.Item>}
      {textThird && (
        <Breadcrumb.Item onClick={() => navigate(urlSecond)}>
          {textSecond}
        </Breadcrumb.Item>
      )}
      {textThird && <Breadcrumb.Item active>{textThird}</Breadcrumb.Item>}
    </Breadcrumb>
  );
}
