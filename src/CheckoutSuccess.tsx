import { Box, Typography } from "@mui/material";
import { Fragment } from "react";
import { Event } from "./mockData.ts";

interface CheckoutSuccessProps {
  event: Event;
  quantity: number;
  successMsg: string;
  totalCost: string;
}

export const CheckoutSuccess = ({
  event,
  quantity,
  successMsg,
  totalCost,
}: CheckoutSuccessProps) => {
  return (
    <Fragment>
      <Typography variant="h3" textAlign="center">
        🎉 {successMsg} 🎉
      </Typography>
      <Box margin={3} textAlign="center">
        <img src={event.img} height="150px" />
        <Typography variant="h5">{event.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
      </Box>
      <Box alignItems="center" display="flex" flexDirection="column">
        <Box
          sx={{
            backgroundColor: "white",
            border: "3px solid #29b6f6",
            borderRadius: "5px",
            padding: 3,
          }}
        >
          <Typography variant="h5" marginBottom={2}>
            Purchase Summary
          </Typography>
          <Typography variant="body1" textAlign="right">
            {`${quantity} tickets`}
          </Typography>
          <hr />
          <Typography variant="body1" textAlign="right">
            {`Total charged: $${totalCost}`}
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
};
