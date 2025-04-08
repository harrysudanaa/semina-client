import { Alert } from "react-bootstrap";

export default function SAlert({ message, type }) {
  return <Alert variant={type}>{message}</Alert>;
}
