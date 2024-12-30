---
layout: post
title: "Tichu & Statistik Pt.1.2: Bomben und Schupfstrategie"
date: 2024-12-21
categories: tichu analysis bombs
description: "Detaillierte Analyse der Bomben-Wahrscheinlichkeiten bie Schupfstrategien in Tichu"
---

*Vorheriger Post: [Tichu & Statistik Pt.1.1: Bomben]({% post_url 2024-12-20-tichu-und-bomben %})*

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
wie die Runde verlaufen wäre, wenn man eine andere Strategie gewählt hätte.

In jedem Falle sollte man seinem Partner eine Strategie befolgen: In einem unkoordinierten Fall erhöht man, wie oben analysiert, die Bombenwahrscheinlichkeit im Worst-Case um bis zu 36%.


---

\* Ausgewertet auf dem BSW Datensatz  
\*\* Ausgewertet auf dem gefilterten BSW Datensatz (nur gute Spieler)

*Nächster Post: [Tichu & Statistik Pt.2.1: Große Tichus und erwarteter Punktegewinn]({% post_url 2024-12-30-tichu-gt %})*

