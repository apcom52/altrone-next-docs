export type Person = {
  id: number;
  name: string;
  role: string;
  salary: number;
  active: boolean;
  joined: string;
};

export const PEOPLE: Person[] = [
  { id: 1, name: "Mira Okafor", role: "Designer", salary: 72000, active: true, joined: "2023-02-14" },
  { id: 2, name: "Lucas Ferreira", role: "Engineer", salary: 91000, active: true, joined: "2022-08-01" },
  { id: 3, name: "Hana Takahashi", role: "Engineer", salary: 98500, active: true, joined: "2021-11-22" },
  { id: 4, name: "Oliver Bennett", role: "Manager", salary: 105000, active: false, joined: "2020-05-09" },
  { id: 5, name: "Amara Diallo", role: "Designer", salary: 68000, active: true, joined: "2024-01-15" },
  { id: 6, name: "Sofia Rossi", role: "Analyst", salary: 64000, active: false, joined: "2023-09-03" },
  { id: 7, name: "Noah Kim", role: "Engineer", salary: 87500, active: true, joined: "2022-03-28" },
  { id: 8, name: "Elena Petrova", role: "Manager", salary: 112000, active: true, joined: "2019-10-11" },
];
