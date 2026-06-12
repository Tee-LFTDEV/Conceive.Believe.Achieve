import type { DailySet } from "../types";

export const getDailySets = async (): Promise<DailySet[]> => {
  // In a real app, this would be an API call to the backend
  // For now, we'll fetch the JSON from the public folder or similar
  // Since we're in a sandbox, I'll provide a way to load the data
  try {
    const response = await fetch('/content_calendar.json');
    const data = await response.json();
    return data.map((item: any, index: number) => ({
      ...item,
      id: String(index + 1),
    }));
  } catch (error) {
    console.error("Failed to load daily sets", error);
    return [];
  }
};
