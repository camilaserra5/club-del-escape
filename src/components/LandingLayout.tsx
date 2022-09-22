import Header from "./Header";
import Footer from "./Footer";

const LandingLayout = (props: any) => {
  return (
    <div
      style={{
        maxWidth: 1800,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
