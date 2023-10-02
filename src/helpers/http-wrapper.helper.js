import axios from "axios";

const httpRequset = async (apiURL, httpMethod = "get", body = {}) => {
  try {
    const { data } = await axios({
      url: apiURL,
      method: httpMethod,
      data: body,
    });
    console.log("********ht-wrap**********");
    console.log(data);

    const todoArray = Object.entries(data).map(([key, value]) => ({
      key,
      ...value,
    }));

    console.log(todoArray);

    return todoArray;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { httpRequset };
