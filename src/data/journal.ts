export type JournalBlock = {
  kind: "heading" | "paragraph" | "bullet" | "quote";
  text: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  date: string;
  lang: "EN" | "DE";
  readTime: string;
  excerpt: string;
  blocks: JournalBlock[];
};

export const featuredJournal = {
  eyebrow: "Featured Journal Essay",
  title: "In the Valley of Tears",
  intro:
    "Essays and field notes on strategic narrative, sovereign leadership, and the art of holding ground in high-stakes positions.",
  lines: [
    "There comes a moment when you’re at rock bottom and you ask yourself: Where is all this leading?",
    "In The Hat and the Hill I call this place the Valley of Tears. However, I had known him long before I gave him a name in the book.",
    "Perhaps you know him too. You know pretty well that something is coming to an end. You just don’t know what comes next.",
  ],
};

export function getFeaturedJournal(locale: "en" | "de") {
  if (locale === "de") {
    return {
      eyebrow: "Aktueller Journal-Beitrag",
      title: "In the Valley of Tears",
      lines: [
        "Es kommt ein Moment, in dem man ganz unten steht und sich fragt: Wohin führt das alles?",
        "In ‚The Hat and the Hill‘ nenne ich diesen Ort das Tal der Tränen – obwohl ich ihn schon kannte, lange bevor ich ihm im Buch einen Namen gab.",
        "Vielleicht kennen Sie ihn auch. Sie spüren genau, dass etwas zu Ende geht. Sie wissen nur noch nicht, was als Nächstes kommt.",
      ],
    };
  }
  return featuredJournal;
}

export const journalPosts: JournalPost[] = [
  {
    "slug": "leistungsfahigkeit-karriere-und-gesundheit-von-frauen-unter-einfluss-von-schwankenden-hormonen",
    "title": "Leistungsfähigkeit, Karriere und Gesundheit von Frauen unter Einfluss schwankender prämenopausaler Hormone.",
    "date": "2024-05-16",
    "lang": "DE",
    "excerpt": "Wie Mitarbeiterinnen mit gezielten Maßnahmen ihre Balance finden, Kollegen besseres Verständnis für sie bekommen und Teams in Unternehmen insgesamt besser performen.",
    "blocks": [
      {
        "kind": "heading",
        "text": "1001 heiße Nacht. Mindestens"
      },
      {
        "kind": "paragraph",
        "text": "Ihre Frau ist – heiß! Sie ist richtig heiß, wortwörtlich! Nachts wälzt sie sich schweißgebadet und glühend heiß im Bett, findet keine Ruhe, stöhnt, wechselt den Bettlaken und ihr SeidenNegligé. Nein, den Verdienst können Sie sich wieder Mal nicht zuschreiben. 😉 Tatort: Küche am nächsten Morgen. Erschlagen von der Müdigkeit dieser schlaflosen Nächte , flucht sie: „Für eine kurze Weile dachte ich, da die die Kinder größer wurden, dass endlich dieser Libido, schlanke Figur und Schönheit spendende Schlaf nie wieder verschwinden würde! Wie man sich gern irrt!“"
      },
      {
        "kind": "heading",
        "text": "Es ist nicht Ihre Schuld"
      },
      {
        "kind": "paragraph",
        "text": "Es ist aber nicht Ihre Schuld, dass Sie sich so fühlen und nicht mal ahnen, woher nun dieser heiße Wind weht. Denn Sie haben eine Ablenkerin, Ihre noch immer regelmäßig auftauchende Periode, die in Ihrem Alter (so ab Mitte 40) eine Art Ablenkungsmanöver der Natur ist. Denn dadurch hält man die Symptomatik der Wechseljahre für etwas anderes."
      },
      {
        "kind": "paragraph",
        "text": "Auch ich habe die etwas leidvolle Erfahrung mit der Macht der Natur gemacht. Schon vor fast vier Jahren schlichen sich die ersten prämenopausalen Symptome ein, die ich trotz meinem Wissen zunächst gar nicht einordnen konnte."
      },
      {
        "kind": "paragraph",
        "text": "Denn meine „Tage“ waren wie aus dem Lehrbuch: pünktlich und üppig. Das Hormonrodeo fing sicherlich schon viel früher an, da ich seit Mitte 30 unter starkem PMS leide. Nur mit der Pflanze Mönchspfeffer konnte ich mir helfen. Es geht hier um ein Phytohormon, durch das meine „Stimmungs- und Schmerz-Spitzen“ nicht mehr so spitz waren und leichter zu ertragen."
      },
      {
        "kind": "paragraph",
        "text": "Kennen Sie „Die Schöne und das Biest“? Bei mir tritt regelmäßig die Schöne und das Biest auf die Bühne und zeigt ihre zwei unterschiedlichen Gesichter. Die Wassereinlagerungen im Bauch-Hüfte-Bereich verleihen mir für ein paar Tage „Schwanger-im-ersten-Trimester-Look“, um danach wieder ein Heidi-Klum-Aussehen zu haben. Die seltsamste aller Erfahrungen ist die Spannung in den Brüsten , da sie einerseits Schmerz- und andererseits Lustgefühle auslöste! Was für ein Konzentrationskiller im wichtigen Meeting! Ich wette, das hat noch keine Frau laut gesagt."
      },
      {
        "kind": "paragraph",
        "text": "Eine Geschäftsführerin, die ich seit Jahren als Coach begleite, erzählte mir, wie sie einen wichtigen Pitch bei einem internationalen und hochbegehrten Kunden hatte und sie an der wichtigsten Stelle während des Präsentation eine Hitzewelle erfasste , dass sie sich kaum konzentrieren konnte. Wie im Film wurde ihr Kopf rot wie eine Tomate , ihre Atmung beschleunigte sich und der Schweiß lief ihr über die Schläfen , was wegen der Frisur nicht so sichtbar gewesen wäre, hätten die verräterischen Schweißringe auf ihrer hellen Seidenbluse ihr peinliches Gesicht nicht gezeigt. Die erfahrene Power-Frau blieb aber cool, bat um eine zehnminütige Pause und gewann am Ende den Kunden! So cool, resilient und fokussiert kann wirklich nicht jede Frau reagieren! Gerade deshalb trauen sich viele nicht, ihre Karriere nach vorne zu pushen, da sie sich insgesamt geschwächt und unstabil fühlen. Ausgerechnet das muss man nicht! Und ab heute passiert es keiner Frau, die sich darauf einstellt und die richtigen Schritte unternimmt."
      },
      {
        "kind": "paragraph",
        "text": "Am härtesten trafen mich drei Symptome , die ich nicht zu- und einordnen konnte, da ich weder Raucherin bin, noch Drogen und Medikamente in meiner jugendlichen Historie aufzeigen konnte und so gut wie keinen Alkohol konsumiere."
      },
      {
        "kind": "paragraph",
        "text": "Das erste Symptom ist die emotionale Instabilität und schnelle Abwechslung der Gefühle . Die Gefühle sind so mal wie die Schöne und dann wie das Biest."
      },
      {
        "kind": "paragraph",
        "text": "Nächstes Ereignis: Schauspielplatz Video-Meeting. Das Gespräch verläuft super. Gegen Ende sagt der Gesprächspartner mehr im Small-Talk-Kontext etwas, was mich emotional massiv störte. In dem Moment will ein Mitglied meines „inneren Teams“, nennen wir es „Heulsuse Krokodilstränen“, einfach mit Krokodilstränen antworten. Das andere starke Mitglied, nennen wir es „Leader“, schrie die „Heulsuse Krokodilstränen“ an: „Reiß dich zusammen jetzt!“ und mit etwas Glaskugel-Augen verhinderte der Leader dieses Desaster in letzter Sekunde."
      },
      {
        "kind": "paragraph",
        "text": "Boah, ist das anstrengend und verunsichernd! Diese ausgeprägte Emotionalität , von Minute zu Minute schwankende Stimmung von Drama bis zur Euphorie , unterminiert das eigene Selbstbewusstsein und kann den Ruf und die Karriere schädigen."
      },
      {
        "kind": "paragraph",
        "text": "Auch das private Leben als Paar ist davon betroffen. Ich kam mir ganz komisch vor, als ich das Gefühl hatte, mich plötzlich fünf mal im Monat von meinem Mann trennen zu wollen, um paar Tage später in größter Liebe mit ihm die Zeit zu verbringen. Man kann echt nur staunen, wie wir beide schon irgendwie „gestört“ gucken. Und seine Verwirrung und Machtlosigkeit an der Stelle kann ich sicherlich bis heute nicht genug verstehen. Oh Weiher!"
      },
      {
        "kind": "paragraph",
        "text": "Das zweite Symptom ist eine komische Art der Vergesslichkeit, ein Nebel im Kopf (sog. Brain Fog). Ich gehe in die Küche und will etwas nehmen, stehe da und habe keinen blassen Schimmer, was ich wollte! Laufe zurück zur Stelle, wo mir die Idee kam und – da ist sie! Die fehlende Synapse! Vergesslichkeit und Brain Fog trafen mich auch hart, weil das ein Merkmal wesentlich älterer Menschen ist, als ich es bin (ehem: 36 ;-)."
      },
      {
        "kind": "paragraph",
        "text": "Am härtesten aber traf mich das erstaunlichste (dritte) Symptom aller Symptome: Die verräterische Steifheit in den Gelenken (Hüfte und Rücken) und leichte Schmerzpunkte in der Körpermuskulatur . Der Dauermieter „Schmerz und Steifheit“ zog ohne Vertrag ein: Mal ist es das Fußgelenk, dann ist es das Knie, mal die Hüfte, dann die Schulter und zur Abwechslung auch das Schulterblatt. Hä? Was ist denn hier los?! Jene, die mich persönlich kennen, staunen sicherlich auch mit. Denn ich bin von meinem Naturell her ein Bewegungsmensch, ehemalige Leistungssportlerin und leidenschaftliche Yoga- und Pilates Praktizierende seit über 20 Jahren. Die Steifheit hat mich wirklich überrascht!"
      },
      {
        "kind": "paragraph",
        "text": "Für mich stellte sich eine Frage über die andere. Was mache ich falsch? Ich trainiere fast jeden Tag, jedoch mindestens fünfmal in der Woche. Mein Programm ist ganzheitlich: Meditation, Atemübungen, Power Yoga, Pilates, funktionales Training, ich springe Seil (Cardio), gehe regelmäßig spazieren (Kopf lüften) und im Sommer schwimme ich. Ohne Bewegung bin ich für meine Umgebung, milde ausgedrückt, sehr nervig. Mein Ernährungsplan ist, seit ich denken kann, gesund aber niemals dogmatisch. Mein Auge isst mir, es muss mir immer schmecken, Diäten bringen gar nichts als zu hohe Stresshormonwerte und damit die Gewichtszunahme . Zu 90 Prozent verspeise ich frisch Gekochtes. Süßigkeiten wie ein schöner Kuchen oder feine Schokolade brauche ich selten und Snacks mag ich ohnehin nicht. Doch etwas: salziger Popcorn am Filmabend mit riesiger Leinwand ist Movie-Evening-Feeling pur!"
      },
      {
        "kind": "heading",
        "text": "Die Frauen denken, die Hormone lenken! … Und Männer sind ratlos"
      },
      {
        "kind": "paragraph",
        "text": "Kennen Sie die Werbung – „Du bist nicht Du selbst, wenn Du hungrig bist“? Eine gelungene Werbung eines Verkaufsriesen, der mir – wie unverschämt! – kein Honorar zahlte, um ihn hier zu werben! 🙂 Deshalb nenne ich ihn nicht. Pech!"
      },
      {
        "kind": "paragraph",
        "text": "Die Achterbahn der Hungergefühle verwandelt Sie in ein Kühlschrankmonster und lässt Sie am nächsten Tag um 6 Uhr morgens reuig 10 km laufen oder so ein hartes Beintraining machen, sodass Sie sich danach 7 Tage nur noch mit Uh-Ah-Geräuschen in der Gegend herumtreiben. Die Folge dieses Zusammenspiels ist, Sie trainieren nicht mehr, ihr Kühlschrankmonster hat immer größeren Appetit , der Stoffwechsel verlangsamt sich noch mehr und Sie nehmen zu . Dazu sind l eichte Depressionsattacken häufiger zu Besuch, als Sie sie überhaupt verkraften können. Der Teufelskreis. Schluss damit! Denn das müssen Sie wissen."
      },
      {
        "kind": "heading",
        "text": "Ihr Weg raus – das Know-how und das How-to (das Wissen und der Umsetzungsplan)"
      },
      {
        "kind": "heading",
        "text": "Das Know-how"
      },
      {
        "kind": "paragraph",
        "text": "Ab ca. Ende 30 ist man schon prämenopausal. Der Körper verändert sich schrittweise ganz wenig auf allen Ebenen. Das merken wir nicht und stecken dies leicht weg. Dass wir schon so weit sind, ist als Gedanke wirklich noch gefühlte Lichtjahre entfernt. Sie fühlen sie weder betroffen noch angesprochen. I know, I know. Been there, done that!"
      },
      {
        "kind": "paragraph",
        "text": "Ab ca. Mitte 40 gerät man in die nächste Phase, die sog. Perimenopause (griech. peri bedeutet: vor/davor/herum/hinaus). Das sind die eigentlichen Wechseljahre, die so gefürchtet und stigmatisiert sind. Zu Unrecht. Die Zeit, das eigene Weltbild darüber zu verändern."
      },
      {
        "kind": "paragraph",
        "text": "Ab dem Moment, als die Periode 1-2 Jahre komplett ausblieb , ist man in der eigentlichen Menopause . Das Alter? So individuell wie jede Frau."
      },
      {
        "kind": "paragraph",
        "text": "Wenn wir es ganz konservativ nehmen, haben wir im Leben nur einen Partner / eine Partnerin, mit dem / der wir längere Zeit zusammen sind. Unser Körper hat aber konstant drei „Partner-Hormone“, die uns als Frau versorgen und lenken. Man kann ja sogar behaupten, in unserer Natur sei eher eine „Polygamie“ drin. Alles andere ist Fake News. (Mal fragen, was die PartnerInnen zu Hause davon hielten.)"
      },
      {
        "kind": "paragraph",
        "text": "UNSERE DREI WICHTIGSTEN PARTNER-HORMONE SIND:"
      },
      {
        "kind": "bullet",
        "text": "Östrogene sind eine Östrogenfamilie bestehend aus: 17-ß-Östradiol, Östron und Östriol. An dieser Stelle widme ich mich nur dem Östrogen."
      },
      {
        "kind": "bullet",
        "text": "Progesteron"
      },
      {
        "kind": "bullet",
        "text": "Testosteron (Say what?)"
      },
      {
        "kind": "paragraph",
        "text": "ÖSTROGEN UND SEINE AUFGABE:"
      },
      {
        "kind": "bullet",
        "text": "Wassereinlagerungen, insbesondere in Brüsten, Händen und Füßen,"
      },
      {
        "kind": "bullet",
        "text": "Schleimhautaufbau der Gebärmutter in der ersten Zyklushälfte,"
      },
      {
        "kind": "bullet",
        "text": "weibliche Kurven ohne am Gewicht zuzunehmen,"
      },
      {
        "kind": "bullet",
        "text": "Streben nach Schönheit und dass alle versorgt sind, insbesondere die Familie. (Hier ist unser Versorger-Hormon am Werk)"
      },
      {
        "kind": "bullet",
        "text": "Brust Entwicklung,"
      },
      {
        "kind": "bullet",
        "text": "vaginale Feuchtigkeit und Gesundheit,"
      },
      {
        "kind": "bullet",
        "text": "Unterstützung der vaginal Flora,"
      },
      {
        "kind": "bullet",
        "text": "Kollagenaufbau in der Haut und im Bindegewebe,"
      },
      {
        "kind": "bullet",
        "text": "Emotionalität, Drama, Stimmung,"
      },
      {
        "kind": "bullet",
        "text": "Schutz gegen Atherosklerose,"
      },
      {
        "kind": "bullet",
        "text": "Gehirnschutz,"
      },
      {
        "kind": "bullet",
        "text": "starke Knochen."
      },
      {
        "kind": "paragraph",
        "text": "PROGESTERON UND SEINE AUFGABE:"
      },
      {
        "kind": "bullet",
        "text": "entwässert den Körper,"
      },
      {
        "kind": "bullet",
        "text": "entspannt die Brustdrüsen,"
      },
      {
        "kind": "bullet",
        "text": "aktiviert die GABA-Rezeptoren, Andockstellen im Gehirn, um das Nervenkostüm zu entspannen und bringt folglich mehr Gelassenheit in den Alltag,"
      },
      {
        "kind": "bullet",
        "text": "baut die Gebärmutter für den gegebenenfalls eintreffenden Embryo,"
      },
      {
        "kind": "bullet",
        "text": "zu viel von Progesteron führt in den sozialen Rückzug und in die Grübelei,"
      },
      {
        "kind": "bullet",
        "text": "guter Schlaf und Entspannung."
      },
      {
        "kind": "paragraph",
        "text": "TESTOSTERON UND SEINE AUFGABE:"
      },
      {
        "kind": "bullet",
        "text": "wird im Eierstock aber auch in der Nebenrinde produziert,"
      },
      {
        "kind": "bullet",
        "text": "Muskelaufbau,"
      },
      {
        "kind": "bullet",
        "text": "treibt den Stoffwechsel und verhindert die Gewichtszunahme,"
      },
      {
        "kind": "bullet",
        "text": "zuständig für die Energie und athletische Figur,"
      },
      {
        "kind": "bullet",
        "text": "fördert die Entscheidungsfreudigkeit, das Durchsetzungsvermögen, die Tatkraft,"
      },
      {
        "kind": "bullet",
        "text": "zuständig für das Libido,"
      },
      {
        "kind": "bullet",
        "text": "das Testosteron schwingt mit Östrogen mit, so dass wir uns um die Ovulation sexy fühlen."
      },
      {
        "kind": "paragraph",
        "text": "DIE W*T*F-SYMPTOME AM ÜBERGANG VON DER ERSTEN ZUR ZWEITEN LEBENSHÄLFTE:"
      },
      {
        "kind": "bullet",
        "text": "leichte, schwere, unregelmäßige, aber auch normale Perioden"
      },
      {
        "kind": "bullet",
        "text": "Hitzewallungen, Nachtschweiß"
      },
      {
        "kind": "bullet",
        "text": "Depressionen"
      },
      {
        "kind": "bullet",
        "text": "Entwicklung oder Verstärkung von Ängsten"
      },
      {
        "kind": "bullet",
        "text": "Wutanfälle"
      },
      {
        "kind": "bullet",
        "text": "Schlafstörungen"
      },
      {
        "kind": "bullet",
        "text": "Denk- und Merkschwierigkeiten"
      },
      {
        "kind": "bullet",
        "text": "Haarverlust"
      },
      {
        "kind": "bullet",
        "text": "Juckende Haut, Neurodermitis, Ekzeme u.ä."
      },
      {
        "kind": "bullet",
        "text": "Gelenkschmerzen"
      },
      {
        "kind": "bullet",
        "text": "Migräne"
      },
      {
        "kind": "bullet",
        "text": "Herzrhythmusstörungen"
      },
      {
        "kind": "bullet",
        "text": "Häufige Blasenentzündungen"
      },
      {
        "kind": "bullet",
        "text": "Häufiger Harndrang, sogar Inkontinenz"
      },
      {
        "kind": "bullet",
        "text": "Tinnitus"
      },
      {
        "kind": "bullet",
        "text": "Gewichtszunahme ins. am Bauch"
      },
      {
        "kind": "bullet",
        "text": "keine Lust auf Intimitäten, brennen „unten“"
      },
      {
        "kind": "bullet",
        "text": "PMS"
      },
      {
        "kind": "bullet",
        "text": "Schwindelanfälle"
      },
      {
        "kind": "paragraph",
        "text": "Was können und sollen Sie tun, obwohl Ihnen sowohl die Krankenkasse als auch Ihr Frauenarzt nichts sagten?"
      },
      {
        "kind": "paragraph",
        "text": "Wenn Sie nichts unternehmen wollen, weil Ihr Wissenstand noch auf dem aus den 70er Jahren ist, so ist es Ihre Entscheidung und freier Wille. Besser ist, Sie unternehmen ganz konkrete Schritte und erfreuen sich der kommenden Zeit, in der Sie ungehemmt ihr schlummerndes Potenzial endlich wie ein Vulkan entfalten, ihre Fitness, Gesundheit und Vitalität gekonnt führen und sich unwiderstehlich, ja sogar „unstoppable“ fühlen."
      },
      {
        "kind": "heading",
        "text": "DAS HOW-TO"
      },
      {
        "kind": "paragraph",
        "text": "THE GOLDEN WINDOW OF OPPORTUNITY"
      },
      {
        "kind": "paragraph",
        "text": "Alles im Leben braucht ein richtiges Timing. Falls Sie Mutter sind, wissen Sie, dass nur in diesen 48 Stunden ihr Kind im „Golden Window of Opportunity“ entstand. Richtig? Wie wissen Sie aber in vielen Dingen, wann „richtiges Timing“ wirklich richtig ist? Es gibt kein besseres Navi als – Ihre Gefühle und solides Wissen."
      },
      {
        "kind": "paragraph",
        "text": "Falls Sie nur etwas von meinen oben beschriebenen Erfahrungen teilen, dann wissen Sie Bescheid: Zeit zum Handeln ist da und ich hoffe, dass Sie im offenen Zeitfensters, im sog. „Golden Window of Opportunity“ befinden. Das schöne daran ist. Es ist nicht so kompliziert, wenn Sie einen Plan haben."
      },
      {
        "kind": "paragraph",
        "text": "HIER SIND IHRE SCHRITTE :"
      },
      {
        "kind": "bullet",
        "text": "Bestimmen Sie zuerst in welcher Phase Sie sich befinden. Sind sie prämenopausal, perimenopausal oder menopausal? Mit hormonellen Behandlungen durch bioidentische pflanzliche Hormone sollen Sie laut spezialisierten Frauenärztinnen am besten noch gesund anfangen und dürfen allerspätestens zehn Jahre nach der letzten Periode beginnen, wahrscheinlich aber sechs, wenn man alterstypische Krankheiten schon hat."
      },
      {
        "kind": "bullet",
        "text": "Führen Sie dann ein dreimonatiges Tagebuch, um bewusst die Symptomatik (Schlaf, Gewicht, Nahrungsmittelbedürfnisse, Getränke, Stimmung, kognitive Fitness, sozial aktiv oder eher zurückgezogen usw.) zu identifizieren."
      },
      {
        "kind": "bullet",
        "text": "Machen Sie Termin bei der Frauenärztin, die sich mit denWechseljahren beschäftigt, damit sie den ärztlichen Teil machen kann. Denken Sie daran: nur bioidentische reine Hormopne (keine Konjugationen o.ä.) sind State of the Art. Heißt: Rein Progesteron, Rein Östriol und 17-ß-Östradiol wie auch Testosteron."
      },
      {
        "kind": "bullet",
        "text": "Führen Sie schrittweise bessere Ernährungsgewohnheiten ein (drei Mahlzeiten, keine Snacks, viel Wasser). Ihre Ernährung muss individuell angepasst an Ihre Konstitution und Lebensweise sein. Alles andere wird Stress und Misserfolg verursachen! Falls Sie hier Unterstützung brauchen, buchen Sie ein 15-minütiges Gespräch mit mir. Kostenlos."
      },
      {
        "kind": "bullet",
        "text": "Üben Sie regelmäßig, sodass es sich jedes Mal etwas anstrengend anfühlt. Dazu gehört Cardio, funktionales Training, Dehnung, Koordination, Beweglichkeit und Kraft. Gehen Sie täglich spazieren, unabhängig davon, ob Sie geübt haben oder nicht."
      },
      {
        "kind": "bullet",
        "text": "Sorgen Sie für ausreichend Schlaf. Gehen Sie zur ähnlichen Uhrzeit ins Bett und zwar mit einem Buch oder noch viel besser mit einem Liebhaber. Die beiden garantieren nämlich viel besseren Tiefschlaf als Handy oder TV."
      },
      {
        "kind": "bullet",
        "text": "Führen Sie kurz- und langfristig orientierte Entspannungstechniken. Atemübungen und Meditationen gehören zu den kurzfristigen. Zu den langfristigen lohnt es sehr, auf das eigene Lebenskonzept zu schauen, jetzt neu zu organisieren und zu bereinigen. Der Frühling ist immer eine exzellente Ausrede für einen inneren Putz! Ja, danken können Sie mir später."
      },
      {
        "kind": "bullet",
        "text": "Gönnen Sie sich mehr Ruhepausen. Es muss nicht immer eine kostspielige Wellness-Behandlung sein. Viel mehr bringen die Pausen wie ein Power Nap, Atemtechniken oder chillen im Garten oder dem Balkon."
      },
      {
        "kind": "bullet",
        "text": "Sie müssen und sollen nicht traurig, erschöpft und lustlos durch die Gegend wandern. Dafür werden Sie diese ganz konkrete Schritte unternehmen und sich eines neuen Optimismus, der Freude, der Lebensenergie und des Erfülltseins erfreuen."
      },
      {
        "kind": "paragraph",
        "text": "SCHAFFEN SIE MIT RICHTIGEN INFORMATIONEN DIESES MINDSET AB:"
      },
      {
        "kind": "bullet",
        "text": "Ich bin zu jung dafür. (ab ca. 38 sind Sie schon prämenopausal)"
      },
      {
        "kind": "bullet",
        "text": "Hormone verursachen Brustkrebs."
      },
      {
        "kind": "bullet",
        "text": "Ich war noch nie ein Bewegungsmensch."
      },
      {
        "kind": "bullet",
        "text": "Meine Mutter hatte nichts. Warum sollte ich es haben?"
      },
      {
        "kind": "bullet",
        "text": "Ich habe Angst."
      },
      {
        "kind": "bullet",
        "text": "Meine innere Stimme ist viel stärker und habe Angst zu versagen."
      },
      {
        "kind": "bullet",
        "text": "Ich schäme mich, dass ich so alt werde."
      },
      {
        "kind": "bullet",
        "text": "Ich habe keine Motivation."
      },
      {
        "kind": "heading",
        "text": "Lost in Menopausal Translation – ein Leitfaden für Kollegen und Führungskräfte"
      },
      {
        "kind": "paragraph",
        "text": "Es kann schon vorkommen, dass die Frauen in Wechseljahren mit der gewohnten Leistung nicht arbeiten können und die Teams deshalb schlechter performen. Wenn man aber die Frauen informiert und einen Umsetzungsplan in die Hand drückt, wäre die Sache viel günstiger und leichter. Denn die Krankenkassen und Frauenärzte behandeln das Thema stiefmütterlich, obwohl die Gesundheits- und Wirtschaftsschäden später viel teurer für alle Beteiligten sind."
      },
      {
        "kind": "paragraph",
        "text": "Diese weibliche Lebensabschnittsphase ist insgesamt eine sensible Situation, die Einfühlungsvermögen und eine unterstützende Herangehensweise erfordert. Hier sind einige Schritte, die helfen können:"
      },
      {
        "kind": "bullet",
        "text": "Offene Kommunikation fördern: Schaffen Sie einen Raum, in dem sich Teammitglieder frei fühlen, über ihre Bedürfnisse und Herausforderungen zu sprechen. Ermutigen Sie zu offenen Gesprächen über die Auswirkungen der Wechseljahre auf die Arbeit und die Teamleistung."
      },
      {
        "kind": "bullet",
        "text": "Bildung und Sensibilisierung: Bieten Sie Schulungen oder Workshops an, um das Team über die Wechseljahre und ihre Auswirkungen auf die Gesundheit und das Wohlbefinden von Frauen aufzuklären. Dies kann dazu beitragen, Vorurteile abzubauen und Verständnis zu fördern."
      },
      {
        "kind": "bullet",
        "text": "Flexible Arbeitsbedingungen: Überlegen Sie, wie Sie flexible Arbeitszeiten, Homeoffice-Möglichkeiten oder andere Anpassungen anbieten können, um den Bedürfnissen von Teammitgliedern während der Wechseljahre entgegenzukommen."
      },
      {
        "kind": "bullet",
        "text": "Unterstützung anbieten: Stellen Sie sicher, dass den betroffenen Teammitgliedern Unterstützung zur Verfügung steht, sei es durch interne Programme zur Unterstützung von Mitarbeitern (Know-how und das How-to), sei es durch psychologische Beratung oder den Zugang zu Gesundheitsressourcen."
      },
      {
        "kind": "bullet",
        "text": "Teamarbeit und Zusammenhalt stärken: Fördern Sie den Zusammenhalt im Team durch diverse Team-building Aktivitäten, gegenseitige Unterstützung und die Schaffung eines unterstützenden Arbeitsumfelds, in dem sich alle Mitglieder geschätzt und respektiert fühlen."
      },
      {
        "kind": "bullet",
        "text": "Individuelle Unterstützung: Bieten Sie individuelle Unterstützung an, indem Sie regelmäßige Check-ins durchführen, um den Fortschritt zu überprüfen, Bedenken anzusprechen und mögliche Anpassungen vorzunehmen."
      },
      {
        "kind": "bullet",
        "text": "Ressourcen bereitstellen: Stellen Sie Informationen und Ressourcen zu den Wechseljahren und den verfügbaren Unterstützungsmöglichkeiten bereit, damit betroffene Teammitglieder eigenständig Lösungen finden können."
      },
      {
        "kind": "paragraph",
        "text": "Es ist wichtig, sich der Herausforderung bewusst zu sein, dass einige männliche Führungskräfte möglicherweise nicht automatisch die gesundheitlichen Bedürfnisse von Frauen in den Wechseljahren als ihre Verantwortung betrachten. Hier sind einige zusätzliche Ideen, Anregungen und Argumente, die berücksichtigt werden können:"
      },
      {
        "kind": "bullet",
        "text": "Fokus auf die Leistung des Teams: Betonen Sie, dass die Gesundheit und das Wohlbefinden der Teammitglieder direkte Auswirkungen auf die Leistung des gesamten Teams haben können. Indem Sie die Unterstützung der Gesundheit von Frauen in den Wechseljahren fördern, tragen Sie zur Steigerung der Produktivität und Effizienz des Teams bei."
      },
      {
        "kind": "bullet",
        "text": "Chancengleichheit und Diversität: Weisen Sie darauf hin, dass die Förderung der Gesundheit von Frauen in den Wechseljahren Teil eines ganzheitlichen Ansatzes zur Förderung der Chancengleichheit und Diversität am Arbeitsplatz ist. Indem Sie sicherstellen, dass alle Teammitglieder, unabhängig von ihrem Geschlecht, die Unterstützung erhalten, die sie benötigen, um erfolgreich zu sein, stärken Sie das Engagement und die Bindung an das Unternehmen."
      },
      {
        "kind": "bullet",
        "text": "Langfristige Investition in Mitarbeiterbindung: Zeigen Sie auf, dass die Unterstützung von Teammitgliedern während der Wechseljahre Teil einer langfristigen Strategie zur Mitarbeiterbindung ist. Indem Sie ein unterstützendes Arbeitsumfeld schaffen, das die Bedürfnisse aller Mitarbeiter berücksichtigt, können Sie die Mitarbeiterbindung stärken und die Fluktuation reduzieren."
      },
      {
        "kind": "bullet",
        "text": "Rechtliche Verpflichtungen und Unternehmensverantwortung: Erinnern Sie daran, dass Arbeitgeber gesetzlich verpflichtet sind, die Gesundheit und das Wohlbefinden ihrer Mitarbeiter zu fördern. Indem Sie Unterstützung für Frauen in den Wechseljahren anbieten, erfüllen Sie nicht nur Ihre rechtlichen Verpflichtungen, sondern zeigen auch Ihre soziale Verantwortung als Unternehmen."
      },
      {
        "kind": "bullet",
        "text": "Positive Auswirkungen auf das Arbeitsklima: Betonen Sie, dass die Schaffung eines unterstützenden Arbeitsumfelds, das die Bedürfnisse aller Mitarbeiter respektiert, zu einem positiven Arbeitsklima beiträgt. Dies kann sich wiederum auf die Mitarbeiterzufriedenheit, das Engagement und die Zusammenarbeit im Team auswirken."
      },
      {
        "kind": "paragraph",
        "text": "Indem Sie diese Argumente nutzen und die Bedeutung der Unterstützung von Frauen in den Wechseljahren am Arbeitsplatz hervorheben, können Sie dazu beitragen, ein Bewusstsein zu schaffen und die Bereitschaft männlicher Führungskräfte zu erhöhen, sich aktiv an der Förderung der Gesundheit und des Wohlbefindens aller Teammitglieder zu beteiligen."
      },
      {
        "kind": "paragraph",
        "text": "Ladies, lassen Sie es richtig krachen und zeigen Sie Ihre wahre transformative Kraft im beruflichen aber auch privaten Umfeld!"
      },
      {
        "kind": "heading",
        "text": "Deine & Ihre"
      }
    ],
    "readTime": "14 min read"
  },
  {
    "slug": "mind-body-spirit-resilienz",
    "title": "Wir haben die Lizenz für Ihre Mind, Body und Spirit Resilienz",
    "date": "2024-01-11",
    "lang": "DE",
    "excerpt": "MIND, BODY, SPIRIT – unsere Best Practices der letzten zwanzig Jahre.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Die Autoreifen quietschen. Der Wagen schlängelt sich durch enge Gassen einer Altstadt irgendwo im Süden Italiens. Dem kleinen Fiat 500 ist ein Bösewicht dicht an den Fersen, Pardon, an den Reifen. Der Autofahrer im kleinen 500 hat völlig entspannte Miene, hier und da eine Schweißperle. Aber nur weil die Sonne so stark durch die Scheiben rein prallt. Der Bösewicht rennt hinterher wie wild. Scheint im Stress zu sein. Sein Beifahrer halb aus dem Auto hängend schießt voller Wut und Hass auf seinen Feind vorne. Die Kugeln prallen vom kleinen Auto ab. Der Fahrer im vorderen Wagen – doch nun etwas aus seiner Entspannung in leichte Anspannung gezwungen – gibt Gas. Der Mann, James Bond, ein voll resistenter Typ, entflieht erfolgreich."
      },
      {
        "kind": "paragraph",
        "text": "An der Bar relaxt er nun mit charmanten schlagfertigen Sätzen, schlürft an seinem „Martini shaken not stirred“, während eine umwerfende Lady an ihm vorbei läuft, die Hüften verführerisch hin und her bewegend. Sie wirft ihm ein einladend geheimnisvolles Lächeln zu. Der selbstbewusste Martini-Typ mit sichtbar durchtrainiertem Körper sagt leger: „Mein Name is Bond, James Bond“. Der Satz fließt so entspannt aus seinem Mund, dass man sich ernsthaft fragt: Was mache ich, zum Teufel, falsch?"
      },
      {
        "kind": "bullet",
        "text": "Umsetzung (täglich)"
      },
      {
        "kind": "bullet",
        "text": "Fokus"
      },
      {
        "kind": "bullet",
        "text": "Konsistenz."
      },
      {
        "kind": "heading",
        "text": "Schlaf"
      },
      {
        "kind": "paragraph",
        "text": "Was sind meine Schlafbedürfnisse? Bin ich der 7-8 Stunden-Schlaftyp? Oder brauche ich eher weniger Stunden? Was sind meine Rituale am Abend? Gehe ich immer zur ähnlichen Zeit ins Bett? Sind die digitalen Medien inkl. Fernsehen mein Einschlafmittel? Wie fühle ich mich morgens, wenn ich aufwache? Erholt oder gerädert?"
      },
      {
        "kind": "heading",
        "text": "Bewegung"
      },
      {
        "kind": "paragraph",
        "text": "Wie sehen meine Bewegungsgewohnheiten aus? Spaziere ich täglich mindestens 30 Minuten? Übe ich zusätzlich mindestens drei Mal wöchentlich à halbe Stunde?"
      },
      {
        "kind": "heading",
        "text": "Ernährung"
      },
      {
        "kind": "paragraph",
        "text": "Was und wie esse ich? Wie viel? Verstehe ich, dass das Kalorienzählen eigentlich mehr Stress macht und lediglich zur Orientierung dienen sollte? Welche Kombinationen von Nahrungsmitteln helfen mir, mich gut zu fühlen? Diabetes zu vermeiden? Cholesterin zu vermeiden? Hohen Blutdruck? Allergien? Dermatitis? Chronische Entzündungen, schlechten und unterbrochenen Schlaf u.v.m.?"
      },
      {
        "kind": "heading",
        "text": "Entspannung"
      },
      {
        "kind": "paragraph",
        "text": "Was ist meine kurzfristige tägliche Entspannungstechnik? Achte ich darauf, täglich meine Stresshormone abzubauen?"
      },
      {
        "kind": "heading",
        "text": "Resilienz"
      },
      {
        "kind": "paragraph",
        "text": "Habe ich eine robuste kognitive (mentale) und emotionale Resilienz in Stresssituationen? Kann ich mich gut „aus der Klemme lösen“, wenn es hart auf hart kommt?"
      },
      {
        "kind": "heading",
        "text": "Mindset"
      },
      {
        "kind": "paragraph",
        "text": "Wie reagiere ich gewöhnlich auf neue, unbekannte Situationen, Ideen und Vorschläge? Verfalle ich eher in den skeptischen Zustand mit negativen Szenarien? Oder bin ich positiv, offen, lern- und neugierig? Verschiebe ich meine Grenzen gern und häufig oder vermeide sie mit aller Kraft?"
      },
      {
        "kind": "heading",
        "text": "Lebensenergie"
      },
      {
        "kind": "paragraph",
        "text": "Was ist diese Energie? Wie kann ich sie immer vergrößern? Was funktioniert für mich und was laugt mich aus? Wer raubt mir die Energie? Wie ziehe ich meine persönliche Grenze, damit ich diese Energie zur Verfügung habe?"
      },
      {
        "kind": "heading",
        "text": "Sinn / Purpose"
      },
      {
        "kind": "paragraph",
        "text": "Welchen Sinn sehe ich in dem, was ich täglich privat und beruflich tue? Habe ich eine Lebensaufgabe nur für mich gefunden?"
      },
      {
        "kind": "heading",
        "text": "Soziales Netzwerk"
      },
      {
        "kind": "paragraph",
        "text": "Wer sind die fünf wichtigsten Personen in meinem Leben? Wir wirken sie auf mich? Pflege ich mein soziales Netzwerk? Kümmere ich mich um Interaktionen und gemeinsame Erlebnisse?"
      },
      {
        "kind": "paragraph",
        "text": "Wie können Sie jeden Puzzlestein in diesem Selbstfürsorgebild in den Alltag integrieren und die Gewohnheiten für die neuen Verhaltensweisen entwickeln? Was sind die neuen und was die bewährten Techniken? Wie können Sie die Hindernisse auf dem Weg zum Erfolg überwinden? Wie können Sie diese einfachen Lifestyle-Strategien am besten umsetzen?"
      },
      {
        "kind": "paragraph",
        "text": "Wir wissen: Das Geheimnis einer optimalen Gesundheit ist so viel mehr als nur besser zu essen und Sport zu treiben. Die Gesundheit sehe ich und die Deutsche Bahn als Ihr Arbeitgeber viel breiter. Die Deutsche Bahn hat schon vor langer Zeit die Fürsorgepflicht für ihre Mitarbeiter übernommen. Nun sind auch Sie dran, die Selbstfürsorge aktiv zu betreiben."
      },
      {
        "kind": "paragraph",
        "text": "In regelmäßigen Abständen werden wir uns in unseren Blogbeiträgen jedem dieser Bereiche in der Selbstfürsorge separat widmen und Sie wöchentlich in diversen Kursen begleiten. Sie dürfen alle unsere Ideen gern als „Lifestyle-Medizin“ verstehen, da unseren Methoden ein evidenzbasierter Ansatz zur Krankheitsprävention innewohnt, der Ihnen hilft, sich auf die Annahme und Beibehaltung gesunder Gewohnheiten für eine bessere Gesundheit zu konzentrieren. Wir garantieren Ihnen: Ihr berufliches und privates Leben wird neue Höhen erleben."
      },
      {
        "kind": "paragraph",
        "text": "In diesem Sinne wünsche ich Ihnen einen erfolgreichen Start ins 2024 und freue mich, Sie wieder in diesem Jahr zu empowern!"
      },
      {
        "kind": "heading",
        "text": "Deine und Ihre"
      },
      {
        "kind": "heading",
        "text": "Melden Sie sich für den Mitarbeiter*Innen Selbstbeitrag \"Don't worry, be happy. All inkl.\" an"
      },
      {
        "kind": "paragraph",
        "text": "Das Angebot „Don’t worry, be happy. All inkl. ganzjährig“ beinhaltet: Alle live Sportkurse von montags bis freitags von Januar bis Dezember (live digital und live vor Ort in Frankfurt mit digitaler Übertragung / hybrid)"
      },
      {
        "kind": "bullet",
        "text": "Zugang zur Online Bibliothek mit Sportvideos „Mind & Body Workout“"
      },
      {
        "kind": "bullet",
        "text": "Zugang zum 6-Wochen-Kurs Empowerment"
      },
      {
        "kind": "bullet",
        "text": "Zugang zum 8-Wochen-Kurs Entspannung"
      }
    ],
    "readTime": "4 min read"
  },
  {
    "slug": "die-expertitis-pandemie",
    "title": "Die Expertitis-Pandemie",
    "date": "2023-06-16",
    "lang": "DE",
    "excerpt": "Warum Yogalehrende unter „Expertitis“ leiden und deshalb ihren Wert nicht verdienen. Artikelserie: Yoga-Business. Herzensweg mit Köpfchen. YogalehrerIn, verdiene Deinen Wert! 2/ 5)",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "„Ich bin nicht gut genug!“ oder „Ich weiß nicht, wo ich mit meinem Yoga-Geschäft anfangen soll“, sagte mehr als nur eine Yogalehrerin im Bewerbungsgespräch für einen Platz an der Dr. Zrinka Academy für Business Coaching Programm für YogalehrerInnen ohne Studio."
      },
      {
        "kind": "paragraph",
        "text": "„Glücklicherweise weiß ich, was Sie machen müssen“, erwiderte ich, „damit Sie systematisch, mit klarem Kopf und geschäftlichem Know-how nach vorne kommen“. Eins ist sicher: Frauen gründen anders, intuitiver und mit Begeisterung, müssen aber noch mehr ihre konkreten Ziele vor Augen halten."
      },
      {
        "kind": "heading",
        "text": "Die „Next-Shiny-Object-Falle“"
      },
      {
        "kind": "paragraph",
        "text": "Unsere Gesellschaft legt hohen Wert auf Diplome, Zertifikate und Urkunden. Das ist per se nicht schlecht. Es ist bewiesenermaßen kein Garant für den Erfolg. Zu häufig wird viel mehr auf das „Papier“ geschaut, als auf das, was die Person im Stande ist, zu machen, wie viel Engagement sie bringt und bereit ist, Neues zu lernen."
      },
      {
        "kind": "paragraph",
        "text": "Selbstständige (Solo-)Entrepreneure müssen viel und schnell Neues lernen. Das geht heute im atemberaubenden Tempo und erstaunlich leicht über den informellen Weg, d. h. außerhalb einer staatlich anerkannten Institution und meistens in einem digitalen Format als E-Learning-Prozess."
      },
      {
        "kind": "paragraph",
        "text": "Beim Verfassen des Buchs „Verdiene, was Du wert bist“ führte ich zwischen 2020 und 2021 über 200 Interviews mit YogalehrerInnen durch. Dabei zeigten sich viele Gemeinsamkeiten in den Problemen der YogalehrerInnen. Davon war eine Sache besonders auffällig: Wie kaum eine Berufsgruppe bilden sich YogalehrerInnen überdurchschnittlich häufig weiter. Die Überzeugung der YogalehrerInnen ist, dass sie noch mehr Expertise über Anatomie, Physiologie, Ayurveda, Psychologie, Therapie und so weiter bekommen müssen, um mehr Kunden zu gewinnen. Dieses Phänomen heißt „Expertitis“."
      },
      {
        "kind": "paragraph",
        "text": "„Es reicht nicht aus, was vorhanden ist“, flüstert andauernd die Stimme im Kopf. Die Jagd auf Zertifikate und Qualifizierungen neben den schon bestehenden ähnelt der sog. „Next-Shiny-Object-Falle“. Im Business spricht man vom horizontalen Denken und Handeln. Die Betroffenen bewegen sich von einem Fachfeld zum anderen, von einem funkelnd-glitzernden Objekt zum anderen in der Hoffnung, Kundschaft zu generieren und sich als Expertin zu positionieren."
      },
      {
        "kind": "paragraph",
        "text": "Dadurch entwickeln Sie ihre mentale, emotionale und geschäftliche Stärke und Expertise nicht vertikal, spitz und in einer Nische, sondern horizontal als Bauchladen. Von allem etwas, Hauptsache erschwinglich und möglichst für alle. Fehler! Genau die F-E-H-L-E-R sind unsere besten Freunde: Es sind unsere H-E-L-F-E-R."
      },
      {
        "kind": "paragraph",
        "text": "Um Missverständnisse vorzubeugen: Es steht außer Frage, dass das Fachwissen immer gut ist. Dem Kunden ist es aber „piepegal“, wie viele Zertifikate man besitzt. Er ist nur daran interessiert, sein Problem zu lösen. Die Kunden kaufen die Lösung für ihr eigenes Problem, nicht die Methoden, mit denen wir diese Probleme lösen!"
      },
      {
        "kind": "paragraph",
        "text": "Trotz vielen Zertifikaten und Diplomen zeigte sich in der Praxis, dass herausragendes Expertentum nicht unbedingt zu mehr Kunden und mehr Umsatz führt. Warum? Weil neben der Fachexpertise noch sehr viele andere Faktoren für einen steigenden Umsatz verantwortlich sind. Zum Beispiel spielt das Phänomen UX (User Experience) heute eine riesige Rolle und Kundinnen werden auch einen Kleinunternehmer Yogalehrer daran messen. Unabhängig davon, was sie einem ins Gesicht sagen."
      },
      {
        "kind": "paragraph",
        "text": "Deshalb ist der beste Ratschlag an dieser Stelle: Eine einzige Dienstleistung anbieten und bis in jedes Detail perfektionieren. Vom ersten Kontakt, über den Akquiseprozess, die Betreuung und Nachfolgegeschäft. Die Details sind wichtig, da sie beim Kunden positives UX und positive Gefühle erzeugen werden. Stimmt alles und das Geschäft wächst, sprechen wir von einer erfolgreichen Kundenreise bzw. der Customer Journey."
      },
      {
        "kind": "heading",
        "text": "Aufsteigende (vergangene) und bändigende (neue) Samskaras"
      },
      {
        "kind": "paragraph",
        "text": "Proaktives Handeln und Entscheidungsstärke sind zwei wunderschöne Muskel, die trainiert werden müssen. Genauso viel und häufig wie die Surya Namaskara, Chatturanga oder Shirsasana."
      },
      {
        "kind": "paragraph",
        "text": "Immer wieder ist es erstaunlich zu erleben, wie man das yogische Wissen im Geschäft anwenden kann. Wenn man seine eigene Firma hat oder als Solopreneur agiert, ist man sehr intensiv mit den eigenen Unzulänglichkeiten konfrontiert. Häufig erscheint es uns schwer, aus der Spirale „Ich vertraue mir nicht“, „Ich bin keine Geschäftsperson“, „Ich habe Angst“, „Ich kann nicht entscheiden“ und ähnliche herauszukommen."
      },
      {
        "kind": "paragraph",
        "text": "Das sind allgemein genannt – Glaubenssätze. Die Yogawissenschaft spricht hier von Samskaras. Vereinfacht gesagt gibt es zwei Haupt-Samskaras. Jene, die immer wieder hoch kommen, sind die alten aufsteigenden Samskaras. Wenn die alten durch die neuen Samskaras ersetzt bzw. gebändigt werden, kommt es zur Veränderung. Sich immer wieder zurück in den gegenwärtigen Moment zu bringen und das alte Glaubensmuster bzw. das Narrativ in unserem Kopf zu verändern, heißt in der modernen Auffassung die Glaubenssätze bzw. das Mindset zu verändern."
      },
      {
        "kind": "quote",
        "text": "Aus „Ich vertraue mir nicht“ wird —> „jeden Tag mache ich einen kleinen Schritt und baue mehr Vertrauen auf“ . Aus „Ich bin keine Geschäftsperson“ wird —> „Ich bin bereit, geschäftliches Know-how von Erfahreneren zu lernen und mich zu einer Geschäftsperson zu entwickeln“ . Aus „Ich habe Angst“ wird —> „Trotz der Angst nehme ich meinen ganzen Mut und mache, was ich mir erträumt habe.“ Aus „Ich kann nicht entscheiden“ wird —> „Ich lerne die Tricks einer schnellen Entscheidungsfindung und stärke meine Ressource und meinen Entscheidungsmuskel“."
      },
      {
        "kind": "paragraph",
        "text": "Aus veränderten Glaubenssätzen werden sich neue Handlungen entwickeln. Alte Samskaras werden durch neue ersetzt."
      },
      {
        "kind": "heading",
        "text": "Verdiene Deinen Wert"
      },
      {
        "kind": "paragraph",
        "text": "Die Yogawelt aus der Perspektive der Anbieter hat sich in den letzten vier Jahren grundlegend verändert. Trotz der immanenten Idee des Yoga, Verlangsamung des Lebens, ist es unmöglich diesen Beruf erfolgreich auszuüben, indem man das Geschäft lahm, zweifelnd und unentschieden angeht."
      },
      {
        "kind": "paragraph",
        "text": "Es gibt bekanntlich über 100.000 Yogalehrer nur in Deutschland. Die meisten fingen die Yogareise als Selbstentdeckung und -heilung an. Dann entstand der Wunsch, den anderen auf dem Weg zu helfen und Yoga, hauptsächlich Yogastellungen, zu unterrichten. Irgendwann ist man an der Kreuzung: komplett selbstständig oder nebenberuflich den Beruf oder als Hobby ausüben. Genau an der Stelle braucht es guter, strategischer Überlegung und der Hilfe von Menschen, die den Weg gegangen sind."
      },
      {
        "kind": "paragraph",
        "text": "Zurück zum Jahr 2023. Der Konsum von Yoga ist dezentralisiert geworden. Kunden kaufen live online Kurse, Mitgliedschaften in den digitalen Kursangeboten, konsumieren überwältigende Anzahl an kostenlosen Kursen, Videos und Anleitungen oder bekommen einen gratis Zugang über die betriebliche Gesundheitsförderung. Yogastudios haben zunehmend die Schwierigkeit, neue Mitglieder zu gewinnen und das Geschäft zu erhalten. Auch die Kurse in den Volkshochschulen oder Turngemeinden erfreuen sich nicht mehr so hoher Beliebtheit wie früher."
      },
      {
        "kind": "paragraph",
        "text": "Was kann man hier überhaupt tun?"
      },
      {
        "kind": "paragraph",
        "text": "Innovativ werden, sehr flexibel im Kopf – deshalb machen wir ja glücklicherweise Yoga – und schnell in der Umsetzung."
      },
      {
        "kind": "paragraph",
        "text": "An dieser Stelle empfehle ich die folgenden Schritte:"
      },
      {
        "kind": "quote",
        "text": "Bestimmen Sie, ob Yogaberuf nebenberuflich oder hauptberuflich ausgeübt werden soll. Wenn nur nebenberuflich als Kursleiter für andere, dann müssen Sie hier nicht weiter lesen. Andernfalls setzen Sie fort! Bestimmen Sie den erwünschten jährlichen Umsatz (nicht jenen, den Sie sich trauen, auszusprechen, sondern den Sie sich wünschen und brauchen für Ihre Entfaltung. Coachen Sie sich zunächst selbst (nicht Freunde oder Familie nehmen)! Das geht einfach über die im Buch „Verdiene, was Du wert bist. Business Coaching für Yogalehrer ohne Studio“ kostenlose Fragebögen zum Selbst-Coaching, die man herunterladen kann. Finden Sie Ihren Business Coach des Vertrauens, der sich in der Materie und mit der Zielgruppe Yogalehrende gut auskennt und sie schon begleitet hat. Finden Sie gemeinsam Ihren Wert. Setzen Sie sich die Frist für den Anfang der strategischen Arbeit an Ihrem Projekt mit der Begleitung. Minimal erforderliche Zeit sind drei Monate mit einem wöchentlichen Stundenplan von mindestens 10 Stunden Arbeit an der Selbstständigkeit, ca. zwei Stunden täglich. Kümmern Sie sich um die Sicherstellung des ersten Gründungskapitals für alle Ausgaben in den ersten 12 Monaten. Selbstverständlich brauchen Sie Kapital auch dann, wenn Sie kein Studio eröffnen. Wer Rendite will, muss investieren! Fangen Sie nicht mit der Gestaltung einer Webseite und dem Kreieren der Kurse / Angebote, bevor Sie sich scharf positioniert haben, Ihre Kundengruppe umfangreich beschrieben und verstanden haben, insbesondere die Probleme, die Sie für sie und mit ihnen lösen werden. Denken Sie immer daran, dass Ihre Investments einen hohen Wert für den Kunden haben müssen, damit Sie später eine höhere Wertschöpfung haben. Im Marketing handle ich beispielsweise nach der folgenden Regel: Aus 1 EUR Investment müssen 3 EUR RoI (Return on Investment / Umsatz) zurück kommen. Nur Sie entscheiden, ob Sie der Star Ihres Yoga-Business werden. Nicht die Krankenkassen, schlechte Kunden, Freunde usw."
      },
      {
        "kind": "paragraph",
        "text": "Ich veränderte im Laufe meiner Selbstständigkeit mehrfach mein Geschäft, die Produktpalette und die Strategie und passte alles den neuen Markterfordernissen an. Jedes Mal konnte ich „glücklicherweise“ neue Kunden gewinnen und meine Produktdienstleistungen verkaufen. Aber Glück war es nicht! Denn ich habe den Markt beobachtet, in mein Business Know-how investiert, kluge Köpfe zu Rate gezogen, das Ziel nie aus den Augen verloren und mich selbst weiter gepusht / gefördert."
      },
      {
        "kind": "paragraph",
        "text": "Am besten investierte Geld ist immer – in sich selbst. Wenn Sie in sich investieren, gibt Ihnen das eine unfassbare Energie, das Strahlen und Funkeln in Ihrer Aura, sodass sich die Menschen umdrehen werden, wenn Sie vorbeilaufen. Da stellt sich die Frage der Selbstzuversicht überhaupt nicht mehr."
      },
      {
        "kind": "paragraph",
        "text": "Wer entscheidet in sich und sein Geschäft gutes Geld zu investieren, hat sich schon im Vorfeld entschieden, es anzupacken und zu schaffen. Versagen und Kleinmut verschwinden ziemlich organisch. Hand aufs Herz: Wenn Sie nicht bereit sind, in sich zu investieren, warum soll es der Kunde tun?"
      },
      {
        "kind": "paragraph",
        "text": "Mögen Sie die Kraft finden, sich selbst zu transformieren und damit den anderen Menschen helfen, diese Transformation in der Gesellschaft weiter zu tragen."
      },
      {
        "kind": "heading",
        "text": "Ihre"
      },
      {
        "kind": "paragraph",
        "text": "P.S. Schauen Sie unten im Kasten und lösen Sie die Fragen für sich!"
      },
      {
        "kind": "paragraph",
        "text": "Im nächsten Artikel: Warum z. B. Hatha Yoga Kurse nicht in einer Nische sind und wie ist die Perspektive des Kunden auf Sie und Ihre Dienstleistung?"
      },
      {
        "kind": "heading",
        "text": "Beantworten Sie für sich folgende Fragen:"
      },
      {
        "kind": "bullet",
        "text": "Bin ich in der „Next-Shiny-Object-Falle“ geraten?"
      },
      {
        "kind": "bullet",
        "text": "Leide ich unter Expertitis?"
      },
      {
        "kind": "bullet",
        "text": "Welche Glaubenssätze (veraltete Samskaras) hindern meine Veränderung?"
      },
      {
        "kind": "bullet",
        "text": "Welche Entscheidung bzgl. des Yogaberufs möchte ich treffen?"
      },
      {
        "kind": "bullet",
        "text": "Welche Fehler können mir heute Helfer sein?"
      },
      {
        "kind": "bullet",
        "text": "Wie sieht die Kundenreise (Customer Journey) meiner Kunden aus?"
      },
      {
        "kind": "bullet",
        "text": "Was ist jetzt 2023 meine Positionierung?"
      },
      {
        "kind": "bullet",
        "text": "Habe ich alle Fragen aus den Selbst-Coaching Dokumenten beantwortet? Nutzen Sie den Code 1 für die Dokumente zum Selbst-Coaching"
      }
    ],
    "readTime": "8 min read"
  },
  {
    "slug": "positionierung",
    "title": "Positionierung, Nischenexpertise, Kundengruppe, Angebot und Preis",
    "date": "2023-06-09",
    "lang": "DE",
    "excerpt": "Artikelserie: Yoga-Business. Herzensweg mit Köpfchen. YogalehrerIn*, verdiene Deinen Wert! (1 / 5) (* Im Text nutze ich absichtlich abwechselnd beide Formen männliche wie weibliche und verzichte…",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Yoga – so schön, transformierend und voller Idealismus es ist – ist als Beruf nach vielen Jahrzehnten noch immer nicht hinreichend wie vergleichsweise Physiotherapeut, Rechtsanwalt, Arzt etc. anerkannt. Die geduldigen und hartnäckigen Anstrengungen des BDY setzten bislang viele Standards in den Ausbildungen und sind ein Garant für die Qualität der Ausbildungen und Professionalisierung des Berufs. Unbestritten."
      },
      {
        "kind": "paragraph",
        "text": "Die gute Nachricht für einen sich stets professionalisierenden und nicht traditionellen Beruf ist, dass der Bedarf an der Expertise der Yogalehrer, insbesondere im präventiven und postrehabilitativen Gesundheitsbereich, bis heute enorm gestiegen ist. Die schlechte Nachricht ist, dass die meisten Yogalehrer vom eigenen Beruf an der Armutsgrenze leben und durch nicht ausreichende finanzielle Zukunftssicherung die Rentenarmut erleben werden."
      },
      {
        "kind": "paragraph",
        "text": "Yogalehrer werden hauptsächlich als nicht angestellt bzw. freiberuflich tätig . Ausgebildete Yogalehrer haben vielleicht 1 Prozent Chance auf eine Anstellung irgendwo in einem Wellnesshotel, einer Rehaklinik oder einem Yogastudio. Belastbare Zahlen sind schwer zu finden."
      },
      {
        "kind": "paragraph",
        "text": "Die meisten Ausbildungen zum Yogalehrer berücksichtigen diese wichtige Tatsache nicht und behandeln das Thema „Vom Beruf als selbstständige Yogalehrerin zu leben“ marginal und stiefmütterlich. Es stimmt schon, dass einige Ausbilder etwas mehr Know-how vermitteln, wie man sein eigenes Studio eröffnet, welche Versicherungen man abschließen muss, wie man seine Buchhaltung macht und worauf man in dieser Hinsicht achten soll. Ähnlich wie eine Gründungsberatung."
      },
      {
        "kind": "paragraph",
        "text": "Fakt ist aber, dass die meisten Yogalehrer kein Studio eröffnen werden. Trotzdem wollen sie es – intuitiv – probieren, mit Yoga Geld zu verdienen und verbringen damit Jahre, möglichst viele Kurse für andere zu geben. Dabei bleibt nichts Monetäres übrig. Das ist verheerend, demotivierend und zugleich sehr traurig."
      },
      {
        "kind": "paragraph",
        "text": "Ein Beruf, der hauptsächlich nicht zur Anstellung führt, braucht in seinem Curriculum einen gebührenden Teil zum unternehmerischen und neuen smart-agilen Know-how. Ansonsten sind die Ausbildungen Selbstzweck."
      },
      {
        "kind": "paragraph",
        "text": "Dieses Know-how und die bezahlbaren digitalen Möglichkeiten veränderten sich in den letzten zehn Jahren gewaltig und – zum Vorteil der Entrepreneure, d. h. der Yogalehrer. Yogalehrerinnen können heute mit viel weniger Startkapital – pauschal geschätzt um 30.000 Euro -, und einem viel geringeren unternehmerischen Risiko, ein gut laufendes online Yoga-Business innerhalb der ersten drei Jahre aufbauen, das sie auf sechsstellige Umsätze bringt. Eine Zahl, die ein absolutes Muss für Selbstständige ist."
      },
      {
        "kind": "paragraph",
        "text": "Vergleichsweise und sehr grob gerechnet braucht man in den Städten wie Frankfurt oder München für ein 150 Quadratmeter großes Studio inklusive aller Kosten (Einrichtung, Betriebskosten, Gehälter / Honorare, Marketing etc.) in den ersten zwei Jahren eine Kapitalsicherung von über 150.000 Euro. Eine Summe, die nur den wenigsten bewusst ist."
      },
      {
        "kind": "paragraph",
        "text": "Eine smart-agile Gründung berücksichtigt schon in der strategischen Planungsphase digitale Produkte, arbeitet mit Komponenten und sorgt für niedrige Anfangsinvestitionen mit einem hohen Return on Invest (RoI)."
      },
      {
        "kind": "paragraph",
        "text": "Eine Gründung hat viele bewegende Teile. Die wichtigste Frage, die sich weder Yoga- Entrepreneurinnen noch staatliche Gründerberatung ernsthaft stellen, lautet: „Mit welcher innovativen Idee möchten Sie in der Yogabranche gründen?“ Schon bei dieser Frage bekommen viele ziemlich kalte Füße und setzen auf – Kurse."
      },
      {
        "kind": "paragraph",
        "text": "Kurze Erläuterung: Innovativ heißt nicht, eine Invention bzw. Erfindung zu machen. Innovativ heißt, etwas zu machen, was die anderen oder mindestens die meisten von der Konkurrenz nicht tun. Simpel und doch nicht einfach."
      },
      {
        "kind": "paragraph",
        "text": "Die fünf geschäftlichen Themengebiete – Positionierung, Nischenexpertise, Kundengruppe, Angebot und Preis – werden entscheidend für den wirtschaftlichen Erfolg des eigenen Unternehmertums in der Yogabranche."
      },
      {
        "kind": "paragraph",
        "text": "In der Artikelserie „Yoga-Business für Yogalehrer ohne Studio“ wird auf die Problematik der Existenzsicherung als Yogalehrer ohne Studio eingegangen. Zugleich werden die Chancen aufgezeigt und bewährte Tools an die Hand gegeben."
      },
      {
        "kind": "heading",
        "text": "Die richtigen Fragen stellen, bevor Sie Ihr Yoga-Business starten"
      },
      {
        "kind": "quote",
        "text": "„Wo starte ich mit meinem Yoga-Business?“ ist die häufigste Frage, die gestellt wird. Das ist zugleich eine verständliche, aber auch die verkehrte Frage, die die meisten Yogalehrerinnen stellen. Als Antwort auf die Frage entstehen Strategien, die nirgendwo führen. Denn das Ziel des Yoga-Business der betreffenden Yoga-Unternehmerin ist nicht klar definiert."
      },
      {
        "kind": "quote",
        "text": "Wohin möchte ich mit meinem eigenen Yoga-Business kommen? Was ist mein monetäres Ziel? Hobby? Taschengeld? Zweitumsatz? Vollständige Selbstständigkeit und später eine Firma mit Teams? Bin ich bereit, für diese unbegrenzte Freiheit auch die unbegrenzte Verantwortung zu übernehmen? Bin ich bereit, alleine auch schwierige Entscheidungen zu treffen und meinen Entscheidungsmuskel täglich zu trainieren? Bin ich bereit, aus der Komfortzone auszusteigen, mich täglich zu verändern, Business zu lernen und aus der Expertenrolle schrittweise in die Unternehmerrolle zu rutschen? Wie sieht mein Lebensentwurf in den nächsten 12, 36, 72 Monaten aus? Wer will ich in dieser Zeit werden?"
      },
      {
        "kind": "heading",
        "text": "Die Positionierung"
      },
      {
        "kind": "quote",
        "text": "„Ich mach ja ein bisschen Yogakurse.“ „Ich finde es so schön, wenn ich den Menschen helfen und meine Berufung leben kann.“"
      },
      {
        "kind": "quote",
        "text": "„Ich bin gerade in der Neuorientierung.“"
      },
      {
        "kind": "heading",
        "text": "Die Formel für Ihren Pitch lautet:"
      },
      {
        "kind": "quote",
        "text": "Ich bin (IHR NAME) und unterstütze / helfe (NAME DER KUNDENGRUPPE), (HAUPTPROBLEM DER KUNDENGRUPPE BENENNEN), um (MAX. DREI PROBLEME BENENNEN) zu lösen und ein Leben ohne diese Probleme zu führen. (GGF. ZUSATZERKLÄRUNG DER MERKMALE DER KUNDENGRUPPE UND DER DAUER)"
      },
      {
        "kind": "paragraph",
        "text": "In der Praxis sieht ein reifer unternehmerischer Pitch – das schildere ich an meinem persönlichen Beispiel – so aus:"
      },
      {
        "kind": "quote",
        "text": "„Hallo, ich bin Dr. Zrinka, Business Empowerment Coach und Yogalehrerin seit über 20 Jahren. Ich begleite unternehmerisch denkende Yogalehrerinnen dabei, ihr konsistentes online Business ohne oder zusätzlich zum Studio aufzubauen, sodass sie ihre scharfe und unmissverständliche Nischenpositionierung finden, ihre individuelle geschäftliche Strategie herausarbeiten, umsetzen und ihren Umsatz vervielfachen. Ich begleite ausschließlich jene YogalehrerInnen, die sich nicht hinter dem Satz verstecken: „Mir ist das Geld nicht wichtig. Ich will nur den Menschen helfen“. Denn dahinter versteckt sich die Angst vor dem „Nein“ des Kunden, der Absage, der Abweisung und der mangelnden Wertschätzung. Ich unterstütze jene, die mit Ihrer Berufung ihr eigenes Potenzial und das Geschäft so entwickeln wollen, dass sie auch in finanziellen Sachen mündig sind und nicht nur Pleite-Experten. Wer in seinem Alter das Geld-Spiel noch nicht verstanden hat, darf sich nicht beschweren, dass Yoga so schlecht bezahlt ist.“"
      },
      {
        "kind": "heading",
        "text": "Die Nischenexpertise"
      },
      {
        "kind": "paragraph",
        "text": "Die Erfahrung der letzten zehn Jahre hat gezeigt, dass man sich als Geschäftsperson mit der Nischenpositionierung des eigenen Unternehmens häufig beschäftigen soll. Yogalehrer sind Dienstleister und verdienen Ihr Geld mit ihrer Expertise. Eine spitze Nischenpositionierung bedarf eines tiefen Verständnisses zunächst für das eigene akkumulierte Wissen und die Erfahrung und dann für die Kundengruppe, auf die man sich konzentriert."
      },
      {
        "kind": "paragraph",
        "text": "Der Begriff „Nischenexpertise“ beschreibt eine spezielle Fähigkeit, Erfahrung oder Wissen in einem bestimmten Bereich oder einer bestimmten Nische zu haben. Eine Person mit Nischenexpertise ist in der Lage, sich auf ein spezielles Thema oder eine bestimmte Nische zu konzentrieren und darin ein tiefes Verständnis zu entwickeln."
      },
      {
        "kind": "paragraph",
        "text": "Die Nischenexpertise ist besonders wertvoll in Geschäftsbereichen, in denen es viele Konkurrenten gibt (mehr als 100.000 Yogalehrer in Deutschland) oder in denen es schwierig ist, sich von anderen zu unterscheiden."
      },
      {
        "kind": "paragraph",
        "text": "Selbstständige und Unternehmen, die auf die Nischenexpertise setzen, können sich auf eine bestimmte Zielgruppe konzentrieren und spezielle Produkte oder Dienstleistungen anbieten, die genau auf deren Bedürfnisse und Wünsche zugeschnitten sind."
      },
      {
        "kind": "paragraph",
        "text": "Eine Nischenexpertise ist auch bei Angestellten ein Garant für bessere Dotierung und mehr Reputation."
      },
      {
        "kind": "paragraph",
        "text": "Hier sind einige Beispiele einer im Jahr 2023 nicht mehr ertragreichen Nischenpositionierung:"
      },
      {
        "kind": "quote",
        "text": "Hatha Yoga Entspannungs-Yoga Yoga für Schwangere. Yoga bei Rückenbeschwerden. Yoga im Unternehmen Ashtanga Yoga."
      },
      {
        "kind": "paragraph",
        "text": "Der Grund: Zu große Konkurrenz mit Discountpreisen (Krankenkassen, Turngemeinden, online Studios) oder kostenlosen Videos im YouTube."
      },
      {
        "kind": "paragraph",
        "text": "In der Folge werden drei Beispiele genannt, dessen Nischenpositionierung ertragreich ist."
      },
      {
        "kind": "paragraph",
        "text": "Retreats sind ein mittlerweile gängiges Geschäftsmodell. Konkurrenz ist gewaltig, aber"
      },
      {
        "kind": "paragraph",
        "text": "innovative Dienstleistung könnte hier für gute Umsätze sorgen. Beispielsweise: Kurze und luxuriös gestaltete Yoga-Reisen in feinsten Hotels mit gestressten Führungskräften, die auf Luxus, modernen urbanen Lebensstil und Wohlfühl-Inhalte setzen. Dies setzt beim Yoga-Experten die Erfahrung auf Augenhöhe mit der Zielgruppe, den eigenen Koryphäenstatus und tiefes Verständnis der Motivation der Kundengruppe voraus. Exzellentes Netzwerken und Business Abende müssen besucht werden. Darüber hinaus muss die Zielgruppe ihre Bereitschaft beweisen, die knappe Zeit ausgerechnet mit dem Yoga-Experten zu verbringen."
      },
      {
        "kind": "paragraph",
        "text": "Innovative Nischenpositionierung kann man am Beispiel „Gesichtsyoga für natürlich schöne Frauen“, „Augenyoga“ und „Yoga bei traumatisierten Menschen verursacht durch narzisstische Beziehungen“ sehr gut beobachten. Die letzten zwei spitzen Nischenpositionierungen wurden an Dr. Zrinka Academy entwickelt."
      },
      {
        "kind": "paragraph",
        "text": "Bei „ Augenyoga “ verstand der Nischenexperte nach vielen Überlegungen, was die tiefsitzenden Probleme bei den Menschen mit schlechter Sicht waren: Unsicherheit, die Realität nicht sehen wollen (diverse Gründe), sich in sich zurückziehen, aber auch die Abweisung einer Brille (man sähe alt und uncool aus)."
      },
      {
        "kind": "paragraph",
        "text": "Die tiefsitzenden Probleme bzw. die Gedanken fanden ihren Ausdruck und ihre Materialisierung in immer progressiver Sichtverschlechterung. Das Programm „Augenyoga“, das über einen längeren Zeitraum von min. ca. sechs Monaten geübt werden soll, zeigte bei vielen Teilnehmern erstaunliche Besserungen der Sicht, so dass einige komplett auf die Brille verzichten konnten."
      },
      {
        "kind": "paragraph",
        "text": "Bei „ Gesichtsyoga “ verstand die Yoga-Expertin, dass eine große weibliche Zielgruppe sich selbst wegen des alternden Gesichts nicht mehr liebt, die Selbstzuversicht verlor, sie vernachlässigte das soziale Netzwerk, womit sich die seelische Einsamkeit und Verlassenheit entwickelten. Die Nischenexpertin hilft mit ihrem Programm, diese tiefliegenden Motive zu lösen und ein strahlendes nahezu faltenfreies Gesicht ohne OP und Botox zu bekommen."
      },
      {
        "kind": "paragraph",
        "text": "Bei „ Yogabegleitung für durch narzisstische Beziehungen traumatisierte Menschen “ unterstützt die Nischenexpertin alle Menschen, die Opfer eines solchen Verhältnisses sind, unter niedrigem Selbstwert wegen konstanter negativer Kritik leiden, sich gedemütigt, kontrolliert, manipuliert und in ihren Bedürfnissen unbefriedigt fühlen. Opfer dieser Menschen werden ängstlich in Beziehungen zu"
      },
      {
        "kind": "paragraph",
        "text": "anderen Menschen, entwickeln regelrechte Angstzustände. Die Nischenexpertin zeigt die Wege daraus und einen systematischen Ressourcenaufbau und transformiert vollständig das Leben der betreffenden Person."
      },
      {
        "kind": "heading",
        "text": "Die Kundengruppe"
      },
      {
        "kind": "quote",
        "text": "1. Alter, Geschlecht, Ausbildung, Lebensstandard, verfügbares Einkommen 2. Was ist genau sein Problem? Ihr Wunsch? Das Ziel? 3. Was denkt die Kundin? 4. Was fühlt der Kunde? 5. Welche tiefsitzenden Ängste und ungelöste Probleme er seit Jahren und Jahrzehnten mit sich herumträgt? 6. Welche Konsequenzen hat das für die Entwicklung ihres Lebens und die Erreichung der Ziele? 7. Wie schmerzhaft ist der Zustand des Kunden? 8. Ist sie bereit, einen neuen Weg zu gehen? 9. Ist er mündig in den Entscheidungen oder lässt Freunde und Familie entscheiden?"
      },
      {
        "kind": "heading",
        "text": "Das Angebot und der Preis"
      },
      {
        "kind": "quote",
        "text": "Beschreiben Sie das Angebot klar und präzise : Stellen Sie sicher, dass das Angebot so beschrieben wird, dass es für den potenziellen Kunden leicht verständlich und ansprechend ist. Vermeiden Sie es, zu viele Fachbegriffe zu verwenden oder in zu viel Detail zu gehen. Erinnern Sie sich immer an den Satz: „Verwirrt, irrt!“ Heben Sie immer den Nutzen hervor bzw. das transformative Ergebnis des Kunden: Beschreiben Sie, welche Vorteile ausgerechnet Ihr Angebot für den Kunden hat. Zum Beispiel könnte ein Yoga-Lehrer betonen, dass das Yoga-Training Stress reduzieren und die Flexibilität verbessern kann, was wiederum mehr Belastbarkeit im Job, bessere Dotierung und bessere Ergebnisse im Alltag bedeutet. Setzen Sie einen Preis, der den Wert der Transformation widerspiegelt . Viele sprechen gern von einem fairen Preis. So was gibt es nicht. Die Preisstrukturen berücksichtigen bestimmte Voraussetzungen (Produktionskosten o. ä .) sind aber weitestgehend das Ergebnis strategischer Überlegungen von Unternehmerinnen."
      },
      {
        "kind": "paragraph",
        "text": "Wenn der Preis sehr niedrig ist, wird er gern bezahlt. Der Kunde hinterfragt nicht die Fairness. Wenn der Preis höher ist, spricht man von einem unfairen Preis. So kann man sich fragen: Ist 15 Euro brutto für eine Einzelstunde in einer Yoga-Gruppe ein fairer Preis (für beide Parteien)?"
      },
      {
        "kind": "paragraph",
        "text": "Potenzielle Kunden werden unterschiedlich bereit sein, Ihren Preis zu bezahlen. Zu niedrige Preise oder schlecht kalkulierte Preisstrukturen sind einer der häufigsten und folgenreicher Fehler in der Yoga-Branche."
      },
      {
        "kind": "paragraph",
        "text": "Einer der weitreichenden Fehler, der bei fast über 90 Prozent der Yogalehrer auftaucht, ist, dass Yogalehrer im Preis einer Asana-Stunde weitreichende und umfangreiche Gesundheitsberatungen machen, Tipps geben und im Anschluss an die Kursstunde noch im Rahmen eines „Small Talks“ einen unbezahlten Experten-Service anbieten. Sie wirtschaften dadurch schlecht mit Ihrem Angebot und der Zeit."
      },
      {
        "kind": "paragraph",
        "text": "Schon eine Veränderung nur im Bereich Produktgestaltung und Leistungsumfang wird für viel mehr Umsatz sorgen. Da muss man noch nicht mal eine spitze Nischenpositionierung machen, um den Umsatz zu verdoppeln."
      },
      {
        "kind": "paragraph",
        "text": "Eine der Überlegungen in der Preisformulierung, die man als Unternehmer grundlegend anstellen soll ist: Wenn der Mensch, d. h. Ihr zukünftiger Kunde, durch die Arbeit mit Ihnen sein Leben transformiert, hat das Einfluss auf alles, was er erlebt. Diese Transformation müssen Sie kennen und sie auch ansprechen."
      },
      {
        "kind": "paragraph",
        "text": "Hier ist ein Beispiel aus der Praxis:"
      },
      {
        "kind": "paragraph",
        "text": "Die Ist-Situation: Angestellte Person seit über zwanzig Jahren, unkündbar, kommt auf der Karriereleiter seit langer Zeit nicht weiter."
      },
      {
        "kind": "paragraph",
        "text": "Das tiefliegende Motiv – also auch der einzige transformative Punkt – die eigene"
      },
      {
        "kind": "paragraph",
        "text": "Unsicherheit, die aus der Familie herrührt."
      },
      {
        "kind": "paragraph",
        "text": "Die Merkmale nach außen: Die Unsicherheit zeigt sich nach außen als Perfektionismus („Ich muss alles dreifach überprüfen.“), Fristen werden nicht eingehalten (wegen der dreifachen Überprüfung), Verbitterung bei negativen Kommentaren aus dem Team (alle verspäten sich dadurch), Rechtfertigungsverhalten (Kommentare wie „Ich bin der einzige, der noch gewissenhaft und fehlerfrei arbeitet.“), Verwendung komplizierter Fachsprache und langes Ausschweifen bei Besprechungen"
      },
      {
        "kind": "paragraph",
        "text": "(„Andere könnten denken, dass ich doch nicht so ein Fachmann bin.“), schwere komplizierte Energie, Schlafstörungen, hyperventilierten usw."
      },
      {
        "kind": "paragraph",
        "text": "Die Folgen: Der Mitarbeiter wird für seine Detailverliebtheit und das Schauen über den"
      },
      {
        "kind": "paragraph",
        "text": "Tellerrand zwar gelobt, aber bessere Dotierung oder höhere Stelle auf der Karriereleiter"
      },
      {
        "kind": "paragraph",
        "text": "bekommt er nicht."
      },
      {
        "kind": "paragraph",
        "text": "Das Vorgehen: Wenn Ihre Arbeit mit so einem Kunden das tiefliegende Motiv auflöst und sein bisheriges Verhalten in ein proaktives, schnelles Handeln innerhalb der gesetzten Fristen und mit Einfachheit und Leichtigkeit verwandelt, sehen seine Chancen auf die höhere Dotierung schon im gleichen Jahr viel besser aus. Der Kunde erkennt, dass das Investment bei Ihnen weitreichende Konsequenzen für sein ganzes Leben hat und er sich unter anderem sicherlich über mehr Geld in naher Zukunft freuen kann. Er ist transformiert und ist bereit in sich zu investieren."
      },
      {
        "kind": "quote",
        "text": "4. Betonen Sie die Einzigartigkeit Ihrer Produktdienstleistung: Beschreiben Sie, was Sie und Ihr Angebot einzigartig macht ( Alleinstellungsmerkmal ) und wie Ihre Nischenexpertise für eine bestimmte Zielgruppe besonders geeignet ist. 5. Verwenden Sie klare und präzise Sprache (keine Sanskrit Wörter oder Fachvokabular) und vermeiden Sie es, vage oder unnötig komplizierte Ausdrücke zu verwenden, die den potenziellen Kunden verwirren oder abschrecken könnten. 6. Testen Sie verschiedene Formulierungen und spielen Sie mit den Preisen . Sie wollen ja regelmäßig die Performance des Angebots überprüfen und es anpassen, um sicherzustellen, dass es den Bedürfnissen der Kunden entspricht und wettbewerbsfähig bleibt. Testen Sie Ihre Dienstleistungen, bevor Sie fertig sind. Sie wollen nicht ein Jahr an etwas arbeiten, um dann zu erfahren, dass das niemand braucht."
      },
      {
        "kind": "paragraph",
        "text": "Mögen Sie die Kraft und den Mut finden, um sich und die Gesellschaft zu transformieren!"
      },
      {
        "kind": "paragraph",
        "text": "Auf Ihren unternehmerischen Erfolg!"
      },
      {
        "kind": "paragraph",
        "text": "Om Shanti, Shanti, Shanti"
      }
    ],
    "readTime": "12 min read"
  },
  {
    "slug": "mindfulness-meditation-business-case",
    "title": "Mindfulness and meditation is a business case",
    "date": "2023-02-23",
    "lang": "EN",
    "excerpt": "Phil Jackson coached M.Jordan, D. Rodman, Shaquille O’Neill, Coby and others from Chicago Bulls. He is responsible for leading those extraordinary talents to the multiple NBA Champions titles!",
    "blocks": [
      {
        "kind": "heading",
        "text": "But how did he do that? How did he tame and channel the energies of those strong men?"
      },
      {
        "kind": "bullet",
        "text": "Phil Jackson was an excellent basketball player himself. –> PRACTICED BEFORE HE PREACHED!"
      },
      {
        "kind": "bullet",
        "text": "Phil Jackson used his intuition / soft skills to tame and channel the Vulcano energies of the great basketball players. –> BODY, MIND & HEART CONNECTION"
      },
      {
        "kind": "bullet",
        "text": "He knew exactly when and how to be strong and when and how to be soft to those characters / personalities. –> TRANSFORMATIONAL LEADERSHIP"
      },
      {
        "kind": "bullet",
        "text": "He knew how to use positive and vibrationally high energy frequency words to build and bond the team, teach them that every player matters with his unique talents and traits –> POSITIVE PSYCHOLOGY, EMPOWERMENT"
      },
      {
        "kind": "bullet",
        "text": "He introduced meditation, yoga, taichi with the players with just one sentence: “One beat one heart, one heart one mind.” –> HE BROKE THE CONVENTIONS TO CREATE THE EXTRAORDINARY RESULTS."
      },
      {
        "kind": "heading",
        "text": "Conclusion:"
      },
      {
        "kind": "paragraph",
        "text": "Mind & Body connection has been mistakenly refused over decades in the business context. Phil is big on prayer, meditation and silence. Breath controls the mind, the mind the body."
      },
      {
        "kind": "paragraph",
        "text": "Transformational Leadership never works in the long run, especially not in highly competitive economies with technological advances & a high demand in creative skills. The creative skills means not only being able to draw or make music but above all to find creative solutions to many challenges in the daily business."
      },
      {
        "kind": "paragraph",
        "text": "Transactional Leadership might not be dead but it is a short-sighted and very limited type of leadership that leads to exactly this – limited / unsatisfactory results."
      },
      {
        "kind": "paragraph",
        "text": "Sincerely Yours,"
      },
      {
        "kind": "paragraph",
        "text": "Empowerment Coach"
      },
      {
        "kind": "heading",
        "text": "Bildrechte:"
      },
      {
        "kind": "paragraph",
        "text": "(Titelbild) Dr. Zrinka Fidermuc Maler"
      },
      {
        "kind": "paragraph",
        "text": "(1) Steve Lipofsky www.Basketballphoto.com"
      },
      {
        "kind": "paragraph",
        "text": "(2) Denis Rodman, Tuomas Venhola, CC BY-SA 1.0 , via Wikimedia Commons"
      }
    ],
    "readTime": "2 min read"
  },
  {
    "slug": "ist-der-druck-im-fahrradreifen-zu-hoch-platzt-er-wie-sie-mit-atemuebungen-und-entspannungstechniken-gegen-hohen-blutdruck-effektiv-vorgehen-koennen-2",
    "title": "Der Ischias, aua!",
    "date": "2022-12-13",
    "lang": "DE",
    "excerpt": "Die Rückenschmerzen sind eine Volkskrankheit. Obwohl es an leicht verdaulichen und zugänglichen Informationen zum Thema Rückengesundheit und Rückenkrankheit, wie auch Videos im Netz nicht mangelt,…",
    "blocks": [
      {
        "kind": "heading",
        "text": "5 Ursachen für den Ischias und 5 präventive Möglichkeiten"
      },
      {
        "kind": "paragraph",
        "text": "Die meisten Probleme mit dem Ischias werden durch Probleme verursacht, die die Nervenwurzeln L4, L5 oder S1 betreffen. Der Nerv kann komprimiert oder gereizt sein, weil er von einer Bandscheibe, einem Knochen, einem Gelenk oder einem Band gerieben wird. Die daraus resultierende Entzündung macht das Gewebe und die Nerven empfindlicher und die Schmerzen werden schlimmer."
      },
      {
        "kind": "paragraph",
        "text": "1. DER BANDSCHEIBENVORFALL"
      },
      {
        "kind": "paragraph",
        "text": "Eine der häufigsten Ursachen für Ischias ist ein Bandscheibenvorfall im unteren Teil der Wirbelsäule. Das schon wird auch Bandscheibenvorfall genannt, obwohl die Bandscheibe noch nicht ausgerutscht sein musste."
      },
      {
        "kind": "paragraph",
        "text": "Die Bandscheiben sind gelartige „Polster“ zwischen den Wirbeln. Sie verhindern, dass sich die Knochen berühren und reiben."
      },
      {
        "kind": "paragraph",
        "text": "Die Funktion der Bandscheiben"
      },
      {
        "kind": "paragraph",
        "text": "Die Bandscheiben absorbieren alle Stoß-, Druck-, Zug- und Drehkräfte, die beim Gehen, Laufen, Sitzen, Drehen, Heben und jeder anderen Aktivität auf die Wirbelsäule ausgeübt werden."
      },
      {
        "kind": "paragraph",
        "text": "Sie absorbieren auch Wirkkräfte von Stürzen, Zusammenprall und anderen Unfällen."
      },
      {
        "kind": "paragraph",
        "text": "Ein Bandscheibenvorfall kann in jedem Alter auftreten. Er wird aber häufiger mit den Jahren, es sei denn Sie beugen mit Sport vor."
      },
      {
        "kind": "paragraph",
        "text": "Wann tritt der Bandscheibenvorfall auf?"
      },
      {
        "kind": "paragraph",
        "text": "Der Bandscheibenvorfall tritt auf, wenn der innere feste Kern der Bandscheibe (der sog. Gallertkern) an den Rand der Bandscheibe gedrückt wurde, sodass die äußere Hülle der Bandscheibe durchbricht."
      },
      {
        "kind": "paragraph",
        "text": "Dadurch wölbt sich die Bandscheibe und die gelartige Flüssigkeit fließt aus. Die Bandscheibe ist dann wie eine leere Hülle. Der innere Kern kann die gelartige Flüssigkeit auf einen nahegelegenen Nerv drücken. Der Druck auf den Nerv führt dazu, dass abnormale Signale an das Gehirn gesendet werden und – voilà – Sie bekommen Ischias."
      },
      {
        "kind": "paragraph",
        "text": "2. DIE SPINALSTENOSE"
      },
      {
        "kind": "paragraph",
        "text": "Der Begriff der spinalen Stenose (Spinalkanalstenose oder Spinalstenose) bezeichnet eine Verengung des Wirbelkanales. Der Spinalkanal schützt das Rückenmark und die Nerven, die an der Wirbelsäule auf und ab verlaufen. Wenn die Spinalstenose auftritt, können Nerven komprimiert werden, was Schmerzen verursacht."
      },
      {
        "kind": "paragraph",
        "text": "Unsere Wirbelsäule ist in vier Teile aufgegliedert:"
      },
      {
        "kind": "paragraph",
        "text": "die Nackenwirbelsäule,"
      },
      {
        "kind": "paragraph",
        "text": "die Halswirbelsäule,"
      },
      {
        "kind": "paragraph",
        "text": "die Lendenwirbelsäule,"
      },
      {
        "kind": "paragraph",
        "text": "das Kreuzbein."
      },
      {
        "kind": "paragraph",
        "text": "Da die Lendenwirbel einer konstanten Belastung ausgesetzt sind und das meiste Gewicht tragen, ist die Lumbalstenose die häufigste Form der Spinalkanalstenose."
      },
      {
        "kind": "paragraph",
        "text": "Die häufigsten aber nicht die einzigen Ursachen für eine Spinalkanalstenose sind: die Degeneration der Bandscheibe, die Arthrose des kleinen Wirbelgelenks (sog. Facettengelenks) und verdickte Bänder."
      },
      {
        "kind": "paragraph",
        "text": "3. DIE SPONDYLOLISTHESE BZW. DAS WIRBELGLEITEN DURCH DIE VERLAGERUNG EINES WIRBELKÖRPERS"
      },
      {
        "kind": "paragraph",
        "text": "Die Knochen der Wirbelsäule sind übereinander gestapelt und durch die Bandscheiben getrennt. Die Spondylolisthesis tritt auf, wenn ein Wirbelsäulenknochen in Bezug auf den darunter liegenden Knochen nach vorne rutscht."
      },
      {
        "kind": "paragraph",
        "text": "Wenn sich der L4-Wirbel über den L5-Wirbel (L steht für die Lendenwirbelsäule) bewegt, kann dies zu einem Knick im Spinalkanal führen, der auf eine Nervenwurzel drückt und zum Ischias führt."
      },
      {
        "kind": "paragraph",
        "text": "4. DAS TRAUMA"
      },
      {
        "kind": "paragraph",
        "text": "Der Ischiasnerv selbst ist anfällig für Schäden durch Verletzungen oder Unfälle, die das Gesäß betreffen oder die Muskelgruppe Ischiocrurales. Das sind die Muskeln auf der Rückseite des Oberschenkels. Stürze, Autounfälle und Sportverletzungen können ebenso zu Ischias führen."
      },
      {
        "kind": "paragraph",
        "text": "5. DIE SCHWANGERSCHAFT"
      },
      {
        "kind": "paragraph",
        "text": "Während des zweiten und dritten Trimesters können die Gewichtsverlagerungen und Bänderlockerungen indirekten Druck auf den Ischiasnerv ausüben. Auch das Baby kann darauf einen bedeutenden Druck ausüben."
      },
      {
        "kind": "paragraph",
        "text": "Womit beugen wir einen Ischiasanfall vor und helfen uns nach so einem Ereignis?"
      },
      {
        "kind": "paragraph",
        "text": "Eine der seltenen nachhaltigen Sachen ist – raten Sie mal – Bewegung! Es war, es ist und es wird bleiben: „Bewegung heilt.“"
      },
      {
        "kind": "paragraph",
        "text": "Überragende Mehrheit der Menschen bewegt sich ungern. Unser Arbeits- und Lebensstil veränderte sich dramatisch und er läuft fast nur noch sitzend ab. Der menschliche Körper ist aber für Bewegung geschaffen und nicht zum fast ausschließlichen Sitzen."
      },
      {
        "kind": "paragraph",
        "text": "Das Sitzen macht ihn regelrecht krank. Die Bewegung heilt ihn."
      },
      {
        "kind": "paragraph",
        "text": "Über die letzten 20 Jahre habe ich die klassische Pilates Methode, das Yoga in allen Facetten wie auch funktionales Training genutzt, um Menschen zu unterstützen, einen vitalen und gesunden Rücken ohne Ischias zu bekommen. Diese drei Trainingsmethoden sind heute aus jeglicher Sportart für Profis, ambitionierte Sportler oder einfach für Menschen, die sich etwas strukturierter bewegen wollen, nicht mehr wegzudenken."
      },
      {
        "kind": "paragraph",
        "text": "Arbeitgeber, die Leiter und Gesundheitsverantwortliche, mit denen ich in Unternehmen zusammenarbeite, geben sich größte Mühe, die Mitarbeiter gesund zu halten. Angebote gibt es meistens für jedes Alter, jeden Anspruch und jede Uhrzeit. Es gibt keine Ausrede, die einem so ausgeklügelten und individuellen Angebot, offline wie online möglich, Stand halten könnte."
      },
      {
        "kind": "paragraph",
        "text": "Jetzt sind Sie dran! Alles, was Sie machen müssen ist, sich in Ihrem Unternehme zu informieren, anzumelden und loszulegen!"
      },
      {
        "kind": "paragraph",
        "text": "Dein und Ihr"
      },
      {
        "kind": "paragraph",
        "text": "Empowerment Coach"
      }
    ],
    "readTime": "4 min read"
  },
  {
    "slug": "ist-der-druck-im-fahrradreifen-zu-hoch-platzt-er-wie-sie-mit-atemuebungen-und-entspannungstechniken-gegen-hohen-blutdruck-effektiv-vorgehen-koennen",
    "title": "Ist der Druck im Fahrradreifen zu hoch, platzt er. Wie Sie mit Atemübungen und Entspannungstechniken gegen hohen Blutdruck effektiv vorgehen können",
    "date": "2022-08-30",
    "lang": "DE",
    "excerpt": "Gehören auch Sie zu 35 Millionen Deutschen, die unter erhöhtem oder hohem Blutdruck (Hypertonie) leiden? Dann haben wir für Sie gute Nachrichten! Neben den Medikamenten gibt es ganzheitliche…",
    "blocks": [
      {
        "kind": "heading",
        "text": "Viele Faktoren sind entscheidend"
      },
      {
        "kind": "paragraph",
        "text": "Sie wissen sicherlich schon, dass Stress, Mangel an Bewegung, für Ihren Körper falsche Ernährung, zu viel Salz, Übergewicht, schwacher Herz-Kreislauf, Mangel an Schlaf Ihre Blutdruckwerte in die Höhe treiben werden. Sehr viele Menschen wissen überhaupt nicht, dass sie unter einem hohen Blutdruck leiden und schenken den Körpersignalen (z.B. Geräusche im Ohr, Nervosität, Unruhe, Angst, Kopfschmerzen und Schwindel in stressigen Situationen, häufiges Nasenbluten, verschlechterte Sicht) keine Beachtung."
      },
      {
        "kind": "paragraph",
        "text": "Die Blutdruckwerte von maximal 120/80 im körperlichen Ruhezustand gelten bei einem Erwachsenen als ideal. Bei einem Blutdruck von bis zu 139/89 liegen normale Werte vor, von denen keine Gesundheitsgefährdung ausgeht, wobei allerdings ein Wert über 129/84 bereits als hoch-normal bezeichnet wird. Das sind die Orientierungswerte."
      },
      {
        "kind": "heading",
        "text": "Die Antwort auf Verspannung ist Entspannung"
      },
      {
        "kind": "paragraph",
        "text": "Generell hat sich gezeigt, dass eine willentliche und absichtliche Herbeiführung der Entspannung zur Senkung des Blutdrucks führt. Hier sprechen wir von der „Entspannungsreaktion“ vs. eine „Stressreaktion“. Die Entspannung zählt zu kurzfristigen Stressmanagement-Techniken. Fast alle sind einfach und für jeden machbar. Man kann schon fast philosophisch sagen, dass alle wirkungsvollen und schönen Sachen im Leben – einfach sind."
      },
      {
        "kind": "paragraph",
        "text": "Eine besondere – einfache – Technik, die man in 10 Wochen einüben kann, wurde schon Mitte 60er Jahre des 20. Jahrhunderts von Dr. Henry Benson (damals an der Harvard Medical School) wissenschaftlich validiert und danach durchgeführt. Sie beruht auf dem Jahrtausend alten Yogawissen, dass der Atem bewusst gesteuert werden soll und kann."
      },
      {
        "kind": "paragraph",
        "text": "Interessanterweise haben weitere Studien gezeigt, wenn der Blutdruck während der Entspannungssitzung sinkt, dass sich die Entzündung und Verengung der Blutgefäße vermindert und zur Erweiterung der Blutgefäße kommt."
      },
      {
        "kind": "paragraph",
        "text": "Das erklärt man mit den erhöhten Stickstoffdioxid-Werten, die im Körper zur Entspannung und Erweiterung der Blutgefäße und damit zur Senkung des Blutdrucks führen."
      },
      {
        "kind": "paragraph",
        "text": "Schon irre, da sonst der Stickstoffdioxid in der Umwelt verherend ist."
      },
      {
        "kind": "heading",
        "text": "Den Druck rausnehmen"
      },
      {
        "kind": "paragraph",
        "text": "Der Druck, den alle täglich verspüren, wächst immer mehr. Vergleichen kann man ihn mit dem Luftdruck in den Fahrradreifen. Ist er zu groß, platzt auch der Reifen."
      },
      {
        "kind": "paragraph",
        "text": "Die moderne Arbeits- und Lebensweise ist viel schneller als die Evolution unseres Mind-Body-Systems. Nicht nur Erwachsene sind psychisch herausgefordert."
      },
      {
        "kind": "paragraph",
        "text": "Angstzustände, Ticks, schwarze Gedanken sind nur einige der Folgen dieses Work-hard-play-hard-Lebensstils."
      },
      {
        "kind": "paragraph",
        "text": "Die Mind-Body-Bewegung mit vielen mittlerweile sehr bekannten Methoden wie Yoga, Pilates, Meditation, Atem- und Entspannungstechniken, Tai Chi, autogenes Training… basieren alle auf unserer Atmung. Sie ist so evident, so selbstverständlich, dass man sie als irrelevant (!!!) abhackt. Großer Irrtum!"
      },
      {
        "kind": "paragraph",
        "text": "Der Atem ist die einzige Allee, die Ihr Inneres mit der Außenwelt verbindet. Wer seinen Atem steuert, beeinflusst auch seine eigene Energie, hat Kontrolle, Macht und Übersicht über einige der unterbewusst laufenden Prozesse und kann seine Ressource gekonnt schützen und nachhaltig aufbauen."
      },
      {
        "kind": "paragraph",
        "text": "Daher sage ich:"
      },
      {
        "kind": "paragraph",
        "text": "Nicht „Cogito ergo sum“ – „Ich denke, also bin ich“ – ist machtvoll, sondern „Spiro ergo sum“ – „Ich atme, also bin ich.“"
      },
      {
        "kind": "paragraph",
        "text": "Viel Erfolg!"
      },
      {
        "kind": "paragraph",
        "text": "Ihr Empowerment Coach"
      }
    ],
    "readTime": "2 min read"
  },
  {
    "slug": "warum-gute-vorsaetze-fuer-die-katz-sind",
    "title": "Warum gute Vorsätze für die Katz’ sind und die fünf Fragen, die Sie verändern werden",
    "date": "2021-01-21",
    "lang": "DE",
    "excerpt": "Die meisten Menschen nehmen sich am Jahresende etwas Gutes vor. Was auch immer Sie sich vorgenommen haben, wird es nicht klappen, wenn ein wichtiger Bestandteil fehlt. Nein, es geht nicht um Ihren…",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Gute Vorsätze bedeuten, Sie wollen etwas verändern. Dabei verändern Sie Ihr Verhalten kaum oder nur für zu kurze Zeit, erwarten aber ein völlig anderes Ergebnis. Obwohl Sie wirklich dicht im Kopf sind. Ok. Es kling etwas hart."
      },
      {
        "kind": "paragraph",
        "text": "Es gibt einen sehr machbaren, klaren, simplen Weg, das Gefühl der Lethargie, der Faulheit, des Zweifelns, der (Versagens-)Angst und so weiter zu verändern. Sie müssen Ihre körperliche Chemie verändern. Bewegen Sie sich jeden Tag, so wie es Ihnen gefällt und schaffen damit ein Fundament für die dauerhafte Ausschüttung Ihrer Glückshormone. Im nächsten Schritt müssen Sie nur viel bessere Fragen an sich selbst stellen, um die Gefühle weiter zu verändern."
      },
      {
        "kind": "paragraph",
        "text": "Sie fragen sich und antworten ohne nachzudenken. D.h. gleichzeitig schreiben, während man nachdenkt. Nicht andersrum."
      },
      {
        "kind": "paragraph",
        "text": "Wofür bin ich heute dankbar?"
      },
      {
        "kind": "paragraph",
        "text": "Was macht mich nachhaltig zufrieden? (Nicht zu verwechseln mit dem Glück!)"
      },
      {
        "kind": "paragraph",
        "text": "Worauf möchte ich den Fokus in diesem Jahr legen?"
      },
      {
        "kind": "paragraph",
        "text": "Wie möchte ich mich in einem Jahr sehen und erleben?"
      },
      {
        "kind": "paragraph",
        "text": "Sie spulen Ihr Leben nach vorne zum Moment, wo Sie am Ende stehen möchten. Was sagt Ihr zukünftiges Ich zum jetzigen Ich?"
      },
      {
        "kind": "paragraph",
        "text": "Schreiben Sie auf und beobachten das Wunder der positiven Veränderung!"
      },
      {
        "kind": "paragraph",
        "text": "Und hier noch ein paar konkrete Anregungen für weitere konkrete Veränderungen."
      },
      {
        "kind": "heading",
        "text": "Träumen Sie groß."
      },
      {
        "kind": "paragraph",
        "text": "Kühne und große Ziele überzeugen und bewegen Sie aus dem Bett, wenn es draußen noch dunkel und kalt ist. Ein ehrgeiziges Ziel inspiriert oft andere um Sie herum. Seien Sie das Licht der Veränderung, was Sie selbst sehen wollen."
      },
      {
        "kind": "heading",
        "text": "Mundgerechte Häppchen."
      },
      {
        "kind": "paragraph",
        "text": "Teilen Sie große Ziele in kleine Milestones oder Schritte. So vermeiden Sie Überforderung und sehen schneller kleine Erfolge. Das stärkt Ihr Selbstvertrauen. Machen Sie eine To-do-Liste und tragen Sie das Erledigungsdatum ein. Entscheiden Sie im Vorfeld, wie Sie sich für jede erfolgreiche Etappe belohnen wollen. Unbedingt."
      },
      {
        "kind": "heading",
        "text": "Machen Sie es sich klar, warum Sie eine Veränderung NICHT machen wollen."
      },
      {
        "kind": "paragraph",
        "text": "Sie haben richtig gelesen: Ihnen muss klar sein, warum Sie das machen wollen. Ansonsten laufen Sie der Gefahr, in kürzester Zeit weder Energie noch den Willen aufzubringen und die Veränderung auch durchzuziehen. Sie erhöhen Ihre Erfolgschancen, wenn die Waage zu Gunsten von Vorteilen zeigt, um ein neues Verhalten attraktiver zu machen, als am jetzigen Punkt zu verharren. Es hilft auch, sich auf erfreuliche Aspekte eines z.B. ungesunden Verhaltens einzulassen, aber nicht auf das Verhalten selbst."
      },
      {
        "kind": "paragraph",
        "text": "Das bedeutet: Wenn Sie beispielsweise gerne eine Pause machen, und dabei rauchen, machen Sie eine Pause und genießen Sie sie, aber finden Sie gesündere Wege, dies zu tun. Andernfalls arbeiten Sie gegen den Gegenwind und haben weniger dauerhafte Erfolge."
      },
      {
        "kind": "heading",
        "text": "Machen Sie ein Commitment."
      },
      {
        "kind": "paragraph",
        "text": "Verpflichten Sie sich bei einer Person (Freund, Kollegin etc.) Machen Sie sich durch ein schriftliches oder mündliches Versprechen gegenüber der Personen verantwortlich, die Sie nicht im Stich lassen möchten. Das wird Sie ermutigen, durch schwierige Situationen zu gehen. Oder Sie suchen online nach Menschen mit gleichen Zielen und finden da Unterstützung (z.B. populär sind Challenges jeglicher Art)."
      },
      {
        "kind": "heading",
        "text": "Geben Sie sich eine Medaille."
      },
      {
        "kind": "paragraph",
        "text": "Warten Sie nicht, bis Sie sich als Gewinner bezeichnen, bis Sie die letzte Meile Ihres großen z.B. Traummarathons hinter sich gebracht oder jedes unerwünschte Gramm Fett verloren haben. Gesundheitsveränderungen erfolgen immer schrittweise. Ermutigen Sie sich, daran festzuhalten, indem Sie eine Pause einlegen, um den Erfolg anzuerkennen, während Sie kleine und große Schritte auf dem Weg zum Ziel abhaken. Spielen Sie Ihre Lieblingsmelodie jedes Mal, wenn Sie z.B. 5.000 Schritte erreichen, 5 Zigaretten weniger am Tag rauchen, zwei Glas Wasser mehr getrunken oder die Schokoriegel nicht konsumiert haben. Lassen Sie sich von Ihrem Trainer oder Ehepartner auf den Rücken klopfen. Bitten Sie Familie und Freunde, Sie anzufeuern. Suchen Sie nach einer Online-Support-Gruppe."
      },
      {
        "kind": "heading",
        "text": "Lernen Sie aus der Vergangenheit, aber schließen Sie keine falschen Schlüsse."
      },
      {
        "kind": "paragraph",
        "text": "Hier vorweg: Nur weil es bislang nicht klappte, heißt es nicht, dass es dieses oder nächstes Mal nicht klappt! Erinnern Sie sich, wie häufig Sie als kleines Kind gefallen sind, bevor Sie richtig laufen konnten? Sicherlich nicht, aber Ihre Eltern erinnern sich garantiert! Und was haben sie damals gemacht? Haben Ihre Eltern etwa nach 79 Stürzen und blutigen Knien gesagt: „Oh Kindchen, das mit dem aufrechten Laufen wird nichts. Besser wir lassen das nun sein und du kriechst das ganze Leben.“ Oder war das anders? Schon die Vorstellung des lebenslangen Kriechens gibt uns allen die Gänsehaut und ist unvorstellbar! Natürlich haben die Eltern das nicht gesagt! Eltern und Kind haben dabei gelernt, dass die Muskeln jedes Mal stärker werden, das Gleichgewicht mit der Zeit besser und die Orientierung im Raum leichter."
      },
      {
        "kind": "paragraph",
        "text": "Daher aus der Vergangenheit zu lernen, bedeutet sich zu fragen: Was hat funktioniert? Was nicht? Sind die Zeiten richtig? Die Dauer? Die Häufigkeit? Etc. Und schön aufstehen und nach vorne gehen!"
      },
      {
        "kind": "heading",
        "text": "Dankbarkeit für jede Kleinigkeit aussprechen."
      },
      {
        "kind": "paragraph",
        "text": "Vergiss die Perfektion. Sie wollen lieber, nicht perfekt das Ziel erreichen als perfekt scheitern. Konzentrieren Sie sich auf den Weg, den Prozess und das Ziel und bleiben Sie dabei. Sie kommen garantiert an!"
      },
      {
        "kind": "paragraph",
        "text": "Viel Erfolg!"
      },
      {
        "kind": "paragraph",
        "text": "Ihr Empowerment Coach"
      },
      {
        "kind": "paragraph",
        "text": "p.s. Ach ja, und oben habe ich nicht gesagt: Simple ist nicht einfach! 😉"
      }
    ],
    "readTime": "4 min read"
  },
  {
    "slug": "yogalehrer-sind-systemrelevant",
    "title": "Yogalehrer sind systemrelevant",
    "date": "2020-04-06",
    "lang": "DE",
    "excerpt": "Die Coronakrise steigert gerade exponentiell die Relevanz von Yogalehrern und deren Expertise im betrieblichen und gesellschaftlichen Kontext. Yogalehrer, Yogacoachs, Yogaberater sind systemrelevant.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Wie Corona die Relevanz von Yogaexpertise im betrieblichen und gesellschaftlichen Kontext gerade exponentiell steigert."
      },
      {
        "kind": "paragraph",
        "text": "6. April 2020"
      },
      {
        "kind": "paragraph",
        "text": "Im gestrigen „heute journal“ war der Fernsehmoderator Claus Kleber vom Spruch eines Berliner Nachtclubbetreibers, der nun virtuell die Platten auflegt, absolut angetan, als der Clubbetreiber sagte:"
      },
      {
        "kind": "paragraph",
        "text": "„Wir sind vielleicht nicht systemrelevant, aber freuderelevant!“"
      },
      {
        "kind": "paragraph",
        "text": "Ich mochte ebenso den Spruch. Gleich drängte sich für mich die folgende Frage auf: Sind Yogalehrer, Yoga Coachs, Yogaberater systemrelevant? Selbstverständlich! Dafür gibt es jede Menge Beweise:"
      },
      {
        "kind": "bullet",
        "text": "In Deutschland praktizieren über 2,6 Mio Menschen Yoga."
      },
      {
        "kind": "bullet",
        "text": "Krankenkassen erkannten, systemrelevantes Geld sparen zu können, wenn sie auf das Know-how der Yogawissenschaft zurückgreifen und monetäre Anreize für Yogaprogramme geben."
      },
      {
        "kind": "bullet",
        "text": "Unternehmen verringern die Arbeitsunfähigkeitstage verursacht durch die muskuloskeletalen und psychischen Erkrankungen mit strukturierten verhaltensverändernden Yogaprogrammen. Sie beinhalten nicht nur den physischen Teil der körperlichen Ertüchtigung, sondern auch Entspannungs- und Meditationstechniken, darunter ganz prominent die Mindfulness Based Stress Reduction und andere Methoden des Stressmanagements."
      },
      {
        "kind": "bullet",
        "text": "Das Arbeitsklima verändert sich positiv, wenn das Unternehmen mittel- bis langfristig diese Programme anbietet. Die Mitarbeiter werden loyaler und zufriedener mit einer anderen Art der Motivation und Fürsorge des Arbeitgebers. Der monetäre Reiz verschwindet im Vergleich schon nach zwei Monaten."
      },
      {
        "kind": "bullet",
        "text": "Wenn nun alle von der Bewegungsfreiheit verwöhnten Mitarbeiter wochenlang von zu Hause die beruflichen Herausforderungen bewältigen müssen, „isoliert“ und doch ständig präsent in virtuellen Meetings ihr bestes geben, dazu noch für die eigenen Kinder (Essen, Hausaufgaben, Haushalt) sorgen, so kommen sie sehr schnell an die eigenen physischen und psychischen Grenzen. Ein erfahrener Work-Life-Stratege mit jahrelanger Expertise in Coachings und Trainings und fundiertem Yogawissen schafft schnell Abhilfe. Der aufgestaute Druck jeglicher Herkunft kann erfolgreich durch bestimmte Ventile kontrolliert wieder gesenkt werden."
      },
      {
        "kind": "bullet",
        "text": "Dankbarkeit ist eines der stärksten und am meisten transformierenden Gefühle. Im Augenblick breitet sich dieses Gefühl genauso rasant aus wie das Virus."
      },
      {
        "kind": "bullet",
        "text": "Die verinnerlichten Botschaften des Yoga, die von einem Yoga Lehrer/Coach/Berater/Trainer zeitgemäß und modern vermittelt werden, machen das Unternehmen zu einem wünschenswerten Arbeitsort."
      },
      {
        "kind": "bullet",
        "text": "Die in den Hintergrund geratenen Werte werden neu entdeckt: Mehr Akzeptanz für die Andersartigkeit, mehr Geduld, Freundlichkeit, Ehrlichkeit, Unterstützung, besserer Sinn für sich selbst, für die eigenen Grenzen, damit auch ein besseres Gefühl für die anderen, die Fortentwicklung der Resilienz in schnellen Zeiten mit steigender Verdichtung der Arbeit. Das sind nur einige der Argumente."
      },
      {
        "kind": "paragraph",
        "text": "Yoga Coachs stehen für eine willkommene und veränderte Lebens- und Arbeitsweise. Sie sind nicht nur für betriebliche Ökosysteme von vitaler Bedeutung, sondern auch für die Gesellschaft insgesamt. Man kann ruhigen Gewissens sagen, sie sind systemrelevant und letztendlich auch freuderelevant."
      }
    ],
    "readTime": "2 min read"
  },
  {
    "slug": "selbstkompetenzen-und-teamkompetenzen",
    "title": "Selbstkompetenzen und Teamkompetenzen",
    "date": "2019-11-07",
    "lang": "DE",
    "excerpt": "Sie geben von nun an der Entwicklung von Selbstkompetenzen (persönliche, soziale, methodische, wie Resilienz) und Teamkompetenzen wie auch der Gesundheit einen anderen Stellenwert in Ihrer…",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sie geben von nun an der Entwicklung von Selbstkompetenzen (persönliche, soziale, methodische, wie Resilienz) und Teamkompetenzen wie auch der Gesundheit einen anderen Stellenwert in Ihrer Unternehmenskultur."
      },
      {
        "kind": "paragraph",
        "text": "Die Gesundheit ganzheitlich verstanden und ausgedrückt in körperlich wie geistig fitten Mitarbeitern mit minimaler Anzahl von AU-Tagen jährlich und vor allem ausgedrückt in Motivationskraft, Loyalität, Engagement, Innovationskraft, Neugier, positivem Arbeitsklima, in wertschätzendem Umgang, transparenter und einfacher Kommunikation."
      },
      {
        "kind": "paragraph",
        "text": "Hier ein Beispiel aus der Praxis (Anfang 2019): Ein Verband, ca. 400 MA, gemischte Altersstruktur, die Mehrheit bilden doch die gut über 35 Jahre alten Mitarbeiter. Unterschiedliche Berufsprofile, also nicht nur die typischen Büroleute. Die AU-Rate beträgt 5,9 Prozent jährlich, Tendenz steigend. Davon fällt 1 Prozent auf die psychischen Erkrankungen."
      },
      {
        "kind": "paragraph",
        "text": "Die Gründe:"
      },
      {
        "kind": "bullet",
        "text": "Schlechtes Arbeitsklima,"
      },
      {
        "kind": "bullet",
        "text": "Negative Einstellung"
      },
      {
        "kind": "bullet",
        "text": "Jammerkultur"
      },
      {
        "kind": "bullet",
        "text": "Konflikte"
      },
      {
        "kind": "bullet",
        "text": "Burnout"
      },
      {
        "kind": "bullet",
        "text": "Depressionen und hoher Stresspegel"
      },
      {
        "kind": "paragraph",
        "text": "Die Personalchefin erklärt bescheiden: Sie würde die AU-Rate gern um nur 0,1 Prozent senken, um ca. 50.000 EUR zu sparen."
      },
      {
        "kind": "paragraph",
        "text": "Wie hört sich das für Sie an? Wurden Sie schon mit der gleichen Frage konfrontiert? Klingt diese Bescheidenheit nicht eher als Verzweiflung? Oder eher als Anflehung einer anderen höheren Macht, Gott vielleicht, er möge diese Bescheidenheit mit der Senkung der AU-Rate belohnen? Nichts dergleichen wird passieren! Sie als Entscheider sind am Schachzug!"
      },
      {
        "kind": "heading",
        "text": "Teamkompetenzen und Entscheidungsstärke entwickeln"
      },
      {
        "kind": "paragraph",
        "text": "Jegliche Entscheidung liegt bei Ihnen als Geschäftsführer, Personalleiter, Gesundheitsmanager oder Gesundheitsbeauftragter. Je schneller und klarer Sie entscheiden zu handeln, desto produktiver, zielgerichteter, innovativer, gesünder, loyaler, motivierter, positiver und kooperativer werden Ihre Mitarbeiter handeln und denken."
      },
      {
        "kind": "heading",
        "text": "Ihre Probleme"
      },
      {
        "kind": "paragraph",
        "text": "Es stimmt schon, dass jeder für sich selbst verantwortlich ist. Schließlich sind es mündige Menschen, die für Sie arbeiten. Aber als Arbeitgeber werden Sie mächtig durch folgende Phänomene in Mitleidenschaft gezogen, wenn Ihre Mitarbeiter:"
      },
      {
        "kind": "bullet",
        "text": "krankheitsbedingt ausfallen (Absentismus),"
      },
      {
        "kind": "bullet",
        "text": "unmotiviert auf das Gehalt am Monatsende warten (Präsentismus),"
      },
      {
        "kind": "bullet",
        "text": "vor Langeweile am Rechner im Internet surfen oder ihre PS gar nicht auf die Straße bringen wollen (Bore-Out),"
      },
      {
        "kind": "bullet",
        "text": "wie gehetzte Hühner im Stall herumlaufen (Sense-out) bis sie vor Erschöpfung auf die Nase fallen (Burn-Out) und"
      },
      {
        "kind": "bullet",
        "text": "das Arbeitsklima, die Kooperation, die Innovations- und Wettbewerbsfähigkeit negativ viral beeinflussen (der negative Dominoeffekt)."
      },
      {
        "kind": "paragraph",
        "text": "Die genannten Phänomene machen Sie zum Komplizen, wenn Sie die Entscheidung hinausschieben. Der häufigste Grund dafür ist ein falscher Wert und ein Mindset, was in die Sackgasse führt: Nämlich das Geiz-ist-geil-Mindset. Und Ihre Lösung liegt wie so oft im Leben? Bravo! Sie ahnen es schon – in Ihrem Mindset!"
      }
    ],
    "readTime": "2 min read"
  },
  {
    "slug": "der-monetaere-nutzen-des-dr-zrinka-empowerment",
    "title": "Der monetäre Nutzen des Dr. Zrinka Empowerment",
    "date": "2019-11-06",
    "lang": "DE",
    "excerpt": "Dr. Zrinkas Empowerment bringt einen direkten monetären Nutzen. Schlechtes Arbeitsklima und innere Konflikte im Team verursacht durch den Rollenwechsel, Machtverhältnisse und nicht weniger wichtig…",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Dr. Zrinkas Empowerment bringt einen direkten monetären Nutzen."
      },
      {
        "kind": "paragraph",
        "text": "Schlechtes Arbeitsklima und innere Konflikte im Team verursacht durch den Rollenwechsel, Machtverhältnisse und nicht weniger wichtig persönliche tiefgreifende (tlw. traumatische) Erlebnisse. Mehrere Personen sind am Konflikt beteiligt. Eine Person erlitt schon den Herzinfarkt."
      },
      {
        "kind": "paragraph",
        "text": "Sie konnte sich glücklicherweise davon gut erholen und schottet im Verhältnis zu anderen nur noch ab (Selbstschutz-/Überlebensmodus). Der Chef ist in Zugzwang und diskutiert lange mit der Personalchefin. Sie ist fürs sofortige Tun (Entscheidungsstärke). Er überlegt aber über sechs Monate, was zu tun ist (Entscheidungsschwäche). Die Machtspiele im problematischen Kreis (min. 3 Personen) verfestigen sich. Das Beratungsgeschäft leidet bedeutsam."
      },
      {
        "kind": "paragraph",
        "text": "Einige der Folgen: Wenn man von 24 Arbeitstagen im Monat ausgeht, dann sind es 144 Tage in diesem Halbjahr gewesen. Indirekte monetäre Verluste gab es an jeder Ecke. Wohl wissend, dass einige der „sanften“ Schlüsselfaktoren (Engagement, Motivation, Tatkraft, Innovation, gute Kommunikation …) für den unternehmerischen Erfolg schwer zu messen sind, lohnt es folgende Berechnung aufzustellen:"
      },
      {
        "kind": "paragraph",
        "text": "Wenn man schwaches Engagement, Informationsverweigerung, Machtspiele, schlechten Kundenkontakt, Verlust von Geschäftschancen und Zeit mit läppischen 200 EUR pro Tag und Person berechnet, sprechen wir von 28.800 EUR pro Person, hochgerechnet 86.400 EUR (da min. 3 Prs.). Hinzu kommt noch eine konservative Berechnung von 3 AU-Tagen p.P., die direkt mit dem Konflikt verbunden sind. Wenn wir hier einen Durchschnitt (da unterschiedliche Gehaltsgruppen im Konflikt stehen) von 400 EUR pro Tag nehmen, sprechen wir von 1.200 EUR pro Person bzw. von 9 Krankheitstagen, die 4.300 EUR kosten."
      },
      {
        "kind": "paragraph",
        "text": "Der direkte monetäre Verlust des Unternehmens beläuft sich am Ende auf min. 86.400 EUR nur im gegebenen Halbjahr. Faszinierend, oder? Wer trägt die Verantwortung für diesen Verlust? Die Antwort überlasse ich Ihnen."
      }
    ],
    "readTime": "2 min read"
  }
];
