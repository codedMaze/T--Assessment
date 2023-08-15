import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Wrapper, { loaderData } from "./layout/Wrapper";
import Home from "./pages";
import Modal from "./UI/modal/Modal";
import Form from "./components/form/Form";
import Manage from "./pages/Manage";
import MachineForm from "./components/form/MachineForm";
import { fetchData } from "./store/helper";
import { machineAction } from "./store/manchine-slice";
import { useEffect } from "react";
import MachineDetails from "./pages/MachineDetails";

function App() {
  const showModal = useSelector((state) => state.ui.showModel);
  const showMachineForm = useSelector((state) => state.ui.showMachineForm);

  const dispatch = useDispatch();

  // const machineType = useSelector((state) => state.machine.machineTypes);
  // const machines = useSelector((state) => state.machine.machines);

  useEffect(() => {
    const machines = fetchData("machines") || [];
    const machineTypes = fetchData("machineTypes") || [];
    dispatch(machineAction.loadMachines(machines));
    dispatch(machineAction.loadMachineTypes(machineTypes));
    // console.log(machineType);
    // console.log(machines);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
      loader: loaderData,
      children: [
        { index: true, element: <Home /> },
        { path: ":machineId", element: <MachineDetails /> },
        { path: "manage", element: <Manage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
      {showModal && (
        <Modal>
          <Form />
        </Modal>
      )}

      {showMachineForm && (
        <Modal>
          <MachineForm />
        </Modal>
      )}
    </>
  );
}

export default App;
