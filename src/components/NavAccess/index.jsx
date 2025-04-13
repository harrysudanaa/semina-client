import { Nav } from "react-bootstrap";

export default function NavAccess({ role, roles, action, children }) {
  let isHas = roles.indexOf(role);
  return <>{isHas >= 0 && <Nav.Link onClick={action}>{children}</Nav.Link>}</>;
}
