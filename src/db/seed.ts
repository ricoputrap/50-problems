import ProblemService from "@/server/problem/problem-service";
import { ICreateProblemParams } from "@/types/problem.types";

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const problems: ICreateProblemParams[] = [
  {
    content: "I frequently miss deadlines because my to-do list app doesn't prioritize tasks effectively",
    username: "johndoe"
  },
  {
    content: "The project management tools I use are too complex for simple tasks",
    username: "rico_rpp21"
  },
  {
    content: "There's no efficient way to track my billable hours and expenses",
    username: "rico_rpp21",
    twitter_username: "rico_rpp21"
  },
  {
    content: "The product return process for online stores is often lengthy and inconvenient",
    username: "jennie"
  },
  {
    content: "It's difficult to compare prices and features of similar products across different websites",
    username: "paijo"
  },
  {
    content: "Managing multiple email accounts is cumbersome and time-consuming",
    username: "sarah_jane"
  },
  {
    content: "Finding reliable childcare services at short notice is challenging",
    username: "parenting101",
  },
  {
    content: "The process of renewing vehicle registration is unnecessarily bureaucratic",
    username: "car_owner_23"
  },
  {
    content: "I struggle to find healthy meal options when eating out",
    username: "healthnut87"
  },
  {
    content: "The commute to work takes too long due to traffic congestion",
    username: "commuter_01",
  },
  {
    content: "I often forget important dates like birthdays and anniversaries",
    username: "forgetful_fred"
  },
  {
    content: "The process of finding a reliable plumber/electrician is frustrating and time-consuming",
    username: "homeowner_123"
  },
  {
    content: "I struggle with staying focused and productive while working from home",
    username: "remoteworker"
  },
  {
    content: "It's challenging to find parking spots in crowded urban areas",
    username: "citydriver"
  },
  {
    content: "I have difficulty finding good study materials for my online courses",
    username: "avidlearner",
  },
  {
    content: "The process of booking flights and hotels for vacations is overwhelming",
    username: "travel_enthusiast"
  },
  {
    content: "Managing personal finances and budgeting is confusing and time-consuming",
    username: "finance_guru"
  }
]

const seeding = async () => {
  console.log("Seeding DB...");

  const problemService = new ProblemService();

  console.log("Seeding problems...");
  for (let i = 0; i < problems.length; i++) {
    await problemService.create(problems[i]);
    await wait(2000);
    console.log("Seeded problem", i + 1);
  }

  console.log("Seeding done!");
}

seeding();