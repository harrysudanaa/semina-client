import { Card, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import SAlert from "../../components/Alert";
import { Navigate, useNavigate } from "react-router";
import { config } from "../../configs";
import SForm from "./form";

export default function SigninPage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${config.api_host_dev}/cms/auth/signin`,
        form
      );
      localStorage.setItem("token", res.data.data.token);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setAlert({
        status: true,
        message: error?.response?.data?.msg ?? "Internal Server Error",
        type: "danger",
      });
    }
  };

  if (token) return <Navigate to="/" replace={true} />;

  return (
    <Container md={12} className="my-5">
      <div className="m-auto" style={{ width: "50%" }}>
        {alert.status && <SAlert message={alert.message} type={alert.type} />}
      </div>
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          <Card.Title className="text-center">Form Login</Card.Title>
          <SForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}
