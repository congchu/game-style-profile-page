import { CategoryType, SelectionItemProps } from "../types/types";

export const sidebarRightIcons = [
  {
    background: "#de4f5f",
    icon: "github-mark-white.svg",
    link: "https://github.com/congchu",
  },
  {
    background: "#6348b1",
    icon: "notion-white.svg",
    link: "https://www.notion.so/cucus/FullStack-d5ecae2649a3484e9b236d79cd7d7fe4",
  },
  {
    background: "#4a8cda",
    icon: "velog-white.svg",
    link: "https://velog.io/@cookie004",
  },
];

export const newsList = [
  {
    key: 0,
    title: "세상을 이롭게 만드는 서비스에 관심이 많습니다",
    subTitle:
      "개발 지식을 통해 세상에 기여하고, 사회를 이롭게 만드는데 관심이 많습니다",
    tags: [{ text: "번역", color: "#d94b87" }],
  },
  {
    key: 0,
    title: "지식을 공유하며 함께 성장하는 삶을 지향합니다",
    subTitle: "여러 스터디 그룹 및 커뮤니티 소속으로 기여하고 있습니다",

    tags: [{ text: "번역", color: "#d94b87" }],
  },
  {
    key: 1,
    title: "스타트업 환경에 맞는 빠른 주기 개발에 익숙합니다",
    subTitle:
      "4년 간의 스타트업 경험으로 빠른 주기 개발과 애자일 방법론을 익혔습니다",
  },
];

// type topSelectionItemListType =

type SelectionItemListType = { [key: string]: SelectionItemProps[] };
export const topSelectionItemList: SelectionItemListType = {
  companyProject: [
    {
      key: "1",
      title: "블록체인 기반 프로토콜, Protocon",
      subTitle:
        "[회사] 소셜인프라테크\n[담당] React 기반 프론트엔드 개발\n[기간] 2023.11~\n ",
      image: "cp-protocon-image.png",
      isSmallImage: true,

      url: "http://protocon.io/en/home/",
      tags: [
        { text: "React", color: "#d94b87" },
        { text: "Typescritp", color: "#eb8052" },
        { text: "airtable", color: "rgb(112, 185, 68)" },
      ],
    },
    {
      key: "2",
      title: "이사 업체 매칭 플랫폼, 위매치",
      subTitle:
        "[회사] 마켓디자이너스\n[담당] React 기반 프론트엔드 개발\n\t\t  디자인 시스템 개발 및 관리\n[기간] 2021.10~2022.03\n",
      image: "work-md-thumbnail.jpeg",
      isSmallImage: true,
      url: "https://da24.wematch.com/",
      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "Redux", color: "#eb8052" },
        { text: "Storybook", color: "rgb(112, 185, 68)" },
      ],
    },
    {
      key: "3",
      title: "웰니스 큐레이션 서비스, Welly",
      subTitle:
        "[회사] 더라피스 \n[담당] React 기반 프론트엔드 개발\n\t\t   Django 기반 백엔드 개발 \n[기간] 19.9~22.09, 22.5~22.10",
      image: "work-welly-thumbnail.jpeg",
      isSmallImage: true,

      url: "https://www.welly.rest/",
      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "Django", color: "#4770da" },
        { text: "AWS", color: "rgb(235, 128, 82)" },
      ],
    },
  ],
  personalProject: [
    {
      key: "1",
      title: "Caffein, 수업 신청 서비스",
      subTitle: "교육 자료용 사이트",
      image: "portfoilo-thumbnail-4.png",

      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "MobX", color: "#eb8052" },
        { text: "CI/CD", color: "rgb(112, 185, 68)" },
      ],
    },
    {
      key: "2",
      title: "헬로제니, 영작 연습 사이트",
      subTitle: "개인 프로젝트",
      image: "portfoilo-thumbnail-3.png",

      tags: [
        { text: "React(TS)", color: "#d94b87" },
        { text: "Django", color: "#4770da" },
        { text: "AWS", color: "rgb(235, 128, 82)" },
      ],
    },
    {
      key: "3",
      title: "더키, 덕후들을 위한 커뮤니티",
      subTitle: "직장인 팀 프로젝트",
      image: "portfoilo-thumbnail-1.png",
      tags: [{ text: "Flutter", color: "#6647bf" }],
    },
  ],
  selfDevelopement: [
    {
      key: "1",
      title: "책 읽기 & 글쓰기 루틴 (22.10~)",
      subTitle: "매일 30분 이상 책읽고 글쓰기 루틴",
      image: "sb-thumbnail-1.jpg",

      tags: [
        { text: "자기개발", color: "#eb8052" },
        { text: "독서", color: "#d94b87" },
        { text: "생각정리", color: "rgb(112, 185, 68)" },
      ],
    },
    {
      key: "2",
      title: "노마드 북 챌린지 (23.01)",
      subTitle: "매일 'IT 잡학사진'읽고 TIL 기록",
      image: "sb-thumbnail-2.png",

      tags: [
        { text: "IT", color: "#eb8052" },
        { text: "공부", color: "#d94b87" },
      ],
    },
    {
      key: "2",
      title: "피그마 드로잉 일러스트(23.02)",
      subTitle: "피그마 드로잉 스터디하고 미션 수행",
      image: "sb-thumbnail-3.jpg",

      tags: [
        { text: "디자인", color: "#eb8052" },
        { text: "일러스트", color: "#d94b87" },
      ],
    },
  ],
  studyGroup: [
    {
      key: "1",
      title: "웹사이트 스터디 진행 (23.1~)",
      subTitle: "노마드인서울, 웹사이트 개발 스터디",
      image: "study-thumbnail-1.png",

      tags: [
        { text: "Web", color: "#eb8052" },
        { text: "No Code", color: "#d94b87" },
        { text: "HTML,CSS,JS", color: "rgb(112, 185, 68)" },
      ],
    },
    {
      key: "2",
      title: "기술, 커리어 강의 & 멘토링 (20.03~)",
      subTitle: "주니어 개발자 대상 강의 및 멘토링 ",
      image: "study-thumbnail-4.jpg",

      tags: [
        { text: "강의", color: "#4770da" },
        { text: "멘토링", color: "rgb(235, 128, 82)" },
        { text: "사회적기여", color: "#6647bf" },
      ],
    },
    {
      key: "2",
      title: "Korean Frontend Article Team",
      subTitle: "아티클 번역 & 메일링 모임(22.06~)",
      image: "study-thumbnail-2.png",

      tags: [
        { text: "Frontend", color: "#d94b87" },
        { text: "커뮤니티", color: "#4770da" },
        { text: "사회적기여", color: "#6647bf" },
      ],
    },
  ],
  hobby: [
    {
      key: "1",
      title: "공간 운영",
      subTitle: "모임 & 코워킹 스페이스 운영 (22.1~)",
      image: "hobby-thumbnail-2.JPG",

      tags: [{ text: "커뮤니티", color: "#eb8052" }],
    },
    {
      key: "2",
      title: "프리 다이빙",
      subTitle: "프리 다이버 교육 수강 (22.04~)",
      image: "hobby-thumbnail-3.png",

      tags: [{ text: "취미", color: "#d94b87" }],
    },
  ],
};

export const topSelectionCategories: CategoryType[] = [
  { key: 1, label: "Company Project", value: "companyProject" },
  { key: 2, label: "Personal Project", value: "personalProject" },
  { key: 3, label: "Teaching & Community", value: "studyGroup" },
  { key: 4, label: "Self Developement", value: "selfDevelopement" },
  { key: 5, label: "Hobby", value: "hobby" },
  // { key: 5, label: "Work Experience", value: "workExperience" },
];
