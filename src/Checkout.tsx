import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Event, events, processingFee } from "./mockData.ts";
import { PaymentForm } from "./PaymentForm.tsx";

export const Checkout = () => {
  const { eventId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const event = events.find((event: Event) => event.id === eventId);
  const [success, setSuccess] = useState<string>();

  if (!event) {
    return <h1>An Error Has Occurred</h1>;
  }

  const fees = (quantity * processingFee).toFixed(2);
  const totalCost = (Number(event.price) * quantity + Number(fees)).toFixed(2);

  return (
    <>
      <Typography variant="h3" textAlign="center">
        Checkout
      </Typography>
      <Typography variant="h3" textAlign="center">
        {success}
      </Typography>
      <Grid container spacing={4}>
        <Grid item sm={12} textAlign="center">
          <Box sx={{ margin: 3 }}>
            <img src={event.img} height="150px" />
            <Typography variant="h5">{event.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {event.description}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sm={6}
          md={7}
          sx={{
            border: "1px solid gray",
            padding: "15px",
            "& .MuiTextField-root": { m: 1, width: "30ch" },
          }}
        >
          <Typography variant="h5">Payment Details</Typography>
          <PaymentForm onSuccess={setSuccess} />
        </Grid>
        <Grid
          item
          sm={6}
          md={5}
          sx={{ border: "1px solid gray", padding: "15px" }}
        >
          <Typography variant="h5">Total</Typography>
          <Box sx={{ display: "flex", marginTop: "10px" }}>
            <Box>
              <InputLabel id="quantity-label">Quantity</InputLabel>
              <Select
                labelId="quantity-label"
                id="quantity"
                value={quantity}
                label="Quantity"
                onChange={(e) => setQuantity(Number(e.target.value))}
                sx={{ width: "120px" }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </Box>
            <Typography variant="body2" alignSelf="flex-end" padding={1}>
              x {event.price.toFixed(2)}
            </Typography>
          </Box>
          <Typography variant="body2" alignSelf="flex-end" padding={1}>
            {`+ $${fees} ($${processingFee.toFixed(
              2
            )} x ${quantity}) processing fee`}
          </Typography>
          <Box sx={{ marginTop: "15px" }}>
            <Typography variant="h2" padding={2} textAlign="right">
              ${totalCost}
            </Typography>
            <Button
              variant="contained"
              color="success"
              fullWidth
              form="payment-form"
              type="submit"
            >
              Place Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
