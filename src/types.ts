export interface Project {
  slug: string;
  name: string;
  year: string;
  kind: string;
  summary: string;
  stack: string[];
  repo: string;
  demo: string | null;
  highlight: boolean;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}
