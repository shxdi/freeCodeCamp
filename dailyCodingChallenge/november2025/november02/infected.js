/*
On November 2nd, 1988, the first major internet worm was released, infecting about 10% of 
computers connected to the internet after only a day.

In this challenge, you are given a number of days that have passed since an internet worm was 
released, and you need to determine how many computers are infected using the following rules:

On day 0, the first computer is infected.
Each subsequent day, the number of infected computers doubles.
Every 3rd day, a patch is applied after the virus spreads and reduces the number of infected 
computers by 20%. Round the number of patched computers up to the nearest whole number.
For example, on:

Day 0: 1 total computer is infected.
Day 1: 2 total computers are infected.
Day 2: 4 total computers are infected.
Day 3: 8 total computers are infected. Then, apply the patch: 8 infected * 20% = 1.6 patched. 
Round 1.6 up to 2. 8 computers infected - 2 patched = 6 total computers infected after day 3.
Return the number of total infected computers after the given amount of days have passed.
*/

/*
1. infected(1) should return 2.
2. infected(3) should return 6.
3. infected(8) should return 152.
4. infected(17) should return 39808.
5. infected(25) should return 5217638.
*/

function infected(days) {
  let totalInfected;

  for (let i = 0; i <= days; i++) {
    if (i === 0) {
      totalInfected = 1;
    } else {
      totalInfected *= 2;
    }

    if (i % 3 === 0) {
      let patch = Math.round(totalInfected * 0.2);
      totalInfected -= patch;
    }
  }

  return totalInfected;
}

/*
For infected(25) I am getting 5217728, it wants 5217638. I did the math out to make sure it
was not incorrect and using a calculator I get 5217728 aswell. So im not sure why they are 
different but the calculator is the same as what I get with this function.
*/
