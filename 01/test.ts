import { assertEquals } from "assert";
import { resolvePath } from "utils";

const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const data = await Deno.readTextFile(resolvePath("./input.txt"));

function getCaloriesSorted(input: string) {
  return input
    .split("\n\n")
    .map((calories) => {
      return calories
        .split("\n")
        .map((s) => Number(s))
        .reduce((a, b) => a + b, 0);
    })
    .sort((a, b) => b - a);
}

Deno.test("day-01", () => {
  assertEquals(getCaloriesSorted(testInput)[0], 24000);
  assertEquals(getCaloriesSorted(data)[0], 68775);
});

function getSumOfTopThree(sortedCalories: number[]) {
  return sortedCalories[0] + sortedCalories[1] + sortedCalories[2];
}

Deno.test("day-01 part2", () => {
  const test = getCaloriesSorted(testInput);

  assertEquals(getSumOfTopThree(test), 45000);
  const realData = getCaloriesSorted(data);

  assertEquals(getSumOfTopThree(realData), 202585);
});
