import { createTheme, Tabs } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",

  headings: {
    fontFamily: "Cinzel, Inter, system-ui, sans-serif",
    fontWeight: "600",
  },

  components: {
    AppShell: {
      styles: () => ({
        root: {
          backgroundColor: "#050806",
          minHeight: "100dvh",
        },
        header: {
          backgroundColor: "#060A07",
          borderBottom: "1px solid #2A3A2E",
        },
        navbar: {
          backgroundColor: "#0E1410",
          borderRight: "1px solid #2A3A2E",
          borderRadius: "20px",
        },
        main: {
          background: "transparent",
        },
      }),
    },
    Tabs: {
      styles: () => ({
        tab: {
          transform: "uppercase",
          fontFamily: "Cinzel",
        },
      }),
    },
  },
});
