import router from "./router.js";
import isLoggedIn from "./auth-status.js";
isLoggedIn();

//Other
import home from "./routes/home.js";
import logOut from "./routes/log-out.js";
import missing from "./routes/missing.js";
//User routes
import logIn from "./routes/log-in.js";
import signUp from "./routes/sign-up.js";
import allMyDogs from "./routes/user.js";

// Dog routes
import allDogs from "./routes/all-dogs.js";
import oneDog from "./routes/one-dog.js";
import newDog from "./routes/new-dog.js";
import updateDog from "./routes/update-dog.js";
// import deleteDog from "./routes/delete-dog.js";

const app = router();
//Other
app.get("/", home);
app.get("/log-out", logOut);
app.get("default", missing);

//Users
app.get("/log-in", logIn);
app.get("/sign-up", signUp);
app.get("/user", allMyDogs);

//Dogs
app.get("/dogs", allDogs);
app.get("/dog", oneDog);
app.get("/new-dog", newDog);
app.get("/update", updateDog);
// app.get("/dog", deleteDog);

app.listen();
