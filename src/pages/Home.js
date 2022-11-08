import React from "react";
import Navbar from "../components/Navbar";
import Headers from "../components/Headers";
import Konten from "../components/Konten";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function () {
  return (
    <div>
      <Navbar />
      <Headers />
      <Konten />
      <Card />
      <Footer />
    </div>
  );
}
