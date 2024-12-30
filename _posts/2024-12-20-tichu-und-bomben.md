---
layout: post
title: "Tichu & Statistik Pt.1.1: Bomben"
date: 2024-12-20
categories: tichu analysis bombs
description: "Detaillierte Analyse der Bomben-Wahrscheinlichkeiten und Strategien in Tichu"
---

*Vorheriger Post: [Tichu & Statistik Pt.0: Einführung]({% post_url 2024-12-20-tichu-statistik-intro %})*

## Bomben-Wahrscheinlichkeiten

Wie im  [Tichu.One Forum](https://forum.tichu.one/threads/bombenwahrscheinlichkeit-unter-den-ersten-14-8.198/#post-1058)
berichtet, beträgt die Wahrscheinlichkeit einer **Bombe unter den ersten 8** eines Spielers ca **0.3%** und **unter den ersten 14** ca **5.1%**.
Das ist zwar nett zu Wissen, bringt aber relativ wenig. Die Wahrscheinlichkeit einer **Bombe auf meiner Hand nach dem Schupfen** ist da schon aussagekräftiger: **11.7%(\*)/11.8%(\*\*)**.
Diese Wahrscheinlichkeit teilt sich (mit etwas Schnitt) in die 4-er Bomben nach dem Schupfen [**8.57%(\*)/8.68%(\*\*)**] und die Straßenbomben [**3.30%(\*)/3.32%(\*\*)**]. 

Wenn ich spiele, ist mir eigentlich auch egal, ob jetzt mein linker oder rechter Gegner die Bombe hat. Interessierter bin ich eher daran, ob *EINER* meiner Gegner eine Bombe hat.
Diese Wahrscheinlichkeit beträgt **21.7%(\*)/21.9%(\*\*)**.

 Die Wahrscheinlichkeit einer **Bombe in einer Runde** ist etwa **37.9%(\*)/38.3%(\*\*)**.

 Nochmal zusammengefasst:

| Situation | Wahrscheinlichkeit Standard (*) | Wahrscheinlichkeit Gefiltert (**) |
|-----------|--------------------------------|-----------------------------------|
| Bombe unter ersten 8 | ~0.3%  | Die Wahrscheinlichkeit ist exakt|
| Bombe unter ersten 14 | ~5.1% | Die Wahrscheinlichkeit ist exakt|
| Bombe auf Hand nach Schupfen | 11.7% | 11.8% |
| 4er Bombe auf Hand nach Schupfen| 8.57% | 8.68%|
| Straßenbombe auf Hand nach Schupfen| 3.30% | 3.32%|
| Bombe im Gegnerteam | 21.7% | 21.9% |
| Bombe in einer Runde | 37.9% | 38.3% |

### Spezielle Situationen

Natürlich hängt diese Wahrscheinlichkeit auch von meinen eigenen Karten ab - wie im Tichu.One Forum auch schon richtigerweise gemutmaßt, ist die Wahrscheinlichkeit einer Bombe beim Gegner etwas höher,
wenn ich selbst eine besitze: **25.7%(\* und \*\*)**. 

Dooferweise steigt die Wahrscheinlichkeit einer Bombe beim Gegner aber auch bei einer Ansage(sowohl T als auch GT) meinerseits: **22.7%(\*)/23.0%(\*)**.

Das kann tatsächlich aber durch Korrelation mit den Bomben die man selbst hat erklärt werden -
die Wahrscheinlichkeit einer **Bombe beim Gegner gegeben einer Ansage meinerseits, und keiner Bombe meinerseits**
ist auf beiden Datensätzen nur etwas höher als der Defaultwert: **21.7%(\*)/22.4%(\*\*)**.


Nochmal zusammengefasst:

| Situation | Wahrscheinlichkeit Standard (*) | Wahrscheinlichkeit Gefiltert (**) |
|-----------|--------------------------------|-----------------------------------|
| Bombe im Gegnerteam bei eigener Bombe | 25.7% | 25.7% |
| Bombe im Gegnerteam bei eigener Ansage | 22.7% | 23.0% |
| Bombe im Gegnerteam bei eigener Ansage ohne Bombe | 21.7% | 22.4%|

#### Drillinge

Die Wahrscheinlichkeit, eine Bombe zu verschupfen/geschupft zu bekommen, hängt stark von der Anzahl an Drillingen unter den ersten 14 ab.
Wir betrachten im Folgenden den Fall 0 bis 3+ Drillinge und keine Bombe auf der Hand zu haben, und untersuchen den Zusammenhang
mit der Wahrscheinlichkeit, selbst eine Bombe nach dem Schupfen zu besitzen und der Wahrscheinlichkeit, dass der Gegner
eine Bombe besitzt.

| Anzahl Drillinge unter ersten 14 (und keine Bomben) | Situation | Wahrscheinlichkeit Standard (*) | Wahrscheinlichkeit Gefiltert (**) |
|-----------|--------------------------------|-----------------------------------|
|0| Bombe auf Hand nach Schupfen      | 3.1% | 2.5% |
|1| Bombe auf Hand nach Schupfen      | 15.8% | 14.2% |
|2| Bombe auf Hand nach Schupfen      | 28.4%| 26.6% |
|3+| Bombe auf Hand nach Schupfen     | 41.5% | 41.5% |
|0| Bombe im Gegnerteam nach Schupfen | 20.7%| 21.1%|
|1| Bombe im Gegnerteam nach Schupfen | 24.1%| 24.5% |
|2| Bombe im Gegnerteam nach Schupfen |27.5% | 27.6%|
|3+| Bombe im Gegnerteam nach Schupfen| 30.5%| 29.7%|

Dabei wurden alle Runden aussortiert, in denen bereits eine Bombe unter den eigenen ersten 14 ist. Die Wahrscheinlichkeit für die Situation **Bombe auf Hand nach Schupfen** ist dementsprechend insgesamt höher, als in den jeweiligen Zeilen zu erkennen.

Hat man also keinen Drilling und keine Bombe unter den ersten 14, sollte man auch keine erwarten: Nur in ca. 3% aller Runden ist dies der Fall. Umso mehr Drillinge man hat, desto wahrscheinlicher bekommt man eine Bombe geschupft. Allerdings erhöht sich damit auch die Wahrscheinlichkeit, dass der Gegner eine besitzt: Hat man 3 oder mehr Drillinge, hat der Gegner schon zu ca. 30% eine Bombe!

Auch die Anzahl der Drillinge nach dem Schupfen korreliert in sehr ähnlicherweise mit der Wahrscheinlichkeit, dass das Gegnerteam eine Bombe besitzt:

| Anzahl Drillinge nach dem Schupfen (und keine Bombe) | Situation | Wahrscheinlichkeit Standard (*) | Wahrscheinlichkeit Gefiltert (**) |
|-----------|--------------------------------|-----------------------------------|
|0| Bombe im Gegnerteam nach Schupfen | 19.1%| 19.6%|
|1| Bombe im Gegnerteam nach Schupfen | 23.0%| 23.5% |
|2| Bombe im Gegnerteam nach Schupfen |26.6% | 27.0%|
|3+| Bombe im Gegnerteam nach Schupfen| 29.9%| 30.0%|


## Ansagen und Bomben
Wenn ein Gegner ein Tichu ansagt, ist man manchmal in der glücklichen Lage, selbst gute Karten zu besitzen. 
Sind sie sehr gut, kann man ggfs.  ein Kontertichu ansagen. Dabei ist folgendes relevant:

| Situation | Wahrscheinlichkeit Standard (*) | Wahrscheinlichkeit Gefiltert (**) |
|-----------|--------------------------------|-----------------------------------|
| Wahrscheinlichkeit, dass Gegner Bombe hat, wenn er T-Ansage hat | 28.4% | 28.5% |
| Wahrscheinlichkeit, dass Gegner Bombe hat, wenn er GT-Ansage hat | 21.7% | 21.1% |
| Wahrscheinlichkeit, dass Gegner Bombe hat, wenn er T-Ansage mit ≤2 Highcards\*\*\* hat | 40.1% | 39.8% |

Bei einem großen Tichu hat der Gegner genauso wahrscheinlich wie immer eine Bombe. Bei einem kleinen Tichu hingegen erhöht sich die Wahrscheinlichkeit drastisch.
Hat man selbst 4 High Cards, so hat der Gegner bereits zu **40%** eine Bombe. 
Ob man ein Kontertichu also Bombensicher oder überhaupt gestalten möchte würde ich (wie immer) vom Gegnertyp, Puntkestand und und und abhängig machen.


---
\*\*\*: Highcards sind Asse, Drache, Phönix.
## Güte von Bomben

Sind Bomben denn eigentlich gut? :P Ja! Das kann man auch ganz klar nachweisen:
Der **erwartete Rundengewinn** gegeben einer Bombe im Team beträgt **70.5(\*)/90.7(\*\*)** Punkte.

Das entsteht, wie wir alle wissen, aufgrund der folgenden Faktoren: 

| Faktor | Metrik | Wahrscheinlichkeit gegeben Bombe im Gegnerteam | Wahrscheinlichkeit (normal) auf \*/\**| 
|-----------|--------------------------------|-----------------------------------|-------------------------------|
| GT zerstören | **GT Success Rate** | **41.8% (\*)/38.2% (\*\*)**| **61.8%(\*)/59.2%(\*\*)**|
| T zerstören | **T Success Rate** |  **51.4% (\*)/47.3% (\*\*)** |**73.4%(\*)/72.2%(\*\*)**|

| Faktor | Metrik | Wahrscheinlichkeit gegeben Bombe auf eigener Hand | Wahrscheinlichkeit (normal) auf \*/\**| 
|-----------|--------------------------------|-----------------------------------|-------------------------------|
| T ansagen | **T Call Rate** | **23.7%(\*)/21.6% (\*\*)** | **13.9%(\*)/13.0%(\*\*)**|
| T ansagen und gewinnen | **T Success Rate** |  **79.3% (\*) / 79.4% (\*\*)**  |**73.4%(\*)/72.2%(\*\*)**|


Das liefert auch schon eine Begründung, warum der erwartete Rundengewinn im gefilterten Datensatz rund **20** Punkte höher ist, als bei dem vollständigen: 
Dort werden einfach mehr große Tichu Ansagen gemacht, die zerstört werden können.


## Fazit

Bomben sind elementarer Bestandteil des Spiels, und kommen mit ca. 21% auch recht häufig im Gegnerteam vor.
Bomben selbst zu besitzen ist darüber hinaus auch etwas gutes, der erwartete Punktegewinn gegeben einer Bombe im Team ist hoch.

Durch verschiedene Faktoren der eigenen Hand sowie Verhalten der anderen Spielern bezüglich Ansagen kann man
Rückschlüsse daraus ziehen, ob diese Spieler wahrscheinlicher eine Bombe besitzen, oder nicht.
Einen Unterschied zwischen dem normalen Datensatz (\*) und (\*\*) ist eigentlich nicht groß zu erkennen: Die Bomben sind
in den gefilterten Spielen lediglich mehr Wert. Die Häufigkeit von Bomben ist aber überall etwa gleich.

Wir widmen uns im nächsten Post den Schupfstrategien im Bezug auf Bomben.

---

\* Ausgewertet auf dem BSW Datensatz  
\*\* Ausgewertet auf dem gefilterten BSW Datensatz (nur gute Spieler)


*Nächster Post: [Tichu & Statistik Pt.1.2: Bomben und Schupfstrategie]({% post_url 2024-12-21-tichu-und-bomben-schupf %})*

<script type="text/javascript">
  window.MathJax = {
    tex: {
      inlineMath: [['$','$'], ['\\(','\\)']],
      displayMath: [['$$','$$'], ['\\[','\\]']],
      processEscapes: true
    }
  };
</script>
<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>