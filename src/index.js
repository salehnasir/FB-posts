import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import google from "./img/google.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import karachi from "./img/karachi.jpg"
import smit from "./img/smit.jpg"
import { HandThumbsUp , ChatLeftText, Share } from "react-bootstrap-icons";
import profileImg from "./img/profile.jpeg";



function Post(props) {
  return (
    <div className="post">
      <div className="postHead">
        <img src={props.profileImg} width={65} height={65} alt="" />
        <div>
          <h1> {props.name} </h1>
          <div className="date"> {props.date}</div>
        </div>
      </div>

      <p> {props.text}</p>

      <img className="postImg" src={props.img} alt="" />
      <hr/>
      <div className="share">
     <HandThumbsUp /> 

     <sapn className=
     "right">9 comments  4 shares</sapn>
     </div>
      <hr/>

      <div className="postFooter">
        <div className="button">
          <HandThumbsUp />
          Like
        </div>
        <div className="button">
          <ChatLeftText /> Comment
        </div>
        <div className="button">
          <Share /> Share
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Post
      profileImg={smit}
      name="Saylani Mass It Training Program"
      date="27-Aug-2023 5:00 pm"
      img="https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/371036915_678383130981029_5289238741634898104_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHeuLZARKsSgeEKVanwdhvlIijr3KLIbVsiKOvcoshtW_heTXGkqXfei7ObzYMzp_gcJAp5gbAqUqUHVG1aLJN-&_nc_ohc=Gu5lyljjR9AAX8Er9Hp&_nc_ht=scontent.fkhi6-2.fna&oh=00_AfADyWRRmGop7H9gRiLSl4zyQuFsItiJlWxGoggY3ZGnxA&oe=64EE8437"
      commit=""
      text="Dear Youth of Peshawar (Only Males)
      We have organized an amazing work shop on chatbot development for all of you on Monday at SMIT Peshawar Campus at 04Pm sharp.
      Speaker: Muhammad Inzamam Malik
      Campus location link: https://goo.gl/maps/SpDf8yY7orY9yvCY8
      We have limited seats available for the session, So hurry up & book your slot.
      Book your slot through this link: https://forms.gle/pW7xaEQHjKCqdHiNA
      #SaylaniWelfareTrust #smitpeshawar #spreadsmit #ITRevolution #Peshawar #chatbotdevelopment"
    />
    <Post
      profileImg={google}
      name="Ai Google"
      date="3days "
      img="https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/368215784_648763160692377_818113420389344232_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFceVsxdIRyIatJr5VPZfokrGIQP1C-qw6sYhA_UL6rDmUJZz_0fDapl_W0QDxHuxyBLBVWpZ-qywrQLlnLbuGO&_nc_ohc=ejAFQpkteOUAX-lnQjy&_nc_ht=scontent.fkhi6-1.fna&oh=00_AfDcXbtLlYb7QMVeXLpWMvP7ITuEXQ6ZwbPveVbIz5z20g&oe=64EFB144"
      commit="nasir"
      text="Highlights: you can personalize your own AI, you teach your own AI, this feature is loved by experts and users alike, available in all countries, available in all languages language, automatically answer in your language, can ask for voice answers, can ask AI to sing, read poetry, read stories.... much smarter and unique than the old version.
      For marketers, it's an indispensable tool for you to compete in this increasingly difficult environment, and you'll achieve new breakthroughs beyond the competition when our AI powers it."
    />
    <Post
      profileImg={karachi}
      name="Karachi Alerts"
      date="5day"
      img="https://scontent.fkhi6-1.fna.fbcdn.net/v/t39.30808-6/369706839_672251414934896_6200807492285369863_n.jpg?stp=dst-jpg_s600x600&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFENoeaPaHkPsUFbvySL1rfk4XFYA3kGrmThcVgDeQauQhphwFLBv0ypA7HBvXaqopCFR2eecqWwKgp2EfIKSnN&_nc_ohc=6WU-7GDKlS4AX8-qk93&_nc_ht=scontent.fkhi6-1.fna&oh=00_AfBsw_7DpscUzUA5ExZAsb0sq9VeCHOsIeifat8De9o0Hg&oe=64EEA97E"
     
      commit=""
      
      text="کراچی: ناظم امتحانات جامعہ کراچی ڈاکٹرسید ظفرحسین کے مطابق انرولمنٹ ورجسٹریشن سیکشن کی نئی عمارت میں منتقلی کی وجہ سے انرولمنٹ ورجسٹریشن سیکشن میں پبلک ڈیلنگ30 اگست تک معطل رہے گی۔"

    />
  </div>,
  document.querySelector("#root")
);

