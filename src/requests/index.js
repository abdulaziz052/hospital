const baseUrl = "http://195.158.9.124:4109";

export async function registerUser(user) {
  try {
    const req = await fetch(baseUrl + "/auth/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!req.ok) {
      throw new Error("Xatolik!");
    } else return req;
  } catch (error) {
    return error.message;
  }
}
export async function loginUser(user) {
  try {
    const req = await fetch(baseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!req.ok) {
      throw new Error("Xatolik!");
    } else return await req.json();
  } catch (error) {
    return error.message;
  }
}
export async function getAllDepartment({ token }) {
  console.log(token);
  try {
    const req = await fetch(baseUrl + "/department", {
      headers: {
        "Content-Type": "application/json",
        Authorazation: `Bearer ${token}`,
      },
    });
    if (!req.ok) {
      throw new Error("Xatolik!");
    } else return await req.json();
  } catch (error) {
    return error.message;
  }
}
