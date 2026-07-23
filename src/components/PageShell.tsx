/* Shell para páginas internas — Header + Footer + WhatsApp */
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
