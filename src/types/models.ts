export type Status = "Planned" | "Playing" | "Finished" | "Dropped";

export type Game = {
  id: string;
  thumbnail?: string;
  title: string;
  platform: string;
  status: Status;
  dateAdded: Date;
  rating?: number;
  note?: string;
};
