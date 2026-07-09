import { useState, useEffect } from "react";
import { DeveloperData } from "../types";

const FALLBACK_DATA: DeveloperData = {
  name: "Ran Dev",
  contact: {
    phone: "+62 851-2345-6789",
    whatsapp: "https://wa.me/6285123456789"
  },
  website: {
    portfolio: "https://randev.my.id"
  },
  community: {
    name: "Ran Community",
    website: "https://community.randev.my.id",
    discord: "https://discord.gg/ran"
  }
};

export function useDeveloperData() {
  const [data, setData] = useState<DeveloperData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch developer data");
        }
        return res.json();
      })
      .then((jsonData) => {
        if (active) {
          // Verify that all properties exist to avoid runtime errors
          const sanitizedData: DeveloperData = {
            name: jsonData.name || FALLBACK_DATA.name,
            contact: {
              phone: jsonData.contact?.phone || FALLBACK_DATA.contact.phone,
              whatsapp: jsonData.contact?.whatsapp || FALLBACK_DATA.contact.whatsapp,
            },
            website: {
              portfolio: jsonData.website?.portfolio || FALLBACK_DATA.website.portfolio,
            },
            community: {
              name: jsonData.community?.name || FALLBACK_DATA.community.name,
              website: jsonData.community?.website || FALLBACK_DATA.community.website,
              discord: jsonData.community?.discord || FALLBACK_DATA.community.discord,
            }
          };
          setData(sanitizedData);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn("Using fallback developer data:", err.message || err);
        if (active) {
          setData(FALLBACK_DATA);
          setError(err.message || "Failed to load");
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return { data: data || FALLBACK_DATA, loading, error };
}
