---
title: CodeQuest
summary: An AI-assisted tower-defense game that teaches introductory C programming to first-year CS students.
type: school
# course: Thesis / Capstone   # TODO: add the course name and uncomment
date: 2026-06-01 # TODO: set the real date
tags: [Java, libGDX, Supabase, Game Dev, EdTech]
repo: https://github.com/Muwiii16/CodeQuest
featured: true
# TODO: add screenshots in public/projects/codequest/ and list them here
screenshots: []
snippets:
  - file: core/src/main/java/codequest/content/ChallengeProvider.java
    lang: java
    note: Gameplay only depends on this interface, not on where questions come from. Static questions came first; the AI-backed provider plugs in behind the same interface without touching gameplay code.
    code: |
      /**
       * Source of Challenges by topic and difficulty. Gameplay code depends only on
       * this interface, not on where challenges actually come from.
       */
      public interface ChallengeProvider {
          Optional<Challenge> getChallenge(CTopic topic, Difficulty difficulty);
      }
  - file: core/src/main/java/codequest/content/FallbackChallengeProvider.java
    lang: java
    note: A decorator that chains two providers. If the AI provider has nothing (or is offline), the game quietly falls back to the built-in question bank, so a lesson never breaks mid-wave.
    code: |
      public class FallbackChallengeProvider implements ChallengeProvider {

          private final ChallengeProvider primary;
          private final ChallengeProvider fallback;

          public FallbackChallengeProvider(ChallengeProvider primary, ChallengeProvider fallback) {
              this.primary = primary;
              this.fallback = fallback;
          }

          @Override
          public Optional<Challenge> getChallenge(CTopic topic, Difficulty difficulty) {
              Optional<Challenge> c = primary.getChallenge(topic, difficulty);
              return c.isPresent() ? c : fallback.getChallenge(topic, difficulty);
          }
      }
---

## What it does

CodeQuest turns learning C into a tower-defense game. Students defend their base by answering programming challenges, which are grouped by topic and difficulty. Professors can run class tests and see results, and students earn certificates as they progress.

It started as a Java Swing prototype and was later ported to **libGDX**, with **Supabase** as the online backend.

## Highlights

- Campaign mode with stages and difficulty levels
- Challenge system designed so AI-generated questions can plug in later
- Professor tools: class tests and result screens
- Leaderboards, cosmetics, and printable PDF certificates

## What I learned

- Designing around interfaces so big features (like AI) can be added without rewrites
- Porting a project between frameworks (Swing → libGDX)
- Moving from a local MySQL database to a hosted backend
