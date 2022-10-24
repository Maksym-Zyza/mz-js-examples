// No includes in arrey

// const hidden = ["Home", "Tool"];
// const arr = ["Home", "Query Tool", "Data Importer", "Tool"];

// const newArr = arr.filter((el) => (hidden.includes(el) ? "" : el));
// newArr;

// ============ Max namber arr[i] * arr[i + 1]

// const arr = [-23, 4, -5, 99, -27, 329, -2, 7, -921];
// function adjacentElementsProduct(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     newArr.push(arr[i] * arr[i + 1]);
//   }
//   return newArr.length !== 0 ? Math.max(...newArr) : 0;
// console.log(adjacentElementsProduct(arr));

// ============ isPrime number - divisors is 1 and itself
// const a = 11;
// function isPrime(num) {
//   for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
//   return num > 1;
// }
// console.log(isPrime(a));

// ============== revers worlds to "battle no requires which that is victory greatest The"

// let str = "The greatest victory is that which requires no battle";
// function reverseWords(str) {
//   return str.split(" ").reverse().join(" "); // reverse those words
// }
// console.log(reverseWords(str));

// ============== revers worlds to "ehT tsetaerg yrotciv si taht hcihw seriuqer on elttab"
// let str = "The greatest victory is that which requires no battle";
// function reverseWords(str) {
//   return str.split("").reverse().join("").split(" ").reverse().join(" "); // reverse those words
// }
// console.log(reverseWords(str));

// ====== function takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#)
// function divisors(integer) {
//   let result = [];
//   for (let i = 0; i < integer; i++) {
//     Number.isInteger(integer / i) ? result.push(integer / i) : null;
//   }
//   return result.length > 1
//     ? result.reverse().slice(0, -1)
//     : `${result[0]} is prime`;
// }
// console.log(divisors(15));

// ===========
// const numbers = [-200, -1, 0, 200, 10000];
// function find_max(nums) {
//   let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//   for (let num of nums) {
//     if (num > max_num) {
//       max_num = num;
//     }
//   }
//   return max_num;
// }
// const res = find_max(numbers);
// res;

// ===== return the highest and lowest number
// function highAndLow(numbers) {
//   numbers = numbers.split(" ");
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// =====
// const acceptFileName = ["xlsx", "xls"];
// const file = "newFileMigra.fds-tions.xlsx";
// console.log(file.split(".").pop().toLowerCase());

// const checkFile = acceptFileName.includes(file.split(".").pop().toLowerCase());
// console.log(checkFile);

//=======
// const a1 = "2022-04-04T14:40:14.733Z";
// const a2 = "2022-03-15T11:18:19.309701";

// const isDate = (date) => (date ? date.replace("T", " ").slice(0, 19) : date);

// console.log(isDate(a1));
// console.log(isDate(a2));

// ======
// const arr = ["id", "", "name", "", "status"];
// const arr1 = arr.filter((el) => el !== "").join(",");

// console.log(arr1);

//======
// console.log("dsfsdf_sdfs".replace(/_/gi, " "));

// const date = new Date().toISOString();
// date;
// 2022-04-14T11:58:57.600Z
// 2022-03-28T11:38:30.646725

// ======
// const limit = "10";
// const page = 5;
// const startId = 3001;

// const startWithId = (limit, page, startId) => {
//   const lim = Number(limit);
//   return page === 1 ? String(startId) : String(page * lim - lim + startId);
// };

// console.log(startWithId(limit, page, startId));

//=======
// const newGetHeaders = { "Range-Unit": "items" };
// console.log({ ...newGetHeaders, method: "GET" });

//=======
// const value = `SELECT servloc.id "service_location_id", servloc.address_id, servloc.billing_acc_id, servloc.customer_id, migcust.ecid,
// bill.ban,migcust.customer_pin,migcust.first_name, migcust.last_name, migcust.other_auth, bill.mm_bill_cycle_cd,
// migcust.bc_cd, bill.addr_line "Billing Address", bill.city, bill.province, bill.postal_code, addr.lpdsid,
// addr.addr_line "Service Address", addr.city, addr.province, addr.postal_code,
// CASE WHEN servloc.top_offer_id = '9163100585065653916' THEN 'ADT Home Security with no ADC'
// WHEN servloc.top_offer_id = '9163106225735578031' THEN 'ADT Home Security: Non ADC, Unmonitored'
// WHEN servloc.top_offer_id = '9162245269038637386' THEN 'ADT Home Security with ADC'
// END AS top_offer_id,
// servloc.is_gr, servloc.services_price,
// CASE WHEN servloc.c_end_date IS NULL OR (servloc.c_end_date::date - now()::date)::float*12/365<0 THEN 0
// ELSE servloc.satf * (servloc.c_end_date::date - now()::date)::float*12/365
// END AS "Early Termination Fee",
// bill.debit_pos, bill.debit_neg, bill.credit,disc.disc_id,
// CASE WHEN disc.disc_id IN ('AMF', 'COVI', 'CVMF', 'DL', 'MFT') THEN 'Migrated discount-Months Free'
// WHEN disc.disc_id IN('DLUA', 'INI1', 'INI2', 'MF', 'PAPP', 'PM', 'PRO', 'TB01', 'TB03', 'TB04', 'UA', 'ULAB')
//   THEN 'Migrated discount- Legacy Promotion'
// WHEN disc.disc_id IN('EDA','EDT', 'TB02') THEN 'Migrated discount- Employee Discount'
// WHEN disc.disc_id IN('ZC01', 'ZL01', 'ZL02', 'ZL03', 'ZL05') THEN 'Migrated discount- Loyalty discount'
// WHEN disc.disc_id IN('ZC2C') THEN 'Migrated discount- Gift -Temporary'
// END AS "Discount Description",
// CASE WHEN bill.email IS NOT NULL THEN 'e.Bill' ELSE 'Paper Bill' END AS "Bill Preferency Type",
// CASE WHEN bill.mm_pap_indicator=TRUE THEN bill.mm_pap_type ELSE 'non-PAP' END AS payment_type,
// servloc.panel_type, servloc.daughterboard,servloc.legacy_plan, servloc.panel_description, servloc.cust_no mm_cust_no,
// servloc.cont_no, servloc.site_no, servloc.cms_acc_number, servloc.adc_acc_number, servloc.satf, (servloc.c_end_date::date - now()::date)::float*12/365 "Time Remaining (months)",
// servloc.error "Service Locations Error", addr.error "Address Error", bill.error "Billing Accounts Error", migcust.error "Customers Error"
// FROM adt_migration_customers migcust, adt_migration_billing_accounts bill,
// adt_migration_addresses addr, adt_migration_service_locations servloc
// FULL OUTER JOIN adt_migration_discounts disc ON servloc.id = disc.ser_loc_id
// WHERE servloc.env = 'itn01'
// AND servloc.migrated=true
// AND servloc.customer_id = migcust.id
// AND servloc.billing_acc_id = bill.id
// AND servloc.address_id = addr.id
// ORDER BY migcust.ecid;`;disc.disc_rate,disc.disc_amt, disc.recur_start_date, disc.recur_end_date,
// servloc.c_start_date, servloc.c_end_date, servloc.term, bill.email, migcust.primary_pn "primary_tn", migcust.mobile_pn "secondary_tn",

// const getTableFromSqlQuery = (value) => {
//   const keyWords = ["into", "from", "update", "table"];
//   const newValue = value.toLocaleLowerCase();
//   let result;
//   for (const keyWord of keyWords) {
//     if (newValue.replace(/\s/gi, " ").split(" ").includes(keyWord)) {
//       result = newValue.split(`${keyWord} `).pop();
//     }
//   }
//   console.log(newValue.split(" "));
//   return result ? result.split(" ")[0].split(";")[0].split("(")[0] : "";
// };

// console.log(getTableFromSqlQuery(value));

// const isTableIncludesJoin = (value) => {
//   const newValue = value.toLocaleLowerCase();
//   return newValue.replace(/\s/gi, " ").split(" ").includes("join")
//     ? true
//     : false;
// };

// console.log(isTableIncludesJoin(value));

//=======
// const arr = [
//   "ecid",
//   "location_id",
//   "iptv_id",
//   "mediaroom_id",
//   "env",
//   "migrating",
//   "retried",
//   "skipped",
//   "failed",
//   "migrated",
//   "error",
//   "exec_time",
//   "created_date",
//   "modified_date",
//   "tv_type",
// ];
// const checked = ["migrating", "ecid"];
// const newArr = arr.map((el) => (checked.includes(el) ? el : ""));

// newArr;

//======
// const text = "test for Alex";
// console.log(text.replace(/ /g, "_"));

//====== check if prime is Wilson: ((P-1)! + 1) / (P * P) = whole number
// function amIWilson(p) {
//   const factorial = (n) => (n ? n * factorial(n - 1) : 1);
//   const res = (factorial(p - 1) + 1) / (p * p);
//   return Number.isInteger(res) ? true : false;
// }
// console.log(amIWilson(67));

//=======
// const created_at = "2022-07-20T17:19:46.000Z";
// const expired_at = "2022-07-20T17:20:58.000Z";

// const duration = (startDate, andDate) =>
//   new Date(andDate) - new Date(startDate);
// const leftover = (andDate) => new Date(andDate) - new Date();

// const getTime = (interval) => {
//   let seconds = Math.floor(interval / 1000);
//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(minutes / 60);
//   let days = Math.floor(hours / 24);

//   hours = hours - days * 24;
//   minutes = minutes - days * 24 * 60 - hours * 60;
//   seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
//   const result = hours + ":" + minutes + ":" + seconds;
//   return result;
// };

// console.log(duration(created_at, expired_at), leftover(expired_at));
// console.log(getTime(duration(created_at, expired_at)));
// console.log(getTime(leftover(expired_at)));

// const date = new Date();
// console.log(date.toISOString());

// const dr = Date.parse("2022-07-20T14:26:05.867Z");
// dr;

// //==========
// const mainPath = (path) => `/` + path.split("/")[1];
// const minorPath = (path) => `/` + path.split("/")[2];

// const path = `/projects/4/test_for_Alex/44`;
// const path1 = `/editor/bootstrap-editor`;

// console.log(mainPath(path));
// console.log(minorPath(path1));

// =========
// const dd = `["Set pre-conditions for migration","Check if all BPIs are active under customer location","Submit Empty Modify IPTV CFS Order","Check backend orders validation"]`;
// const ee = JSON.parse(dd);
// ee;

//========
// const dd =
//   typeof new Date("2022-06-02T10:01:58.729532").getMonth === "function";
// dd;

//======
// const dd = ["Tools", "New", "Section"].join();
// const ss = dd.split(",");
// ss;

//======
// const filter = (arr, fn) =>
//   arr.reduce((sum, el) => (fn(el) ? [...sum] : [...sum, el]), []);

// const arr = [1, 2, 3, 4, 5, 6];
// const fn = (n) => n % 2 === 0;
// console.log(filter(arr, fn)); // [1, 3, 5]

// console.log(fn(2));

// const newArr = arr.reduce(
//   (filteredArr, el) => (el % 2 === 0 ? [...filteredArr] : [...filteredArr, el]),
//   []
// );
// newArr;

// reduce(sum, current, i, array) - використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату
// % (модуль числа) - повертає значення залишку при поділі першого числа на друге.

//======
//217995.69999999553
// const d = new Date();
// d;
// //======

// const numbers = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";

// function highAndLow(numbers) {
//   const newArr = numbers
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b);
//   return `${newArr[newArr.length - 1]} ${newArr[0]} `;
// }

// // function highAndLow(numbers) {
// //   numbers = numbers.split(" ");
// //   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// // }

// const ss = highAndLow(numbers);
// ss;

//=======
// const shadesOfGrey = (n) =>
//   [...Array(n < 0 ? 0 : n > 254 ? 254 : n)].map(
//     (_, idx) => `#${(++idx).toString(16).padStart(2, `0`).repeat(3)}`
//   );
// console.log(shadesOfGrey(15));

// const aa = [...Array(10)].map((_, idx) => idx)
// aa

//======
const type = {
  1: "text",
  2: 2122,
  3: ["text1", "text2", "text3"],
  4: [1, 2, 3, 4],
  5: null,
  6: true,
  7: { key: "value" },
  8: [
    {
      text: "value1",
      number: 11,
      arr: ["text1", "text2", "text3"],
      bool: true,
      objArr: [
        {
          text: "value1",
          number: 11,
          arr: ["text1", "text2", "text3"],
          isStudent: true,
        },
        {
          text: "value2",
          number: 22,
          arr: ["text1", "text2", "text3"],
          isStudent: false,
        },
      ],
    },
    { key2: "value2" },
  ],
};

const getValueType = (value) => {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "object" && value !== null) {
    if (Array.isArray(value)) {
      return value.map((item, idx) => (idx === 0 ? item : `, ${item}`));
    } else {
      return `${Object.keys(value)}: ${Object.values(value)}`;
    }
  } else return JSON.stringify(value);
};

const dd = Object.entries(type).map((el) => getValueType(el[1]));

console.log(dd);
console.log(dd[7]);
