import { useState, SyntheticEvent, ChangeEvent } from "react";
import { InputAdornment, TextField } from "@mui/material";
import CardIcon from "./assets/card.svg";
import {
  containsOnlyNumbers,
  hasErrors,
  isFutureDate,
  isValidDate,
} from "./helpers";

interface PaymentFormProps {
  onSuccess: (message: string) => void;
}

interface PaymentFormValues {
  name: string;
  cardNumber: string;
  securityCode: string;
  expDate: string;
}

const defaultValues: PaymentFormValues = {
  name: "",
  cardNumber: "",
  securityCode: "",
  expDate: "",
};

const mockSendPayment = () =>
  new Promise((resolve) => {
    resolve("Success");
  });

export const PaymentForm = ({ onSuccess }: PaymentFormProps) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [formErrors, setFormErrors] =
    useState<Partial<PaymentFormValues>>(defaultValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formField = e.target.name;
    const value = e.target.value;
    setFormValues((prev) => ({
      ...prev,
      [formField]: value,
    }));
  };

  const validate = () => {
    const { name, cardNumber, expDate, securityCode } = formValues;
    let errors = {};

    // Validate name
    if (name.length < 3) {
      errors = {
        ...errors,
        name: "Please enter your full name as it appears on the card",
      };
    }

    /**
     * Validate card number
     * 1. contains only numbers
     * 2. is 12 digits long
     */
    if (!containsOnlyNumbers(cardNumber)) {
      errors = {
        ...errors,
        cardNumber:
          "Please make sure your credit card number only contains numbers",
      };
    }

    if (cardNumber.length !== 12) {
      errors = {
        ...errors,
        cardNumber: "Please enter a 12 digit credit card number",
      };
    }

    /**
     * Validate security code
     * 1. contains only numbers
     * 2. is 3 digits long
     */
    if (!containsOnlyNumbers(securityCode)) {
      errors = {
        ...errors,
        securityCode:
          "Please make sure your security code only contains numbers",
      };
    }
    if (securityCode.length < 3) {
      errors = {
        ...errors,
        securityCode: "Please enter a 3 digit security code",
      };
    }

    /**
     * Validate expiration date
     * 1. is a date in the future
     * 2. is in MM/YY format
     */
    if (!isFutureDate(expDate)) {
      errors = {
        ...errors,
        expDate: "Please enter a date in the future",
      };
    }

    if (!isValidDate(expDate)) {
      errors = {
        ...errors,
        expDate: "Please enter a valid date in MM/YY format",
      };
    }

    setFormErrors(errors);
    return errors;
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const errors = validate();

    if (!hasErrors(errors)) {
      mockSendPayment().then(() => {
        onSuccess("Congrats! You have successfully booked tickets!");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} id="payment-form">
      <TextField
        error={Boolean(formErrors.name)}
        fullWidth
        helperText={formErrors.name}
        id="name-input"
        label="Name"
        margin="normal"
        name="name"
        onChange={handleChange}
        required
        type="text"
        value={formValues.name}
      />
      <TextField
        error={Boolean(formErrors.cardNumber)}
        fullWidth
        helperText={formErrors.cardNumber}
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
        margin="normal"
        name="cardNumber"
        onChange={handleChange}
        required
        value={formValues.cardNumber}
      />
      <TextField
        error={Boolean(formErrors.securityCode)}
        helperText={formErrors.securityCode}
        id="securityCode-input"
        inputProps={{ maxLength: 3 }}
        label="Security Code"
        margin="normal"
        name="securityCode"
        onChange={handleChange}
        required
        sx={{ width: "15ch" }}
        type="text"
        value={formValues.securityCode}
      />
      <TextField
        error={Boolean(formErrors.expDate)}
        helperText={formErrors.expDate}
        id="expDate-input"
        inputProps={{ maxLength: 5 }}
        label="Expiration Date"
        margin="normal"
        name="expDate"
        onChange={handleChange}
        placeholder="MM/YY"
        required
        sx={{ marginLeft: 2, width: "15ch" }}
        type="text"
        value={formValues.expDate}
      />
    </form>
  );
};
