export type LegalBlock = {
  kind: "heading" | "paragraph";
  text: string;
};

export type PrivacySection = {
  title: string;
  blocks: LegalBlock[];
};

export const privacySections: PrivacySection[] = [
  {
    "title": "1. Datenschutz auf einen Blick",
    "blocks": [
      {
        "kind": "heading",
        "text": "Allgemeine Hinweise"
      },
      {
        "kind": "paragraph",
        "text": "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung."
      },
      {
        "kind": "heading",
        "text": "Datenerfassung auf dieser Website"
      },
      {
        "kind": "paragraph",
        "text": "Wer ist verantwortlich für die Datenerfassung auf dieser Website?"
      },
      {
        "kind": "paragraph",
        "text": "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen."
      },
      {
        "kind": "paragraph",
        "text": "Wie erfassen wir Ihre Daten?"
      },
      {
        "kind": "paragraph",
        "text": "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben."
      },
      {
        "kind": "paragraph",
        "text": "Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten."
      },
      {
        "kind": "paragraph",
        "text": "Wofür nutzen wir Ihre Daten?"
      },
      {
        "kind": "paragraph",
        "text": "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden."
      },
      {
        "kind": "paragraph",
        "text": "Welche Rechte haben Sie bezüglich Ihrer Daten?"
      },
      {
        "kind": "paragraph",
        "text": "Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu."
      },
      {
        "kind": "paragraph",
        "text": "Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“."
      },
      {
        "kind": "heading",
        "text": "Analyse-Tools und Tools von Drittanbietern"
      },
      {
        "kind": "paragraph",
        "text": "Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden."
      },
      {
        "kind": "paragraph",
        "text": "Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen zu diesen Tools und über Ihre Widerspruchsmöglichkeiten finden Sie in der folgenden Datenschutzerklärung."
      }
    ]
  },
  {
    "title": "2. Hosting",
    "blocks": [
      {
        "kind": "heading",
        "text": "Externes Hosting"
      },
      {
        "kind": "paragraph",
        "text": "Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln."
      },
      {
        "kind": "paragraph",
        "text": "Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO)."
      },
      {
        "kind": "paragraph",
        "text": "Unser Hoster (ionos in Montabaur) wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen."
      },
      {
        "kind": "heading",
        "text": "Abschluss eines Vertrages über Auftragsverarbeitung"
      },
      {
        "kind": "paragraph",
        "text": "Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über Auftragsverarbeitung mit unserem Hoster geschlossen."
      }
    ]
  },
  {
    "title": "3. Allgemeine Hinweise und Pflichtinformationen",
    "blocks": [
      {
        "kind": "heading",
        "text": "Datenschutz"
      },
      {
        "kind": "paragraph",
        "text": "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung."
      },
      {
        "kind": "paragraph",
        "text": "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht."
      },
      {
        "kind": "paragraph",
        "text": "Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich."
      },
      {
        "kind": "heading",
        "text": "Hinweis zur verantwortlichen Stelle"
      },
      {
        "kind": "paragraph",
        "text": "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:"
      },
      {
        "kind": "paragraph",
        "text": "Dr. Zrinka K. Fidermuc Maler"
      },
      {
        "kind": "paragraph",
        "text": "Postanschrift: Kaiserstr. 61, 60329 Frankfurt"
      },
      {
        "kind": "paragraph",
        "text": "Telefon: +49 69 67727688"
      },
      {
        "kind": "paragraph",
        "text": "E-Mail: info@dr-zrinka.de"
      },
      {
        "kind": "paragraph",
        "text": "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet."
      },
      {
        "kind": "heading",
        "text": "Widerruf Ihrer Einwilligung zur Datenverarbeitung"
      },
      {
        "kind": "paragraph",
        "text": "Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt."
      },
      {
        "kind": "paragraph",
        "text": "Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)"
      },
      {
        "kind": "paragraph",
        "text": "WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO)."
      },
      {
        "kind": "paragraph",
        "text": "WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO)."
      },
      {
        "kind": "heading",
        "text": "Beschwerderecht bei der zuständigen Aufsichtsbehörde"
      },
      {
        "kind": "paragraph",
        "text": "Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe."
      },
      {
        "kind": "heading",
        "text": "Recht auf Datenübertragbarkeit"
      },
      {
        "kind": "paragraph",
        "text": "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist."
      },
      {
        "kind": "heading",
        "text": "SSL- bzw. TLS-Verschlüsselung"
      },
      {
        "kind": "paragraph",
        "text": "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile."
      },
      {
        "kind": "paragraph",
        "text": "Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden."
      },
      {
        "kind": "heading",
        "text": "Auskunft, Löschung und Berichtigung"
      },
      {
        "kind": "paragraph",
        "text": "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden."
      },
      {
        "kind": "heading",
        "text": "Recht auf Einschränkung der Verarbeitung"
      },
      {
        "kind": "paragraph",
        "text": "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:"
      },
      {
        "kind": "paragraph",
        "text": "Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."
      },
      {
        "kind": "paragraph",
        "text": "Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen."
      },
      {
        "kind": "paragraph",
        "text": "Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."
      },
      {
        "kind": "paragraph",
        "text": "Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."
      },
      {
        "kind": "paragraph",
        "text": "Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden."
      },
      {
        "kind": "heading",
        "text": "Widerspruch gegen Werbe-E-Mails"
      },
      {
        "kind": "paragraph",
        "text": "Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor."
      }
    ]
  },
  {
    "title": "4. Datenerfassung auf dieser Website",
    "blocks": [
      {
        "kind": "heading",
        "text": "Cookies"
      },
      {
        "kind": "paragraph",
        "text": "Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert."
      },
      {
        "kind": "paragraph",
        "text": "Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen."
      },
      {
        "kind": "paragraph",
        "text": "Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein."
      },
      {
        "kind": "paragraph",
        "text": "Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar."
      },
      {
        "kind": "paragraph",
        "text": "Soweit andere Cookies (z. B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt."
      },
      {
        "kind": "heading",
        "text": "Server-Log-Dateien"
      },
      {
        "kind": "paragraph",
        "text": "Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:"
      },
      {
        "kind": "heading",
        "text": "Browsertyp und Browserversion"
      },
      {
        "kind": "heading",
        "text": "verwendetes Betriebssystem"
      },
      {
        "kind": "heading",
        "text": "Referrer URL"
      },
      {
        "kind": "heading",
        "text": "Hostname des zugreifenden Rechners"
      },
      {
        "kind": "heading",
        "text": "Uhrzeit der Serveranfrage"
      },
      {
        "kind": "heading",
        "text": "IP-Adresse"
      },
      {
        "kind": "paragraph",
        "text": "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen."
      },
      {
        "kind": "paragraph",
        "text": "Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden."
      },
      {
        "kind": "heading",
        "text": "Kontaktformular"
      },
      {
        "kind": "paragraph",
        "text": "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."
      },
      {
        "kind": "paragraph",
        "text": "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde."
      },
      {
        "kind": "paragraph",
        "text": "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt."
      },
      {
        "kind": "heading",
        "text": "Anfrage per E-Mail, Telefon oder Telefax"
      },
      {
        "kind": "paragraph",
        "text": "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."
      },
      {
        "kind": "paragraph",
        "text": "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben."
      },
      {
        "kind": "paragraph",
        "text": "Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt."
      },
      {
        "kind": "paragraph",
        "text": "Verarbeiten von Daten (Kunden- und Vertragsdaten)"
      },
      {
        "kind": "paragraph",
        "text": "Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen."
      },
      {
        "kind": "paragraph",
        "text": "Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt."
      },
      {
        "kind": "heading",
        "text": "Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte"
      },
      {
        "kind": "paragraph",
        "text": "Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut."
      },
      {
        "kind": "paragraph",
        "text": "Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht."
      },
      {
        "kind": "paragraph",
        "text": "Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet."
      }
    ]
  },
  {
    "title": "5. Soziale Medien",
    "blocks": [
      {
        "kind": "heading",
        "text": "Social-Media-Plugins mit Shariff"
      },
      {
        "kind": "paragraph",
        "text": "Auf dieser Website werden Plugins von sozialen Medien verwendet (z. B. Facebook, Twitter, Google+, Instagram, Pinterest, XING, LinkedIn, Tumblr)."
      },
      {
        "kind": "paragraph",
        "text": "Die Plugins können Sie in der Regel anhand der jeweiligen Social-Media-Logos erkennen. Um den Datenschutz auf dieser Website zu gewährleisten, verwenden wir diese Plugins nur zusammen mit der sogenannten „Shariff“-Lösung. Diese Anwendung verhindert, dass die auf dieser Website integrierten Plugins Daten schon beim ersten Betreten der Seite an den jeweiligen Anbieter übertragen."
      },
      {
        "kind": "paragraph",
        "text": "Erst wenn Sie das jeweilige Plugin durch Anklicken der zugehörigen Schaltfläche aktivieren, wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das Plugin aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer IP-Adresse dieser Website besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Account (z. B. Facebook) eingeloggt sind, kann der jeweilige Anbieter den Besuch dieser Website Ihrem Benutzerkonto zuordnen."
      },
      {
        "kind": "paragraph",
        "text": "Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO dar. Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen."
      }
    ]
  },
  {
    "title": "6. Analyse-Tools und Werbung",
    "blocks": [
      {
        "kind": "heading",
        "text": "Google Analytics"
      },
      {
        "kind": "paragraph",
        "text": "Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland."
      },
      {
        "kind": "paragraph",
        "text": "Google Analytics verwendet so genannte „Cookies“. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert."
      },
      {
        "kind": "paragraph",
        "text": "Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar."
      },
      {
        "kind": "heading",
        "text": "IP Anonymisierung"
      },
      {
        "kind": "paragraph",
        "text": "Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt."
      },
      {
        "kind": "heading",
        "text": "Browser Plugin"
      },
      {
        "kind": "paragraph",
        "text": "Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de."
      },
      {
        "kind": "heading",
        "text": "Widerspruch gegen Datenerfassung"
      },
      {
        "kind": "paragraph",
        "text": "Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert: Google Analytics deaktivieren."
      },
      {
        "kind": "paragraph",
        "text": "Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: https://support.google.com/analytics/answer/6004245?hl=de."
      },
      {
        "kind": "heading",
        "text": "Auftragsverarbeitung"
      },
      {
        "kind": "paragraph",
        "text": "Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um."
      },
      {
        "kind": "heading",
        "text": "Demografische Merkmale bei Google Analytics"
      },
      {
        "kind": "paragraph",
        "text": "Diese Website nutzt die Funktion „demografische Merkmale“ von Google Analytics. Dadurch können Berichte erstellt werden, die Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese Daten stammen aus interessenbezogener Werbung von Google sowie aus Besucherdaten von Drittanbietern. Diese Daten können keiner bestimmten Person zugeordnet werden. Sie können diese Funktion jederzeit über die Anzeigeneinstellungen in Ihrem Google-Konto deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics wie im Punkt „Widerspruch gegen Datenerfassung“ dargestellt generell untersagen."
      },
      {
        "kind": "heading",
        "text": "Speicherdauer"
      },
      {
        "kind": "paragraph",
        "text": "Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit Cookies, Nutzerkennungen (z. B. User ID) oder Werbe-IDs (z. B. DoubleClick-Cookies, Android-Werbe-ID) verknüpft sind, werden nach 14 Monaten anonymisiert bzw. gelöscht. Details hierzu ersehen Sie unter folgendem Link: https://support.google.com/analytics/answer/7667196?hl=de."
      },
      {
        "kind": "heading",
        "text": "1&1 Web Analytics"
      },
      {
        "kind": "paragraph",
        "text": "Diese Website nutzt die Analysedienste von 1&1-Webanalytics. Anbieter ist die 1&1 IONOS SE, Elgendorfer Straße 57, D – 56410 Montabaur. Im Rahmen der Analysen mit 1&1 können u. a. Besucherzahlen und –verhalten (z. B. Anzahl der Seitenaufrufe, Dauer eines Webseitenbesuchs, Absprungraten), Besucherquellen (d. h., von welcher Seite der Besucher kommt), Besucherstandorte sowie technische Daten (Browser- und Betriebssystemversionen) analysiert werden. Zu diesem Zweck speichert 1&1 insbesondere folgende Daten:"
      },
      {
        "kind": "paragraph",
        "text": "Referrer (zuvor besuchte Webseite)"
      },
      {
        "kind": "heading",
        "text": "angeforderte Webseite oder Datei"
      },
      {
        "kind": "heading",
        "text": "Browsertyp und Browserversion"
      },
      {
        "kind": "heading",
        "text": "verwendetes Betriebssystem"
      },
      {
        "kind": "heading",
        "text": "verwendeter Gerätetyp"
      },
      {
        "kind": "heading",
        "text": "Uhrzeit des Zugriffs"
      },
      {
        "kind": "paragraph",
        "text": "IP-Adresse in anonymisierter Form (wird nur zur Feststellung des Orts des Zugriffs verwendet)"
      },
      {
        "kind": "paragraph",
        "text": "Die Datenerfassung erfolgt laut 1&1 vollständig anonymisiert, sodass sie nicht zu einzelnen Personen zurückverfolgt werden kann. Cookies werden von 1&1-Webanalytics nicht gespeichert."
      },
      {
        "kind": "paragraph",
        "text": "Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der statistischen Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar."
      },
      {
        "kind": "paragraph",
        "text": "Weitere Informationen zur Datenerfassung und Verarbeitung durch 1&1-Webanalytics entnehmen Sie folgenden Links:"
      },
      {
        "kind": "paragraph",
        "text": "https://hosting.1und1.de/hilfe/online-marketing/"
      },
      {
        "kind": "paragraph",
        "text": "https://hosting.1und1.de/hilfe/datenschutz/datenverarbeitung-von-webseitenbesuchern-ihres-company-name-produktes/webanalytics/"
      },
      {
        "kind": "paragraph",
        "text": "https://hosting.1und1.de/terms-gtc/terms-privacy/"
      },
      {
        "kind": "heading",
        "text": "Auftragsverarbeitung"
      },
      {
        "kind": "paragraph",
        "text": "Wir haben mit 1&1 einen Vertrag zur Auftragsverarbeitung abgeschlossen. Dieser Vertrag soll den datenschutzkonformen Umgang mit Ihren personenbezogenen Daten durch 1&1 sicherstellen."
      },
      {
        "kind": "heading",
        "text": "WordPress Stats"
      },
      {
        "kind": "paragraph",
        "text": "Diese Website nutzt das WordPress Tool Stats, um Besucherzugriffe statistisch auszuwerten. Anbieter ist die Automattic Inc., 60 29th Street #343, San Francisco, CA 94110-4929, USA."
      },
      {
        "kind": "paragraph",
        "text": "WordPress Stats verwendet Cookies, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website erlauben. Die durch die Cookies generierten Informationen über die Benutzung dieser Website werden auf Servern in den USA gespeichert. Ihre IP-Adresse wird nach der Verarbeitung und vor der Speicherung anonymisiert. „WordPress-Stats“-Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen."
      },
      {
        "kind": "paragraph",
        "text": "Die Speicherung von „WordPress Stats“-Cookies und die Nutzung dieses Analyse-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar."
      },
      {
        "kind": "paragraph",
        "text": "Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein."
      },
      {
        "kind": "paragraph",
        "text": "Sie können der Erhebung und Nutzung Ihrer Daten für die Zukunft widersprechen, indem Sie mit einem Klick auf diesen Link einen Opt-Out-Cookie in Ihrem Browser setzen: https://www.quantcast.com/opt-out/. Wenn Sie die Cookies auf Ihrem Rechner löschen, müssen Sie den Opt-Out-Cookie erneut setzen."
      },
      {
        "kind": "heading",
        "text": "Google Analytics Remarketing"
      },
      {
        "kind": "paragraph",
        "text": "Diese Website nutzt die Funktionen von Google Analytics Remarketing in Verbindung mit den geräteübergreifenden Funktionen von Google Ads und Google DoubleClick. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland."
      },
      {
        "kind": "paragraph",
        "text": "Diese Funktion ermöglicht es die mit Google Analytics Remarketing erstellten Werbe-Zielgruppen mit den geräteübergreifenden Funktionen von Google Ads und Google DoubleClick zu verknüpfen. Auf diese Weise können interessenbezogene, personalisierte Werbebotschaften, die in Abhängigkeit Ihres früheren Nutzungs- und Surfverhaltens auf einem Endgerät (z. B. Handy) an Sie angepasst wurden auch auf einem anderen Ihrer Endgeräte (z. B. Tablet oder PC) angezeigt werden."
      },
      {
        "kind": "paragraph",
        "text": "Haben Sie eine entsprechende Einwilligung erteilt, verknüpft Google zu diesem Zweck Ihren Web- und App-Browserverlauf mit Ihrem Google-Konto. Auf diese Weise können auf jedem Endgerät auf dem Sie sich mit Ihrem Google-Konto anmelden, dieselben personalisierten Werbebotschaften geschaltet werden."
      },
      {
        "kind": "paragraph",
        "text": "Zur Unterstützung dieser Funktion erfasst Google Analytics google-authentifizierte IDs der Nutzer, die vorübergehend mit unseren Google-Analytics-Daten verknüpft werden, um Zielgruppen für die geräteübergreifende Anzeigenwerbung zu definieren und zu erstellen. Sie können dem geräteübergreifenden Remarketing/Targeting dauerhaft widersprechen, indem Sie personalisierte Werbung deaktivieren; folgen Sie hierzu diesem Link: https://www.google.com/settings/ads/onweb/."
      },
      {
        "kind": "paragraph",
        "text": "Die Zusammenfassung der erfassten Daten in Ihrem Google-Konto erfolgt ausschließlich auf Grundlage Ihrer Einwilligung, die Sie bei Google abgeben oder widerrufen können (Art. 6 Abs. 1 lit. a DSGVO). Bei Datenerfassungsvorgängen, die nicht in Ihrem Google-Konto zusammengeführt werden (z. B. weil Sie kein Google-Konto haben oder der Zusammenführung widersprochen haben) beruht die Erfassung der Daten auf Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse ergibt sich daraus, dass der Websitebetreiber ein Interesse an der anonymisierten Analyse der Websitebesucher zu Werbezwecken hat."
      },
      {
        "kind": "paragraph",
        "text": "Weitergehende Informationen und die Datenschutzbestimmungen finden Sie in der Datenschutzerklärung von Google unter: https://policies.google.com/technologies/ads?hl=de."
      },
      {
        "kind": "heading",
        "text": "Google Ads und Google Conversion-Tracking"
      },
      {
        "kind": "paragraph",
        "text": "Diese Website verwendet Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland."
      },
      {
        "kind": "paragraph",
        "text": "Im Rahmen von Google Ads nutzen wir das so genannte Conversion-Tracking. Wenn Sie auf eine von Google geschaltete Anzeige klicken wird ein Cookie für das Conversion-Tracking gesetzt. Bei Cookies handelt es sich um kleine Textdateien, die der Internet-Browser auf dem Computer des Nutzers ablegt. Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung der Nutzer. Besucht der Nutzer bestimmte Seiten dieser Website und das Cookie ist noch nicht abgelaufen, können Google und wir erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde."
      },
      {
        "kind": "paragraph",
        "text": "Jeder Google Ads-Kunde erhält ein anderes Cookie. Die Cookies können nicht über die Websites von Google Ads-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken für Google Ads-Kunden zu erstellen, die sich für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen. Wenn Sie nicht am Tracking teilnehmen möchten, können Sie dieser Nutzung widersprechen, indem Sie das Cookie des Google Conversion-Trackings über ihren Internet-Browser unter Nutzereinstellungen leicht deaktivieren. Sie werden sodann nicht in die Conversion-Tracking Statistiken aufgenommen."
      },
      {
        "kind": "paragraph",
        "text": "Die Speicherung von „Conversion-Cookies“ und die Nutzung dieses Tracking-Tools erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar."
      },
      {
        "kind": "paragraph",
        "text": "Mehr Informationen zu Google Ads und Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google: https://policies.google.com/privacy?hl=de."
      },
      {
        "kind": "paragraph",
        "text": "Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein."
      }
    ]
  },
  {
    "title": "7. Newsletter",
    "blocks": [
      {
        "kind": "heading",
        "text": "Newsletterdaten"
      },
      {
        "kind": "paragraph",
        "text": "Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter."
      },
      {
        "kind": "paragraph",
        "text": "Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt."
      },
      {
        "kind": "paragraph",
        "text": "Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters aus der Newsletterverteilerliste gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon unberührt."
      },
      {
        "kind": "paragraph",
        "text": "Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, um künftige Mailings zu verhindern. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen."
      },
      {
        "kind": "heading",
        "text": "KlickTipp"
      },
      {
        "kind": "paragraph",
        "text": "Diese Website nutzt KlickTipp für den Versand von Newslettern. Anbieter ist die Klick-Tipp Limited, 15 Cambridge Court, 210 Shepherd’s Bush Road, London W6 7NJ,Vereinigtes Königreich."
      },
      {
        "kind": "paragraph",
        "text": "KlickTipp ist ein Dienst, mit dem der Newsletterversand organisiert und analysiert werden kann. Die von Ihnen zwecks Newsletterbezug eingegebenen Daten (z. B. E-Mail-Adresse) werden auf den Servern von KlickTipp in Deutschland bzw. Irland gespeichert."
      },
      {
        "kind": "paragraph",
        "text": "Unsere mit KlickTipp versandten Newsletter ermöglichen uns die Analyse des Verhaltens der Newsletterempfänger. Hierbei kann u. a. analysiert werden, wie viele Empfänger die Newsletternachricht geöffnet haben und wie oft welcher Link im Newsletter angeklickt wurde. Mit Hilfe des sogenannten Conversion-Trackings kann außerdem analysiert werden, ob nach Anklicken des Links im Newsletter eine vorab definierte Aktion (z. B. Kauf eines Produkts auf dieser Website) erfolgt ist."
      },
      {
        "kind": "paragraph",
        "text": "Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen, indem Sie den Newsletter abbestellen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt."
      },
      {
        "kind": "paragraph",
        "text": "Wenn Sie keine Analyse durch KlickTipp wollen, müssen Sie den Newsletter abbestellen. Hierfür stellen wir in jeder Newsletternachricht einen entsprechenden Link zur Verfügung. Des Weiteren können Sie den Newsletter auch direkt auf der Website abbestellen."
      },
      {
        "kind": "paragraph",
        "text": "Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters aus der Newsletterverteilerliste gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon unberührt."
      },
      {
        "kind": "paragraph",
        "text": "Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, um künftige Mailings zu verhindern. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen."
      },
      {
        "kind": "paragraph",
        "text": "Näheres über Datenschutzbeauftragten von KlickTipp:"
      },
      {
        "kind": "paragraph",
        "text": "Rechtsanwalt Dr. Stephan Gärtner"
      },
      {
        "kind": "paragraph",
        "text": "Stanhope SG Datenschutz GmbH"
      },
      {
        "kind": "paragraph",
        "text": "Heinrich-Mann-Straße"
      },
      {
        "kind": "paragraph",
        "text": "1118435 Hansestadt Stralsund"
      },
      {
        "kind": "paragraph",
        "text": "dpo(at)thenextstanhope.de"
      },
      {
        "kind": "heading",
        "text": "Abschluss eines Vertrags über Auftragsverarbeitung"
      },
      {
        "kind": "paragraph",
        "text": "Wir haben mit KlickTipp einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von KlickTipp vollständig um."
      }
    ]
  },
  {
    "title": "8. Plugins und Tools",
    "blocks": [
      {
        "kind": "heading",
        "text": "YouTube mit erweitertem Datenschutz"
      },
      {
        "kind": "paragraph",
        "text": "Diese Website bindet Videos der YouTube ein. Betreiber der Seiten ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland."
      },
      {
        "kind": "paragraph",
        "text": "Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut YouTube, dass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich ein Video ansehen – eine Verbindung zum Google DoubleClick-Netzwerk her."
      },
      {
        "kind": "paragraph",
        "text": "Sobald Sie ein YouTube-Video auf dieser Website starten, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen."
      },
      {
        "kind": "paragraph",
        "text": "Des Weiteren kann YouTube nach Starten eines Videos verschiedene Cookies auf Ihrem Endgerät speichern. Mit Hilfe dieser Cookies kann YouTube Informationen über Besucher dieser Website erhalten. Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen."
      },
      {
        "kind": "paragraph",
        "text": "Gegebenenfalls können nach dem Start eines YouTube-Videos weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen Einfluss haben."
      },
      {
        "kind": "paragraph",
        "text": "Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar."
      },
      {
        "kind": "paragraph",
        "text": "Weitere Informationen über Datenschutz bei YouTube finden Sie in deren Datenschutzerklärung unter: https://policies.google.com/privacy?hl=de."
      },
      {
        "kind": "heading",
        "text": "Google Web Fonts"
      },
      {
        "kind": "paragraph",
        "text": "Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen."
      },
      {
        "kind": "paragraph",
        "text": "Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar."
      },
      {
        "kind": "paragraph",
        "text": "Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt."
      },
      {
        "kind": "paragraph",
        "text": "Weitere Informationen zu Google Web Fonts finden Sie unter https://developers.google.com/fonts/faq und in der Datenschutzerklärung von Google: https://policies.google.com/privacy?hl=de."
      },
      {
        "kind": "paragraph",
        "text": "Google Maps (mit Einwilligung)"
      },
      {
        "kind": "paragraph",
        "text": "Diese Website nutzt über eine API den Kartendienst Google Maps. Anbieterin ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland."
      },
      {
        "kind": "paragraph",
        "text": "Um den Datenschutz auf dieser Website zu gewährleisten, ist Google Maps deaktiviert, wenn Sie diese Website das erste Mal betreten. Eine direkte Verbindung zu den Servern von Google wird erst hergestellt, wenn Sie Google Maps selbstständig aktivieren (Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO). Auf diese Weise wird verhindert, dass Ihre Daten schon beim ersten Betreten der Seite an Google übertragen werden."
      },
      {
        "kind": "paragraph",
        "text": "Nach der Aktivierung wird Google Maps Ihre IP-Adresse speichern. Diese wird anschließend in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat nach der Aktivierung von Google Maps keinen Einfluss auf diese Datenübertragung."
      },
      {
        "kind": "paragraph",
        "text": "Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: https://www.google.de/intl/de/policies/privacy/."
      },
      {
        "kind": "heading",
        "text": "Google reCAPTCHA"
      },
      {
        "kind": "paragraph",
        "text": "Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf dieser Website. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland."
      },
      {
        "kind": "paragraph",
        "text": "Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser Website (z. B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z. B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet."
      },
      {
        "kind": "paragraph",
        "text": "Die reCAPTCHA-Analysen laufen vollständig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse stattfindet."
      },
      {
        "kind": "paragraph",
        "text": "Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM zu schützen."
      },
      {
        "kind": "paragraph",
        "text": "Weitere Informationen zu Google reCAPTCHA entnehmen Sie den Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen unter folgenden Links: https://policies.google.com/privacy?hl=de und https://policies.google.com/terms?hl=de."
      }
    ]
  }
];
