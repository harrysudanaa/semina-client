import SButton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { Form } from "react-bootstrap";

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <TextInputWithLabel
        label="Email address"
        type="email"
        placeholder="Enter email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <TextInputWithLabel
        label="Password"
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <SButton
        variant="primary"
        action={handleSubmit}
        loading={isLoading}
        disabled={isLoading}
      >
        Submit
      </SButton>
    </Form>
  );
}
