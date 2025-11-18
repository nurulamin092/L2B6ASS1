function formatValue(value: string | number | boolean) {
  try {
    if (value === null || value === undefined) {
      throw new Error("Value can't null and undefined");
    }
    if (typeof value === "string") {
      if (value.trim() === "") {
        throw new Error("string value can't empty");
      }
      return value.toUpperCase;
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
