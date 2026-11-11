---
# HOW TO ADD A PROJECT
# 1. Copy this file and rename it, e.g. my-cool-app.md (the name becomes the URL: /projects/my-cool-app/)
# 2. Put screenshots in public/projects/my-cool-app/ and reference them as /projects/my-cool-app/1.png
# 3. Fill in the fields below. Lines starting with # are comments.
# Files starting with "_" (like this one) are NOT shown on the site.

title: My Cool App
summary: One sentence that says what it does and why it's interesting.
type: personal # school | personal
course: CS 101 – Intro to Programming # optional, mostly for school projects
date: 2026-01-15
tags: [Java, Swing, MySQL]
repo: https://github.com/Muwiii16/my-cool-app # optional
demo: https://my-cool-app.vercel.app # optional
cover: /projects/my-cool-app/cover.png # optional; a placeholder is shown if missing
featured: false # true = shown first
screenshots:
  - src: /projects/my-cool-app/1.png
    caption: The main screen
snippets:
  - file: src/Main.java
    lang: java # java, javascript, jsx, python, php, html, css, c, sql, ...
    note: Explain WHY this code is interesting — a decision you made, a problem it solves.
    code: |
      public class Main {
          public static void main(String[] args) {
              System.out.println("Hello!");
          }
      }
---

## What it does

Write a short overview here. Normal Markdown works: **bold**, lists, links, `code`.

## What I learned

- Something technical you learned
- Something you'd do differently next time
