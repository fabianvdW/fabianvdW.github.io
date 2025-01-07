---
layout: post
title: "Tichu & Statistik Pt.3: Riskantes Spielen mit Straßen: Fallbeispiele"
date: 2025-01-01
categories: tichu analysis
description: "Spielverhalten bezüglich Straßen"
---

*Vorheriger Post: [Tichu & Statistik Pt.2.2: Große Tichus bei Rückstand in der letzten Runde]({% post_url 2024-12-31-tichu-gt-nachteil %})*

### Ansage mit Straße

Es passiert nicht selten, dass man eine Hand besitzt, die aus einer langen Straße und einer weiteren Kombination besteht (oder ähnlichem).
Erhält man das Aufspiel, bspw. durch den Hund, den Mahjong, oder weil man den Drachen hat,  basiert der Ausgang der Runde im wesentlichen auf dem Fakt, ob die Straße hoch ist oder eben nicht. 
Im Tichu.one [Forum](https://pun2.tichu.one/display_strassen_wahrscheinlichkeit.php) verlinkt ist bereits eine Auswertung, die angibt, wie oft eine gewisse Straße unter welchen Umständen gestochen wurde oder nicht. Jedoch wird dabei nicht darauf eingegangen, dass ein Gegner sich auch zum passen entscheiden kann, auch wenn er die Straße stechen kann. Dieses Verhalten wird maßgeblich durch eine potenzielle Ansage des Auflegers beeinflusst.
Die dort angegebenen Wahrscheinlichkeiten **unterschätzen** also das tatsächliche Risko, dass man bei so einer Aktion trägt.

In dieser Analyse untersuchen wir einfach nur an dem Fallbeispiel 4-Q, wie oft die Gegner am Anfang der Runde (also mit all ihren Karten) die Möglichkeit haben, diese Straße mit einer höheren Straße zu überstechen (gegeben, dass ich selbst 4-Q auf der Hand habe, am Anfang der Runde), falls der Phönix im Gegnerteam ist: **18.98%(\*)/18.88%(\*\*)**. Rechnet man zudem mit einem Verlust der Runde durch eine Bombe im Gegnerteam, so verliert man die Runde in insgesamt **30.15%(\*)/29.47%(\*\*)** der Fälle.

Weitere Fallbeispiele folgen bei Relevanz dieser.


### Aufspiel durch Straße
Wer eine hohe Straße wie 9-K hat, und erhofft, diese ohne eigenes Aufspiel als Straße loszuwerden (und damit ggfs. noch ein wichtiges Aufspiel zu gewinnen), wartet oft vergeblich: In gerade einmal **36.8%(\*)/36.4%(\*\*)** aller Runden werden von einem der drei anderen Spieler
eine Straße aufgespielt. Bei längeren Straßen ist die Wahrscheinlichkeit nocheinmal geringer:

| Situation | Wahrscheinlichkeit Standard (*) | Wahrscheinlichkeit Gefiltert (**) |
|-----------|--------------------------------|-----------------------------------|
| Straße der Länge 5 wird von anderer Person aufgespielt | 36.79%  | 36.36%|
| Straße der Länge 6 wird von anderer Person aufgespielt | 23.86%  | 23.18%|
| Straße der Länge 7 wird von anderer Person aufgespielt | 15.48%  | 14.65%|
| Straße der Länge 8 wird von anderer Person aufgespielt | 9.75%  | 8.74%|
| Straße der Länge 9 wird von anderer Person aufgespielt | 6.06%  | 5.25%|

Man sollte sich also keineswegs auf dieses Aufspiel verlassen. Hat man sonst keine weitere Gelegenheit, ein Aufspiel zu erlangen, würde ich also eine hohe Straße ohne schlechtes Gewissen brechen.

### Unfertige Straße zugeschupft bekommen

Beim Schupfen stellt sich oft die Frage, ob sich eine existierende 4er Straße nach dem Schupfen zu einer spielbaren 5er Straße ergänzt. Diese Wahrscheinlichkeit habe ich untersucht. Untersucht werden Hände,
die nach Abgabe ihrer 3 Schupfkarten an alle Mitspieler eine 4er Straße (startend ab 2-5, endend bei J-A) enthalten und diese auch mit keine weiteren Karte auf der verbleibenden Hand eine 5er Straße bildet. Der Phönix wird dabei außen vorgelassen. Aufgenommen wird, wie oft diese Straße mit den eingehenden 3 Schupfkarten zu einer 5er Straße ergänzt wurde.

| Situation | Wahrscheinlichkeit Standard (*) | Wahrscheinlichkeit Gefiltert (**) |
|-----------|--------------------------------|-----------------------------------|
| Straße 1-2-3-4 wird zu 1-2-3-4-5 ergänzt | 25.6%  | 25.7%|
| Straße 2-3-4-5 wird zu 2-3-4-5-6 ergänzt | 26.2%  | 28.8%|
| Straße 3-4-5-6 wird zu valider 5er Straße ergänzt | 59.6%  | 59.3%|
| Straße 4-5-6-7 wird zu valider 5er Straße ergänzt | 50.2%  | 50.6%|
| Straße 5-6-7-8 wird zu valider 5er Straße ergänzt | 42.5%  | 44.3%|
| Straße 6-7-8-9 wird zu valider 5er Straße ergänzt | 36.6%  | 38.6%|
| Straße 7-8-9-10 wird zu valider 5er Straße ergänzt | 34.3%  | 35.3%|
| Straße 8-9-10-J wird zu valider 5er Straße ergänzt | 33.2%  | 32.9%|
| Straße 9-10-J-Q wird zu valider 5er Straße ergänzt | 33.1%  | 32.5%|
| Straße 10-J-Q-K wird zu valider 5er Straße ergänzt | 36.4%  | 37.9%|
| Straße J-Q-K-A wird zu valider 5er Straße ergänzt | 12.8%  | 12.7%|

Die Ergebnisse zwischen dem gefilterten und ungefiltereten Datensatz sind marginal, vor allem was die niedrigen Karten angeht, was aber auch daran liegt, dass auf den beiden Datensätzen ähnlich geschupft wird. Das kann man sich im nächsten Kapitel nochmal genauer durchlesen.

Wenn überhaupt macht es also Sinn, auf eine beidseitig offene vierer Straße 3-4-5-6 oder 4-5-6-7 zu hoffen, wenn man den Phönix nicht hat und auch ansonsten keinen Backupplan über Paare/Paarstraßen hat.


---

*Nächster Post: [Tichu & Statistik Pt.4: Schupfkarten]({% post_url 2025-01-02-tichu-schupfkarten %})*