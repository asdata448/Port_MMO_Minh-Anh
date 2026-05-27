export interface PortfolioData {
  personal: PersonalInfo;
  education: Education[];
  skills: Skills;
  experience: WorkExperience[];
  projects: Project[];
  certifications?: Certification[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  dob: string;
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
  gpa: string;
  activities?: string[];
}

export interface Skills {
  technical: SkillItem[];
  soft: SkillItem[];
  languages: SkillItem[];
  tools?: SkillItem[];
}

export interface SkillItem {
  name: string;
  level?: number;
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements?: string[];
}

export interface Project {
  title: string;
  role: string;
  period: string;
  organization: string;
  description: string;
  link?: string;
  tags?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}
