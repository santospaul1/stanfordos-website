# Stanfordos Website — Frontend v1

A Next.js + TypeScript marketing website for Stanfordos with a School Management System product showcase and frontend demo-booking form.

## 1. Install

```bash
npm install
```

## 2. Configure demo email

Create `.env.local` from `.env.example` and add your EmailJS Service ID, Template ID and Public Key.

The form uses EmailJS in the browser so no private email password/API secret is stored in the frontend.

### EmailJS template variables

Create a template that uses these variables:

- `fullName`
- `email`
- `phone`
- `organization`
- `students`
- `currentSystem`
- `date`
- `time`
- `message`
- `receiver_name`

Set the template recipient to the Stanfordos email address that should receive demo requests.

## 3. Run

```bash
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Homepage
- `/products/school-management` — Product page
- `/book-demo` — Demo booking
- `/about` — Company page
- `/contact` — Contact page

## Later backend integration

The DemoForm component is intentionally isolated. When the Stanfordos backend is ready, replace `emailjs.send(...)` with a `fetch('/api/v1/demos', ...)` request. The UI does not need to change.
