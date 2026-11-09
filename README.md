<div align="center">

# 🛡️ Prahari (प्रहरी)
### Advanced Tourist Safety, Heritage Navigation & Geo-Intelligence Ecosystem
**Powered by BharatCode AI (Qwen 3.8 27B)**

[![Vercel Deployment](https://img.shields.io/badge/Status-Live%20Production-success?style=for-the-badge&logo=vercel)](https://prahari-psi.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/thusharks1234-byte/Prahari.git)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20Supabase%20%7C%20BharatCode-blue?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-orange?style=for-the-badge)]()

**Live Application:** [https://prahari-psi.vercel.app/](https://prahari-psi.vercel.app/)  
**Source Code:** [https://github.com/thusharks1234-byte/Prahari.git](https://github.com/thusharks1234-byte/Prahari.git)

</div>

---

## 📖 The Story of Prahari

Tourism is a massive economic pillar, yet exploring remote terrain, dense cultural monuments, and rugged international borders introduces critical safety, compliance, and logistical challenges. Travelers often face fragmented local permits, shifting safety regulations, and unexpected emergencies. Meanwhile, local authorities and site managers struggle with blind spots in monitoring real-time visitor density, geo-fence breaches, and threat levels.

**Prahari** (meaning *"Sentinel"* or *"Guard"*) bridges this divide. It is a unified, production-ready platform combining real-time geographic tracking, cryptographically verified digital permits, and autonomous AI-driven intelligence to guarantee absolute traveler safety while empowering authorities with centralized command tools.

---

## 👥 Dual-Perspective Ecosystem

### 🌍 1. The User Perspective (The Traveler)
* **Seamless Digital Onboarding & Compliance:** Register securely and instantly receive a cryptographically verified **Blockchain Digital Pass (Inner Line Permit)** tailored to destination-specific requirements (e.g., Malaysia MDAC, Japan Visit Japan Web), ensuring smooth verification at remote checkpoints even offline.
* **Intelligent Itinerary Planner:** Generate custom, destination-aware day-by-day schedules complete with local logistics, historical context, and a **Smart Prep** gear and document checklist powered by BharatCode AI (`qwen-3.8-27b`).
* **Safe Route Planner:** Comprehensive route safety analysis calculating terrain and mode-specific hazard warnings, transit safety scores, and real-world intermediate waypoints.
* **AI Incident Sentinel:** Real-time situational awareness blending live weather data with conversational radio-host audio briefings and categorized alert feeds.
* **Proactive Safety & Geo-Fencing:** The interactive map continuously monitors position using ray-casting point-in-polygon math, issuing instant alerts if the traveler enters restricted sectors.
* **Emergency Preparedness:** Trigger the **Offline Emergency Beacon** and SOS system to broadcast precise location data to local authorities instantly with native SMS fallback.

### 🏛️ 2. The Admin Perspective (The Authority Dashboard)
* **Command Dashboard & Sector Monitoring:** Site managers get a comprehensive bird's-eye view of active tourist density, sector environmental data, and crowd flow in real-time.
* **Emergency Dispatch Command:** Manage and dispatch emergency response units with real-time ETA tracking and status updates.
* **Verified Permit Gatekeeping:** Validate cryptographic digital passes instantly with the built-in QR code scanner, eliminating paperwork bottlenecks and securing sensitive zones.
* **Interactive Geo-Zone Management:** Create, inspect, and enforce custom security perimeters (Green, Yellow, Red) directly on the command map.

---

## 🛠️ Architecture & Tech Stack

* **Frontend:** React 19, Vite, Tailwind CSS, Framer Motion, Leaflet / React-Leaflet, Lucide Icons.
* **Backend & Storage:** Supabase (Database, Auth, Row-Level Security, Realtime channels).
* **AI Engine:** BharatCode AI (`qwen-3.8-27b`) via `https://bharatcode.ai/api/model/v1/responses` for ultra-fast, intelligent generation of custom itineraries, route waypoints, and incident summaries (with optional Google Gemini fallback).
* **Cryptography:** SHA256 cryptographic verification for digital permits and offline emergency beacon signatures.

---

## 🚀 Key Features

1. **AI Itinerary Planner:** Custom day-by-day routing with dynamic travel logistics and destination-specific entry prep.
2. **Safe Route Planner:** Intelligent routing calculating safety scores based on distance, transport modes, and real-world geographical waypoints.
3. **AI Incident Sentinel:** Autonomous risk analysis and threat notification streams with audio situational briefings.
4. **Blockchain Digital Pass:** Tamper-proof, verifiable travel permits with non-blocking offline database sync.
5. **Offline Emergency Beacon:** Robust fallback SOS beacon for remote low-connectivity regions with automatic SMS URI triggers.
6. **Perimeter Geo-Fencing:** Real-time containment alerts for sensitive and restricted territorial zones.

---

## 💻 Local Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thusharks1234-byte/Prahari.git
   cd Prahari/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in `frontend/` (or use the root `.env` template):
   ```env
   # BharatCode AI Configuration
   VITE_BHARATCODE_API_KEY=bc_live_your_key_here
   BHARATCODE_API_KEY=bc_live_your_key_here

   # Supabase Configuration
   VITE_SUPABASE_URL=https://ygxrmmrelifezuxjkwux.supabase.co
   VITE_SUPABASE_ANON_KEY=sb_publishable_o1yo815JV7Z7UyUjn7AaUg_GC4qsGqJ
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📄 Submission Verification

As required by the BharatCode submission guidelines, the repository root includes:
* **`BharatCode.txt`** containing:
  - Project Name: `Prahari (प्रहरी)`
  - Live App Link: `https://prahari-psi.vercel.app/`
  - GitHub Link: `https://github.com/thusharks1234-byte/Prahari.git`
