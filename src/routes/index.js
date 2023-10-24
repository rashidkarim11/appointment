import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppointmentPage from "../pages/appointmentPage";
import ContactPage from "../pages/contactPage";

export const AppRouter = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
            <Route element={<AppointmentPage />} path="/" />
            <Route element={<ContactPage />} path="/contact" />
          </Route>
        )
      )}
    />
  );
};
