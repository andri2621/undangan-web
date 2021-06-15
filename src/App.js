import kembangAtas from "./assets/asset-1.png";
import countingdown from "./assets/asset-2.png";
import galeri from "./assets/asset-3.png";
import pin from "./assets/pin.png";
import fotopria from "./assets/pria.jpg";
import fotowanita from "./assets/wanita.jpg";
import "./App.css";
import moment from "moment";
import CountdownTimer from "./CoundowntTimer";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

function App() {
  const tanggalAcara = "2021-06-26";
  const tanggalMoment = moment(tanggalAcara)
    .utc(tanggalAcara)
    .format("DD MMMM YYYY");

  const bukaPeta = () => {
    window.open("https://goo.gl/maps/yLu4o5EmoLR32fDK8", "_blank");
  };

  return (
    <div className="App">
      {/* ======================= Section 1 ========================= */}
      <header className="App-header">
        <div className="bg-transparan">
          <div className="judul">Save</div>
          <div className="judul" style={{ marginTop: "-2vh" }}>
            The Date
          </div>
          <div className="judul" style={{ marginTop: "-2vh" }}>
            {tanggalMoment}
          </div>
        </div>
      </header>
      {/* ======================= Section 2========================= */}
      <div className="kedua">
        <div className="bg-dua">
          <img src={kembangAtas} className="kembangAtas" alt="logo" />
          <div className="containerText">
            <div style={{ fontWeight: 700, color: "#000000" }}>
              Bismillahirrahmanirrahim
            </div>
            <div style={{ fontWeight: 700, color: "#000000" }}>
              Assalamu'alaikum Warahmatullahi Wabarakatuh
            </div>
            <div style={{ fontWeight: 300, color: "#000000" }}>
              Dengan memohon rahmat serta ridho Allah Subhanahu Wa Ta'ala, kami
              bermaksud menyelenggarakan acara resepsi pernikahan kami:
            </div>
          </div>
          <div className="boxdua">
            <div style={{ width: "40%" }}>
              <div class="text-center">
                <img
                  src={fotopria}
                  alt="foto mempelai pria"
                  className="fotoMempelai"
                />
              </div>
              <div
                style={{
                  fontFamily: "pacifico",
                  fontWeight: 500,
                }}
              >
                Dendi Herdiana. S.E
              </div>
              <div
                style={{
                  fontWeight: 100,
                  fontSize: 16,
                }}
              >
                Putra dari bapak M.Yunus & Ibu Enih Rohaenih
              </div>
            </div>
            <div style={{ width: "20%" }}>
              <div
                style={{
                  fontFamily: "pacifico",
                  fontWeight: 400,
                  fontSize: 50,
                }}
              >
                &
              </div>
            </div>
            <div style={{ width: "40%" }}>
              <div class="text-center">
                <img
                  src={fotowanita}
                  alt="foto mempelai pria"
                  className="fotoMempelai"
                />
              </div>
              <div
                style={{
                  fontFamily: "pacifico",
                  fontWeight: 500,
                }}
              >
                Eva Oktaviani. S.E
              </div>
              <div
                style={{
                  fontWeight: 100,
                  fontSize: 16,
                }}
              >
                Putri dari bapak Didi Sardi & ibu Herniawati
              </div>
            </div>
          </div>
          <div className="containerText">
            <div className="isiUndangan" style={{ marginTop: 50 }}>
              yang insya Allah akan diselenggarakan pada:
            </div>
            <div className="isiUndangan">
              hari Senin - Selasa, 22 - 23 Maret 2021
            </div>
            <div className="isiUndangan">pukul 08.00 WIB - selesai</div>
            <div className="isiUndangan">
              bertempat di Blok Sukatani. RT 07 RW 03 Dusun Cipeundeuy Desa
              Sadapaingan Kec. Panawangan Kab. Ciamis
            </div>
          </div>

          <div className="containerText" style={{ marginTop: 20 }}>
            <div className="isiUndangan">
              Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
              berkenan hadir dan memberikan do'a restu kepada kami.
            </div>

            <div className="isiUndangan">
              Atas kehadiran dan do'a restu Bapak/Ibu/Saudara/i kami ucapkan
              terima kasih.
            </div>
          </div>

          <div className="containerText" style={{ marginTop: 20 }}>
            <div className="isiUndangan" style={{ fontWeight: 700 }}>
              Wassalamu'alaikum Warahmatullahi Wabarakatuh
            </div>
          </div>

          <div className="containerText" style={{ marginTop: 20 }}>
            <div className="isiUndangan">Kami yang berbahagia,</div>
            <div className="isiUndangan" style={{ fontWeight: 700 }}>
              Keluarga Bapak M.Yunus & Ibu Enih Rohaenih
            </div>
            <div className="isiUndangan" style={{ fontWeight: 700 }}>
              Keluarga Bapak Didi Sardi & Ibu Herniawati
            </div>
            <div className="isiUndangan" style={{ fontWeight: 700 }}>
              Kedua Mempelai
            </div>
          </div>

          <div className="containerText" style={{ marginTop: 20 }}>
            <div className="isiUndangan">Turut mengundang :</div>
            <div className="isiUndangan">
              1. Aparatur Pemerintahan Desa Sadapaingan.
            </div>
            <div className="isiUndangan">
              2. Kawan-kawan, teman dan sahabat.
            </div>
            <div className="isiUndangan">3. Segenap Famliy.</div>
          </div>
        </div>
        <img src={kembangAtas} className="kembangBawah" alt="logo" />
      </div>
      {/* ======================= Section 3 ========================= */}
      <header className="section3">
        <div className="bg-transparan">
          <div className="judul">Counting</div>
          <div className="judul" style={{ marginTop: "-2vh" }}>
            Down
          </div>
          <img src={countingdown} className="assetKetiga" alt="logo" />
          <CountdownTimer timeTillDate={tanggalAcara} timeFormat="YYYY MM DD" />
        </div>
      </header>
      {/* ======================= Section 4 ========================= */}
      <div className="kedua">
        <div className="bg-dua">
          <img src={kembangAtas} className="kembangAtas" alt="logo" />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ fontSize: 70, fontWeight: 700, color: "#000000" }}>
              {moment(tanggalAcara).format("DD")}
            </div>
            <div
              style={{
                fontWeight: 100,
                color: "#000000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <div>{moment(tanggalAcara).format("MMMM")}</div>
              <div>{moment(tanggalAcara).format("YYYY")}</div>
            </div>
          </div>
          <div className="containerText">
            <div
              style={{
                marginTop: 20,
                fontSize: 40,
                fontWeight: 700,
                color: "#000000",
                fontFamily: "Pinyon Script",
              }}
            >
              Akad
            </div>
            <div
              style={{
                color: "#000000",
              }}
            >
              08:00 WIB
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                marginTop: 10,
              }}
            >
              <div>
                <img
                  src={pin}
                  alt="pin"
                  style={{ width: 20, height: 20 }}
                ></img>
              </div>
              <div style={{ color: "#000000" }}>Kediaman Mempelai Wanita</div>
            </div>
            <div
              style={{
                color: "#000000",
                marginTop: 10,
              }}
            >
              Blok Sukatani. RT 07 RW 03 Dusun Cipeundeuy Desa Sadapaingan Kec.
              Panawangan Kab. Ciamis
            </div>
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill"
              style={{
                marginTop: "6vh",
              }}
              onClick={bukaPeta}
            >
              Lihat Peta
            </button>
          </div>

          <iframe
            className="peta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73323.88562637716!2d106.77665740641528!3d-6.193383802296384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f733b0c99e0b%3A0x3aa50d08b7a5c35c!2sJl.%20Lap.%20Merah%2C%20Joglo%2C%20Kec.%20Kembangan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011640!5e0!3m2!1sen!2sid!4v1623644481370!5m2!1sen!2sid"
            // width="650"
            // height="450"
            frameBorder="0"
            // style={{ border: 0, marginBottom: 50 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="peta lokasi"
          />
        </div>
        <img
          src={kembangAtas}
          className="kembangBawah"
          alt="logo"
          style={{ marginTop: -10 }}
        />
      </div>
      {/* ======================= Section 5 ========================= */}
      <div className="section5">
        <div className="galeriteks">Galeri</div>

        <img src={galeri} className="assetKeempat" alt="logotiga" />

        <div className="containerGambar">
          <Gallery photos={photos} className="gambarGallery" />
        </div>
      </div>
    </div>
  );
}

export default App;
