declare type Project = {
  _id: ObjectId;
  name: string;
  type: string;
  images: string[];
  description: string;
  core: {
    frontEnd: string;
    backEnd: string;
    database: string;
  };
  base: string[];
  link: {
    github: string;
    deploy: string;
    design: string;
    docs: string;
  };
  platform: string;
  features: string[];
};
