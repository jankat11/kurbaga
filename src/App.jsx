import { useState, useRef, useEffect } from "react";
import { Card, Col, Row, Button, Image } from "react-bootstrap";
import { RiHeartFill } from "react-icons/ri";
import "./App.css";
import Snowfall from "react-snowfall";

function App() {
  const [heartClass, setHeartClass] = useState("heart1");

  const dam = useRef();
  const incin = useRef();
  const goren = useRef();
  const mezara = useRef();
  const kaz = useRef();
  const yaz = useRef();
  const heart = useRef("sdf");
  const refHeart = useRef();

  const heartClasses = ["heart1", "heart2", "heart3", "heart4", "heart5"];

  const lines = {
    dam,
    incin,
    goren,
    mezara,
    kaz,
    yaz,
  };

  const show = (currLine, line) => {
    lines[currLine].current.style.display = "none";
    lines[line].current.style.display = "block";
  };

  const sendHeart = () => {
    const teyp = document.getElementById("musicplayer");
    console.log(teyp);

    const random = Math.floor(Math.random() * 5);
    setHeartClass(heartClasses[random]);
    const myHeart = refHeart.current.cloneNode(true);
    const icon = myHeart.lastElementChild;
    icon.addEventListener("animationend", () => myHeart.remove());
    myHeart.style.display = "block";
    heart.current.appendChild(myHeart);
  };

  return (
    <>
      <Snowfall snowflakeCount={30} style={{ zIndex: 10 }} />
      <Row className="text-wrapper">
        <Col sm={12} className="p-0">
          <Card
            bg="primary"
            text="light"
            className="card px-0 border-secondary"
          >
            <Card.Body variant="primary">
              <Card.Title className="cry">😭😭😭</Card.Title>
              <Card.Text className="card-text my-5 display-6">
                <span
                  ref={dam}
                  onAnimationEnd={() => show("dam", "incin")}
                  className="dam"
                >
                  DAMDAN DÜŞEN KURBAĞA...
                </span>
                <span
                  ref={incin}
                  onAnimationEnd={() => show("incin", "goren")}
                  className="incin"
                >
                  İNCİTMİŞ KUYRUĞUNU
                </span>
                <span
                  ref={goren}
                  onAnimationEnd={() => show("goren", "mezara")}
                  className="goren"
                >
                  BUNU GÖREN YOLCULAR
                </span>
                <span
                  ref={mezara}
                  onAnimationEnd={() => show("mezara", "kaz")}
                  className="mezara"
                >
                  GÖTÜRMÜŞLER MEZARA
                </span>
                <span
                  ref={kaz}
                  onAnimationEnd={() => show("kaz", "yaz")}
                  className="kaz"
                >
                  MEZARINI KAZMIŞLAR
                </span>
                <span
                  ref={yaz}
                  onAnimationEnd={() => show("yaz", "dam")}
                  className="yaz"
                >
                  ŞU YAZIYI YAZMIŞLAR:
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div
        ref={heart}
        className="position-absolute heart-wrapper"
        id="heartWrapper"
      ></div>

      <Row className="w-100 d-flex justify-content-center">
        <Button
          onClick={sendHeart}
          className="my-5 p-0 heart-btn btn-outline-secondary"
        >
          <strong>ONA KALBİNİ BIRAK . . .</strong>
        </Button>

        <p className="agla mb-0 pt-1">ONUN İÇİN AĞLA . . .</p>

        <iframe
          id="musicplayer"
          onClick={() => console.log("clicked")}
          src="https://www.youtube.com/embed/QuNhTLVgV2Y"
        ></iframe>
      </Row>
      <span className="spanHeart" ref={refHeart}>
        <RiHeartFill className={`text-danger heart ${heartClass}`} size={40} />
      </span>
      <Row className="mt-5 mb-0 d-flex w-100 justify-content-center">
        <Image className="memory" fluid src="memory.jpg"></Image>
      </Row>
    </>
  );
}

export default App;
