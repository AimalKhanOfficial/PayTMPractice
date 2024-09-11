import axios from "axios";
const basePath = "http://localhost:3000";

export async function POST(req: Request) {
  const data = await req.json();
  try {
    const response = await axios.post(`${basePath}/user/sign-in`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return Response.json(response.data);
  } catch (err) {
    return Response.json(
      {
        message: "Invalid Username or Password",
      },
      { status: 400 }
    );
  }
}
