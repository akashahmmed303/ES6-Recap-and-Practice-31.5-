// // ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।



let x = 5;
x = 20;

const y = 10;

console.log(x);
console.log(y);



// // ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।



const studentInfo = [
  { name: "Maisha", school: "PLS", gpa: "4.75" },
  { name: "Oishy", school: "MGS", gpa: "4.80" },
];

for (let student of studentInfo) {
  const { name, school, gpa } = student;
  const info = `${name} studied at ${school}`;
  console.log(info);
}



// // ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।



Ex - 1;
const divideByFive = x => x / 5;
console.log(divideByFive(10));



Ex - 2;
const divide = num => num / 5;
const input3 = 10;
console.log(`Input: ${input3}`, `Output: ${divide5(input3)}`);



// // ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো



const myNum = (num1, num2) => (num1 + 2) * (num2 + 2);
const result = myNum(10, 0);
console.log(result);



// // ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।



const myNum3 = (num1, num2, num3) => num1 * num2 * num3;
const result3 = myNum(2, 2, 2);
console.log(result3);



// // ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।



const multipleLineArrow = (n1, n2) => {
  n1 = n1 + 2;
  n2 = n2 + 2;
  return n1 * n2;
};

const run = multipleLineArrow(10, 10);
console.log(run);



// // ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।



const numbers = [23, 332, 53, 5, 29, 1, 3, 45, 32];
const numberMap = numbers.map(num => num * 5);
console.log(numberMap);



// // ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।



const { objName } = {
  objName: "Roshni Hassan",
  age: 19,
  love: "programming",
};
console.log(objName);



// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।

// array destructuring

const [a, b, three] = [23, 34, 40];
console.log(three);



// // ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।


const threeNumber = (num1, num2, num3 = 7) => num1 + num2 + num3;
console.log(threeNumber(2, 5, 10));


// // ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )


const nestedObj = {
  name: "Akash",
  age: 18,
  address: {
    home: "Bejpara Taltola Bazar",
    village: "Mohon Road",
    postOffice: {
      name: "Jashore Sadar",
      postCode: 7400,
    },
  },
  familyMember: ["Abbu", "Ammu", "Brother", "Sister", "Me"],
};



// // ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।



const isHere = nestedObj.address?.postOffice?.name;
console.log(isHere);



// // <---..................END....................--> // //