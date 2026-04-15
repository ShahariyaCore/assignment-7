# Friendship Tracker App

A modern React-based application to help you organize, track, and nurture meaningful connections.  
This project includes friend details, timelines of interactions, stats dashboards, and a polished responsive UI.

---

## 🚀 Technologies

| Technology                          | Purpose                                |
|-------------------------------------|----------------------------------------|
| **React.js / Next.js**              | Build the UI and component structure   |
| **React Router DOM / App Router**   | Handle page navigation and routing     |
| **Tailwind CSS + Component Library**| Styling, responsiveness, and UI polish |
| **Recharts**                        | Data visualization and charts          |
| **Framer Motion**                   | Smooth animations and transitions      |
| **React Icons**                     | Iconography for actions and statuses   |
| **React Toastify**                  | Toast notifications for user feedback  |

---

## 📂 Project Structure
src/
├── components/       # Reusable UI components (FriendCard, FriendDetails, Navbar, Footer, NotFound, etc.)
├── pages/            # Page-level components (HomePage, Timeline, Stats)
├── layout/           # RootLayout with Navbar/Footer
├── assets/           # Images and static assets
├── index.css         # Global styles
└── main.jsx          # Entry point
public/
└── friends.json      # Sample data for friends



---

## ✨ Features

- Responsive **Navbar** and **Footer**
- **Intro** and **HeroBanner** sections for onboarding
- **FriendDetails** page with quick check-in actions
- **Timeline** with filters and animated list items
- **Stats** page with charts powered by Recharts
- Custom **404 NotFound** page with animated back button
- LocalStorage persistence for friends and timeline data

---

## 🛠️ Getting Started

1. **Clone the repository**
   git clone https://github.com/your-username/friendship-tracker.git
   
2. **Install dependencies**
   npm install

3. **Run the development server**   
    npm run dev
4.**Open in your browser:**



📌 **Commit Convention**
Use Conventional Commits for clarity:

feat: for new features

fix: for bug fixes

style: for UI/UX changes

docs: for documentation updates


**Example:**
feat: add Intro component and improve responsive Navbar/Footer
