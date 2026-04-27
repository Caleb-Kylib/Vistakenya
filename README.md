# Vistakenya - Student & Youth Housing Platform 🎓🏘️

**Empowering Kenyan Students and Young Professionals with Affordable, Co-living, and Offline-Accessible Housing.**

Vistakenya is a specialized real estate platform targeting the vibrant student and youth demographic around major universities in **Ongata Rongai, Kasarani, Madaraka, and Juja**. We bridge the gap between high housing demand and limited supply by providing verified, affordable off-campus housing with flexible payment models and offline access via USSD.

![Status](https://img.shields.io/badge/Status-Hackathon_Ready-brightgreen)
![Tech Stack](https://img.shields.io/badge/Stack-MERN_%2B_USSD-blue)
![Focus](https://img.shields.io/badge/Focus-Affordability_%26_Trust-orange)

---

## 💡 The Problem
Students often struggle to find safe, verified, and affordable housing near campus. High deposits and rigid monthly rent cycles (KES 15k+) often price out young earners. Additionally, many users in rural or campus outskirts have limited data access to browse high-res listing sites.

## 🚀 Our Solution: The Vistakenya Advantage

### 1. 🎯 Hyper-Local Student Focus
*   **Target Areas**: Rongai, Kasarani, Madaraka, Juja.
*   **Affordable Ceiling**: Prices strictly capped between **KES 8,000 – 18,000**.
*   **Proximity Tracking**: "Distance to Campus" and "Nearby University" tags on every listing.

### 2. 👥 Co-Living & Shared Housing
*   **Looking for Roommate**: List shared apartments to split costs.
*   **Rent Splitting**: Automated calculation (e.g., KES 15,000 split by 2 → KES 7,500/month).
*   **Slot Management**: Track available bedspaces in shared units.

### 3. 💳 Flexible "Pay-As-You-Stay"
*   **Weekly & Monthly Options**: Choice between traditional monthly or student-friendly weekly rent.
*   **Partial Payments UI**: Interactive slider to pay custom amounts (e.g., KES 3,500) directly from the payment dashboard.
*   **SMS Reminders**: Automated nudges via Africa's Talking integration.

### 4. 📱 Offline Access (USSD & SMS)
*   **Interactive USSD Simulator**: Dial *384# on the dashboard to browse hostels and book viewings using a simulated offline interface.
*   **SMS Alerts**: Receive property details and rent receipts directly to any phone.

### 5. 🛡️ The Trust Layer (Verified Listings)
*   **Verification Status**: Every property is vetted by an admin before going live.
*   **Trust Scores**: Landlords earn scores based on responsiveness and utility reliability (WiFi, Water, Security).

---

## 📁 Project Structure

```
Vistakenya/
├── frontend/                  # React + Tailwind (Modern Dashboard & Listings)
├── backend/                   # Node.js + Express (REST API + USSD Logic)
│   ├── models/               # Mongoose Schemas (Enhanced for Student Housing)
│   ├── routes/               # API, USSD, and Payment Routes
│   └── server.js             # Main entry point
```

---

## 🛠️ Technology Stack

*   **Frontend**: React.js, Tailwind CSS, Framer Motion.
*   **Backend**: Node.js, Express.js.
*   **Database**: MongoDB Atlas (Mongoose).
*   **Integrations**: Africa's Talking (USSD/SMS Concept), JWT (Auth), Bcrypt (Security).

---

## ⚡ Quick Start

1. **Clone & Install**
   ```bash
   git clone https://github.com/Caleb-Kylib/Vistakenya.git
   npm install # in both frontend/ and backend/
   ```

2. **Configure .env**
   *   `MONGO_URI`: Your MongoDB Atlas string.
   *   `JWT_SECRET`: Random hash for auth.
   *   `AT_API_KEY`: (Optional) Africa's Talking Key.

3. **Run Dev**
   ```bash
   npm run dev
   ```

---

## 📄 License
MIT License. Created for the next generation of Kenyan scholars.
