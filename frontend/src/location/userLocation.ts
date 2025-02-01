import { getServerSession } from "next-auth";
import { LOCATION_URL } from "@/lib/apiEndPoints";

async function UserLocation({
  city,
  state,
  nationality,
}: {
  city: string;
  state: string;
  nationality: string;
}) {

  try {
    const response = await fetch("http://localhost:8000/api/details", {
      method: "POST",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
      body: JSON.stringify({
        city,
        state,
        nationality,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Signup failed");
    }
  } catch (error) {
    console.error("Error sending location data:", error);
  }
}

export default UserLocation;
