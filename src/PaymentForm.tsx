import { useState, SyntheticEvent, ChangeEvent } from "react";
import { InputAdornment, TextField } from "@mui/material";
import CardIcon from "./assets/card.svg";

const defaultValues = {
  name: undefined,
  cardNumber: undefined,
  securityCode: undefined,
  expDate: undefined,
};

export const PaymentForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultValues);

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
        error={Boolean(errors.name)}
        fullWidth
        helperText={errors.name}
        id="name-input"
        label="Name"
        name="name"
        onChange={handleChange}
        required
        type="text"
        value={formValues.name}
      />
      <TextField
        fullWidth
        id="card-input"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={CardIcon} alt="SVG icon of a credit card" />
            </InputAdornment>
          ),
        }}
        label="Card Number"
        name="cardNumber"
        onChange={handleChange}
        required
        type="number"
        value={formValues.cardNumber}
      />
      <TextField
        id="securityCode-input"
        inputProps={{ maxLength: 3 }}
        label="Security Code"
        name="securityCode"
        onChange={handleChange}
        required
        sx={{ width: "50%" }}
        type="text"
        value={formValues.securityCode}
      />
      <TextField
        id="expDate-input"
        InputProps={{ maxLength: 5 }}
        label="Expiration Date"
        name="expDate"
        onChange={handleChange}
        placeholder="MM/YY"
        required
        type="text"
        value={formValues.expDate}
      />
    </form>
  );
};
