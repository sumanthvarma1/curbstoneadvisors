import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "portfolio",
    path: "/portfolio",
    newTab: false,
  },

  {
    id: 5,
    title: "Strategies",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Credit",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Private Equity",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Real Assets",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Listed Equities",
        path: "/blog-sidebar",
        newTab: false,
      },
    ],
  },

  {
    id: 4,
    title: "Our Team",
    path: "/team",
    newTab: false,
  },

  {
    id: 33,
    title: "News",
    path: "/blog",
    newTab: false,
  },

  // {
  //   id: 2,
  //   title: "About Us",
  //   path: "/about",
  //   newTab: false,
  // },

  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;

// {
//   id: 4,
//   title: "Client Account Access",
//   newTab: false,
//   submenu: [
//     {
//       id: 41,
//       title: "About Page",
//       path: "/about",
//       newTab: false,
//     },
//     {
//       id: 42,
//       title: "Contact Page",
//       path: "/contact",
//       newTab: false,
//     },
//     {
//       id: 43,
//       title: "Blog Grid Page",
//       path: "/blog",
//       newTab: false,
//     },
//     {
//       id: 44,
//       title: "Blog Sidebar Page",
//       path: "/blog-sidebar",
//       newTab: false,
//     },
//     {
//       id: 45,
//       title: "Blog Details Page",
//       path: "/blog-details",
//       newTab: false,
//     },
//     {
//       id: 46,
//       title: "Sign In Page",
//       path: "/signin",
//       newTab: false,
//     },
//     {
//       id: 47,
//       title: "Sign Up Page",
//       path: "/signup",
//       newTab: false,
//     },
//     {
//       id: 48,
//       title: "Error Page",
//       path: "/error",
//       newTab: false,
//     },
//   ],
// },
