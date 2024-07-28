import { useSelector } from "react-redux";
import { getAllDepartment } from "../requests";

export default function Department() {
  const { user } = useSelector((state) => state.user);
  getAllDepartment(user)
    .then((res) => console.log(res))
    .catch((r) => console.log(r));
  return <div>Department</div>;
}
