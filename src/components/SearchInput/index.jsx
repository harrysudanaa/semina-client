import { Form } from "react-bootstrap";

// Search input component is different with TextInput to make sure component that used on input in search is still constant
export default function SearchInput({ handleChange, query, disabled }) {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        disabled={disabled}
        type="text"
        placeholder="Masukan pencarian disini"
        value={query}
        name="query"
        onChange={handleChange}
      />
    </Form.Group>
  );
}
