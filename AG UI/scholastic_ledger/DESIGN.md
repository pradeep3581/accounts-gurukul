# Design System Document: The Academic Atelier

## 1. Overview & Creative North Star

**Creative North Star: The Scholarly Editorial**
To elevate "Accounts Gurukul" from a standard coaching center to a prestigious institution, this design system rejects the "template" aesthetic of online education. We are moving away from rigid grids and boxy layouts toward a **High-End Editorial** experience. 

The goal is to evoke the feeling of a premium financial journal or a modern university archive. We achieve this through:
*   **Intentional Asymmetry:** Breaking the expected horizontal alignment to guide the eye toward key CTAs.
*   **Tonal Depth:** Replacing harsh borders with soft, layered surfaces that suggest a sophisticated physical environment.
*   **Typography as Architecture:** Using extreme scale shifts between massive display headers and functional body text to build an immediate sense of authority and trust.

---

## 2. Colors & Surface Logic

This system utilizes a sophisticated palette derived from deep oceanic blues and vibrant botanical greens to balance "Stability" (Commerce) with "Growth" (Education).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or tonal transitions.
*   Use `surface` (#faf8ff) for the main page background.
*   Use `surface-container-low` (#f4f3fa) for secondary sections (e.g., "Why Join Us").
*   Use `surface-container-highest` (#e3e1e9) for subtle emphasis on interactive elements.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. To create depth without clutter:
*   **Layer 1 (The Base):** `surface`
*   **Layer 2 (The Section):** `surface-container-low`
*   **Layer 3 (The Card):** `surface-container-lowest` (#ffffff) sitting on top of Layer 2. This creates a natural "lift" that feels premium and clean.

### The "Glass & Gradient" Rule
To avoid a flat, "budget" look, apply a subtle linear gradient to the `primary-container` (#1E3A8A) for hero sections, transitioning 10% toward `primary` (#00236F) at a 135-degree angle. Floating elements (like a sticky WhatsApp CTA) should use Glassmorphism: `surface-container-lowest` at 80% opacity with a `backdrop-blur-xl` (20px).

---

## 3. Typography

The typography strategy pairs the structural elegance of **Manrope** for headers with the high-utility legibility of **Inter** for data-heavy commerce content.

*   **Display Scales (Manrope):** Use `display-lg` (3.5rem) for hero headlines. Character spacing should be set to -0.02em to create a "tight," editorial feel.
*   **Headline Scales (Manrope):** `headline-md` (1.75rem) should be used for course titles. Use a heavier weight to convey "Expertise."
*   **Body & Labels (Inter):** `body-lg` (1rem) is the standard for course descriptions. For commerce "fine print" or metadata, use `label-md` in `on-surface-variant` (#444651) to maintain hierarchy without visual noise.

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** rather than traditional drop shadows.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-high` background creates an intentional focus point without needing a shadow.
*   **Ambient Shadows:** If a floating effect is required (e.g., a "Enroll Now" modal), use an ambient shadow: `0px 20px 40px rgba(0, 35, 111, 0.06)`. Note the use of a tinted blue shadow rather than grey to maintain the brand’s "soul."
*   **The Ghost Border:** If accessibility requires a container boundary, use the `outline-variant` (#c5c5d3) at **15% opacity**. High-contrast, 100% opaque borders are strictly forbidden.

---

## 5. Components

### 5.1. Buttons (The Action Center)
*   **Primary CTA (Call/Enroll):** Use `primary-container` (#1E3A8A) with `on-primary` text. Apply a `xl` (0.75rem) corner radius.
*   **WhatsApp Secondary:** Use `secondary` (#006E2F) with a subtle inner glow. The label should be `title-sm` (Inter) for maximum clarity.
*   **The Floating Action:** The "Instant Inquiry" button should be a pill shape (`full` radius) using Glassmorphism to feel integrated with the content it floats over.

### 5.2. Course Cards
*   **Layout:** No borders. Use `surface-container-lowest` on a `surface-container-low` background.
*   **Spacing:** Use "Breathing Room" (32px internal padding). 
*   **Header:** Pair a `title-lg` course name with a `label-sm` tag (e.g., "Class 12th" or "CA Foundation") in a `secondary-fixed` (#6BFF8F) chip.

### 5.3. Lists & Data
*   **Rule:** Forbid divider lines. Use vertical white space (32px or 48px) to separate list items.
*   **Leading Elements:** Use `primary-fixed` (#DCE1FF) soft circles behind icons to denote bullet points, ensuring a scholarly, organized appearance.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. For example, a headline might be indented further than the body text to create a modern, editorial rhythm.
*   **Do** use `on-surface-variant` (#444651) for secondary text to ensure the UI feels "soft" and approachable, not harsh.
*   **Do** leverage the `xl` (0.75rem) corner radius for cards to make the commerce coaching feel modern and "student-friendly."

### Don't:
*   **Don't** use pure black (#000000) for text. Always use `on-background` (#1A1B21).
*   **Don't** use standard 1px grey dividers between course modules; use a background color shift to `surface-container` (#EEEDF4) instead.
*   **Don't** cram content. If a section feels full, add 24px of additional white space. Premium brands "waste" space intentionally.