import { useState, SyntheticEvent } from "react";
import TextField from "@mui/material/TextField";

const defaultValues = {
  name: "",
  cardNumber: "",
  securityCode: "",
  expDate: "",
};

export const PaymentForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name-input"
        name="name"
        label="Name"
        type="text"
        value={formValues.name}
        fullWidth
        // onChange={handleInputChange}
      />
      <TextField
        id="card-input"
        name="cardNumber"
        label="Card Number"
        type="text"
        value={formValues.cardNumber}
        fullWidth
        // onChange={handleInputChange}
      />
      <TextField
        id="securityCode-input"
        name="securityCode"
        label="Security Code"
        type="text"
        value={formValues.securityCode}
        // onChange={handleInputChange}
      />
      <TextField
        id="expDate-input"
        name="expDate"
        placeholder="MM/YY"
        label="Expiration Date"
        type="text"
        value={formValues.name}
        // onChange={handleInputChange}
      />
    </form>
  );
};
