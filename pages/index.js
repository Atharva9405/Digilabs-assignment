import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Text from "@/components/Text";
import Bell from "@/components/bell";
import Button from "@/components/button";
import { useCallback, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const sendNotification = () => {
    console.log("Sending Notification");
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("This is a notification", {
        body: "This is the body of the notification",
      });
    }
  };

  const requestNotificationPermission = useCallback(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification Permission Granted");
        }
      });
    }
  }, []);

  useEffect(() => {
    if ("Notification" in window) {
      requestNotificationPermission();
      console.log("Notification Permission Requested")
    }
  }, [requestNotificationPermission]);

  return (
    <div className="flex items-center justify-center h-full w-full mt-2 p-2">
      <div className="w-fit">
        <Navbar />
        <Text />
        <Bell />
        <Button onClick={sendNotification} />
      </div>
    </div>
  );
}
