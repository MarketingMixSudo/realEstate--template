interface Global {
    name: string;
    address: string;
    city: string;
    email: string;
    phone: string;
    logo: string;
    socials: {
      name: string;
      link: string;
    }[];
  }

  interface Home {
    meta_title: string;
    meta_description: string;
    og_image: string;
    hero_image: string;
    hero_movie: string;
    hero_poster: string;
    hero_preheading: string;
    hero_heading: string;
    hero_subheading: string;
    buttons: {
      label: string;
      variant: "outline" | "default";
      href: string;
    }[];
    blocks: {
      id:string;
      collection:string
      item:{
        id: string
      }
    }[]
  }
  
  interface BlockHero {
    
    headline: string;
    content: string;
    image: string;
    preheading: string;
    movie: string;
    poster: string;
    buttons: {
      label: string;
      variant: "outline" | "default";
      href: string;
    }[];
  }

  interface Link {
    label: string;
    variant: "outline" | "default";
    button: boolean;
    href: string;
  }
  
  interface BlockHeadingText {
    preheading?: string;
    heading?: string;
    heading_special?: string;
    content?: string;
    links?: Link[] | null; 
    className?: string;
  }

  interface BlockTextImage {
    preheading: string,
    heading: string,
    text: string,
    links: {
        label: string;
        variant: "outline" | "default";
        href: string;
        button?: boolean;
      }[],
    image: string,
    reverse?: boolean,
  }

