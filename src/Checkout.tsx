import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { Event, events } from "./mockData.ts";
import { PaymentForm } from "./PaymentForm.tsx";

export const Checkout = () => {
  const { eventId } = useParams();
  const event = events.find((event: Event) => event.id === eventId);
  console.log(event);

  if (!event) {
    return <h1>An Error Has Occurred</h1>;
  }

  return (
    <>
      <Typography variant="h3">Checkout</Typography>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Box sx={{ margin: 3 }}>
            <img src={event.img} height="150px" />
            <Typography variant="h5">{event.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {event.description}
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6} md={8}>
          <Typography variant="h5">Payment Details</Typography>
          <Box component="form" sx={{ border: "1px solid gray" }}>
            <PaymentForm />
          </Box>
        </Grid>
        <Grid item sm={6} md={4}>
          <Box sx={{ border: "1px solid gray" }}>Total</Box>
        </Grid>
      </Grid>
    </>
  );
};
