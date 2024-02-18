import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Main from "./Main";
import Container from "./Container";
import Footer from "./Footer";

function Layout() {
	return (
		<Container>
			<Navbar />
			<Main>
				<Outlet />
      </Main>
      <Footer />
		</Container>
	);
}

export default Layout;
