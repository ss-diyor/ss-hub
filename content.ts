export type Project = {
  slug: string;
  href?: string;
};

export type Social = {
  label: string;
  href: string;
};

export const projects: Project[] = [
  {
    slug: "ielts-mock-ss",
    href: "https://ielts.sultanov.space",
  },
  {
    slug: "bustanlik-ss",
    href: "https://mock.sultanov.space",
  },
  {
    slug: "raqamli-guldasta",
  },
  {
    slug: "graduate-connect",
  },
  {
    slug: "sd-anon",
  },
];

export const socials: Social[] = [
  { label: "gh", href: "https://github.com/ss-diyor" },
  { label: "tg", href: "https://t.me/username" },
  { label: "email", href: "mailto:hello@sultanov.space" },
];
