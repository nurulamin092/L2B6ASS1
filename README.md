What are some differences between interfaces and types in TypeScript?

TypeScript -এ interface এবং type এর পার্থক্য

TypeScript ব্যবহার করার সময় আমারা প্রায়ই interface এবং type - এই দুটি শব্দ শুনি । দুটোই object - এর গঠন বা কাঠামো নির্ধারণ করতে ব্যবহিত হয় , তবে এদের মাঝে কিছু গুরুত্বপুর্ণ পার্থক্য আছে যা জানা জরুরি ।
প্রথমত , ইন্টারফেস মূলত অবজেক্ট এর structure define করার জন্য তৈরি । এটি সহজে এক বা একাধিক interface কে extends করতে পারে , যা code কে বেশি readable এবং সংগঠিত করে । interface এর একটি বড় সুবিধা হল declaration merging - অর্থাৎ এর নামে দুই বার ইন্টারফেস লিখলে তারা marge হয়ে যায় ।
বড় প্রোজেক্ট এটি অনেক উপকারী । অন্যদিকে , টাইপ অনেক ফ্লেক্সিবল type দিয়ে pirmitive string, number , union, intersection , tuple , এমনকি function - এর type ও define করা যায় । interface এই সুবিদা দেয় না । তবে type er একটি সীমাবদ্ধতা হলো একই নামে আবার type declear করা যায় না।
