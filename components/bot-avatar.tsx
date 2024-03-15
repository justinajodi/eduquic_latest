import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

export const BotAvatar = () => {
  // const { getTheme } = useTheme();
  return (
    <Avatar className="h-14 w-14">
      <AvatarImage className="p-1" src="/eq.png" />
    </Avatar>
  );
};