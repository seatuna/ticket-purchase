import { useState, SyntheticEvent, ChangeEvent } from "react";
import { InputAdornment, TextField } from "@mui/material";
import CardIcon from "./assets/card.svg";

interface PaymentFormProps {
  onSubmit?: () => void;
}

const defaultValues = {
  name: "",
  cardNumber: "",
  securityCode: "",
  expDate: "",
};

export const PaymentForm = ({ onSubmit }: PaymentFormProps) => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const formField = event.target.name;
    const value = event.target.value;
    setFormValues((prev) => ({
      ...prev,
      [formField]: value,
    }));
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} id="payment-form">
      <TextField
        id="name-input"
        name="name"
        label="Name"
        type="text"
        value={formValues.name}
        fullWidth
        onChange={handleChange}
        required
      />
      <TextField
        id="card-input"
        name="cardNumber"
        label="Card Number"
        type="text"
        value={formValues.cardNumber}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={CardIcon} alt="SVG icon of a credit card" />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        required
      />
      <TextField
        id="securityCode-input"
        name="securityCode"
        label="Security Code"
        type="text"
        value={formValues.securityCode}
        onChange={handleChange}
        sx={{ width: "50%" }}
        required
      />
      <TextField
        id="expDate-input"
        name="expDate"
        placeholder="MM/YY"
        label="Expiration Date"
        type="text"
        value={formValues.expDate}
        onChange={handleChange}
        required
      />
    </form>
  );
};
