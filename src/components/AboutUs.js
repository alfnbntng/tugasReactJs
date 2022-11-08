import React from "react";

function AboutUs() {
  return (
    <div>
      <div
        class="grid-container"
        style={{ margin: "20px", textAlign: "right" }}
      >
        <div className="kolom">
          <div class="grid-item">
            <img
              src="https://daily.sevenfifty.com/app/uploads/2017/12/SFD_Bookstore_Bars_Kramerbooks_CR_courtesy_Kramerbooks_2520x14202.jpg"
              style={{
                width: "460px",
                Height: "910px",
                justifyContent: "center",
              }}
            />
          </div>
          <div class="grid-item" style={{ margin: "19px" }}>
            <h1>Tentang Kami</h1>
            Toko Buku Argosy, yang didirikan pada tahun 1925, kini berada dalam
            kepemilikan keluarga generasi ketiga. Stok barang antik dan barang
            antik kami yang sangat banyak memenuhi gedung enam lantai di tengah
            kota Manhattan dan gudang besar di Brooklyn. Kami mengkhususkan diri
            dalam Americana, edisi pertama modern, tanda tangan, seni,
            fotografi, dan peta & cetakan antik. Kami juga memiliki ribuan buku
            di semua bidang minat lainnya. Kami adalah anggota pendiri Asosiasi
            Penjual Buku Antik Amerika [ABAA], dan juga anggota Liga
            Internasional Penjual Buku Antik [ILAB-LILA]. Kami mengkhususkan
            diri dalam menemukan hadiah yang fantastis dan tidak biasa untuk
            setiap orang yang fantastis dan tidak biasa dalam hidup Anda. Butuh
            hadiah yang bagus untuk pernikahan? Kami memiliki ratusan cetakan
            dan buku yang sesuai untuk dipilih. Butuh sesuatu untuk dokter atau
            pengacara Anda? Tidak masalah. Bagaimana dengan gurumu? Penasihat
            rohani? Tukang ledeng? Pelatih bisbol? Ibu mertua? Kami akan
            membantu Anda menemukan sesuatu - atau Anda dapat mengambil
            sertifikat hadiah . Berbelanja di Argosy dan buat semua orang
            senang.
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="text-center">
                  <img
                    src="https://i.pinimg.com/originals/80/33/2c/80332ca522720ff54ea28a5d2556a9c3.jpg"
                    style={{
                      borderRadius: "50%",
                      height: "200px",
                      width: "200px",
                      justifyContent: "center",
                      margin: "30px",
                    }}
                  />
                  <h1>
                    Sano Manjiro
                    <p>(mikey)</p>
                  </h1>
                </div>
              </div>
              <div className="col">
                <h1>haii</h1>
                <p>
                  You can offset grid columns in two ways: our responsive
                  .offset- grid classes and our margin utilities. Grid classes
                  are sized to match columns while margins are more useful for
                  quick layouts where the width of the offset is variable.
                  Offset classes Move columns to the right using .offset-md-*
                  classes. These classes increase the left margin of a column by
                  * columns. For example, .offset-md-4 moves .col-md-4 over four
                  columns.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default AboutUs;
