import toast from "react-hot-toast";

export const notifySuccess = (message: string) =>
  toast(message, {
    style: {
      background: "#10B981",
      color: "white",
    },
  });

export const notifyError = (message: string) =>
  toast.error(message, {
    style: {
      background: "#EF4444",
      color: "white",
    },
  });

export const notifySentMessage = (message: string) =>
  toast(message, {
    style: {
      background: "#E75818",
      color: "white",
    },
  });

export const notifyRecievedMessage = (message: string) =>
  toast(message, {
    style: {
      background: "#161616",
      color: "white",
    },
  });
