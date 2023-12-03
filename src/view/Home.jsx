import cakeImg from "../assets/img/cake2.png";

const Home = () => {
  return (
    <>
      <div className="homeContainer animate__animated animate__fadeIn">
        <h1 className="titleHome">Bienvenido a Happy Cake!</h1>
        <span>El lugar de los pasteles felices</span>
        <img src={cakeImg} alt="cakeImg" className="cakeImg" />
      </div>
    </>
  );
};
export default Home;
