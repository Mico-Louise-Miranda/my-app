import Header from "./Header.jsx";
import Page from "./Page.jsx";
import Sidebar from "./Sidebar.jsx";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="lg:pl-64 flex flex-col flex-1">
        <Header />
        <Page />
      </div>
    </div>
  );
}

export default Home; 