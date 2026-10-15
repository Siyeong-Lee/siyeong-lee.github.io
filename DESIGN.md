# Design
## Source of truth
Active · 2026-10-15. New English academic website, GitHub Pages. No pre-existing site or assets. Evidence: public Google Scholar iGSaIU0AAAAJ and GitHub Siyeong-Lee; primary publication pages.
## Brand
Site name: A Thought. A brief personal note below the masthead and above the introduction explains its inspiration from The Odyssey, using the wording approved by the site owner.
The approved sailboat mark evokes a journey beginning with a thought. Use the Lucide Sailboat icon beside the site name and in the browser favicon.
Quiet, precise, editorial. Trust comes from linked research. Avoid fabricated biography, stock portraits, marketing claims, and invented credentials.
## Product goals
Introduce Siyeong Lee, communicate research, make papers and code easy to find. Success: readable on mobile and desktop, functional publication filters, direct source links.
## Personas and jobs
Researchers and potential collaborators scanning interests, publications, and implementations.
## Information architecture
One page: introduction, research interests, selected publications, open source. Navigation uses section anchors.
## Design principles
Content first; generous whitespace; publication metadata adjacent to titles; progressive enhancement.
## Visual language
Warm ivory #f7f6f2, ink #252a29, rust #985134, sage #e9ede6. Georgia editorial headings, system sans-serif body. 8px spacing rhythm. Hairline dividers, no heavy shadows. Abstract dotted field as decorative research motif, no invented photo.
The wordmark icon is 28px with a 1.6-unit stroke, rust color, and a 12px gap before the name. The favicon uses the same sailboat in ivory on an ink rounded square. Keep the icon decorative to assistive technology; the home link retains its descriptive accessible name. Include SVG directly without an external icon runtime, and retain the ISC notice in THIRD_PARTY_NOTICES.txt.
## Components
Masthead, hero, research rows, filter buttons, publication rows, project links, a small name-origin note, footer. CSS custom properties own tokens.
## Accessibility
WCAG AA target. Semantic headings, skip link, visible focus, native links/buttons, pressed states, live filter result count. No essential animation.
## Responsive behavior
Desktop two-column hero and research. Below 760px use one column, wrap navigation and filters; minimum 44px button targets.
## Interaction states
All publications rendered without JavaScript; filters only shown when JS is available. Filter state updates aria-pressed and live count. External links use normal navigation.
## Content voice
English, factual, first person in introduction. Distinguish preprints from proceedings. Metrics dated and linked to Scholar.
## Implementation constraints
Buildless HTML/CSS/JS; no dependencies, external fonts, analytics, or secrets. Root index.html and .nojekyll support branch-based GitHub Pages. Browser QA plus markup and local-link checks.
## Open questions
- [ ] Optional portrait and extended biography can be supplied later; not needed for launch.
