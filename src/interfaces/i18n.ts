export interface HeaderInterface {
    links:{
        start: string;
        about: string;
        skills: string;
        projects: string
    }
    languages: {pt: string, en: string}
}

export interface HomeSectionInterface {
    title: string;
    myName: string;
    whatIm: string;
    description: string;
    cv: string;
    typedjs: string[];
}

export interface AboutSectionInterface {
    title: {
      about: string;
      me: string;
    };
    subTitle: string;
    description: {
      content: string;
      showMore: string;
    };
}

export interface SkillsSectionInterface {
    title: [string, string];
    filter: {all: string; filterBy: string;};
}

export interface PortfolioSectionInterface {
    title: {last: string; projects: string;};
}

export interface DictionaryInterface {
    header: HeaderInterface;
    home: HomeSectionInterface;
    about: AboutSectionInterface;
    skills: SkillsSectionInterface;
    portfolio: PortfolioSectionInterface;
}