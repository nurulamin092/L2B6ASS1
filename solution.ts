function formatValue(value: string | number | boolean) {
  try {
    if (value === null || value === undefined) {
      throw new Error("Value can't null and undefined");
    }
    if (typeof value === "string") {
      if (value.trim() === "") {
        throw new Error("string value can't empty");
      }
      return value.toUpperCase();
    } else if (typeof value === "number") {
      if (value < 0) {
        throw new Error("Negative value not allow");
      }
      return value * 10;
    } else if (typeof value === "boolean") {
      return !value;
    }
    throw new Error("Invalid type");
  } catch (error) {
    console.log("Error:", (error as Error).message);
  }
}

function getLength(value: string | any[]): number {
  try {
    if (typeof value === "string") {
      return value.length;
    } else if (Array.isArray(value)) {
      return value.length;
    } else {
      throw new Error("Invalid input type");
    }
  } catch (error) {
    console.log("Error:", (error as Error).message);
    return 0;
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name:${this.name}, Age:${this.age}`;
  }
}

type item = {
  title: string;
  rating: number;
};

function filterByRating(items: item[]): item[] {
  return items.filter((item) => item.rating >= 4);
}

type userType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: userType[]): userType[] {
  const activeUser = users.filter((user) => user.isActive);
  return activeUser;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  const { title, author, publishedYear, isAvailable } = book;

  const bookAvailable = isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${title}, Author:${author}, Published: ${publishedYear},
     Available: ${bookAvailable}`
  );
}

type Value = string | number;

const getUniqueValues = (arr1: Value[], arr2: Value[]): Value[] => {
  const result: Value[] = [];

  const margeArr: Value[] = [...arr1, ...arr2];

  for (const item of margeArr) {
    if (item === undefined) continue;

    let exists = false;
    for (const value of result) {
      if (value === item) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(item);
    }
  }

  return result.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b);
    }
    if (typeof a === "number") {
      return -1;
    }
    return 1;
  });
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) {
    return 0;
  }
  const totalPice = products
    .map((product) => {
      const totalProductPrice = product.price * product.quantity;
      if (product.discount !== undefined && product.discount > 0) {
        const discountAmount = (totalProductPrice * product.discount) / 100;
        return totalProductPrice - discountAmount;
      }
      return totalProductPrice;
    })
    .reduce((item, currentValue) => item + currentValue, 0);

  return totalPice;
};
