// * import components
import Header from "../../components/Header/Header";
import Posts from '../../components/Posts/Posts';
import Sidebar from "../../components/Sidebar/Sidebar";

// * import css files
import "./Home.css";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
