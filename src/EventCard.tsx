import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Event } from "./mockData.ts";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card sx={{ height: "100%", maxWidth: 350 }}>
      <CardMedia sx={{ height: 150 }} image={event.img} title={event.title} />
      <CardContent sx={{ height: 120 }}>
        <Typography gutterBottom variant="h6" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="right"
          padding={1}
        >
          ${event.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Link to={`/checkout/${event.id}`}>
          <Button size="small">Checkout</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
