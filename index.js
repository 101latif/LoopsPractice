//Problem1
console.log("------Write a for loop that logs 0-15------")
for (i = 0; i <= 15; i++)
  console.log(i)
console.log("********************************")

//Problem 2
console.log("------Write a for loop that counts from 15-0----")
for (i = 15; i >= 0; i--)
  console.log(i)
console.log("********************************")

//Problem 3
console.log("------------- Make variable laps = 0; write a for loop that logs (“that’s another lap!”) and adds 1 to the laps variable. AFTER the loop, log laps.---------------")
let laps = 0
for (i = 0; i < 25; i++)
  laps += 1;
console.log("Number of Laps =", laps)
console.log("********************************")
//Problem 4
console.log("----Make variable age. Make a loop from 0-100. In every loop check if i == age, if so log something, else say “age doesn’t match”.----")
let age = 30;
for (i = 0; i < 100; i++) {
  if (i == age)
    console.log(`Welcome to ${age}'s club!!'`)
  else
    console.log("Age doesn't match!")
}
console.log("********************************")

//Problem 5
console.log("------Write a loop that logs all even numbers from 0-700-----")
for (i = 0; i <= 700; i++)
  if (i % 2 == 0)
    console.log(i)
console.log("********************************")

//Problem 6
console.log("-------Write a loop that logs all odd numbers from 0-700------")
for (i = 0; i <= 700; i++)
  if (i % 2 != 0)
    console.log(i)
console.log("********************************")

//Problem 7
console.log("-------Write a loop with some “if else” statements. The loop should start at 1900 and go to 1949 and log when things were invented. For example when i = 1902 the code should log “it is 1902 - the teddy bear is invented!”------")
for (i = 1900; i <= 1949; i++) {
  if (i == 1900)
    console.log("it is 1900 - Zeppelin is invented!")
  else if (i == 1902)
    console.log("it is 1902 - The tedy bear is invented!")
  else if (i == 1910)
    console.log("it is 1910 - Talking Motion Picture is invented!")
  else if (i == 1913)
    console.log("it is 1913 - Bra is invented!")
  else if (i == 1918)
    console.log("it is 1918 - Fortune Cookie is invented!")
  else if (i == 1923)
    console.log("it is 1923 - Traffic Signal is invented!")
  else if (i == 1935)
    console.log("it is 1935 - Radar is invented!")
  else if (i == 1938)
    console.log("it is 1938 - Ballpoint is invented!")
  else if (i == 1943)
    console.log("it is 1943 - Slinky is invented!")
  
}
console.log("********************************")