import React, { Component } from 'react';
import './SiteNotice.css';
import instagram from './assets/instagram.svg';

class SiteNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render() {
    let className = 'SiteNotice-overlay';
    if (this.state.toggle) {
      className += ' open';
    }

    let aboutTextSmall = (<div className="SiteNotice-AboutText--small">
    <h1>Wie geht's dir, Europa?</h1>
    <p>Zur Europawahl am 26. Mai 2019 verknüpfen wir Fotos von Willy Pragher mit Twitter-Statements zum Thema EU & Europa.</p>
    <p>Die Website entstand während des Coding da Vinci Süd 2019.
      Dank geht an das Landesarchiv Baden-Württemberg & das Leo-BW für die Bereitstellung der Fotos von Willy Pragher. Fotos & Metadaten werden unter einer CC-BY- bzw. CC0-Lizenz bereitgestellt.</p>
    <ul>
      <li><a href="https://codingdavinci.de/events/sued/" target="_blank" rel="noopener noreferrer">
        <span role="img" aria-label="list item">⏩ </span>Coding da Vinci Süd</a>
      </li>
      <li><a href="https://www.landesarchiv-bw.de/web/49486" target="_blank" rel="noopener noreferrer">
        <span role="img" aria-label="list item">⏩ </span>Sammlung Willy Pragher des LABW</a>
      </li>
      <li><a href="https://github.com/gerdesque/wiegehtsdireuropa" target="_blank" rel="noopener noreferrer">
        <span role="img" aria-label="list item">⏩ </span>Github</a>
      </li>
    </ul>
    <p>Wir (<a href="https://twitter.com/AnkaTrabantka" target="_blank" rel="noopener noreferrer">Anne</a>, <a href="https://twitter.com/gerdesque" target="_blank" rel="noopener noreferrer">Gerd</a>, Agata und Veronika) sind junge Menschen, die mit diesem Projekt neue Perspektiven auf Europa aufzeigen wollen.</p>
    <p><a href="https://twitter.com/hashtag/wiegehtsdireuropa" target="_blank" rel="noopener noreferrer">#wiegehtsdireuropa</a></p>
  </div>)

    let aboutText = (<div className="SiteNotice-AboutText">
      <h1>Wie geht's dir, Europa?</h1>
      <p>Sonntag, 10.30 Uhr - wach, aufgeregt, zukunftsoptimistisch #EUphorisch. Geht´s dir heute auch so, Europa?</p>
      <p>Keine hundert Jahre liegen zwischen den Fotografien von Willy Pragher und unserer twitteraffinen Zeit.
      Anlässlich der Europawahl am 26. Mai 2019 bringen wir die fotografischen Momentaufnahmen des letzten Jahrhunderts mit
      aktuellen Statements zum Thema EU und Europa von TwitternutzerInnen zusammen. Was dabei herauskommt, sind positive und
      negative, manchmal sogar witzige und überraschende Memes zum Thema Europa.</p>
      <p>Diese Website entstand im Rahmen des Kulturhackathons Coding da Vinci Süd von April bis Mai 2019.
      Wir danken dem Landesarchiv Baden-Württemberg sowie dem Leo-BW für die Bereitstellung der wundervollen Fotos von Willy Pragher,
      welche die 1920er bis 1940er Jahre aus der hochästhetischen Perspektive eines Berufsfotografen zeigen.
      Die Fotos wurden unter einer CC-BY-Lizenz bereitgestellt, die dazugehörigen Metadaten unter einer CC0-Lizenz.</p>
      <ul>
        <li><a href="https://codingdavinci.de/events/sued/" target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="list item">⏩ </span>Infos zum Coding da Vinci Süd</a>
        </li>
        <li><a href="https://www.landesarchiv-bw.de/web/49486" target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="list item">⏩ </span>Link zur Sammlung Willy Pragher innerhalb des Landesarchivs Baden-Württemberg</a>
        </li>
        <li><a href="https://github.com/gerdesque/wiegehtsdireuropa" target="_blank" rel="noopener noreferrer">
          <span role="img" aria-label="list item">⏩ </span>Githubprofil zum Projekt</a>
        </li>
      </ul>
      <p>Wir (<a href="https://twitter.com/AnkaTrabantka" target="_blank" rel="noopener noreferrer">Anne</a>, <a href="https://twitter.com/gerdesque" target="_blank" rel="noopener noreferrer">Gerd</a>, Agata und Veronika) sind ein Team von historisch, technisch und fotografisch interessierten jungen EuropäerInnen,
      die Bilder des früheren europäischen Kontinents mit Stimmen aus der heutigen EU zusammenbringen wollten, um damit neue Perspektiven auf die aktuellen Herausforderungen zu geben.</p>
      <p><a href="https://twitter.com/hashtag/wiegehtsdireuropa" target="_blank" rel="noopener noreferrer">#wiegehtsdireuropa</a></p>
    </div>)

    var twitterProjectUrl = 'https://twitter.com/AnkaTrabantka';
    var instagramProjectUrl = 'https://www.instagram.com/ankatrabantka/';
    return (
      <div className="SiteNotice">
        Folge uns auf
        <a className="resp-sharing-button__link" href={instagramProjectUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
          <div className="resp-sharing-button resp-sharing-button--instagram">
            <div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
            <img src={instagram} alt="Instagram logo"/>
            </div>
          </div>
        </a>
        <a className="resp-sharing-button__link" href={twitterProjectUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
          <div className="resp-sharing-button resp-sharing-button--twitter">
            <div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
            </div>
          </div>
        </a>
        <span className="SiteNotice-About resp-sharing-button__link" onClick={this.toggle}/>
        <div className={className}>
          <div class="close icon" onClick={this.toggle}></div>
          {aboutTextSmall}{aboutText}
        </div>
      </div>
    );
  }
}

export default SiteNotice;
