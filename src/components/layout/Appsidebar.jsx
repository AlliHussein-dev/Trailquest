import {
  CloudSun,
  Compass,
  Heart,
  Home,
  Map,
  Plane,
  Settings,
  User2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
} from "../ui/sidebar";

import Logo from "@/assets/trailquest-logo.svg";
import ModeToggle from "../ui/mode-toggle";
import { useSidebar } from "../ui/sidebar";
function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <Sidebar collapsible="icon">
      {!isCollapsed && (
        <SidebarHeader>
          <div>
            <img src={Logo} alt="app logo" className="mr-2 mb-3 pt-4" />
          </div>
        </SidebarHeader>
      )}

      <SidebarContent>
        {/* DISCOVER */}
        <SidebarGroup className="px-0">
          {!isCollapsed && (
            <h1 className="font-bold capitalize text-2xl mb-4 px-4 text-[#1c7c8c]">
              discover
            </h1>
          )}

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-12 cursor-pointer px-4 text-[#1c7c8c]">
                <Home />
                <span className="text-xl capitalize">overview</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="h-12 cursor-pointer px-4 text-[#1c7c8c]">
                <Compass />
                <span className="text-xl">Discover</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="h-12 cursor-pointer px-4 text-[#1c7c8c]">
                <Heart />
                <span className="text-xl">Favorites</span>
              </SidebarMenuButton>
              <SidebarMenuBadge>3</SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        {/* YOUR JOURNEY */}
        <SidebarGroup className="px-0">
          {!isCollapsed && (
            <h1 className="font-bold capitalize text-2xl mt-3 mb-4 px-4 text-[#1c7c8c]">
              your journey
            </h1>
          )}

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-12 cursor-pointer px-4 text-[#1c7c8c]">
                <Map />
                <span className="text-xl">My Trips</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton className="h-12 cursor-pointer px-4 text-[#1c7c8c]">
                <Plane />
                <span className="text-xl">Flights</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator />

        {/* PREFERENCES */}
        <SidebarGroup className="px-0">
          {!isCollapsed && (
            <h1 className="font-bold capitalize text-2xl mt-3 mb-2 px-4 text-[#1c7c8c]">
              preferences
            </h1>
          )}

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className="h-12 cursor-pointer px-4 text-[#1c7c8c]">
                <CloudSun />
                <span className="text-xl">Weather</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <ModeToggle variant="sidebar" />

            <SidebarMenuItem>
              <SidebarMenuButton className="h-12 cursor-pointer px-4 text-[#1c7c8c]">
                <Settings />
                <span className="text-xl">Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className={"px-0"}>
        <SidebarMenu className={"px-0"}>
          <SidebarMenuItem>
            <SidebarMenuButton
              className={"h-12 mb-3  cursor-pointer text-[#1c7c8c]"}
            >
              <User2 />
              <span className="text-xl capitalize">john doe</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
