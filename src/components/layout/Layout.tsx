import { AppProps } from "antd";
import Navbar from "../header/Navbar";

export default function Layout({ children }: AppProps) {
  return (
    <div>
      <Navbar></Navbar>

      <div>
        {children}
      </div>
    </div>
  )
}