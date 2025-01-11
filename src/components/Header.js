import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { AVATAR_URL, LOGO, SUPPORTED_LANGAUGE } from "../utils/constants";
import { toggleGptSeaarchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSeaarchView());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    // console.log("handleLanguageChange", e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} />

      {user && (
        <div className="flex p-2">
          <select
            className="py-2 px-4 m-2 bg-gray-600 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGAUGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.langName}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-4 m-2 bg-slate-50"
            onClick={handleGptSearchClick}
          >
            GPT Search{" "}
          </button>
          {/* <img className="w-10 h-10" alt="usericon" src={user.photoURL} /> */}
          <img className="w-10 h-10 m-2" alt="usericon" src={AVATAR_URL} />
          <button
            className="font-bold text-white cursor-pointer"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
