import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/Breadcrumb";
import SAlert from "../../components/Alert";
import Form from "./form";
import { postData } from "../../utils/fetch";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNotif } from "../../redux/notif/actions";

function CategoryCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData("/cms/categories", form);
      dispatch(
        setNotif(
          true,
          "success",
          `Berhasil tambah kategori ${res.data.data.name}`
        )
      );
      navigate("/categories");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: err.data.data.msg,
      });
    }
  };

  return (
    <Container>
      <SBreadCrumb
        textSecound={"Categories"}
        urlSecound={"/categories"}
        textThird="Create"
      />
      {alert.status && <SAlert type={alert.type} message={alert.message} />}
      <Form
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default CategoryCreate;
