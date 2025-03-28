const config = {
  title: "Nobel Explorer",
  description: "Explore Nobel laureates and their achievements with an intuitive interface.",
  keywords: ["nobel", "laureates", "prizes", "awards"],

  creator: {
    name: "Pierre Houllière",
    url: "https://houlliere.com",
  },

  credit: {
    name: "Nobel Prize API",
    url: "https://nobelprize.org",
  },

  api: "https://api.nobelprize.org/v1",

  navigation: [
    { label: "Home", href: "" },
    { label: "Search", href: "search" },
  ],
};

export { config };
