# Car Wash Booking System

## Overview

The Car Wash Booking System is a user-friendly web application designed to streamline the car wash booking process. It includes a public-facing website for customers to browse services and book time slots, as well as an admin dashboard for managing services, slots, and users. The system offers secure user authentication, detailed service information, and an intuitive booking process, ensuring a seamless experience for both customers and administrators.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Admin Dashboard](#admin-dashboard)
- [User Dashboard](#user-dashboard)
- [Service Slot Countdown](#service-slot-countdown)
- [Bonus Features](#bonus-features)
- [Screenshots](#screenshots)
- [GitHub Contributions](#github-contributions)
- [License](#license)
- [Contact](#contact)

## Features

### Public Pages

1. **Home Page**

   - Navigation Menu with links to Services, Booking, Login, and other sections.
   - Hero Section with branding message and visuals.
   - Call-to-Action Button redirecting to Services page.
   - Featured Services section displaying popular offerings.
   - Review Section with a star-based rating system and user feedback.
   - Footer with links to relevant pages and contact information.

2. **User Authentication Pages**

   - Sign Up Page with form validation for creating new accounts.
   - Login Page with token-based authentication and error handling.

3. **Services Page**

   - List of all car wash services with descriptions, prices, and durations.
   - Search, filter, and sort functionality for services.

4. **Service Details Page**

   - Detailed service information with available time slots.
   - Calendar for selecting dates and booking slots.
   - "Book This Service" button for booking a selected slot.

5. **Booking Page**

   - Display selected service and time slot with an attractive design.
   - User information form and payment processing via AAMARPAY.

6. **Error Pages**
   - Custom 404 page with navigation options.

### Admin Pages

1. **Admin Dashboard**
   - Overview of recent bookings, user management, slot management, and service management.
   - Service Management: Add, update, and delete services with modals and confirmation pop-ups.
   - Slot Management: Create and manage slots, toggle slot statuses.
   - User Management: View user bookings, edit user roles.

### User Pages

1. **User Dashboard**
   - Overview of bookings and account information.
   - Manage profiles and view past/upcoming bookings.

### Service Slot Countdown

- Countdown timer showing time remaining until the selected slot.
- Upcoming bookings displayed with countdowns.

### Bonus Features

- **Service Comparison Feature:** Compare services side by side.
- **Scroll to Top Button:** Quick return to the top of the page.
- **UI/UX Improvements:** Enhanced design for better user experience.

## Technologies Used

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT
- **Payment Gateway:** AAMARPAY
- **Authentication:** JWT for token-based authentication
- **State Management:** Redux, React Context API

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/car-wash-booking-system.git
   cd car-wash-booking-system
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up the environment variables (see [Environment Variables](#environment-variables)).

4. Run the application:
   ```bash
   bun run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```plaintext
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
REACT_APP_AAMARPAY_STORE_ID=your_aamarpay_store_id
REACT_APP_AAMARPAY_SIGNATURE_KEY=your_aamarpay_signature_key
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongo_db_uri
```

## Usage

1. **User Authentication:**

   - Sign up as a new user or log in with an existing account.
   - Admin login credentials are provided by default.

2. **Service Browsing and Booking:**

   - Browse services, view details, select a time slot, and book the service.
   - Pay for the booking using AAMARPAY.

3. **Admin Dashboard:**
   - Manage services, slots, and users through the admin dashboard.

## Admin Dashboard

Accessible only to users with the "ADMIN" role. Manage services, slots, and users from a centralized interface.

## User Dashboard

Provides an overview of the user's bookings, with options to manage personal information and view past/upcoming bookings.

## Service Slot Countdown

Displays a countdown timer for upcoming booked slots, helping users stay on schedule.

## Bonus Features

1. **Service Comparison:** Compare multiple services to make informed decisions.
2. **Scroll to Top Button:** Convenient navigation for long pages.
3. **UI/UX Enhancements:** Focus on creating an intuitive and visually appealing user experience.

## Screenshots

Include screenshots of your application here.

## GitHub Contributions

This project follows best practices for version control. A minimum of 15 meaningful commits are maintained, covering feature implementation, bug fixes, and UI enhancements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any inquiries, please contact:

- **Name:** Your Name
- **Email:** your.email@example.com
- **GitHub:** [yourusername](https://github.com/yourusername)

```

This `README.md` provides an overview of your project, instructions for setup, and detailed explanations of each feature. Make sure to customize it further to match your specific project setup and needs.
```
