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
  }
]

const seeding = async () => {
  console.log("Seeding DB...");

  for (const problem of problems) {
    // console.log("Seeded problem:", problem.content);

    await wait(1000);
  }

  console.log("Seeding done!");
}

seeding();