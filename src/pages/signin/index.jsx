import { Card, Container, Form } from "react-bootstrap";
import SButton from "../../components/Button";
import { useState } from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import axios from "axios";
import SAlert from "../../components/Alert";

function PageSignin() {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:9000/api/v1/cms/auth/signin",
        {
          email: form.email,
          password: form.password,
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container md={12}>
      <SAlert message={"Test"} type={"danger"} />
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Login</Card.Title>
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
            <SButton variant="primary" action={handleSubmit}>
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
