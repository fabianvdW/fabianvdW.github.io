---
layout: post
title: "Tichu & Statistik Pt.0: Einführung"
date: 2024-12-20
categories: tichu analysis
description: "Einführung in die statistische Analyse von Tichu-Spielstrategien"
---

In dieser kleinen Reihe an Posts werde ich Tichu etwas aus statistischer Sicht begutachten.
Dazu werden, wie sich das in der Statistik halt so gehört, ein Haufen Wahrscheinlichkeiten und Erwartungswerte ausgerechnet.

Dankbarerweise wurde mir von Felix ein großer Datensatz zur Verfügung gestellt. Ein paar Wahrscheinlichkeiten sind aber auch theoretisch exakt ausgerechnet. Wer von zu viel "Mathe gebrabbel" kein Fan ist, freut sich vielleicht trotzdem an den Interpretationen die ich basierend darauf mache - ab und zu wage ich mich sogar zu echten Schlussfolgerungen.

Insgesamt ist das Ziel, bisherige Tichu Strategien statistisch zu beurteilen und ggfs. optimales Spielen herzuleiten.

### Was ist optimales Spielen?

Mein Definitionsversuch: Die Art des Spielens, mit derer man (vorausgesetzt der Partner kennt die eigene Spielstrategie) seine Winrate maximiert.

**Achtung**: Das unterscheidet sich also per Definition bereits von einem Spiel, dass man mit einem inkompetenten/weniger aufgeklärten Teampartner spielen müsste. So ein Spiel interessiert mich aber auch nicht.

## Methodische Überlegungen

Etwas leichter zu analysieren ist das Spiel, dass den erwarteten Punktegewinn gegenüber des Gegners maximiert. In dieser Metrik würde also:
- ein 100-0 
- ein 150-50 
- ein 200-100 

genausogut abschneiden, da in allen Fällen der Punktegewinn gegenüber des Gegners 100 ist. Da am Ende des Spiels nur zählt, ob die Differenz der
eigenen Punkte mit derer der Gegner > 0 ist oder nicht, ist es naheliegend, dass sich optimales Spiel oft mit dieser Art des Spielens deckt.

Häufig gibt es auch Fälle, wo dies klar nicht gilt, da Tichu ein terminiertes Spiel ist (wir kennen es alle, 6 Runden in der App Tichu.one).
Ich illustriere kurz an einem Beispiel was ich damit meine:
Es ist die letzte Runde, mein Team liegt 170 Punkte zurück. Ich habe Drache+ Hund unter meinen ersten 8. GT ansagen, ja oder nein?
Was den erwarteten Punktegewinn angeht, so lautet die Antwort (denke ich zumindest mal) nein, denn ich bin besser dran die Runde einfach normal zu spielen.
Wenn ich aber meine Gewinnchancen maximieren will, so wäre das GT keine schlechte Idee.
Ich hoffe man hat den Unterschied verstanden, unabhängig davon ob man mit den exakten Aussagen im Beispiel d'accord geht oder nicht.

Der erwartete Rundengewinn ist insofern leichter zu analysieren, da wir diesen Erwartungswert einfach durch den Durchschnitt schätzen können. 
Ich werde also im Folgenden oft den erwarteten Rundengewinn
(ein theoretisches Objekt) synonym zu dem durchschnittlichen Rundengewinn (eine Zahl, ausgewertet auf dem Datensatz) benutzen.

Ideel deckt sich das optimale Spiel mit dem "Rundengewinnmaximierungsspiel" also nur, wenn noch genügend Zeit im Spiel übrig ist und man nicht in starker
Bedrängnis ist. Das sollte man bei all meinen Analysen im Hinterkopf behalten. 
Darüber hinaus sollte man sich im klaren sein, dass die folgenden Statistiken nicht den Einzelfall repräsentieren, den man in der Runde vor sich hat. Dafür gibt es schlicht
nicht genügend Daten. Das heißt nicht, dass wir unsere Spielstrategie nicht basierend der Statistiken überdenken und anpassen können - aber wer stur
wie ein Roboter spielt, zu viel in die Statistiken reininterpretiert, und den menschlichen und psychologischen Faktor nicht berücksichtigt, wird im Nachteil bleiben.
Im Allgemeinen würde ich dem Leser raten, nicht mehr in die Statistiken reinzuinterpretieren, als ich es in meinem geschriebenen Text tue.

#### Für Mathematiker
> Unten berichte ich oft einen Wert einer Wahrscheinlichkeit, bspw. die Wahrscheinlichkeit einer Bombe beim Gegner gegeben eine Ansage meinerseits.
Korrekterweise müsste ich hier vier Werte berichten: Nämlich einmal für Spieler 0, 1, 2 und 3 jeweils auf dem Datensatz ausgerechnet. Diese Wahrscheinlichkeiten sind nämlich nicht
unabhängig voneinander. Nichtsdestotrotz vertröste ich den Leser mit dem Mittelwert aller solcher Wahrscheinlichkeiten als Schätzung und man darf mir gerne eine Email schreiben wenn
man an allen interessiert ist.

## Datengrundlage

Der BSW Datensatz enthält ca. 21 Millionen Runden von echten Spielern, gespielt auf BrettSpielWelt. Dabei wurden bereits alle Runden aussortiert, in denen zwei Spieler eines Teams gleichzeitig ein großes Tichu angesagt haben (ca. 14000 Stück), da dies in Tichu.one nicht möglich ist und auch beim Live Spielen nicht vorkommt. Darüber hinaus habe ich einen gefilterten BSW Datensatz erstellt, der nur aus Spielen besteht, die von "guten" Spielern gespielt wurden. Ein Spieler ist gut wenn er mehr
als 100 Spiele mit >= 55% Winrate absolviert hat. Dieser Datensatz enthält immerhin noch ca. 400 000 Runden. Zusammenfassend gibt es also folgende Datensatz Varianten:

1. **Standard BSW Datensatz** (*): Alle verfügbaren Spiele
2. **Gefilterter BSW Datensatz** (**): Nur Spiele von "guten" Spielern
   - Definition "guter Spieler": >100 Spiele mit ≥55% Winrate
   - Enthält noch ca. 400.000 Runden

### Grundlegende Kennzahlen

Um uns mit den Datensätzen etwas vertrauter zu machen, habe ich ein paar grundlegende Kennzahlen berechnet:

| Metrik | Standard (*) | Gefiltert (**) |
|--------|-------------|----------------|
| Anzahl Spiele | 2.281.451 | 44.794 |
| Anzahl Runden | 21.264.935 | 400.881 |
| Tichu Call Rate | 13,9% | 13,0% |
| Tichu Success Rate | 73,4% | 72,2% |
| Große Tichu Call Rate | 7,8% | 13,6% |
| Große Tichu Success Rate | 61,8% | 59,2% |
| Doppelsiege | 11,8% | 11,3% |

Wenn man das mit dem Tichu.one Leaderboard vergleicht, sind diese Statistiken direkt extrem aufällig. Die große Tichu Rate ist exorbitant groß! 
Spieler wie unconscious, die 9.5% GT Call Rate haben, sind bei Tichu.one ja schon eher als exotisch unterwegs bekannt. Auf Brettspielwelt scheint
eine ganz andere Tichu "Meta" vorherrschend gewesen zu sein. Wir werden später, in einem exklusiv dem großen Tichu gewidmeten Abschnitt, analysieren,
ob das so sinnvoll ist, oder ob eine seltenere Ansage von großen Tichu's zu mehr Erfolg führen kann.


Zunächst aber beschäftigen wir uns mit den konzeptuell leichteren Thema der Bomben. Danach sind wir aufgewärmt für die GT Analyse.

---

*Nächster Post: [Tichu & Statistik Pt.1: Bomben]({% post_url 2024-12-20-tichu-und-bomben %})*