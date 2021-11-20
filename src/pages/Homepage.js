import ArticleSection from "../components/ArticleSection";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <main className="home-main">
        <CardSection />
        <ArticleSection />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
