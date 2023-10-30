import React, { useEffect, useState } from "react";
import AppointmentForm from "../../component/appointmentData/appointmentform";
import AppointmentTableData from "../../component/appointmentData/appointmentFormTable";
import { getAllApointments } from "../../api/appointment";

function AppointmentPage() {
  const [appointData, setAppointData] = useState([]);
  const handleGetAllAppointmentData = async () => {
    try {
      const { data } = await getAllApointments();
      setAppointData(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    try {
      handleGetAllAppointmentData();
    } catch (error) {}
  }, []);

  console.log(appointData, "app");
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
