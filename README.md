# AITU Music Club Website

This project is a dynamic and user-friendly website developed for the AITU Music Club. It serves as a hub for club information, highlights members and events, and facilitates user engagement with features like rehearsal bookings, audition applications, and newsletter subscriptions. Designed with accessibility and user preferences in mind, the site enhances the online presence of AITU's vibrant music community.

---

## Key Features

### Pages

- **About Page**: Introduces visitors to the mission and history of the AITU Music Club.
- **Members Page**: Showcases club staff and members, with sections for notable achievements.
- **Events Page**: Lists upcoming and past events with filters for easy navigation.

### Functionalities

- **Booking System**: Enables club members to book rehearsal spaces, with real-time availability checks and booking confirmations.
- **Casting/Audition Application**: Provides a multi-step application form for new members, complete with client-side validation and a progress tracker.
- **Newsletter Subscription**: Allows users to subscribe to club updates via an interactive pop-up form.
- **User Authentication**: Allows returning members to log in and access exclusive booking and application features (optional extension).

### User Preference Management

- **Event Filtering**: Users can filter events by type (all, upcoming, past) on the Events page. The selected filter is saved in localStorage, preserving it across sessions for convenience.
- **Form Validation**: Client-side validation for immediate feedback on required fields, ensuring data integrity.
- **Multi-Step Form**: The audition form is broken into steps, enabling users to proceed at their own pace. Each step includes progress indicators to improve navigation.
- **Responsive Design**: The layout is optimized for all device types, adjusting elements to ensure accessibility on mobile, tablet, and desktop screens.
- **Search Functionality**: A search bar allows users to quickly locate specific information on members, events, and more.
- **Interactive Elements**: Pop-ups, animations, and modals (like the newsletter form) make the site more engaging for users.

---

## Technologies Used

- **HTML5**: For structuring the website's content.
- **CSS3**: For styling and layout adjustments.
- **JavaScript**: For interactivity and DOM manipulation.
- **Bootstrap 4.5.2**: For responsive design and layout.
- **jQuery 3.5.1**: For enhanced JavaScript functionalities and AJAX calls.
- **LocalStorage**: To save user preferences such as event filters and form progress.

---

## Installation & Setup

1. **Clone the Repository**: `git clone https://github.com/username/aitu-music-club-website.git`
2. **Navigate to the Project Directory**: `cd aitu-music-club-website`
3. **Run the Site**: Open `index.html` in a browser.

### Dependencies
This project requires Bootstrap and jQuery, which are included via CDN in the HTML files. Alternatively, these libraries can be downloaded and stored locally.

---

## Usage Instructions

- **Booking**: Club members can visit the booking page, check rehearsal room availability, and make a reservation. Bookings are confirmed instantly and displayed in the user's profile (if authentication is enabled).
- **Event Filtering**: Users can filter events by category on the Events page, with their preferences saved locally.
- **Audition Application**: Prospective members can apply for auditions using a multi-step form, with client-side validation for a seamless experience.
- **Newsletter Subscription**: Visitors can opt into club updates using the pop-up form, which appears on first visit.

---

## Future Enhancements

- **Admin Panel**: A backend system for managing bookings, member applications, and newsletter subscribers.
- **Enhanced Authentication**: User accounts for members, providing access to personal profiles and booking history.
- **Notifications**: Email notifications for successful bookings, upcoming events, and audition results.
- **Database Integration**: To store user bookings, applications, and preferences.
---

## This project was made by Yesdaulet Nazira and Amangeldykyzy Damilya from SE-2327

This project demonstrates how a modern website can support engagement and interaction within a student club community. The AITU Music Club website provides club members and potential new members with convenient access to information about the club, event schedules, rehearsal booking, and audition applications. Features like user preference management, responsive design, and interactive elements contribute to a positive user experience.

Developing and deploying this project not only strengthens the club’s online presence but also creates a foundation for future growth. With the potential for an admin panel, notifications, and database integration, this project is flexible and ready to meet the evolving needs of AITU’s growing music community.
