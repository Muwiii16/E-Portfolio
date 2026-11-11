---
title: Tower of Engkanto
summary: A tower-defense game inspired by Philippine mythology, built in Java Swing for our OOP final defense.
type: school
course: Object-Oriented Programming
date: 2025-05-01 # TODO: set the real date
tags: [Java, Swing, OOP, MySQL, Game Dev]
repo: https://github.com/Muwiii16/tower_defense
# TODO: add screenshots in public/projects/tower-of-engkanto/ and list them here
screenshots: []
snippets:
  - file: TowerOfEngkanto/src/game/GameEntity.java
    lang: java
    note: Every enemy and tower extends this abstract class. Shared things like position, HP, sprite animation and health bars live here once, so subclasses like Kapre or Tikbalang only define their own behavior.
    code: |
      public abstract class GameEntity {

          private double x;
          private double y;
          private int hp;
          private int maxHp;
          private boolean alive;
          private BufferedImage[] frames;
          private int currentFrame;
          private int frameTimer;
          private int frameDelay;

          public abstract Projectile update();

          public abstract void draw(Graphics2D g2d);

          protected void updateAnimation() {
              if (frames == null || frames.length == 0)
                  return;
              frameTimer++;
              if (frameTimer >= frameDelay) {
                  frameTimer = 0;
                  currentFrame = (currentFrame + 1) % frames.length;
              }
          }

          protected void drawSprite(Graphics2D g2d, int width, int height) {
              if (frames == null || frames.length == 0)
                  return;
              BufferedImage frame = frames[currentFrame];
              if (frame != null) {
                  g2d.drawImage(frame, (int) x - width / 2, (int) y - height / 2, width, height, null);
              }
          }
      }
---

## What it does

Creatures from Philippine folklore (the Kapre, Manananggal and Tikbalang) march along the path, and the player places defenders like the *Bantay*, *Lantaka* and *Mandirigma* to stop them. It has a login screen, stage select, and a codex that describes each creature.

## Highlights

- Built entirely with Java Swing and `Graphics2D`, with no game engine
- Clean class hierarchy: `GameEntity` → enemies, towers and projectiles
- Frame-based sprite animation and health bars
- Player accounts saved through a `DatabaseManager`

## What I learned

- Applying inheritance, abstraction and polymorphism in a real project
- Writing a game loop and handling animation timing by hand
- Splitting a codebase into packages (`app`, `game`, `database`)
