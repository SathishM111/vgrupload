import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import WoodImage from "../ui/Wood.jpg";
import Homes from "../ui/Frentmenu";
function Home() {
  const { username } = useSelector((state) => state.user);
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${WoodImage})` }}
    >
      <div className="my-10 px-4 text-center sm:my-16 bg-slate-500 w-97 h-100 flex items-center ml-40 mr-40  flex-col justify-center border-2 border-stone-900 rounded-3xl">
        <h1 className="mb-8 text-xl font-semibold md:text-3xl">
          The best pizza. hellooooooo....!! Pizzzzzaaaaa
          <br />
          <span className="text-orange-900">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        {username ? (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        ) : (
          <CreateUser></CreateUser>
        )}
      </div>
    <div className="my-10 px-4 text-center sm:my-16 bg-slate-500 w-97 h-100 flex items-center ml-40 mr-40  flex-col justify-center border-2 border-stone-900 rounded-3xl">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-orange-900">
          Straight out of the oven, straight to you.☠️☠️
        </span>
      </h1>
      {username ? (
        <Button to="/menu" type="primary">
          Continue ordering, {username}
        </Button>
      ) : (
        <CreateUser></CreateUser>
      )}
    </div>
    </div>
  );
}

export default Home;
