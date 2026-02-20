# Design Brief: Cabalgatas Salento Tour Redesign

## 1. Executive Summary
**Goal:** Transform the current website into a premium, trustworthy, and visually immersive digital experience for high-end tourists visiting Salento.
**Core Identity:** Authentic Colombian heritage, ethical animal treatment, and exclusive access to the Valle de Cocora.
**Current Issues:** The existing site relies on generic layouts and potentially distracting animations. The redesign will prioritize clarity, elegance, and storytelling.

## 2. Visual Hierarchy & Layout Structure

### **A. Homepage Layout (The Journey)**
The layout should feel like a narrative journey, mirroring the tour itself.

1.  **Hero Section (Above the Fold):**
    *   **Visual:** Full-screen, high-resolution slow-motion video background (or high-quality hero image) of a rider in the Valle de Cocora at golden hour. No generic stock photos.
    *   **Overlay:** Subtle dark gradient for text readability.
    *   **Headline:** Elegant serif font: *"Discover the Soul of Cocora on Horseback."*
    *   **Subheadline:** *"Exclusive guided tours through Colombia's majestic palm sanctuary."*
    *   **Primary CTA:** "Reserve Your Experience" (Gold/Accent color button).
    *   **Social Proof:** Small, classy badge: *"Rated #1 on TripAdvisor | Certified Ethical Tourism"* in the corner.

2.  **Introduction (The Story):**
    *   Two-column layout: Text on left, artistic photo collage on right (soft edges).
    *   Focus on the family legacy (since 2015) and ethical treatment of horses.
    *   *Micro-interaction:* Subtle parallax effect on the images as user scrolls.

3.  **The Experience (Tours):**
    *   **Card Design:** Instead of standard boxes, use wide, horizontal "experience cards."
    *   **Image:** 50% width on the left.
    *   **Details:** 50% width on the right with elegant typography, price, duration, and a "View Details" text link.
    *   **Highlight:** The "Café y Cabalgata" option should have a subtle "Most Popular" ribbon or border highlight.

4.  **Our Horses (The Stars):**
    *   A clean carousel or grid.
    *   High-quality portraits of the horses (Capitán, Luna, etc.) with their names and personality traits (e.g., "Gentle & Calm").
    *   *Trust signal:* Mention veterinary care and rest schedules here.

5.  **Testimonials:**
    *   Minimalist slider.
    *   Large quote text in serif font.
    *   Author name and country of origin.

6.  **Footer:**
    *   Clean, dark background.
    *   Quick links, WhatsApp contact, Location map (styled to match color palette), Instagram feed integration.

## 3. Color Palette
Reflecting the "Coffee Cultural Landscape" of Colombia—earthy, rich, and sophisticated.

*   **Primary (Deep Green):** `#1A3C34` (Represents the lush Cocora Valley vegetation and wax palms).
*   **Secondary (Coffee Earth):** `#4B3621` (Represents the soil and coffee tradition).
*   **Accent (Andean Gold):** `#D4AF37` (Used sparingly for buttons and key highlights—evokes premium status/sunlight).
*   **Background (Mist White):** `#F8F5F2` (An off-white, warm cream color for better readability than stark white).
*   **Text (Charcoal):** `#2C2C2C` (Softer than pure black for main text).

## 4. Typography
Mixing tradition with modern clarity.

*   **Headlines (Serif):** *Playfair Display* or *Cinzel*.
    *   *Usage:* Hero titles, section headers. Gives a classic, editorial feel.
*   **Body Text (Sans Serif):** *Lato* or *Montserrat*.
    *   *Usage:* Paragraphs, UI elements, buttons. Highly readable and modern.
    *   *Weight:* Light (300) for body, Bold (700) for CTAs.

## 5. User Flow & functionality

### **Booking Process (The "Conversion Funnel")**
Currently, the site redirects to WhatsApp. We will professionalize this while keeping the personal touch.

1.  **"Book Now" Button:** Opens a modal or slides down a dedicated section.
2.  **Step 1: Select Tour:** Visual selection of the 3 tour types.
3.  **Step 2: Date & Group Size:** Simple calendar picker and number input.
4.  **Step 3: Intent Action:**
    *   *Option A (Direct):* "Proceed to WhatsApp" (Pre-fills a message: *"Hello, I would like to book the [Tour Name] for [Date] for [X] people."*)
    *   *Option B (Inquiry):* A brief form sending an email for larger groups/VIP requests.
    *   *Recommendation:* Keep WhatsApp as primary for speed, but style the button as a premium "Concierge Service" rather than just a chat link.

### **Mobile Responsiveness**
*   **Navigation:** Hamburger menu with a smooth slide-out animation.
*   **Touch Targets:** Buttons must be at least 44px height for easy tapping.
*   **Images:** All images optimized for fast loading on 4G networks (common in travel).
*   **Sticky CTA:** A floating "Book via WhatsApp" button on the bottom right (unobtrusive but always accessible).

## 6. Key Improvements & "Gimmick Removal"
*   **Remove:** Any auto-playing audio, flashing banners, or "bouncing" entrance animations.
*   **Replace:** Generic "slide-in" animations with subtle *fade-ins* triggered by scroll position.
*   **Fix:** Ensure the "Price" is clearly visible but not the *only* focus—sell the value first.
*   **Add:** A "What to Bring" icon set (raincoat, boots, sunscreen) to manage customer expectations professionally.

## 7. Wireframe Description (Home)
`[Header]` Logo (Left) | Tours | Horses | Blog | **[Book Now]** (Right)
`[Hero]` **Image: `photo_003.jpg` (Panoramic Green Valley)** with dark overlay. Headline center. Gold CTA button.
`[Intro]` Text Left | **Image: `photo_001.jpg` (Saddled Horses/Landscape)** with soft edges on Right.
`[Tours]`
   - [ **Image: `photo_005.jpg` (Between Ears View)** ] [ Title: Express | $$ | Description | Link ]
   - [ **Image: `photo_006.jpg` (Coffee/View)**       ] [ Title: Coffee | $$$ | Description | Link ] (Highlighted)
   - [ **Image: `photo_004.jpg` (River Crossing)**    ] [ Title: VIP    | $$$$ | Description | Link ]
`[Horses]` 4-Column Grid of horse portraits (Use specific horse photos if available, otherwise placeholders).
`[Reviews]` Centered Quote. Background: Blurred version of `photo_002.jpg` or utilize `photo_002.jpg` (Group) as a visual anchor.
`[Footer]` Dark Green background. Links. Copyright.

## 8. Asset Utilization Strategy
We will use the provided real customer photos to build authenticity. Stock photos are strictly prohibited where real assets exist.

### **Hero Section**
*   **File:** `photo_003.jpg` (Panoramic Landscape)
*   **Why:** It sets the scene immediately—vast, green, and majestic. It sells the *destination* first.
*   **Treatment:** Full-width, slight dark gradient overlay (30-40% opacity) to ensure white text pops.

### **Tour Cards (The "Product" Shots)**
*   **Express Tour:** `photo_005.jpg` (POV between ears). Instantly communicates "You will be here, riding this."
*   **Coffee Tour:** `photo_006.jpg` (Coffee cup + View). Perfect visual summary: Coffee + Landscape.
*   **VIP/Adventure Tour:** `photo_004.jpg` (River Crossing). Shows the "adventure" aspect—water, varied terrain, action.

### **Social Proof / About Us**
*   **File:** `photo_002.jpg` (Happy Group)
*   **Why:** Shows real people having fun. Validates safety and enjoyment.
*   **Placement:** Next to the "About Us" text or as the background for the Testimonials section (with a heavy blur/overlay).

### **Intro / Atmosphere**
*   **File:** `photo_001.jpg` (Saddled Horses)
*   **Why:** Shows readiness and the quality of the tack/gear. Good for the "Our Story" or "Safety" section.

### **Copywriting & Visual Pairing Notes (For Content Expert)**
*   **With `photo_003.jpg` (Hero):** Use words like "Majestic," "Endless Green," "Breath of the Andes."
*   **With `photo_006.jpg` (Coffee):** Focus on sensory details—"Aroma," "Warmth," "Tradition."
*   **With `photo_004.jpg` (River):** Use active verbs—"Forge," "Discover," "Traverse."
