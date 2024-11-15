"use server";

import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:dave.kolaja@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

let subscription = null;

export async function subscribeUser(sub) {
  try {
    subscription = JSON.parse(sub);

    return { success: true };
  } catch (e) {
    console.error(e);
  }
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
}

export async function unsubscribeUser() {
  subscription = null;
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true };
}

export async function sendNotification(message) {
  const msg = JSON.stringify({
    title: "Test Notification",
    body: message,
    icon: "/Test_128.svg",
  });

  console.log({ subscription, msg });
  if (!subscription) {
    throw new Error("No subscription available");
  }

  try {
    await webpush.sendNotification(subscription, msg);
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
}
