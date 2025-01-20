import React, { useState } from 'react';

const App = () => {
  const [feeling, setFeeling] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState(null);
  const [randomJoke, setRandomJoke] = useState(null);

  const responses = {
    šťastný: [
      { text: "To je dobré počuť, len tak ďalej! 😊", image: "https://static8.depositphotos.com/1001435/1011/i/950/depositphotos_10113890-stock-photo-happy-man-outdoor.jpg", video: "" },
      { text: "Dnes je krásny deň, užívajte si ho! 🌞", image: "https://st2.depositphotos.com/3489481/5301/i/450/depositphotos_53010223-stock-photo-free-happy-girl-on-beach.jpg", video: "" },
      { text: "Skvelé, bez šťastia sa nedá žiť.", image: "https://media.istockphoto.com/id/1417009411/photo/a-mature-african-man-looking-ecstatic-while-while-celebrating-and-dancing-by-making-a-fist.jpg?s=612x612&w=0&k=20&c=lDYtbozG2FcTucA-Ng1aD0sQ4vBfFJNU6yIC3iz5zyY=", video: "" },
      { text: "Dúfam že Vám to vydrží čo najdlhšie, zaslúžite si to.", image: "https://img.freepik.com/free-vector/happy-boy-jumping-cartoon-character_1308-105365.jpg?semt=ais_hybrid", video: "" }
    ],
    smutný: [
      { text: "A teraz som smutný aj ja, dúfam že sa z toho dostanete. 😢", image: "https://media.istockphoto.com/id/1302499450/photo/ill-always-be-here-to-support-her.jpg?s=612x612&w=0&k=20&c=EWndCcnZHUJelg-EUjH8vL8uSy11pv_55q2_WpLD5WI=", video: "" },
      { text: "Nebojte sa, všetko bude lepšie! 💙", image: "https://media.istockphoto.com/id/493713836/photo/muslim-man-comforting-a-sad-girl-mourning.jpg?s=612x612&w=0&k=20&c=tzl80iffYO1-O4jyXG5JFSqNlCuCnmnaxyYybPKCd5Y=", video: "" },
      { text: "Nie ste v tom sami, vždy je tu niekto, kto Vám pomôže. 🤗", image: "https://media.istockphoto.com/id/507846502/photo/consoling-her-depressed-boyfriend.jpg?s=612x612&w=0&k=20&c=hagBhzMJeL0cjW00L8C6sKGsR-2jMvB0aFD1l8uwAOM=", video: "" },
      { text: "Skúste si dať chvíľku pre seba, oddýchnite si a doprajte si niečo, čo Vás poteší. 💛", image: "https://media.istockphoto.com/id/976966834/photo/teen-comforting-hes-sad-friend-in-the-night.jpg?s=612x612&w=0&k=20&c=Jqk10Qit9aueYadxWFY-h0_0qKIQWBBEX1Ne9PR6Iyw=", video: "" }
    ],
    neutrálny: [
      { text: "Je v poriadku nič necítiť, snáď sa Vám to skoro prekloní na správnu stranu. 😌", image: "https://c8.alamy.com/comp/DYMBD7/young-white-boy-isolated-on-neutral-background-thinking-about-a-solution-DYMBD7.jpg", video: "" },
      { text: "Pokojný deň je stále dobrý deň. 🍃", image: "https://m.media-amazon.com/images/I/51abhZy-m9L._UXNaN_FMjpg_QL85_.jpg", video: "" },
      { text: "Niekedy je pokoj to najlepšie, čo môžete mať. Len si ho užite. 🕊️", image: "https://img.freepik.com/free-photo/peaceful-view-misty-mountain-lake-serene-mountainous-landscape_181624-41044.jpg", video: "" },
      { text: "Nech už sa Váš deň vyvinie akokoľvek, dúfam, že v ňom nájdete aspoň jeden pekný moment. 🌅", image: "https://t4.ftcdn.net/jpg/09/04/16/63/360_F_904166357_XSbnCURuIFeWc9OTF6cfO8KWXknFK6Tq.jpg", video: "" }
    ],
    unavený: [
      { text: "Vyzerá to, že potrebujete viac oddychu. Dajte si pauzu! 😴", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ek49GXPdudjikbxvCYcbzfeWg9ewGCcKwQ&s", video: "" },
      { text: "Možno by pomohla šálka kávy? ☕", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkK26IMuJz2km_bbkE6Z2C5ANGd7piwNZPw&s", video: "" },
      { text: "Spánok je dôležitý. Skúste si dopriať kvalitný odpočinok. 🛌", image: "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-a-youthful-gentleman-taking-a-rest-on-the-sofa-vector-png-image_37062594.png", video: "" },
      { text: "Dajte si pár hlbokých nádychov, možno to pomôže! 🌬️", image: "https://static01.nyt.com/images/2017/04/11/science/physed-breathing/physed-breathing-superJumbo.jpg", video: "" }
    ],
    nahnevaný: [
      { text: "Hnev je prirodzený, ale skúste sa upokojiť. 🙏", image: "https://parenting.extension.wisc.edu/files/2018/08/meditation-428382_640.jpg", video: "" },
      { text: "Možno pomôže hlboké dýchanie alebo prechádzka. 🏞️", image: "https://www.brainyquote.com/photos_tr/en/a/ajgreen/1176391/ajgreen1-2x.jpg", video: "" },
      { text: "Nezabudnite, že aj toto prejde. 💙", image: "https://www.shutterstock.com/image-illustration/cartoon-illustration-man-calm-down-260nw-1540953236.jpg", video: "" },
      { text: "Počítajte do desať a skúste si oddýchnuť. 🧘‍♂️", image: "https://i1.sndcdn.com/artworks-TbobgbPvSPkSitB0-biumjQ-t500x500.jpg", video: "" }
    ],
    prekvapený: [
      { text: "Wow! Vyzerá to, že ste niečím zaskočený. 😲", image: "https://c8.alamy.com/comp/2MA1YRW/man-surprised-and-standing-isolated-on-a-yellow-background-in-shock-for-surprise-shocked-young-male-looking-amazed-wow-or-omg-expression-for-deal-2MA1YRW.jpg", video: "" },
      { text: "Život je plný prekvapení! 🎁", image: "https://www.azquotes.com/picture-quotes/quote-life-is-full-of-surprises-some-good-some-not-so-good-pablo-escobar-139-50-84.jpg", video: "" },
      { text: "Dúfam, že to bolo príjemné prekvapenie. 🎉", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmqakbHkon3Uah_0J1J9HKVr5KJutbIL_mQQ&s", video: "" },
      { text: "Nečakané situácie robia život zaujímavým!", image: "https://i.pinimg.com/564x/88/c0/24/88c024e07b03b2874eab4b1f940e8f9e.jpg", video: "" }
    ],
    motivovaný: [
      { text: "To je skvelé! Pokračujte v tom! 💪", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCxauULBtlfqTqg5ilNz8xA9cTsuc5d_csw&s", video: "" },
      { text: "Váš cieľ je na dosah! Nevzdávajte sa. 🚀", image: "https://cdn.sanity.io/images/rrlpe8vr/production/ba704a97f091a72ca79598282902dc7aab31a69a-1280x720.jpg?auto=format", video: "" },
      { text: "Úspech patrí tým, ktorí na sebe pracujú. ✨", image: "https://www.shutterstock.com/shutterstock/photos/1784812541/display_1500/stock-photo-young-man-in-the-city-reaching-his-goals-people-inspiration-and-never-giving-up-concept-1784812541.jpg", video: "" },
      { text: "Každý deň je nová šanca na úspech!", image: "https://thumbs.dreamstime.com/b/determined-person-standing-studio-red-cape-waving-around-against-blue-background-young-adult-suit-tie-coming-to-rescue-331141862.jpg", video: "" }
    ],
    otrávený: [
      { text: "Vidím, tak potom dúfam že ja Vám tiež len nezhorším náladu. 🙃", image: "https://media.istockphoto.com/id/1388645996/photo/offended-sad-angry-caucasian-young-man-with-arms-crossed-blowing-his-lips-looking-at-camera.jpg?s=612x612&w=0&k=20&c=lHSHT4C8qYQZQsebn83mT0diGOeVCDfauDjyK83w63o=", video: "" },
      { text: "Zhlboka sa nadýchnite, možno to pomôže! 🧘‍♂️", image: "https://www.shutterstock.com/image-vector/brighten-your-mood-hand-drawn-260nw-2332842159.jpg", video: "" },
      { text: "Možno pomôže malá prestávka alebo prechádzka. Skúste si na chvíľu oddýchnuť. 🌿", image: "https://www.calmsage.com/wp-content/uploads/2020/04/Go-Around-With-Your-Sympathetic-Friends-Relatives.png", video: "" },
      { text: "Keď sa veci hromadia, skúste ich riešiť jednu po druhej. Ste na dobrej ceste. ✊", image: "https://d12d6l12s3d372.cloudfront.net/date_e1461055023739_508395d8d4.jpg", video: "" }
    ],
    bezproblémový: [
      { text: "To je veľmi dobré počuť. Dúfam že moja ponuka Vás v tejto príjemnej nálade udrží. 😃", image: "https://static.vecteezy.com/system/resources/previews/028/054/402/non_2x/satisfied-handsome-young-man-relaxing-on-the-sofa-at-home-smiling-men-enjoying-day-off-lying-on-the-couch-healthy-lifestyle-people-and-holiday-concept-ai-generated-photo.jpeg", video: "" },
      { text: "Len tak ďalej, udržte si ten pokoj! ✨", image: "https://experteditor.com.au/wp-content/uploads/2023/07/remain-calm-under-pressure.png", video: "" },
      { text: "Žiadne starosti dnes? Tak to si zaslúži oslavu! 🎉", image: "https://c8.alamy.com/comp/2J8H61T/calm-mindful-old-60s-business-man-break-sit-at-home-on-couch-meditating-breathing-exercise-feel-no-stress-relief-relaxing-after-work-problem-senior-2J8H61T.jpg", video: "" },
      { text: "Pokračujte v tejto nálade, svet patrí Vám. 🌎", image: "https://www.wikihow.com/images/thumb/2/24/Calm-Someone-Down-Who-Is-Nervous-Step-13.jpg/-crop-432-336-432px-nowatermark-Calm-Someone-Down-Who-Is-Nervous-Step-13.jpg", video: "" }
    ],
    zobudený: [
      { text: "Tak to potom dúfam že Vám ponúknem skvelý spôsob ako začať dnešný deň. ☕", image: "https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/blogposts/howtowakeupwithanunstoppableattitude.jpg", video: "" },
      { text: "Dobré ráno! Nezabudnite si dať raňajky. 🍞", image: "https://media.istockphoto.com/id/1054282608/photo/its-time-to-wake-up.jpg?s=612x612&w=0&k=20&c=p5ZDRaaFvJ4vGPcWCkkaTrpFVg8Rjm9oY3vD_RqrJ4Q=", video: "" },
      { text: "Dobrý začiatok dňa znamená dobrý deň. Nezabudnite sa usmiať! 😊", image: "https://media.istockphoto.com/id/1149534440/photo/mixed-race-woman-enjoying-morning.jpg?s=612x612&w=0&k=20&c=lk01jdiQbo6x17HBmtRGSlaFgmckKOXNXAH9_gg1Ixk=", video: "" },
      { text: "Skúste si dať pár minút na ranné cvičenie alebo meditáciu, uvidíte ten rozdiel. 🌅", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1A2Rgv78pv5hKAFWNzcovm7UsyTfaapcrQ&s", video: "" }
    ]
  };

  const jokes = [
    "Prečo nemôže kostra hrať futbal? Lebo nemá gule! ⚽😂",
    "Čo povie nula osmičke? Pekný opasok! 😆",
    "Prečo išiel paradajkový džús na koncert? Lebo mal vstuPENKU! 🎶🤣",
    "Viete, čo je najväčšia irónia? Keď hasič zhorí v práci. 🔥😂",
    "Keď ťa niečo trápi, pamätaj: Kečup bol kedysi len rajčina s veľkými snami. 🍅💭😂",
    "Čo robí had, keď je zúrivý? Zhadzuje kožu! 🐍😆",
    "Aký je rozdiel medzi manželkou a teroristom? S teroristom sa dá vyjednávať. 💣😂",
    "Čo spraví stena, keď do nej narazíš? Vezme si to osobne! 🧱🤣",
    "Prečo sa počítač rozplakal? Lebo mal príliš veľa otvorených okien! 🖥️😂",
    "Aký je obľúbený šport elektriny? Skratový beh! ⚡🏃‍♂️😆"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (feeling) {
      const randomResponse = responses[feeling][Math.floor(Math.random() * responses[feeling].length)];
      setResponse(randomResponse);
      setSubmitted(true);
    }
  };

  const getRandomJoke = () => {
    setRandomJoke(jokes[Math.floor(Math.random() * jokes.length)]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", height: "100vh", justifyContent: "center" }}>
      <h1>Vitajte v Mood-Up!</h1>
      <h1>Jednoduchej aplikácií ktorá sa na nič nehrá a chce Vám len rýchlo spríjemniť deň.</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <label>
            Ako sa dnes cítite?
            <br />
            <select
              value={feeling}
              onChange={(e) => setFeeling(e.target.value)}
              style={{ padding: "10px", fontSize: "16px", margin: "10px 0" }}
            >
              <option value="">Vyberte si možnosť</option>
              <option value="šťastný">Šťastne</option>
              <option value="smutný">Smutne</option>
              <option value="neutrálny">Neutrálne</option>
              <option value="unavený">Unavene</option>
              <option value="nahnevaný">Nahnevane</option>
              <option value="prekvapený">Prekvapene</option>
              <option value="motivovaný">Motivovane</option>
              <option value="otrávený">Otrávene</option>
              <option value="bezproblémový">Bezproblémovo</option>
              <option value="zobudený">Práve som vstal</option>
            </select>
          </label>
          <br />
          <button type="submit" style={{ padding: "10px 20px", fontSize: "16px" }}>Potvrdiť</button>
        </form>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Odpoveď:</h2>
          <p>{response?.text}</p>
          
          {response?.image && <img src={response.image} alt="Odpoveď" width="300px" style={{ marginTop: "10px" }} />}
          
          {response?.video && (
            <video width="300px" controls style={{ marginTop: "10px" }}>
              <source src={response.video} type="video/mp4" />
              Váš prehliadač nepodporuje prehrávanie videa.
            </video>
          )}
  
          <br />
          <button onClick={() => setSubmitted(false)} style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px" }}>Naspäť</button>
        </div>
      )}
     <label>
     Ak ťa naše motivačné obrázky a texty nezaujali, aspoň ti ponúkneme vtipy zadarmo.

     <br />

     {/* New Button for Random Joke */}
     <button onClick={getRandomJoke} style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px" }}>Daj mi vtip!</button>

     {/* Display Random Joke */}
     {randomJoke && <p style={{ marginTop: "10px", fontSize: "18px", fontStyle: "italic" }}>{randomJoke}</p>}
     </label>
    </div>
  );
};
export default App;