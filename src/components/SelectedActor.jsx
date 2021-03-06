import React, { Component } from "react";

// CSS
import "../css/SelectedActor.css";

class SelectedActor extends Component {
  render() {
    return (
      <div className="SelectedActorWrap">
        <div className="ActorCard">
          <div className="ActorPic" />
          <div className="ActorInfo">
            <div className="ActorName">
              <span>
                {"Clint Eastwood"}
              </span>
            </div>
            <span className="ActorPlace">
              {"San Francisco, California, USA"}
            </span>
            <span className="ActorBirth">
              {"1930/05/31"}
            </span>
            <div className="AboutActorText">
              <p>
                {
                  "Clinton \"Clint\" Eastwood, Jr. (born May 31, 1930) is an American film actor, director, producer, composer and politician. Following his breakthrough role on the TV series Rawhide (1959–65), Eastwood starred as the Man with No Name in Sergio Leone's Dollars Trilogy of spaghetti westerns (A Fistful of Dollars, For a Few Dollars More, and The Good, the Bad and the Ugly) in the 1960s, and as San Francisco Police Department Inspector Harry Callahan in the Dirty Harry films (Dirty Harry, Magnum Force, The Enforcer, Sudden Impact, and The Dead Pool) during the 1970s and 1980s. These roles, along with several others in which he plays tough-talking no-nonsense police officers, have made him an enduring cultural icon of masculinity.\n\nEastwood won Academy Awards for Best Director and Producer of the Best Picture, as well as receiving nominations for Best Actor, for his work in the films Unforgiven (1992) and Million Dollar Baby (2004). These films in particular, as well as others including Play Misty for Me (1971), The Outlaw Josey Wales (1976), Pale Rider (1985), In the Line of Fire (1993), The Bridges of Madison County (1995), and Gran Torino (2008), have all received commercial success and/or critical acclaim. Eastwood's only comedies have been Every Which Way but Loose (1978) and its sequel Any Which Way You Can (1980); despite being widely panned by critics they are the two highest-grossing films of his career after adjusting for inflation.\n\nEastwood has directed most of his own star vehicles, but he has also directed films in which he did not appear such as Mystic River (2003) and Letters from Iwo Jima (2006), for which he received Academy Award nominations and Changeling (2008), which received Golden Globe Award nominations. He has received considerable critical praise in France in particular, including for several of his films which were panned in the United States, and was awarded two of France's highest honors: in 1994 he received the Ordre des Arts et des Lettres medal and in 2007 was awarded the Légion d'honneur medal. In 2000 he was awarded the Italian Venice Film Festival Golden Lion for lifetime achievement.\n\nSince 1967 Eastwood has run his own production company, Malpaso, which has produced the vast majority of his films. He also served as the nonpartisan mayor of Carmel-by-the-Sea, California, from 1986 to 1988. Eastwood has seven children by five women, although he has only married twice. An audiophile, Eastwood is also associated with jazz and has composed and performed pieces in several films along with his eldest son, Kyle Eastwood.\n\nDescription above from the Wikipedia article Clint Eastwood, licensed under CC-BY-SA, full list of contributors on Wikipedia."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedActor;
