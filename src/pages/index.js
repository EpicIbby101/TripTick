import { withSession } from "@clerk/nextjs";
import Welcome from "./Welcome";

const Homepage = () => <Welcome />

export default withSession(Homepage)