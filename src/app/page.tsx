import AboutUsSection from "@/views/about.view";
import ContactUsView from "@/views/contactUs.view";
import HeadingViews from "@/views/heading.view";
import ServiceView from "@/views/services.view";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="">
      <section>
        <HeadingViews />
      </section>
      <section>
        <AboutUsSection />
      </section>
      <section>
        <ServiceView />
      </section>

      <footer>
        <ContactUsView />
      </footer>
    </main>
  );
}
