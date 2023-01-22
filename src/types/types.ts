export type CategoryValueType =
  | "project"
  | "studyGroup"
  // | "learning"
  | "hobby"
  | "workExperience";

export type CategoryType = {
  key: number;
  label: string;
  value: CategoryValueType;
};
