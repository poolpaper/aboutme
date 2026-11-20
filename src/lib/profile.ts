import profileData from '../data/profile.json';

export interface Kennzahl {
  zahl: string;
  beschreibung: string;
}

export interface Profile {
  name: string;
  profil: string;
  lebenslauf: { label: string; datei: string };
  kontakt: { email: string; linkedin: string; github: string };
  kennzahlen: Kennzahl[];
}

export const profile: Profile = profileData;

/** Pfad zu einer Datei in public/, passend zu base (GitHub Pages). */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
