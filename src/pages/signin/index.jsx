import { Card, Container } from "react-bootstrap";
import { useState } from "react";
import SAlert from "../../components/Alert";
import { useNavigate } from "react-router";
import SForm from "./form";
import { useDispatch } from "react-redux";
import { postData } from "../../utils/fetch";
import { userLogin } from "../../redux/auth/actions";

export default function SigninPage() {
  const dispatch = useDispatch();
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
      const res = await postData("/cms/auth/signin", form);
      dispatch(userLogin(res.data.data.token, res.data.data.role));
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
