---
layout: post
title: "Tichu & Statistik Pt.1: Bomben"
date: 2024-12-20
categories: tichu analysis bombs
description: "Detaillierte Analyse der Bomben-Wahrscheinlichkeiten und Strategien in Tichu"
---

*Vorheriger Post: [Tichu & Statistik Pt.0: Einführung]({% post_url 2024-12-20-tichu-statistik-intro %})*

## Bomben-Wahrscheinlichkeiten

Wie im  [Tichu.One Forum](https://forum.tichu.one/threads/bombenwahrscheinlichkeit-unter-den-ersten-14-8.198/#post-1058)
berichtet, beträgt die Wahrscheinlichkeit einer **Bombe unter den ersten 8** eines Spielers ca **0.3%** und **unter den ersten 14** ca **5.1%**.
Das ist zwar nett zu Wissen, bringt aber relativ wenig. Die Wahrscheinlichkeit einer **Bombe auf meiner Hand nach dem Schupfen** ist da schon aussagekräftiger: **11.7%(\*)/11.8%(\*\*)**.

Wenn ich spiele, ist mir eigentlich auch egal, ob jetzt mein linker oder rechter Gegner die Bombe hat. Interessierter bin ich eher daran, ob *EINER* meiner Gegner eine Bombe hat.
Diese Wahrscheinlichkeit beträgt **21.7%(\*)/21.9%(\*\*)**.

 Die Wahrscheinlichkeit einer **Bombe in einer Runde** ist etwa **37.9%(\*)/38.3%(\*\*)**.

 Nochmal zusammengefasst:

| Situation | Wahrscheinlichkeit Standard (*) | Wahrscheinlichkeit Gefiltert (**) |
|-----------|--------------------------------|-----------------------------------|
| Bombe unter ersten 8 | ~0.3%  | Die Wahrscheinlichkeit ist exakt|
| Bombe unter ersten 14 | ~5.1% | Die Wahrscheinlichkeit ist exakt|
| Bombe nach Schupfen | 11.7% | 11.8% |
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


Wenn ein Gegner ein Tichu ansagt, ist man manchmal in der glücklichen Lage, selbst gute Karten zu besitzen. 
Sind sie sehr gut, kann man ggfs.  ein Kontertichu ansagen. Dabei ist folgendes relevant:

| Situation | Wahrscheinlichkeit Standard (*) | Wahrscheinlichkeit Gefiltert (**) |
|-----------|--------------------------------|-----------------------------------|
| Wahrscheinlichkeit, dass Gegner Bombe hat, wenn er T-Ansage hat | 28.4% | 28.5% |
| Wahrscheinilchkeit, dass Gegner Bombe hat, wenn er GT-Ansage hat | 21.7% | 21.1% |
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


Das liefert im Grunde auch schon die Begründung, warum der erwartete Rundengewinn im gefilterten Datensatz mit rund **20** Punkte höher ist, als bei dem vollständigen: Dort werden einfach mehr Ansagen gemacht.

## Schupfstrategien und Bomben

Da Bomben also gut sind, ist es naheliegend, die Wahrscheinlichkeit einer Bombe beim Gegner zu minimieren. Die in Tichu.one bekannte Schupfstrategie, gerade rechts,
ungerade links wurde schließlich auch damit im Hinterkopf entworfen. Doch wie effektiv ist das eigentlich?

### Klassische Strategie (Gerade/Ungerade)

Ich habe die Wahrscheinlichkeit einer Bombe beim Gegner untersucht, gegeben dass man sich an die Schupfstrategie hält oder nicht. Die Strategie habe ich etwas relaxiert:
An die Strategie hält sich ein Team, wenn bei jedem Gegner entweder gerade + ungerade, oder gerade/ungerade + doppelte oder gerade/ungerade + Sonderkarte ankommt. 
Das doppelt bezieht sich hier auf die Ursprungshand, aus der die Karte kam, denn das verhindert ja bereits eine Viererbombe beim Gegner.
Die Sonderkarte ist in den meisten Fällen wohl der Hund. 
>1 Schupfen ist nicht gut:
Runden, in denen die 1 zum Gegner geschupft wurde, haben negativen erwarteten Rundengewinn [**-13.9(\*)/-5.3(\*)** Punkte]. Ggfs. wird das in einem anderen Post nochmal ausführlicher behandelt.

Ungerade links, gerade rechts usw. wäre damit also auch legitim. 

Nicht an die Strategie halten ist damit äquivalent dazu, dass bei einem Gegner zwei gerade und nicht gedoppelte oder zwei ungerade und nicht gedoppelte Karten ankommen.

Und tatsächlich: Die Wahrscheinlichkeit einer Bombe beim Gegner reduziert sich damit auf insgesamt **20.3%(\*)/20.7%(\*\*)**.
Hier kam meine erste persönliche Überraschung: Das ist weitaus weniger wenig (gegenüber den Default **21.7%(\*)/22.4%(\*\*)**), als erwartet.
Das liegt aber auch daran, dass die Strategie in den meisten Runden angewendet wird. 
Die Wahrscheinlichkeit einer Bombe beim Gegner wenn man sich nicht an die Schupfstrategie hält, beträgt **27.9%(\*)/28.1(\*\*)**.
Das ist ca **36%** höher gegenüber der Wahrscheinlichkeit, wenn man sich an die Strategie hält.

### Aufschlüsselung der Bomben

Um das noch etwas besser zu verstehen, schlüsseln wir die Basis Bombenwahrscheinlichkeit von **21.7%(\*)/21.9%(\*\*)** in vier Kategorien auf: 

1. Bomben die man unter den ersten 14 hat: **9.13% (\* und \*\*)**
2. Bomben, die von der Schupfkarte des Partners kamen: **4.04% (\*)/3.98% (\*\*)**
3. Bomben, die von der Schupfkarte des Partners und _EINER_ der beiden Schupfkarten des Gegners kamen: **7.52% (\*)/8.05% (\*\*)**
4. Alle verbleibenden Bomben, also die, die aus allen Schupfkarten entstehen: **1.02% (\*)/0.76% (\*\*)**

Tatsächlich ist es also so, dass die meisten Bomben entweder bereits unter den ersten 14 waren, oder aus der Karte des Partners in Kombination mit NUR EINER der beiden Schupfkarten der anderen Spieler entstehen.

Wir bestimmen dieselbe Aufschlüsselung bei (Nicht-)Einhalten der Schupfstrategie und fassen zusammen:

| Schupfstragie eingehalten? | Bombenkategorie |Wahrscheinlichkeit Standard (*) | Wahrscheinlichkeit Gefiltert (**) |
|-----------|--------------------------------|-----------------------------------|
| Ja | Alle |20.3% | 20.7% |
| Ja| **Kategorie 1. (Spawn)** | 9.09% | 9.06% |
| Ja |**Kategorie 2. (Partner)** | 4.11% | 4.03% |
| Ja |**Kategorie 3. (Partner+1Schupf)** | 6.75% | 7.34% |
| Ja |**Kategorie 4. (Alle Schupf)** | 0.32% | 0.3% |
| Nein | Alle |27.9% | 28,1% |
| Nein | **Kategorie 1. (Spawn)** | 9.36% | 9.52% |
| Nein |**Kategorie 2. (Partner)** | 3.72% | 3.72% |
| Nein |**Kategorie 3. (Partner+1Schupf)** | 10.90% | 11.79% |
| Nein |**Kategorie 4. (Alle Schupf)** | 4.09% | 3.14% |

Wie erwartet ändert sich also mit befolgen/nicht befolgen der Strategie hauptsächlich die Wahrscheinlichkeit für Kategorie 4 Bomben.
Wieso die Wahrscheinlichkeit größer wird, eine Bombe der Kategorie 3 zu schupfen, wenn man die Schupfstrategie nicht befolgt, ist mir zum jetzigen Zeitpunkt unklar, ist
aber wohl so.

### Wichtigkeit der Schupfstrategie
Einen statistischen Nachweis für die Wichtigkeit der Schupfstrategie konnte ich tatsächlich  nicht liefern: Der erwartete Rundengewinn
beim befolgen der Schupfstrategie bewegt sich nahe 0 (ist sogar leicht negativ). Das mag aber auch einfach daran liegen, dass fast alle Runden
eben mit dieser Strategie gespielt wurden und die Auswirkungen auf die Bomben eher gering ist. Zudem wissen wir auch nicht, wie die Runden verlaufen wären,
wenn man sich nicht an die Strategie gehalten hätte. Diesen Wert müssten wir davon eigentlich abziehen, und es ist nicht unwahrscheinlich dass dieser auch stärker negativ ist.
Ich habe also auch keinen Nachweis für die Unwichtigkeit der Strategie.

### Alternative Strategien
Wir betrachten kurz zwei weitere Strategien bezgl. ihrer Bombenchance:

1. **Nur Doppelte zum Gegner**:
   - Ein Team hält sich an diese Strategie, wenn bei beiden Gegner nur gedoppelte Karten ankommen
   - Die Wahrscheinlichkeit einer Bombe beim Gegner reduziert sich auf **16.3%(\*)/16.2% (\*\*)**
   - Erwarteter Rundengewinn: **-12.3(\*)/-9.6 (\*\*)** Punkte

2. **Klein links / Groß rechts** oder umgekehrt:
   - Dabei wird eine Spezialkarte(Hund, 1) als die niedrigste Karte angesehen. 
   - Die Wahrscheinlichkeit einer Bombe beim Gegner reduziert sich auf  **21.1%(\*)/21.4%(\*\*)**
   - Erwarteter Rundengewinn: **2.5(\*)/3.1(\*\*)** Punkte



## Fazit

Insgesamt macht es meines Erachtens nach also Sinn mit seinem Partner die klassiche gerade/ungerade Strategie zu befolgen
und auch nicht davor zurückzuscheuen, nur doppelte zu vergeben - zumindest wenn man Bomben minimieren will.
Und wir haben ja eingesehen, dass Bomben grundsätzlich was gutes sind.

Die Strategie, nur doppelte zum Gegner zu schupfen, reduziert Bomben (verständlicherweise) drastisch.
Allerdings ist mir unklar, ob diese Strategie zum optimalen Spiel dazugehört: Der erwartete Rundengewinn beim Befolgen dieser Strategie ist
mit ca -10 Punkten negativ. Das mag aber auch einfach daran liegen, dass dort schlechtere Karten vorliegen. Wir wissen nicht, wie die Runde verlaufen wäre,
wenn man eine andere Schupfstrategie gewählt hätte. Diesen Wert müssten wir davon eigentlich abziehen.

Eine weitere Alternative ist die dritte Schupfstrategie mit klein links + groß rechts oder umgekehrt. Das erhöht die Bombenwahrscheinlichkeit  leicht gegenüber
gerade + ungerade. Der erwartete Rundengewinn auf dem Datensatz ist für diese Strategie leicht positiv. Auch hier wissen wir aber nicht,
wie die Runde verlaufen wäre, wenn man eine andere Strategie gewählt hätte. Es kann sein, dass man gerade in diesen Runden besonders gute Karten hat.

Einen Unterschied zwischen dem normalen Datensatz (\*) und (\*\*) ist eigentlich nicht groß zu erkennen: Die Bomben sind
in den gefilterten Spielen lediglich mehr Wert, da dort öfter angesagt wird. Die Häufigkeit von Bomben ist aber überall etwa gleich.

---

\* Ausgewertet auf dem BSW Datensatz  
\*\* Ausgewertet auf dem gefilterten BSW Datensatz (nur gute Spieler)

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