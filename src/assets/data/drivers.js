import ferrari_1 from "../img/drivers/ferrari_1.png";
import ferrari_2 from "../img/drivers/ferrari_2.png";
import redbull_1 from "../img/drivers/redbull_1.png";
import redbull_2 from "../img/drivers/redbull_2.png";
import mercedes_1 from "../img/drivers/mercedes_1.png";
import mercedes_2 from "../img/drivers/mercedes_2.png";
import mclaren_1 from "../img/drivers/mcLaren_1.png";
import mclaren_2 from "../img/drivers/mcLaren_2.png";
import racingbull_1 from "../img/drivers/racingbull_1.png";
import racingbull_2 from "../img/drivers/racingbull_2.png";
import alpin_1 from "../img/drivers/alpin_1.png";
import alpin_2 from "../img/drivers/alpin_2.png";
import hass_1 from "../img/drivers/hass_1.png";
import hass_2 from "../img/drivers/hass_2.png";
import aston_1 from "../img/drivers/aston_1.png";
import aston_2 from "../img/drivers/aston_2.png";
import williams_1 from "../img/drivers/williams_1.png";
import williams_2 from "../img/drivers/williams_2.png";
import kicksauber_1 from "../img/drivers/kickSauber_1.png";
import kicksauber_2 from "../img/drivers/kickSauber_2.png";
import monaco_flag from "../img/drivers/Monaco.png";
import uk_flag from "../img/drivers/unitedkingdom.png";
import bg_leclerc from "../img/drivers/driverdetail_bg.png";
import bg_russell from "../img/drivers/driverdetail_bg_3.png";

export const allDrivers = [
  // Ferrari
  {
    id: "ferrari_1",
    name_e: "Charles Leclerc",
    name_k: "샤를 르클레르",
    img: ferrari_1,
    team: "Ferrari",
    country: "Monaco",
    countryImg: monaco_flag,
    number: "#16",
    birth: "1997.10.16",
    bgImg: bg_leclerc,
    stats: [
      { label: "페라리 DNA", value: 10 },
      { label: "레이스 페이스", value: 8.5 },
      { label: "추월 능력", value: 7.5 },
      { label: "수비 주행", value: 7.5 },
      { label: "타이어 관리", value: 8.0 },
      { label: "레이스 판단력", value: 8.0 },
      { label: "스타트 성력", value: 7.5 },
      { label: "순위 회복력", value: 8.5 }
    ],
    quote: "I gave everything. That’s all I could do."
  },
  {id: "ferrari_2", name_e: "Lewis Hamilton",name_k: "루이스 해밀턴", img: ferrari_2, team: "ferrari"},

  // Red Bull
  { id: "redbull_1", name_e: "Max Verstappen", name_k: "막스 베르스타펜", img: redbull_1, team: "redbull" },
  { id: "redbull_2", name_e: "Yuki Tsunoda", name_k: "유키 츠노다", img: redbull_2, team: "redbull" },

  // Mercedes
  { id: "mercedes_1", name_e: "Kimi Antonelli", name_k: "키미 안토넬리", img: mercedes_1, team: "mercedes" },
  {
    id: "mercedes_2",
    name_e: "George Russell",
    name_k: "조지 러셀",
    img: mercedes_2,
    team: "Mercedes",
    country: "UK",
    countryImg: uk_flag,
    number: "#63",
    birth: "1998.02.15",
    bgImg: bg_russell,
    stats: [
      { label: "퀄리파잉 퍼포먼스", value: 9.5 },
      { label: "주행 정확도", value: 9.0 },
      { label: "데이터 이해력", value: 9.5 },
      { label: "머신 안정 활용", value: 9.0 },
      { label: "계산된 공격성", value: 8.5 },
      { label: "레이스 일관성", value: 8.5 },
      { label: "리더십 성장성", value: 8.5 },
      { label: "실수 억제력", value: 9.0 }
    ],
    quote: "I know my time will come — I just need to keep performing."
  },

  // McLaren
  { id: "mclaren_1", name_e: "Oscar Piastri", name_k: "오스카 피아스트리", img: mclaren_1, team: "mclaren" },
  { id: "mclaren_2", name_e: "Lando Norris", name_k: "랜도 노리스", img: mclaren_2, team: "mclaren" },

  // Aston Martin
  { id: "aston_1", name_e: "Fernando Alonso", name_k: "페르난도 알론소", img: aston_1, team: "aston" },
  { id: "aston_2", name_e: "Lance Stroll", name_k: "랜스 스트롤", img: aston_2, team: "aston" },

  // Alpine
  { id: "alpin_1", name_e: "Franco Colapinto", name_k: "프란코 콜라핀토", img: alpin_1, team: "alpin" }, 
  { id: "alpin_2", name_e: "Pierre Gasly", name_k: "피에르 가슬리", img: alpin_2, team: "alpin" },

  // Haas
  { id: "hass_1", name_e: "Oliver Bearman", name_k: "올리버 베어먼", img: hass_1, team: "hass" },
  { id: "hass_2", name_e: "Esteban Ocon", name_k: "에스테반 오콘", img: hass_2, team: "hass"},

  // Racing Bulls
  { id: "racingbull_1", name_e: "Liam Lawson", name_k: "리암 로슨", img: racingbull_1, team: "racingbull"},
  { id: "racingbull_2", name_e: "Isack Hadjar", name_k: "아이작 하자르", img: racingbull_2, team: "racingbull"},

  // Williams
  { id: "williams_1", name_e: "Carlos Sainz", name_k: "카를로스 사인즈", img: williams_1, team: "williams"},
  { id: "williams_2", name_e: "Alexander Albon", name_k: "알렉산더 알본", img: williams_2, team: "williams"},

  // Kick Sauber
  { id: "kicksauber_1", name_e: "Gabriel Bortoleto", name_k: "가브리엘 보르톨레토", img: kicksauber_1, team: "kicksauber"},
  { id: "kicksauber_2", name_e: "Nico Hülkenberg", name_k: "니코 훌켄버그", img: kicksauber_2, team: "kicksauber"},
];
