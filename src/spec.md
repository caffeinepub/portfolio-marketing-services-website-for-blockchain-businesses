# Specification

## Summary
**Goal:** Undo an incorrect image swap by restoring the original Hero background while updating only the “AVAIL — The Nexus Effect” Selected Signals card to use the user-provided image.

**Planned changes:**
- Restore the Hero section background asset content so it matches the original (and is not the AVAIL image), without changing the existing src path referenced in `frontend/src/components/sections/HeroSection.tsx`.
- Add the user-provided AVAIL image to `frontend/public/assets/` (or a subfolder) and reference it via an absolute public path (`/assets/...`).
- Update only the “AVAIL — The Nexus Effect” card in `frontend/src/components/sections/SelectedSignalsSection.tsx` to display the user-provided image instead of the current X embed/preview, leaving all other cards unchanged.

**User-visible outcome:** The Hero background looks as it did before the mistaken swap, and the “AVAIL — The Nexus Effect” card shows the provided static image (not an X preview), with no other sections affected.
