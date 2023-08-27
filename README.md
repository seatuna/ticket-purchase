# Ticket Purchasing

This is a React + Typescript app that uses Material UI components for styling. Initial scaffolding was done using Vite.

Note: This is actually still WIP. If you're reading this, it means I submitted the assessment early since I can't return to it after I've closed out the tab!

# Installing and running the project

You can use `yarn` or `npm` to install and run this project.

## yarn

This project was created on yarn v3.6.0.

```
yarn # Install dependencies
yarn dev # This will run the dev environment
```

Once the project is running, you can navigate to `localhost:5173` to view the project.

## npm

This project was created on yarn v3.6.0, but will run using npm as well. The version I currently have is v9.6.5.

```
npm install # Install dependencies
npm run dev # This will run the dev environment
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
