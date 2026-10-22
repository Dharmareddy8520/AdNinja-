export type Browser = {
  name: string;
  status: "unverified" | "in-review" | "available";
  url: string | null;
};

export const product = {
  name: "AdNinja",
  tagline: "Less clutter. More control.",
  version: null as string | null,
  supportEmail: null as string | null,
  publisher: null as string | null,
  browsers: [
    { name: "Google Chrome", status: "unverified", url: null },
    { name: "Microsoft Edge", status: "unverified", url: null },
    { name: "Mozilla Firefox", status: "unverified", url: null },
  ] satisfies Browser[],
};
