export type ContactBase = {
  first_name: string;
  last_name: string;
};

export type ContactPayload = {
  phones: { number: string }[];
} & ContactBase;

export type ContactDetail = {
  id: number;
  created_at: Date;
} & ContactPayload;
