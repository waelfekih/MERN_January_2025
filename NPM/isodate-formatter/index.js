import { takeDate , convertTimeOne , convertTimeTwo , convertTimeThree } from "./utils/formatDate.js";
import chalk from "chalk";


console.log(chalk.red.bold("📅 Current Date:" , takeDate() ))


const date1 = "February 12 , 2025"


console.log(chalk.bgBlue("📅 Date Difference:") , convertTimeOne("December 31 , 2024")); 


console.log(chalk.bgBlue("📅 New Date Format:") , convertTimeTwo(date1));  


console.log(chalk.bgBlue("📅 Another New Date Format:" ), convertTimeThree(date1));

