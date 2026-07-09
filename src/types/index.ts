export interface DeveloperData {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  website: {
    portfolio: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
}

export interface StaffMember {
  name: string;
  role: string;
  uuid: string; // Used for Minecraft avatar
  description: string;
}

export interface ServerStatus {
  online: boolean;
  playersOnline: number;
  playersMax: number;
  version: string;
  motd: string;
}
