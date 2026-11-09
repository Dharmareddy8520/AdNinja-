export type Browser = {
  name: string;
  status: "unverified" | "in-review" | "available";
  url: string | null;
};

export const product = {
  name: "AdNinja",
  tagline: "Less clutter. More control.",
  version: null as string | null,
  supportEmail: "dharmareddy0887@outlook.com" as string | null,
  publisher: null as string | null,
  developer: {
    name: "Dharmareddy Pandem",
    url: "https://www.linkedin.com/in/dharmareddypandem/",
  },
  browsers: [
    { name: "Google Chrome", status: "unverified", url: null },
    {
      name: "Microsoft Edge",
      status: "available",
      url: "https://microsoftedge.microsoft.com/addons/detail/adninja/gcmgpggcaejfonkjkfjllpcbneolmaci",
    },
    {
      name: "Mozilla Firefox",
      status: "available",
      url: "https://addons.mozilla.org/en-GB/firefox/addon/adninja/",
    },
  ] satisfies Browser[],
};
