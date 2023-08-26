import { useState, SyntheticEvent, ChangeEvent } from "react";
import { InputAdornment, TextField } from "@mui/material";
import CardIcon from "./assets/card.svg";
import { containsOnlyNumbers, isFutureDate, isValidDate } from "./helpers";

const defaultValues = {
  name: "",
  cardNumber: "",
  securityCode: "",
  expDate: "",
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

  const validate = () => {
    const { name, cardNumber, expDate, securityCode } = formValues;

    // Validate name
    if (name.length < 3) {
      setErrors((prev) => ({
        ...prev,
        name: "Please enter your full name as it appears on the card",
      }));
    }

    /**
     * Validate card number
     * 1. contains only numbers
     * 2. is 12 digits long
     */
    if (!containsOnlyNumbers(cardNumber)) {
      setErrors((prev) => ({
        ...prev,
        cardNumber:
          "Please make sure your credit card number only contains numbers",
      }));
    }

    if (cardNumber.length !== 12) {
      setErrors((prev) => ({
        ...prev,
        cardNumber: "Please enter a 12 digit credit card number",
      }));
    }

    /**
     * Validate security code
     * 1. contains only numbers
     * 2. is 3 digits long
     */
    if (!containsOnlyNumbers(securityCode)) {
      setErrors((prev) => ({
        ...prev,
        securityCode:
          "Please make sure your security code only contains numbers",
      }));
    }
    if (securityCode.length < 3) {
      setErrors((prev) => ({
        ...prev,
        securityCode: "Please enter a 3 digit security code",
      }));
    }

    /**
     * Validate expiration date
     * 1. is a date in the future
     * 2. is in MM/YY format
     */
    if (!isFutureDate(expDate)) {
      setErrors((prev) => ({
        ...prev,
        expDate: "Please enter a date in the future",
      }));
    }
    if (!isValidDate(expDate)) {
      setErrors((prev) => ({
        ...prev,
        expDate: "Please enter a valid date in MM/YY format",
      }));
    }

    console.log(errors);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(formValues);
    setErrors(defaultValues);
    validate();
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
        error={Boolean(errors.cardNumber)}
        fullWidth
        helperText={errors.cardNumber}
        id="card-input"
        inputProps={{ maxLength: 12 }}
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
        value={formValues.cardNumber}
      />
      <TextField
        error={Boolean(errors.securityCode)}
        helperText={errors.securityCode}
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
        error={Boolean(errors.expDate)}
        helperText={errors.expDate}
        id="expDate-input"
        inputProps={{ maxLength: 5 }}
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
