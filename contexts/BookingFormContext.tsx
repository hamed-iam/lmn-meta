import React from "react";
import { BookingFormData, useBookingForm } from "@/hooks";
import { bookingFormValidation } from "@/validations";

const BookingFormContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { FormProvider, useForm } = useBookingForm();

  const initialValues: BookingFormData = {
    seating: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    requests: "",
    accept: "",
  };

  const form = useForm({
    initialValues,
    validate: bookingFormValidation,
  });

  return <FormProvider form={form}>{children}</FormProvider>;
};

export default BookingFormContextProvider;
