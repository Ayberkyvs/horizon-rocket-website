// types.ts

// Header veri yapısı
export interface HeaderData {
    aboutus: string;
    ourproject: string;
    ourteam: string;
    sponsors: string;
  }
  
  // About Us veri yapısı
  export interface AboutUsData {
    title: string;
    subTitle: string;
    paragraph: string;
    ourMission: {
      title: string;
      paragraph: string;
    };
    ourVision: {
      title: string;
      paragraph: string;
    };
    ourGoals: {
      title: string;
      paragraph: string;
    };
  }
  
  // Proje veri yapısı
  export interface ProjectData {
    title: string;
    description: string;
    content: {
      title: string;
      [key: string]: string;
    };
    modelLink: string;
    image: string;
  }
  
  // Takım veri yapısı
  export interface TeamMember {
    name: string;
    lastname: string;
    role: string;
    description: string;
    unit: string;
    socials: {
      linkedin: string;
      email: string;
    };
    pp: string;
  }
  
  export interface TeamData {
    title: string;
    subTitle: string;
    teamData: TeamMember[];
  }
  
  // Dil veri yapısı
  export interface LanguageData {
    header: HeaderData;
    aboutus?: AboutUsData;
    ourprojects?: {
      [key: string]: ProjectData;
    };
    ourteam?: TeamData;
  }
  