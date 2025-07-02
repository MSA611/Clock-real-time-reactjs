import { useEffect } from "react";
import axios from "axios";
function Home() {
  useEffect(() => {
    var api = axios.get("https://jasonplaceholder.typicode.com/users");
    console.log(api);
  }, []);
  return <div>HOme</div>;
}

export default Home;
