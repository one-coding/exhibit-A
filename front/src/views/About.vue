<template>
  <div class="about">
    <span class="back-img">無爲</span>
    <div class="info-header">
      <h1 class="info-header_text">작가 노트</h1>
    </div>

    <!-- 동그라미 버튼 -->
    <div
      class="elipse"
      @click="onClickTop"
      :class="{ elipseFull: isTop }"
      style="top: 46%"
    ></div>
    <div
      class="elipse"
      @click="onClickMiddle"
      :class="{ elipseFull: isMiddle }"
    ></div>
    <div
      class="elipse"
      @click="onClickBottom"
      style="top: 54%"
      :class="{ elipseFull: isBottom }"
    ></div>
    <!-- 좌우 버튼 -->
    <div class="left_btn-div">
      <router-link to="/">
        <button class="left_btn">
          <font-awesome-icon icon="chevron-left" />
        </button>
      </router-link>
    </div>
    <div class="right_btn-div">
      <router-link to="/exhibit">
        <span>작품감상</span>
        <button class="right_btn">
          <font-awesome-icon icon="chevron-right" />
        </button>
      </router-link>
    </div>
    <div class="info-main">
      <p>
        ‘무위(無爲)’란 자연에 따라 행하고 인위를 가하지 않는 것, <br />
        인간의 지식이나 욕심이 오히려 세상을 혼란시킨다고 여기고 <br />
        자연그대로를최고의 경지로 본다는 동양 철학 사상에서 나오는 법술이다.
        <br /><br />나약하고 애처로운 한 인간이 생의 간고함속에서 역설적으로
        터득하게 되는 무욕과 무위의 삶의 자세를 <br />
        예술을 통해 진정성 있게 수행하고자 하는 염원을 담아 전시를 기획하고
        준비하였다.
        <br /><br />전시작들은 공통된 동양철학적 주제를 토대로 다양한 예술
        장르를 통합한 생성과, 새로움에 대한 도전, <br />
        화합과 공존을 향한 다원예술을 기대하며 구현해 낼 수 있는 방안을
        모색하고자 <br />나름대로 시도했던 작업으로 평면 드로잉작품과
        한국전통무용을 융합한 작품들이다. <br /><br />평면 드로잉 작업을 통해
        구현했던, 표현하고자 하는 철학적 내용이 <br />무용예술과의 조합을 통해
        역동적이며 극적인 효과로 심도 있게 표현되며 기존의 회화를 벗어나
        <br />새로운 공간적 조형 형태로서 표현되는 또 다른 무엇인가를 만들고자
        노력하였다.<br /><br />
        우리나라는 고대로부터 내려온 민간신앙과 불교가 정신적 지주로서 바탕을
        이뤘고 <br />지금까지도 그 정신적 기조로 우리 생활에서 자리 잡고
        있으며<br />
        대표적 전통춤인 살풀이, 승무, 북춤 등에는 이러한 신명과 즉흥성, 감정을
        맺고 풀어가는 춤사위가 고스란히 담겨있다.<br /><br />
        전통춤은 어떠한 격식이나 일정한 법도가 필요치 않고 서민들의 정서와
        소박한 감정을 적나라하게 표출한다.<br />
        마음으로 추기 때문에 자연스럽고, 즉흥적으로 추기 때문에 흥이 나오고
        신명과 멋이 나오는 것이며 <br />‘춘다’기 보다는 ‘추어지다’라고 하는 것이
        정확한 표현이다. <br /><br />그야말로 ‘저절로’추어지는 것이고 일부로
        꾸미지 않고 자연의 이치처럼 무위(無爲)적인 세계를 추구하는 것이다.<br />우리의
        한국무용은 자연합일(自然合一)로서 음양의 이치를 깨우치고 자연이 운행되고
        있는 모습을 닮아 가는 것이다. <br />융합속의 나의 드로잉과 한국 전통
        무용은 완연하게 다른 장르의 예술이지만 <br />완벽한 자연의 이치와 그
        모습을 닮고자 단련해가는 예술의 과정으로 라는 <br />공통된 철학적 사상을
        구심으로 상생을 통한 생성을 목적으로 하나로 묶어본다.
      </p>
    </div>
    <div class="info-header">
      <h1 class="info-header_text">작가 소개</h1>
    </div>
    <div class="info-main">
      <pre>
<span>최 은 정  </span>

        ■ 원광대학교 미술대학 서양화 과 졸업 
        ■ 예원대 문화예술대학원 미술학과 졸업
        
        ■ 현 소속) 
                    (사)한국미술협회. (사)한국창조미술협회.전북여성미술협회
                    현대 드로잉회 .  노령회 . 아트회
                                   
        ■ 경력 
                - 문화마실 기획 초대 개인전                 (임실 문화마실 도화지 갤러리)
                - 전라북도교육청 초대 개인전              (전라북도 교육청사 갤러리)
                - 전북미술협회 40회 기념초대전           (전북 도립미술관)
                - 현대드로잉 대전 ~ 익산 교류전           (익산 W미술관) 
                - 전북여성미술협회 단체전                (전북도청사 갤러리)
                - 임실예술제 드로잉 퍼포먼스             (임실 군민회관)
                - 한국창조미술협회 전북지회 창립전         (완주 복합문화 지구 - 누에)
                - 임실문화마실 개관기념 초대전            (임실 문화마실 도화지갤러리)
                - 한국미술협회 임실지부 창립전            (임실군 문화원)
                - 아트회&청소년미술 단체전               (솜리문화예술회관)
                 외 다수 전시

        </pre>
      <pre id="name-choi2">
<span> 최 세 영  </span>

        ■ 서울교육대학교 대학원 졸업
        ■ 인천시무형문화재 제10-나호 범패·나비춤 이수자 
        ■ 서울시 무형문화재 제46호 살풀이춤 연수회 교육과정 수료

    ■ 경력
        - 한국민속음악원 정기발표회 한국전통춤 공연 - 강서구민회관
        - 인천무형문화재 합동발표회 범패와 작법무 외 한국전통춤 공연 -인천종합문화예술회관
        - 문화재 초청공연 범패와 작법무 - 국립민속박물관
        - 부처님오신날 기념 전통문화축제한마당 주관 및 공연 범패와 작법무 공연 – 인천종합문화예술회관 광장
        - 국외 일본공연 “한,일 문화교류  한국전통무용의 밤”공연 –스끼지 혼간지
        - 무형문화재 정기 합동공연 범패와 작법무, 한국전통춤 공연  - 인천종합문화에술회관
        - 인천 종합 어시장 축제 공연 – 연안부두 야외무대
        - 무형문화재 전통예술 대제전 공연 -인천종합문화예술회관           
        - “전통문화예술축제” – 인천종합문화예술회관 야외광장
        - 상반기 문화재 초청 상설공연 – 수봉공원 국악회관 공연
        - 제14회 청주 전국무용대회 일반부예술무용 장려상(살풀이춤)
        - 제1회 세종전국무용경연대회  한국무용 전통 금상(살풀이춤) 
        - 제1회 세종전국무용경연대회  한국무용 창작 군무(춤춘향장구춤) 

    </pre>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    document.documentElement.style.overflowY = "scroll";
    document.documentElement.style.overflowX = "hidden";
    window.addEventListener("scroll", this.isTopTrue);
  },
  mounted() {
    document.documentElement.style.overflowY = "scroll";
    document.documentElement.style.overflowX = "hidden";
    window.addEventListener("scroll", this.isTopTrue);
  },
  data() {
    return {
      isTop: true,
      isMiddle: false,
      isBottom: false,
    };
  },
  methods: {
    onClickTop() {
      console.log("hello");
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    onClickMiddle() {
      console.log("hello");
      window.scroll({
        top: 900,
        left: 0,
        behavior: "smooth",
      });
    },
    onClickBottom() {
      window.scroll({
        top: 2000,
        left: 0,
        behavior: "smooth",
      });
    },
    isTopTrue() {
      console.log(this.isTop);
      if (window.pageYOffset >= 900 && window.pageYOffset < 1300) {
        console.log(window.pageYOffset);
        this.isTop = false;
        this.isMiddle = true;
        this.isBottom = false;
      } else if (window.pageYOffset <= 900) {
        this.isTop = true;
        this.isMiddle = false;
        this.isBottom = false;
      } else if (window.pageYOffset >= 1300) {
        this.isTop = false;
        this.isMiddle = false;
        this.isBottom = true;
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap");

h1 {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2rem;
}
.back-img {
  position: absolute;
  top: 120px;
  right: -200px;
  width: 1000px;
  height: 700px;
  font: normal normal normal 500px/600px Slidechunfeng;
  letter-spacing: 0px;
  color: #d8d8d8;
  opacity: 0.6;
  z-index: -999;
}

.info-header {
  display: block;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
  letter-spacing: 0px;
  color: #191919;
  width: 1400px;
  text-align: center;
  margin: auto;
  line-height: 1.4;
  padding: 100px 0px 40px 120px;
}
.info-header h1 {
  font-size: 2rem;
  text-align: left;
}
.info-main {
  display: block;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: 0px;
  color: #191919;
  width: 1200px;
  text-align: center;
  margin: auto;
  font-size: 18px;
  line-height: 1.4;
  padding: 0px 0px 40px 160px;
}
.info-main p {
  text-align: left;
}
.info-main pre {
  text-align: left;
}
.info-main span {
  font-size: 22px;
  font-weight: bold;
}

.elipse {
  margin-top: 10px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #19caea;
  opacity: 1;
  position: fixed;
  top: 50%;
  left: 10%;
  cursor: pointer;
}
.elipse:active {
  background: #19caea 0% 0% no-repeat padding-box;
}
.elipseFull {
  background: #19caea 0% 0% no-repeat padding-box;
}
.left_btn-div {
  position: fixed;
  top: 50%;
  left: 5%;
}
.left_btn {
  outline: none;
  border: none;
  background: none;
  color: #0c606f;
  font-size: 30px;
  cursor: pointer;
}

.right_btn-div {
  position: fixed;
  display: flex;
  align-items: center;
  top: 50%;
  right: 5%;
}
.right_btn {
  outline: none;
  border: none;
  background: none;
  color: #0c606f;
  font-size: 30px;
  cursor: pointer;
}
.right_btn-div span {
  text-align: center;
  font: normal normal normal 18px/24px;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: 1.8px;
  color: #0c606f;
}
.right_btn-div a {
  display: flex;
  align-items: center;
}
</style>
