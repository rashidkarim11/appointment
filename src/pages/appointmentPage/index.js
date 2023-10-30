import React, { useEffect, useState } from "react";
import AppointmentForm from "../../component/appointmentData/appointmentform";
import AppointmentTableData from "../../component/appointmentData/appointmentFormTable";
import { getAllApointments } from "../../api/appointment";

function AppointmentPage() {
  const [appointData, setAppointData] = useState([]);

  useEffect(() => {
    getAllApointments()
      .then(({ data }) => {
        setAppointData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(appointData, "data");
  return (
    <>
      <div className="">
        <AppointmentForm />
        <AppointmentTableData appointData={appointData} />
      </div>
    </>
  );
}

export default AppointmentPage;
