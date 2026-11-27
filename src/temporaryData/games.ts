import type { Game } from "../types/models";

const games: Game[] = [
  {
    id: crypto.randomUUID(),
    title: "Elden Ring",
    platform: "PC",
    status: "Playing",
    dateAdded: new Date("2026-11-16"),
    rating: 9,
    thumbnail:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
  },
  {
    id: crypto.randomUUID(),
    title: "Hades",
    platform: "Switch",
    status: "Finished",
    dateAdded: new Date("2026-09-02"),
    rating: 10,
    note: "Platinum on PS5 next?",
    thumbnail:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
  },
  {
    id: crypto.randomUUID(),
    title: "Baldur's Gate 3",
    platform: "PC",
    status: "Planned",
    dateAdded: new Date("2026-11-20"),
    thumbnail:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
  },
  {
    id: crypto.randomUUID(),
    title: "Cyberpunk 2077",
    platform: "PS5",
    status: "Dropped",
    dateAdded: new Date("2026-06-11"),
    rating: 6,
    note: "Wrócić po patchach",
    thumbnail:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
  },
  {
    id: crypto.randomUUID(),
    title: "Hollow Knight",
    platform: "Switch",
    status: "Playing",
    dateAdded: new Date("2026-10-28"),
    thumbnail:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
  },
  {
    id: crypto.randomUUID(),
    title: "Disco Elysium: The Final Cut",
    platform: "PC",
    status: "Planned",
    dateAdded: new Date("2026-11-25"),
  },
  {
    id: crypto.randomUUID(),
    title: "Stardew Valley",
    platform: "PC",
    status: "Finished",
    dateAdded: new Date("2026-03-14"),
    rating: 8,
    thumbnail:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
  },
  {
    id: crypto.randomUUID(),
    title: "Celeste",
    platform: "Switch",
    status: "Dropped",
    dateAdded: new Date("2026-05-07"),
    thumbnail:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg",
  },
];

export default games;
