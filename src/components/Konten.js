import React from "react";

function Konten() {
  return (
    <div className="container">
      <br />
      <br />
      <h1 className="text-center">
        Tsutaya <small>bookstore</small>
      </h1>
      <br />
      <figure class="figure">
        <img
          src="http://cbsnews1.cbsistatic.com/hub/i/2016/08/22/32a8feee-33f1-481b-b7f5-214c8ccbf99f/11.jpg"
          class="figure-img img-fluid rounded"
          alt="..."
        />
        <br />
        <br />
        <div className="captfoto">
          <h1>Didirikan pada tahun 1925</h1>
          <p style={{ style: "Times New Roman', Times, serif" }}>
            Toko Buku Argosy sekarang berada di generasi ketiga kepemilikan
            keluarga. Stok barang antik dan barang antik kami yang sangat banyak
            memenuhi gedung enam lantai di tengah kota Manhattan dan gudang
            besar di Brooklyn. Kami mengkhususkan diri dalam Americana, edisi
            pertama modern, tanda tangan, seni, peta & cetakan antik, dan
            sejarah sains & kedokteran. Kami juga memiliki ribuan buku di semua
            bidang minat lainnya. Kami adalah anggota pendiri Asosiasi Penjual
            Buku Antik Amerika, dan kami tergabung dalam Liga Internasional
            Penjual Buku Antik dan Asosiasi Penilai Amerika.
          </p>
        </div>
      </figure>
    </div>
  );
}

export default Konten;
