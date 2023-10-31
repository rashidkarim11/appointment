import { axiosClient } from "../../config/axios";
// fetch a list of appointments from the server
export const getAllApointments = async () => {
  try {
    const res = await axiosClient.get(`/appointment/table`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
//used for adding a new appointment to the server
export const addToAppointment = async (payload) => {
  try {
    const res = await axiosClient.post(`/appointment/form`, payload);

    return res.data;
  } catch (error) {
    throw new Error("Failed to create appointment: " + error.message);
  }
};
