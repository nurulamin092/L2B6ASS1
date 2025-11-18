# What are some differences between interfaces and types in TypeScript?

## TypeScript -এ interface এবং type এর পার্থক্য

TypeScript ব্যবহার করার সময় আমারা প্রায়ই interface এবং type - এই দুটি শব্দ শুনি । দুটোই object - এর গঠন বা কাঠামো নির্ধারণ করতে ব্যবহিত হয় , তবে এদের মাঝে কিছু গুরুত্বপুর্ণ পার্থক্য আছে যা জানা জরুরি ।
প্রথমত , ইন্টারফেস মূলত অবজেক্ট এর structure define করার জন্য তৈরি । এটি সহজে এক বা একাধিক interface কে extends করতে পারে , যা code কে বেশি readable এবং সংগঠিত করে । interface এর একটি বড় সুবিধা হল declaration merging - অর্থাৎ এর নামে দুই বার ইন্টারফেস লিখলে তারা marge হয়ে যায় ।
বড় প্রোজেক্ট এটি অনেক উপকারী । অন্যদিকে , টাইপ অনেক ফ্লেক্সিবল type দিয়ে pirmitive string, number , union, intersection , tuple , এমনকি function - এর type ও define করা যায় । interface এই সুবিদা দেয় না । তবে type er একটি সীমাবদ্ধতা হলো একই নামে আবার type declear করা যায় না।

# TypeScript - এ keyof কীওয়ার্ডের ব্যবহার

TypeScript আমাদের কোডকে আরও নিরাপদ এবং predictable করতে বিভিন্ন powerful features প্রদান করে । এর মধ্যে keyof একটি অত্যন্ত গুরুতপুর্ণ keyword, যা object type এর সবগুলো key কে একটি union type হিসেবে বের করে আনে । সহজভাবে বললে , keyof দিয়ে আমরা জানতে পারি কণ্ব object এর property নামগুলো কি কি , এবং সেগুলোকে Type Safe উপায়ে ব্যবহার করতে পারি

উদাহরণ হিসেবে ধরুন :

type User = {
name: string;
age: number;
email: string;
};

যখন আমারা keyof User লিখি , তখন TypeScript এই টাইপটিকে রূপান্তর করবে ঃ

"name" | "age" | "email"

এটি বিশেষভাবে কাজে লাগে যখন আমরা dynamic key access করতে চাই । যেমন একটি সাধারণ utility function:

function getValue<T>(obj:T,key:keyof T){
return obj[key]
}

keyof এমন একটি শক্তিশালী টাইপ যা generic function, mapping এবং object manipulation এ ব্যবহার করা হয়
