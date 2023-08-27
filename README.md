# Ticket Purchasing

This is a React + Typescript app that uses Material UI components for styling. Initial scaffolding was done using Vite.

# Installing and running the project

You can use `yarn` or `npm` to install and run this project.

## yarn

This project was created on yarn v3.6.0. Running `yarn` will install the dependencies. To run the app in dev mode, run `yarn dev`.

```
yarn
yarn dev
```

Once the project is running, you can navigate to `localhost:5173` to view the project.

## npm

This project was created on yarn v3.6.0, but will run using npm as well. The version I currently have is v9.6.5. Running `npm install` will install the dependencies. To run the app in dev mode, run `npm run dev`.

```
npm install
npm run dev
```

Once the project is running, you can navigate to `localhost:5173` to view the project.

# Relevant Files

Since there are a number of files generated, here is a list of files to pay attention to when reviewing the code:

- `src/App.tsx` - App entry, contains the code for routing
- `src/Checkout.tsx` - This contains the code for the Checkout page
- `src/CheckoutSuccess.tsx` - This is the view when checkout is successful
- `src/EventList.tsx` - List of events available
- `src/EventCard.tsx` - Event card displaying information about a single event
- `src/PaymentForm.tsx` - Form for credit card information entry
- `src/helpers.ts` - Helper functions to help with form validation
- `src/mockData.ts` - Mock data
