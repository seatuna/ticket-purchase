import Grid from "@mui/material/Grid";
import { Event, events } from "./mockData.ts";
import { EventCard } from "./EventCard.tsx";
import { Fragment } from "react";

export const EventList = () => {
  return (
    <Fragment>
      <h1>Events Near You</h1>
      <Grid container spacing={2}>
        {events.map((event: Event) => {
          return (
            <Grid item xs={10} sm={6} md={4} key={event.id}>
              <EventCard event={event} />
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};
