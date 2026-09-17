# Tasty Bytes (working title)

> A cozy bubble-tea chaos simulator where you are the owner, the barista, the dishwasher, and the person who just realized the blender is on fire.

Inspired by **[Tasty Chef](https://store.steampowered.com/app/5019920/Tasty_Chef/)** — build a kitchen, cook drinks step by step, serve impatient customers, and somehow still smile. This repo is the **simple** version: one small shop, your two hands, and a ticking patience bar. No employees, no co-op, no “I swear I’ll place the topping station tomorrow.” Just you vs. the lunch rush.

**Stack:** React 19 + TypeScript + Vite. Pixel sprites, CSS grid map, keyboard arrows.

```bash
npm install
npm run dev
```

---

## North star (simple Tasty Chef)

**Core loop we want:**

1. Walk around a tiny restaurant layout
2. Interact with stations (prep, blender, sealer, counter…)
3. Cook a drink by following recipe steps in order
4. Serve the customer before they rage-quit
5. Earn money / tips → unlock more recipes later

**Explicitly out of scope for v1:** build mode, NPC staff, multiplayer, multiple restaurant types, the full 50-recipe catalog.

---

## What’s playable today

| Feature                              | Status |
| ------------------------------------ | ------ |
| Tile map (wall / floor maze)         | ✅     |
| Player walk + collision              | ✅     |
| Walk sprite animation                | ✅     |
| Directional button HUD (visual only) | ✅     |
| Interact / carry items               | ❌     |
| Stations & cooking                   | ❌     |
| Customers & orders                   | ❌     |
| Inventory / money UI                 | ❌     |

**Controls:** Arrow keys move. The on-screen D-pad only animates — it does not move the player.

---

## Project map (for humans & agents)

```
src/
├── App.tsx                 # Map render + mounts Player / DirectionalButtons
├── components/
│   ├── Player/             # Movement, collision, walk anim
│   ├── Sprite/             # Generic spritesheet (hold loop / click one-shot)
│   └── DirectionalButtons/ # Decorative arrow HUD
├── helpers/player.ts       # Position + spawn-on-first-free-tile
├── interfaces/             # Domain models (UNUSED by UI yet)
└── constants/              # Enums, recipes, patience, ops (UNUSED by UI yet)
```

### Runtime vs domain (important)

There are **two layers** that do not talk to each other yet:

1. **Runtime (live):** `App` + `Player` + `Sprite` — a maze walker. Map is `0` = floor, `1` = wall.
2. **Domain (stubs):** `src/interfaces/*` + `src/constants/*` — bubble-tea restaurant design (recipes, equipment, customers, orders, inventory). **Nothing in the playable path imports these yet.**

Agents: do not assume the restaurant model is wired. Prefer connecting a **thin MVP** of the domain into `App`/`Player` over expanding `BASE_RECIPES` further.

---

## Domain model cheat sheet

| Area       | Key files                                                        | Notes                                                              |
| ---------- | ---------------------------------------------------------------- | ------------------------------------------------------------------ |
| Restaurant | `interfaces/Restaurant.ts`, `RestaurantLayout.ts`                | Layout is sparse `{x,y,objectId}` — **not** the same as `BASE_MAP` |
| Recipes    | `constants/Recipe.ts` (~1500 lines), `RecipeSteps.ts`            | Too big for v1 — use 3–5 drinks only                               |
| Stations   | `constants/Equipments.ts`, `IngredientOperations.ts`             | Maps ingredient + action → allowed equipment                       |
| Orders     | `interfaces/Order.ts`, `constants/Order.ts`                      | Status pipeline exists; no UI / sim yet                            |
| Customers  | `interfaces/Customer.ts`, `constants/Customer.ts`, `Patience.ts` | Profiles + decay rates ready                                       |
| Progress   | `interfaces/Player.ts` → `PlayerProgress`                        | Money / unlocks — **not** the React `Player` component             |
| Inventory  | `interfaces/Inventory.ts`, `Ingredients.ts`                      | Stack counts; no gameplay hook                                     |

### Known model smells (fix when touching)

- Map: live `0|1` grid ≠ `RestaurantLayout` — need one source of truth (walkable + optional object).
- Naming: React `Player` vs `PlayerProgress`; enum `Ingredients` vs interface `Ingredient`; plural enums `Equipments` / `Furnitures`.
- Gaps for gameplay: no **held item** on avatar; no craft “busy until” state; orders lack **current step index**; customers lack a live decaying `patience` value.
- `(number \| null)[][]` allows `null` but map never uses it.
- `EXPANDED_MAP = BASE_MAP` is a no-op alias.
- Display names are PT-BR in constants; IDs are English — keep that split.

---

## Cleanup / improvements backlog

Track these anytime; small PR-friendly:

- [ ] Remove unused `App.module.css` `.playerImg` leftover
- [ ] Remove or use `src/assets/cat.png`
- [ ] Decide what to keep under `sprites/` (packs vs what `src/assets` actually imports)
- [ ] Share constants like `TILE_SIZE` / `FRAME_INTERVAL` (duplicated today)
- [ ] Wire DirectionalButtons to movement **or** document them as display-only forever
- [ ] Rename / clarify `PlayerProgress` vs component `Player` when domain is wired
- [ ] Trim `BASE_RECIPES` for MVP (or add a `MVP_RECIPES` export) so agents don’t load the whole catalog
- [ ] Replace magic `0` / `1` with named tile kinds once layout is unified

---

## Next steps (MVP build order)

Do these **in order**. Each step should leave the game runnable.

### 1. Unified restaurant layout

- [ ] Replace maze `0|1` with a typed layout: floor/wall + optional station/furniture id per cell
- [ ] Render stations on the map (even as colored placeholders)
- [ ] Keep collision: walls + solid furniture block walking

### 2. Interact + hands

- [ ] Facing-based interact key (e.g. `E` / `Space`)
- [ ] Player carry slot: empty | ingredient | finished drink
- [ ] Pickup from storage / prep; drop / trash

### 3. Station cooking

- [ ] Use `Equipment.duration` for timed actions
- [ ] Validate steps with recipe + `INGREDIENT_OPERATIONS`
- [ ] Wrong step = fail or reset drink (pick one rule and stick to it)

### 4. One customer + one order

- [ ] Spawn customer → create order from a tiny recipe list
- [ ] Simple ticket UI (recipe name + step progress)
- [ ] Serve at counter → money/tip; patience decay → leave / lost

### 5. Day loop (thin)

- [ ] Open shift → N customers → close → show `Service`-style summary (revenue, served, lost)
- [ ] Persist nothing yet (or localStorage money only if easy)

### Later (after MVP feels good)

- [ ] More recipes / menu unlocks via `PlayerProgress`
- [ ] Build/place furniture
- [ ] NPC helpers
- [ ] Second restaurant type

---

## Agent notes

- **Prefer wiring over content.** Connecting layout → interact → one recipe → one customer beats adding more drinks to `BASE_RECIPES`.
- **Don’t break Player movement** when changing `Sprite` (`hold` = loop while `playing`; `click` = one-shot for HUD buttons).
- **Ask mode / large refactors:** keep diffs small; one MVP checklist item per change set when possible.
- **Fun check:** if a change doesn’t make “walk → cook → serve” more real, it’s probably not MVP.

---

## Scripts

| Command           | What it does                     |
| ----------------- | -------------------------------- |
| `npm run dev`     | Local dev server                 |
| `npm run build`   | `tsc -b` + Vite production build |
| `npm run lint`    | ESLint                           |
| `npm run preview` | Preview production build         |

---

_May your tapioca never burn and your VIPs never spawn during a blender jam._
