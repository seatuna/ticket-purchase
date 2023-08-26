import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Event } from "./mockData.ts";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: Event;
  orientation?: string;
}

export const EventCard = (props: EventCardProps) => {
  const { event } = props;
  return (
    <Card sx={{ height: "100%", maxWidth: 350 }}>
      <CardMedia sx={{ height: 150 }} image={event.img} title={event.title} />
      <CardContent sx={{ height: 120 }}>
        <Typography gutterBottom variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
          <p>${event.price.toFixed(2)}</p>
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
