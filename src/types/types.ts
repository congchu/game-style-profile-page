export type CategoryValueType =
  | "personalProject"
  | "companyProject"
  | "studyGroup"
  | "selfDevelopement"
  // | "workExperience"
  | "hobby";

export type CategoryType = {
  key: number;
  label: string;
  value: CategoryValueType;
};

export interface SelectionItemProps {
  key: string;
  title: string;
  subTitle: string;
  image: string;
  isSmallImage?: boolean;
  url?: string;
  tags: { text: string; color: string }[];
}
