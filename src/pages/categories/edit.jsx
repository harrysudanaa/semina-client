import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/Breadcrumb";
import SAlert from "../../components/Alert";
import CategoryForm from "./form";
import { useNavigate, useParams } from "react-router";

function CategoryEdit() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [form, setForm] = useState({
    name: "",
  });

  console.log(categoryId);

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchOneCategories = async () => {
    // const res = await getData(`/cms/categories/${categoryId}`);
    // setForm({ ...form, name: res.data.data.name });
  };

  useEffect(() => {
    fetchOneCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // const res = await putData(`/cms/categories/${categoryId}`, form);

      navigate("/categories");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: error.response.data.msg,
      });
    }
  };

  return (
    <Container className="mt-3">
      <SBreadCrumb
        textSecound={"Categories"}
        urlSecound={"/categories"}
        textThird="Edit"
      />
      {alert.status && <SAlert type={alert.type} message={alert.message} />}
      <CategoryForm
        edit
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default CategoryEdit;
