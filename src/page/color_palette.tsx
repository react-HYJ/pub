import Button from "../component/form/button";
import Container from "../component/layout/container";
import Header from "../component/layout/header";

function ColorPalette() {
  return (
    <>
      <Header />
      <Container className="color_palette">
        <div className="contents_wrap">
          <div className="color_palette_template">
            {/* Black */}
            <div>
              <div className="area">
                <h2>Black Palette</h2>
                <p style={{ color: "var(--text-bk1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-wh9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-to-gr9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
            </div>
            {/* Gray */}
            <div>
              <div className="area">
                <h2>Gray Palette</h2>
                <p style={{ color: "var(--text-gr1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-gr9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-bk9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-gr-to-wh9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
            </div>
            {/* White */}
            <div>
              <div className="area">
                <h2>White Palette</h2>
                <p style={{ color: "var(--text-wh1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-bk9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-to-gr9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
            </div>
            {/* Black 투명도 */}
            <div>
              <div className="area">
                <h2>Black Opacity Palette</h2>
                <p style={{ color: "var(--text-bk-opc1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-bk-opc9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-bk-opc-to-wh9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
            </div>
            {/* White 투명도 */}
            <div>
              <div className="area">
                <h2>White Opacity Palette</h2>
                <p style={{ color: "var(--text-wh-opc1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk1)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk2)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk3)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk4)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk5)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk6)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk7)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk8)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
              <div className="area">
                <p style={{ color: "var(--text-wh-opc9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
                <p style={{ color: "var(--text-wh-opc-to-bk9)" }}>
                  테스트 인데요, 팔레트 테스트를 위한 p태그 입니다.
                </p>
              </div>
            </div>
          </div>
          <div className="color_palette_template background">
            {/* Black */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh1)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh2)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh3)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh4)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh5)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh6)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh7)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh8)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-gr9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-to-wh9)" }}></li>
              </ul>
            </div>
            {/* Gray */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk1)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk2)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk3)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk4)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk5)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk6)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk7)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk8)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-gr9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-wh9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-gr-to-bk9)" }}></li>
              </ul>
            </div>
            {/* White */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk1)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk2)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk3)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk4)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk5)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk6)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk7)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk8)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-gr9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-to-bk9)" }}></li>
              </ul>
            </div>
            {/* Black Opacity */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh1)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh2)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh3)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh4)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh5)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh6)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh7)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh8)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-bk-opc9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-bk-opc-to-wh9)" }}></li>
              </ul>
            </div>
            {/* White Opacity */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc1)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk1)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc2)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk2)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc3)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk3)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc4)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk4)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc5)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk5)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc6)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk6)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc7)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk7)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc8)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk8)" }}></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--bg-wh-opc9)" }}></li>
                <li style={{ backgroundColor: "var(--bg-wh-opc-to-bk9)" }}></li>
              </ul>
            </div>
          </div>
          <div className="color_palette_template background card">
            {/* Black */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk1)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr1)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh1)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk2)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr2)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh2)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk3)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr3)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh3)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk4)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr4)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh4)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk5)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr5)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh5)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk6)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr6)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh6)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk7)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr7)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh7)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk8)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr8)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh8)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk9)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-gr9)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-to-wh9)" }}
                ></li>
              </ul>
            </div>
            {/* Gray */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr1)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh1)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk1)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr2)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh2)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk2)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr3)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh3)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk3)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr4)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh4)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk4)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr5)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh5)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk5)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr6)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh6)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk6)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr7)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh7)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk7)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr8)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh8)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk8)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-gr9)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-wh9)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-gr-to-bk9)" }}
                ></li>
              </ul>
            </div>
            {/* White */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh1)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr1)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk1)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh2)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr2)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk2)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh3)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr3)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk3)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh4)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr4)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk4)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh5)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr5)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk5)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh6)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr6)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk6)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh7)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr7)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk7)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh8)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr8)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk8)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh9)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-gr9)" }}
                ></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-to-bk9)" }}
                ></li>
              </ul>
            </div>
            {/* Black Opacity */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc1)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh1)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc2)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh2)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc3)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh3)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc4)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh4)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc5)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh5)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc6)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh6)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc7)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh7)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc8)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh8)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-bk-opc9)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-bk-opc-to-wh9)" }}
                ></li>
              </ul>
            </div>
            {/* White Opacity */}
            <div>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc1)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk1)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc2)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk2)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc3)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk3)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc4)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk4)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc5)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk5)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc6)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk6)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc7)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk7)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc8)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk8)" }}
                ></li>
              </ul>
              <ul>
                <li style={{ backgroundColor: "var(--card-bg-wh-opc9)" }}></li>
                <li
                  style={{ backgroundColor: "var(--card-bg-wh-opc-to-bk9)" }}
                ></li>
              </ul>
            </div>
          </div>
          <div className="color_palette_template">
            <Button title="Black Scale" size="h_38" color="green" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default ColorPalette;