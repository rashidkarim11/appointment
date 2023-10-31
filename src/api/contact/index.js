import { axiosClient } from "../../config/axios";

export const getAllContacts = async () => {
  try {
    const res = await axiosClient.get(`/contact/table`);

    return res.data;
  } catch (error) {
    throw error;
  }
};

export const addToContacts = async (payload) => {
  try {
    const res = await axiosClient.post(`/contact/form`, payload);

    return res.data;
  } catch (error) {
    throw new Error("Failed to create contact: " + error.message);
  }
};
