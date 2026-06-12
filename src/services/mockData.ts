import type { DailySet } from "../types";

export const mockDailySets: DailySet[] = [
  {
    day: 1,
    id: "1",
    quote: {
      text: "I've failed over and over and over again in my life. And that is why I succeed.",
      author: "Michael Jordan",
      attribution: "Widely attributed / Nike 'Failure' Commercial (1997)"
    },
    mantra: "Fail forward.",
    micro_action: {
      task: "Drink 2 liters of water today.",
      category: "Hydration"
    }
  },
  {
    day: 2,
    id: "2",
    quote: {
      text: "I can accept failure. Everyone fails at something. But I can't accept not trying.",
      author: "Michael Jordan",
      attribution: "I Can't Accept Not Trying (1994)"
    },
    mantra: "Just start.",
    micro_action: {
      task: "Eat 2 pieces of fruit today.",
      category: "Fruit Intake"
    }
  },
  {
    day: 3,
    id: "3",
    quote: {
      text: "What I'm doing right now, I'm chasing perfection.",
      author: "Kobe Bryant",
      attribution: "The Mamba Mentality: How I Play (2018)"
    },
    mantra: "Chase your best.",
    micro_action: {
      task: "Say 'thank you' to your coach after practice.",
      category: "Manners"
    }
  },
  {
    day: 4,
    id: "4",
    quote: {
      text: "Talent wins games, but teamwork and intelligence wins championships.",
      author: "Michael Jordan",
      attribution: "I Can't Accept Not Trying (1994)"
    },
    mantra: "Team first.",
    micro_action: {
      task: "High-five every teammate today.",
      category: "Kindness"
    }
  },
  {
    day: 5,
    id: "5",
    quote: {
      text: "Be authentic, and let them like you or not for who you actually are.",
      author: "Kobe Bryant",
      attribution: "The Mamba Mentality: How I Play (2018)"
    },
    mantra: "Be you.",
    micro_action: {
      task: "Share one thing you're proud of with a parent.",
      category: "Personal Best"
    }
  }
];
