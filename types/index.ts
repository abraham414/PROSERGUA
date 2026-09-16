export interface CompanyInfo {
  legalName: string;
  brandName: string;
  tagline: string;
  foundedLabel: string;
  teamSizeLabel: string;
  mission: string;
  vision: string;
  values: CompanyValue[];
  valueProposition: ValueProposition[];
  closingStatement: string;
  contact: ContactInfo;
}

export interface CompanyValue {
  name: string;
  description: string;
}

export interface ValueProposition {
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phones: string[];
  address: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  bullets?: string[];
  image: {
    src: string;
    alt: string;
  };
}

export interface Project {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface Client {
  name: string;
  type: "government" | "brand";
  image: {
    src: string;
    alt: string;
  };
}

export interface Brand {
  name: string;
  image: {
    src: string;
    alt: string;
  };
}
