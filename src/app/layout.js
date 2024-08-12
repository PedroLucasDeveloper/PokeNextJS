import Layout from "../components/Layout";

export const metadata = {
  title: "PokeNext",
};

export default function RootLayout({ children }) {
  return (
<Layout> {children} </Layout>
  );
}
