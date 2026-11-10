import AppSidebar from "./components/layout/Appsidebar";
import AppNavigation from "./components/layout/Appnavigation";
import { SidebarProvider } from "./components/ui/sidebar";
import { ThemeProvider } from "./components/providers/theme-provider";
function App() {
  return (
    <>
      <ThemeProvider>
        <SidebarProvider>
          <AppSidebar />
          <AppNavigation />
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
