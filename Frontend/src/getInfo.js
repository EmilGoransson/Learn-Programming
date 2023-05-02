import decode_token from "./decode_token";

const getInfo = async () => {
  try {
    const res = await fetch(
      "http://130.229.172.67:3003/authentication/getinfo",
      {
        metod: "GET",
        headers: {
          id: Number(
            decode_token.decode(localStorage.getItem("token")).user.id
          ),
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
export default getInfo;
