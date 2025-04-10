import { Container, Spinner, Table } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router";
import SButton from "../../components/Button";
import SBreadcrumb from "../../components/Breadcrumb";
import SNavbar from "../../components/Navbar";
import axios from "axios";
import { config } from "../../configs";
import { useEffect, useState } from "react";

export default function CategoriesPage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCategoriesAPI = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getCategoriesAPI();
  }, []);

  if (!token) return <Navigate to="/signin" replace={true} />;

  return (
    <>
      <SNavbar />
      <Container className="mt-3">
        <SBreadcrumb textSecond={"Categories"} />
        <SButton action={() => navigate("/categories/create")}>Tambah</SButton>
        <Table className="mt-3" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={3} className="text-center">
                  <Spinner animation="grow" variant="white" />
                </td>
              </tr>
            ) : (
              data.map((data, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{data.name}</td>
                  <td>Action</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
