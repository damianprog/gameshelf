export type Status = "Planned" | "Playing" | "Finished" | "Dropped";

export type Game = {
  id: number;
  title: string;
  platform: string;
  status: Status;
  dateAdded: Date;
  rating?: number;
  note?: string;
};
