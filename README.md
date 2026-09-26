# Tasty Bytes (working title)

> A cozy bubble-tea chaos simulator where you are the owner, the barista, the dishwasher, and the person who just realized the blender is on fire.

Inspired by **[Tasty Chef](https://store.steampowered.com/app/5019920/Tasty_Chef/)** — build a kitchen, cook drinks step by step, serve impatient customers, and somehow still smile. This repo is the **simple** version: one small shop, your two hands, and a ticking patience bar.

**Stack:** React 19 + TypeScript + Vite. Pixel sprites, CSS grid map, keyboard arrows.

```bash
npm install
npm run dev
```

---

## North star (simple Tasty Chef)

**Core loop:**

1. Walk around a tiny restaurant layout
2. Interact with stations (prep, blender, sealer, counter…)
3. Cook a drink by following recipe steps in order
4. Serve the customer before they rage-quit
5. Earn money / tips → unlock more recipes later

**Out of scope for v1:** build mode, NPC staff, multiplayer, multiple restaurant types, the full recipe catalog.

---

## What’s playable today

| Feature | Status |
| --- | --- |
| Tile map (walls, floor, stations) | ✅ |
| Player walk + collision | ✅ |
| Walk sprite animation | ✅ |
| Station sprites on map | ✅ |
| Space to interact with facing station | ✅ |
| Order ticket UI (`OrderPanel`) | ✅ |
| Full serve / customer patience loop | ❌ |
| Inventory / money UI | ❌ |

**Controls:** Arrow keys move. Space interacts with the tile you face.

---

## Project map

```
src/
├── App.tsx                 # Map, Player, OrderPanel, interact key
├── components/
│   ├── Equipment/          # EquipmentView (station sprites)
│   ├── GameMap/
│   ├── OrderPanel/         # Active order ticket
│   ├── Player/
│   ├── SpriteAnimation/
│   ├── Tile/
│   └── Wall/
├── helpers/                # map sanitize, walls, player spawn
├── hooks/usePreparation.ts # Order / station interaction logic
├── interfaces/             # Domain models (kept for future wiring)
└── constants/              # Tiles, equipment, recipes, layout…
```

### Runtime vs domain

1. **Runtime (live):** map, walls, player, station sprites, space interact, order panel + `usePreparation`.
2. **Domain stubs:** customers, furniture, patience, inventory, restaurant layout types — kept for the Tasty Chef MVP path; not all wired to UI yet.

---

## Domain model cheat sheet

| Area | Key files | Notes |
| --- | --- | --- |
| Layout | `constants/map.ts`, `helpers/map.ts` | Live grid + equipment footprint placement |
| Stations | `constants/equipments.ts`, `equipmentCatalog.ts` | Icons use `orientations` (horizontal / vertical / single) |
| Recipes | `constants/recipes.ts`, `recipeSteps.ts` | Large catalog — prefer a thin MVP list when serving customers |
| Orders | `interfaces/Order.ts`, `constants/orders.ts`, `OrderPanel` | Ticket UI is live; customer spawn still TODO |
| Customers | `interfaces/Customer.ts`, `customers.ts`, `patience.ts` | Profiles ready |
| Progress | `interfaces/Player.ts` → `PlayerProgress` | Not the React `Player` component |

### Naming notes

- React `Player` vs domain `PlayerProgress`
- Catalog `Equipment` vs view `EquipmentView`
- Placement uses **orientation** (not rotation): how a multi-tile station sits on the map

---

## Next steps (MVP build order)

1. Facing interact polish + carry slot (empty | ingredient | drink)
2. Timed station actions via `Equipment.duration`
3. One customer + patience + serve at counter
4. Thin day loop (open → N customers → summary)

---

## Agent notes

- Prefer wiring gameplay over adding recipe content.
- Don’t break Player movement when changing `SpriteAnimation`.
- Keep domain stubs; don’t delete them for “cleanliness.”
- Small diffs; one checklist item per change set when possible.

---

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | `tsc -b` + Vite production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |

---

_May your tapioca never burn and your VIPs never spawn during a blender jam._
