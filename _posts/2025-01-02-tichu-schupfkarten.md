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
Die Verteilungen findest du hier: Jeweils links der ungefilterte Datensatz (\*) und rechts der gefilterte (\*\*).

<div style="margin: 0 -70%;display: flex; gap: 10px;">
    <img src="/images/Normal_Normal_Links.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Links auf *" style="width: 48%;">
    <img src="/images/Filtered_Normal_Links.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Links auf **" style="width: 48%;">
</div>
<div style="margin: 0 -70%;display: flex; gap: 10px;">
    <img src="/images/Normal_Normal_Partner.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Partner auf *" style="width: 48%;">
    <img src="/images/Filtered_Normal_Partner.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Partner auf **" style="width: 48%;">
</div>
<div style="margin: 0 -70%;display: flex; gap: 10px;">
    <img src="/images/Normal_Normal_Rechts.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Rechts auf *" style="width: 48%;">
    <img src="/images/Filtered_Normal_Rechts.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Rechts auf **" style="width: 48%;">
</div>

Man kann gut erkennen, dass auf BSW meistens mit "gerade rechts, ungerade links" geschupft wurde. 
Bei guten Spielern ist dies auch nochmal eindeutiger zu sehen. Der prominenteste Unterschied zwischen den Spielergruppen ist ansonsten,
dass gute Spieler den Hund seltener zum Gegner schupfen und öfter zum Partner. Der Mahjong wird so gut wie nie verschupft.

## Erwartbare Schupfkarten bei GT Ansage

Sagt man ein GT an, ändern sich die Verteilungen der Karten, die man erhält. Am prominentesten sieht man das bei der Schupfkarte des Partners:

<div style="margin: 0 -70%;display: flex; gap: 10px;">
    <img src="/images/Normal_GT_Call_Links.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Links auf * geg. GT " style="width: 48%;">
    <img src="/images/Filtered_GT_Call_Links.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Links auf ** geg. GT" style="width: 48%;">
</div>
<div style="margin: 0 -70%;display: flex; gap: 10px;">
    <img src="/images/Normal_GT_Call_Partner.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Partner auf * geg. GT" style="width: 48%;">
    <img src="/images/Filtered_GT_Call_Partner.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Partner auf ** geg. GT" style="width: 48%;">
</div>
<div style="margin: 0 -70%;display: flex; gap: 10px;">
    <img src="/images/Normal_GT_Call_Rechts.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Rechts auf * geg. GT" style="width: 48%;">
    <img src="/images/Filtered_GT_Call_Rechts.png" alt="Wahrscheinlichkeitsverteilung Schupfkarte von Rechts auf ** geg. GT" style="width: 48%;">
</div>

Man erhält in etwas über 70% aller Fälle eine Premium Karte vom Partner. Bei den Gegnern ändert sich lediglich die Bereitschaft, den Hund zu verschupfen, ansonsten bleiben die Wahrscheinlichkeitsverteilungen sehr ähnlich.