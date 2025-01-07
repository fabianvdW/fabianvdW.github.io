---
layout: post
title: "Tichu & Statistik Pt.4: Schupfkarten"
date: 2025-01-02
categories: tichu analysis
description: "Spielverhalten bezüglich Schupfkarten"
---

*Vorheriger Post: [Tichu & Statistik Pt.3: Riskantes Spielen mit Straßen: Fallbeispiele]({% post_url 2025-01-01-tichu-strassen-beispiele %})*

## Erwartbare Schupfkarten
Welche Schupfkarten kann ich erwarten? Das habe ich auf dem Datensatz untersucht. Dazu gibt es je Szenario jeweils ein Wahrscheinlichkeitsverteilung für die Karte von Links, eine für die Karte vom Partner, und eine für die Karte von Rechts.
Die Verteilungen findest du hier: Jeweils in blau der ungefilterte Datensatz (\*) und in rot der gefilterte (\*\*).

<div style="margin: 0 -10%;display: flex; gap: 10px;">
    <img src="/images/Compare_Normal_Links.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Links" style="width: 110%;">
</div>
<div style="margin: 0 -10%;display: flex; gap: 10px;">
    <img src="/images/Compare_Normal_Partner.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Partner" style="width: 110%;">
</div>
<div style="margin: 0 -10%;display: flex; gap: 10px;">
    <img src="/images/Compare_Normal_Rechts.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Rechts" style="width: 110%;">
</div>

Man kann gut erkennen, dass auf BSW meistens mit "gerade rechts, ungerade links" geschupft wurde. 
Bei guten Spielern ist dies auch nochmal eindeutiger zu sehen. Der prominenteste Unterschied zwischen den Spielergruppen ist ansonsten,
dass gute Spieler den Hund seltener zum Gegner schupfen und öfter zum Partner. Der Mahjong wird so gut wie nie verschupft.

## Erwartbare Schupfkarten bei GT Ansage

Sagt man ein GT an, ändern sich die Verteilungen der Karten, die man erhält. Am prominentesten sieht man das bei der Schupfkarte des Partners:

<div style="margin: 0 -10%;display: flex; gap: 10px;">
    <img src="/images/Compare_GT_Call_Links.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Links geg. GT " style="width: 100%;">
</div>
<div style="margin: 0 -10%;display: flex; gap: 10px;">
    <img src="/images/Compare_GT_Call_Partner.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Partner geg. GT" style="width: 100%;">
</div>
<div style="margin: 0 -10%;display: flex; gap: 10px;">
    <img src="/images/Compare_GT_Call_Rechts.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Rechts geg. GT" style="width: 100%;">
</div>

Man erhält in etwas über 70% aller Fälle eine Premium Karte vom Partner. Bei den Gegnern ändert sich lediglich die Bereitschaft, den Hund zu verschupfen, ansonsten bleiben die Wahrscheinlichkeitsverteilungen sehr ähnlich.

## Der Hund

Der Hund ist eine der vier Spezialkarten im Spiel Tichu. Dennoch wird sie oft zum Gegner geschupft. Tatsächlich ist der erwartete Rundengewinn
dafür aber stark negativ: **-21.8(\*)/-25.65(\**)** Punkte. Wir wissen natürlich nicht, wie die Runde ohne diese Aktion ausgegangen wäre. Was wir aber wissen, ist dass dies die Doppelsiegquote von **11.8%(\*)/11.3%(\*\*)** auf **16.4%(\*)/17.4%(\*\*)** erhöht. 
Ich würde generell also eher davon absehen, den Hund zum Gegner zu schupfen.

Wenn der Gegner ein GT ansagt, kann man den Ansager *etwas* schwächen, indem man ihm den Hund zuschupft. Die GT Success Rate verringert sich von **61.8%(\*)/59.2%(\*\*)** auf **58.3%(\*)/55.9%(\*\*)**. Jedoch erhöht sich die Dopplesiegquote, die bei GT Ansage standardmäßig schon erhöht ist (**15.2%(\*)/14.4%(\*\*)**), drastisch auf (**22.5%(\*)/21.1%(\*\*)**). 

Wie in [Tichu & Statistik Pt.2.1: Große Tichus und erwarteter Punktegewinn]({% post_url 2024-12-30-tichu-gt %}) bereits angemerkt, ist es laut Statistik meist etwas unvorteilhafter, den Hund unter den ersten 8 zu besitzen, wenn man ein GT ansagen möchte. Eine mögliche Erklärung ist, dass dieser dann meist beim Partner landet: in **78.1%(\*)/74.5%(\*\*)** aller Fälle schiebt der GT Ansager den Hund zum Partner, wenn er ihn unter den ersten 14 hat. Als Folge (oder zumindest korrlierend ;) ) reduziert sich die Doppelsiegquote in diesen Runden auf **11.1%(\*)/10.9%(\*\*)**, was einen deutlichen Verlust zu den oben berichteten Default Werten darstellt. Man kann mit sehr guten Karten also durchaus überlegen, den Hund auch beim GT zu behalten.

Den Hund zum GT Ansager zu schupfen, ist tatsächlich auch was den erwarteten Rundengewinn angeht nicht förderlich: Standardmäßig beträgt der erwartete Rundengewinn bei GT Ansage **52.5(\*)/39.6(\*\*)** Punkte, wenn man den Hund erhält erhöht sich dies auf **53.3(\*)/40.1(\*\*)** Punkte. Zugegebenermaßen schupft man den Hund auch eher zum GT Ansager, wenn man selbst nicht so gute Karten hat und wir haben auch keinen Vergleichswert, wie die Runde ausgegangen wäre, wenn man ihn behalten hätte oder zum Partner hätte. Man sollte sich aber dennoch überlegen, ob man gerade nur die Erfolgswahrscheinlichkeit des GT Ansagers schwächen möchte, oder eher einen 400-0 verhindern möchte.

Sagt man ein GT an und hat den Hund nicht unter den ersten 14, bekommt man ihn auch relativ häufig vom Gegner: In immerhin **40.6%(\*)/32.3%(\*\*)** wird er zum Ansager geschupft. Gute Spieler schupfen den Hund also etwas seltener zum GT Ansager.

## Der Mahjong

Wird er zum Gegner geschupft, liegt der erwartete Punktegewinn bei **-13.9(\*)/-5.3(\*)** Punkten. Wir wissen natürlich nicht, wie die Runden ohne diese Aktion ausgegangen wären. 

## Der Partner

Wenn der Partner kein GT angesagt hat, ist die Wahrscheinlichkeit eines Spielers seinem Partner ein Ass zu schupfen bei **19.2%(\*)/18.7%(\*\*)**. Ist das Ass die einzige HighCard (HighCards sind Asse, Drache, Phönix), so ist die Wahrscheinlichkeit bereits **53.1%(\*)/59.9%(\*\*)**, dieses zum Partner zu schupfen. 

Sage ich kein GT an, und erhalte ich von meinem Partner ein Ass, so hat dieser in noch **30.8%(\*)/27.2%(\*\*)** ein weiteres Ass. Unter guten Spielern ist das also etwas seltener.

---
