import Profile from "../components/profile";
import BrogConfig from "../../brog.config";
// import PostList from "../components/postList";
// import ProjectList from "../components/projectList";
// import Title from "../components/title";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `首页｜${BrogConfig.WEB_TITLE}`,
};

export default function Home() {
  return (
    <>
      <Profile />
    </>
  )
}
