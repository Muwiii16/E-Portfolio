---
title: tUBC Website
summary: A responsive organization website with members, alumni, gallery, history, and an online audition form.
type: personal # TODO: change to school if this was for a class
date: 2026-03-01 # TODO: set the real date
tags: [React, Vite, JavaScript, CSS]
repo: https://github.com/Muwiii16/tUBC-website
# demo: https://...   # TODO: add the live URL if it's deployed
screenshots: []
snippets:
  - file: src/hooks/useActiveSection.js
    lang: javascript
    note: A custom React hook that watches which section is on screen with IntersectionObserver, so the navbar highlights the right tab while you scroll, not just when you click.
    code: |
      import { useEffect, useState } from "react";

      export default function useActiveSection(ids) {
        const [activeId, setActiveId] = useState(ids[0]);

        useEffect(() => {
          const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
          if (sections.length === 0) return;

          const observer = new IntersectionObserver(
            (entries) => {
              const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
              if (visible[0]) setActiveId(visible[0].target.id);
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
          );

          sections.forEach((section) => observer.observe(section));
          return () => observer.disconnect();
        }, [ids]);

        return activeId;
      }
---

## What it does

A single-page website for the organization. It has sections for home, history, achievements, members, alumni, a photo gallery, auditions and contact. Content like members and achievements lives in plain data files, so it's easy to update.

## Highlights

- Built with React + Vite
- Data-driven sections (`src/data/*.js`)
- Scroll-aware navbar and reveal animations
- Audition form for new applicants

## What I learned

- Writing custom React hooks
- Separating content (data files) from layout (components)
