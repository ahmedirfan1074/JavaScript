// syntax for switch
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = 3; // here month is key

// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;

//   default:
//     console.log("invalid month");
//     break;
// }

// its upto us what value we wanted to check it can be no., string.

const month = "march"; // here month is key

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  // if we dont put break it will run all the other case without checking the value until the default
  // even if you not put break herw the all the underneath cases will get printed but not the default one
  case "april":
    console.log("april");
    break;

  default:
    console.log("default case match");
    break;
}
