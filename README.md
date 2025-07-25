# Builders House Hackathon

![Builders House Banner](./banner.png)


## Goal

Create the digital identity for **Builders House** by *[How to Web](https://howtoweb.co/)* to showcase its story, enable event discovery, and streamline bookings, fostering a vibrant community of builders and startups.


## Tech Stack Limits

### Frontend
- [Next.js](https://nextjs.org/docs) for landing page. You can use any of the following [templates](https://vercel.com/templates?database=supabase&auth=supabase-auth&framework=next.js) to start the project

- UI has to be [shadcn/ui](https://ui.shadcn.com) and [Tailwind CSS](https://tailwindcss.com/) compatible.

- You can use any of the following UI kits for your project:
  - [21.dev](https://21st.dev) - A collection of community-driven UI components, where you can get inspired, and also share your creations.
  - [Origin UI](https://originui.com) - A collection of components, layouts and easing classes
  - [Aceternity UI](https://ui.aceternity.com) - Copy-paste components and templates used by Cursor, Cluely and Better-auth
  - [MVP Blocks](https://blocks.mvp-subha.me) - Prebuilt and animated components to ship your MVP fast
  - [Kibo UI](https://www.kibo-ui.com) - A registry of composable and accessible components
  - [Skiper UI](https://skiper-ui.com) - Beautiful components animated with @mattgperry's motion library


### Backend
- [Next.js API route handlers](https://nextjs.org/docs/app/getting-started/route-handlers-and-middleware)

- [Supabase for auth](https://supabase.com/docs/guides/auth/quickstarts/nextjs)

- [Supabase for database](https://supabase.com/docs/guides/database/overview)

- (optional) Supabase or S3 for asset storage
- (optional) [SendGrid](https://www.twilio.com/docs/sendgrid/for-developers/sending-email/quickstart-nodejs) for marketing emails

### Integrations
- Pull events from [Oveit API](https://l.oveit.com/api-documentation/events/) or Supabase

- Submit booking requests for desks and offices via [Thia.work](https://thia.work) booking API (URL/endpoints provided at the hackathon)

- (optional) Register for events via [Oveit API](https://l.oveit.com/api-documentation/attendees/) or Supabase

## Features
- User account creation (via Supabase auth) (checking [user account creation flow](#user-account-creation-flow))

- Event feed (list of events)

- ***User-only*** access for bookings and event creation requests (checking [booking flow](#user-booking-flow) and [event creation flow](#user-event-creation-flow)) 

- Forms for event registration/creation requests and booking requests

- (optional) Use Supabase email templates + SendGrid for custom marketing emails

## User flows

### User account creation flow

```mermaid
graph TD
    A[User registers via form and Supabase auth] --> B[Email verification link sent to user]
    B --> C[User clicks verification link]
    C --> D[User is redirected to login page]
    D --> X[Registration details sent to Thia]
    D --> E[User logs in]
    E --> F[User is redirected to the landing page]
    F --> G[User can now book spaces and submits event proposals]
    E --> Y[App fetches and returns space details]
```

### User booking flow

```mermaid
graph TD

    A[User views Builders House products: desks & meeting rooms] --> B[User selects a product]
    B --> C{Is user logged in?}
    C -->|No| X[Redirect to login/signup page]
    X --> Y[User logs in or signs up]
    Y --> Z[Redirect back to products]
    C -->|Yes| CC[App returns product details and availability]
    CC --> D[User starts booking request via form]
    D -->E[User selects a date]
    E --> F[User selects the time period]
    F --> G[User submits booking request]
    G --> L[User is redirected to wait for approval page]
    G --> N{Admin receives booking request details from Thia}
    N --> |Option 1: Accept| O[Admin accepts booking from Thia]
    N --> |Option 2: Reject| P[Admin rejects booking from Thia]
    O --> Q[Thia sends QR code email to user]
    P --> R[Thia sends rejection email to user]

```

### User event registration flow

```mermaid
graph TD
    A[User views event feed] --> B[User clicks on an event]
    B --> C{Is user logged in?}
    C -->|No| X[Redirect to login/signup page]
    X --> Y[User logs in or signs up]
    Y --> Z[Redirect back to event feed]
    C -->|Yes| G{Is event from Oveit?}
    G -->|Yes| H[Redirect to Oveit registration form via link]
    G -->|No| I[Navigate to registration form]
    I --> J[User fills out registration form]
    J --> K[User submits registration form]
    K --> L[User is redirected to wait for approval page]
```

### User event flow

```mermaid
graph TD
    A[User clicks Submit an event button] --> B{Is user logged in?}
    B -->|No| X[Redirect to login/signup page]
    X --> Y[User logs in or signs up]
    Y --> Z[Redirect back to event feed]
    B -->|Yes| I[Navigate to event creation form]
    I --> J[User fills out event creation form]
    J --> K[User submits event creation form]
    K --> L[User is redirected to wait for approval page]
    K --> R{Event details are sent to Airtable}
    R --> |Option 1: Accept| S[Admin accepts event and creates the event in Oveit]
    R --> |Option 2: Reject| T[Admin rejects event creation]
```

## Deliverables
- Functional prototype (deployed via Vercel/Netlify)

- GitHub repo with code

- 5-min demo video

## Rules
### Show respect, no harassment

