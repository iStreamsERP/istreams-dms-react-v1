import {
  CalendarClock,
  ClipboardListIcon,
  FileCheck2,
  FileSearch,
  FileText,
  Home,
  LayoutDashboard,
  LayoutGrid,
  LibraryBig,
  ShieldUser,
  Users,
} from "lucide-react";

export const getNavbarLinks = (isAdmin) => [
  {
    title: "Main",
    links: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/",
      },
      ...(isAdmin
        ? [
            {
              label: "Teams",
              icon: Users,
              path: "/teams",
            },
          ]
        : []),
      {
        label: "Categories",
        icon: LayoutGrid,
        path: "/category-view",
      },
    ],
  },
  {
    title: "Documents",
    links: [
      {
        label: "Document List",
        icon: FileText,
        path: "/document-list",
      },
      {
        label: "Document View",
        icon: FileSearch,
        path: "/document-view",
      },
      {
        label: "Task View",
        icon: FileCheck2,
        path: "/task-view",
      },
    ],
  },
  ...(isAdmin
    ? [
        {
          title: "Access Control",
          links: [
            {
              label: "User Administration",
              icon: ShieldUser,
              children: [
                {
                  label: "Users",
                  icon: LibraryBig,
                  path: "/users",
                },
                {
                  label: "User Role",
                  icon: LibraryBig,
                  path: "/user-role",
                },
                {
                  label: "User Access Rights",
                  icon: LibraryBig,
                  path: "/user-access-rights",
                },
                {
                  label: "Role Access Rights",
                  icon: LibraryBig,
                  path: "/role-access-rights",
                },
                {
                  label: "Category Access",
                  icon: LibraryBig,
                  path: "/category-access-rights",
                },
              ],
            },
            {
              label: "Category Master",
              icon: LibraryBig,
              path: "/category-master",
            },
          ],
        },
      ]
    : []),
];